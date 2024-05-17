import { QuestionDataWrapper } from "@/components/shared/QuestionDataWrapper"

export const PromptDataGenerator = (text: string, children: React.ReactNode) => {
    return (
        <QuestionDataWrapper text={text}>
            {children}
        </QuestionDataWrapper>
    )
}