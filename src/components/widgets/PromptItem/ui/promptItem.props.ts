export interface IPromptBody {
    title: string,
    description: string
    prompt: string,
    model: string,
    context_story_window: number,
    is_open: boolean,
    tuning: {
        size?: string
        style?: string
        quality?: string
    }
}