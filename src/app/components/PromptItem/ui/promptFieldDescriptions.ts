import translate from './promptField.translate.json'

import { PromptDataGenerator } from "@/components/features/PromptDataGenerator"
import { baseLanguages } from "@/types/baseTypes"

export const titleQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].titleQuestion.description,
        translate[`${lang}`].titleQuestion.title
    );

export const descriptionQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].descriptionQuestion.description,
        translate[`${lang}`].descriptionQuestion.title
    );

export const promptQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].promptQuestion.description,
        translate[`${lang}`].promptQuestion.title
    );

export const modelQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].modelQuestion.description,
        translate[`${lang}`].modelQuestion.title
    );

export const styleQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].styleQuestion.description,
        translate[`${lang}`].styleQuestion.title
    );

export const qualityQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].qualityQuestion.description,
        translate[`${lang}`].qualityQuestion.title
    );

export const sizeQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].sizeQuestion.description,
        translate[`${lang}`].sizeQuestion.title
    );

export const memoryQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].memoryQuestion.description,
        translate[`${lang}`].memoryQuestion.title
    );

export const isOpenQuestion = (lang: baseLanguages) =>
    PromptDataGenerator(
        translate[`${lang}`].isOpenQuestion.description,
        translate[`${lang}`].isOpenQuestion.title
    );
