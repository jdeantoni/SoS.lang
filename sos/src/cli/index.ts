import chalk from 'chalk';
import { Command } from 'commander';
import { StructuralOperationalSemanticsLanguageMetaData } from '../language-server/generated/module';
import { createStructuralOperationalSemanticsServices } from '../language-server/structural-operational-semantics-module';

import { extractSosAndGrammarModels } from './cli-util';
import { generateStuffFromSoS } from './generator';
import { NodeFileSystem } from 'langium/node';

export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createStructuralOperationalSemanticsServices(NodeFileSystem).StructuralOperationalSemantics;
    const model = await extractSosAndGrammarModels(fileName, services);
    const generatedFilePath = generateStuffFromSoS(model[0],model[1], fileName, opts.destination);
    console.log(chalk.green(`Stuff code generated successfully: ${generatedFilePath}`));
};

export type GenerateOptions = {
    destination?: string;
}

export default function(): void {
    const program = new Command();

    program
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        .version(require('../../package.json').version);

    const fileExtensions = StructuralOperationalSemanticsLanguageMetaData.fileExtensions.join(', ');
    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates JavaScript code that prints "Hello, {name}!" for each greeting in a source file')
        .action(generateAction);

    program.parse(process.argv);
}
