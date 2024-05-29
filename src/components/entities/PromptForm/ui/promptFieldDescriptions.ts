import translate from './promptField.translate.json'

import { PromptDataGenerator } from "@/components/features/PromptDataGenerator"
import { baseLanguages } from "@/types/baseTypes"


export const titleQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(translate.titleQuestion.description[`${lang}`],
        translate.titleQuestion.title[`${lang}`])


export const descriptionQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.descriptionQuestion.description[lang],
        translate.descriptionQuestion.title[lang]
    );

export const promptQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.promptQuestion.description[lang],
        translate.promptQuestion.title[lang]
    );

export const modelQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.modelQuestion.description[lang],
        translate.modelQuestion.title[lang]
    );

export const styleQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.styleQuestion.description[lang],
        translate.styleQuestion.title[lang]
    );

export const qualityQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.qualityQuestion.description[lang],
        translate.qualityQuestion.title[lang]
    );

export const sizeQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.sizeQuestion.description[lang],
        translate.sizeQuestion.title[lang]
    );

export const memoryQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.memoryQuestion.description[lang],
        translate.memoryQuestion.title[lang]
    );

export const isOpenQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate.isOpenQuestion.description[lang],
        translate.isOpenQuestion.title[lang]
    );