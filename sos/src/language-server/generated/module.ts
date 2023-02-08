/******************************************************************************
 * This file was generated by langium-cli 1.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { StructuralOperationalSemanticsAstReflection } from './ast';
import { StructuralOperationalSemanticsGrammar } from './grammar';

export const StructuralOperationalSemanticsLanguageMetaData: LanguageMetaData = {
    languageId: 'structural-operational-semantics',
    fileExtensions: ['.sos'],
    caseInsensitive: false
};

export const StructuralOperationalSemanticsGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new StructuralOperationalSemanticsAstReflection()
};

export const StructuralOperationalSemanticsGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => StructuralOperationalSemanticsGrammar(),
    LanguageMetaData: () => StructuralOperationalSemanticsLanguageMetaData,
    parser: {}
};
