/******************************************************************************
 * This file was generated by langium-cli 1.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { SimpleLAstReflection } from './ast';
import { SimpleLGrammar } from './grammar';

export const SimpleLLanguageMetaData: LanguageMetaData = {
    languageId: 'simple-l',
    fileExtensions: ['.simple'],
    caseInsensitive: false
};

export const SimpleLGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new SimpleLAstReflection()
};

export const SimpleLGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => SimpleLGrammar(),
    LanguageMetaData: () => SimpleLLanguageMetaData,
    parser: {}
};