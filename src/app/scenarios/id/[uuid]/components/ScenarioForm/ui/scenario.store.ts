import { create } from 'zustand';

interface Prompt {
    title: string;
    model: string;
    description: string;
    prompt_id: string;
    order: number;
    independent: boolean;
}

interface StoreState {
    title: string;
    description: string;
    prompts: Prompt[];
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setPrompts: (prompts: Prompt[]) => void;
    addPrompt: (prompt: Prompt) => void;
    updatePrompt: (prompt_id: string, updatedPrompt: Partial<Prompt>) => void;
    removePrompt: (prompt_id: string) => void;
}

const useScenarioStore = create<StoreState>((set) => ({
    title: '',
    description: '',
    prompts: [],
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setPrompts: (prompts) => set({ prompts }),
    addPrompt: (prompt) =>
        set((state) => ({ prompts: [...state.prompts, prompt] })),
    updatePrompt: (prompt_id, updatedPrompt) =>
        set((state) => ({
            prompts: state.prompts.map((prompt) =>
                prompt.prompt_id === prompt_id ? { ...prompt, ...updatedPrompt } : prompt
            ),
        })),
    removePrompt: (prompt_id) =>
        set((state) => ({
            prompts: state.prompts.filter((prompt) => prompt.prompt_id !== prompt_id),
        })),
}));

export default useScenarioStore;
