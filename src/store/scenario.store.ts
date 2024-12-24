import { create } from 'zustand';

export interface PromptItemListStore {
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
    prompts: PromptItemListStore[];
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setPrompts: (prompts: PromptItemListStore[]) => void;
    addPrompt: (prompt: PromptItemListStore) => void;
    updatePrompt: (prompt_id: string, updatedPrompt: Partial<PromptItemListStore>) => void;
    removePrompt: (prompt_id: string) => void;
    upPrompt: (prompt_id: string) => void;
    downPrompt: (prompt_id: string) => void;
}

const useScenarioStore = create<StoreState>((set) => ({
    title: '',
    description: '',
    prompts: [],
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setPrompts: (prompts) =>
        set({ prompts: prompts.sort((a, b) => a.order - b.order) }),
    addPrompt: (prompt) =>
        set((state) => {
            const exists = state.prompts.some((p) => p.prompt_id === prompt.prompt_id);
            if (exists) return state;
            const updatedPrompts = [...state.prompts, prompt].sort((a, b) => a.order - b.order);
            return { prompts: updatedPrompts };
        }),
    updatePrompt: (prompt_id, updatedPrompt) =>
        set((state) => {
            const updatedPrompts = state.prompts
                .map((prompt) =>
                    prompt.prompt_id === prompt_id ? { ...prompt, ...updatedPrompt } : prompt
                )
                .sort((a, b) => a.order - b.order);
            return { prompts: updatedPrompts };
        }),
    removePrompt: (prompt_id) =>
        set((state) => {
            const filteredPrompts = state.prompts.filter((prompt) => prompt.prompt_id !== prompt_id);

            const updatedPrompts = filteredPrompts.map((prompt, index) => ({
                ...prompt,
                order: index + 1,
            }));

            return { prompts: updatedPrompts };
        }),
    upPrompt: (prompt_id) =>
        set((state) => {
            const index = state.prompts.findIndex((prompt) => prompt.prompt_id === prompt_id);
            if (index > 0) {
                const updatedPrompts = [...state.prompts];

                const tempOrder = updatedPrompts[index - 1].order;
                updatedPrompts[index - 1].order = updatedPrompts[index].order;
                updatedPrompts[index].order = tempOrder;
                return { prompts: updatedPrompts.sort((a, b) => a.order - b.order) };
            }
            return state;
        }),
    downPrompt: (prompt_id) =>
        set((state) => {
            const index = state.prompts.findIndex((prompt) => prompt.prompt_id === prompt_id);
            if (index < state.prompts.length - 1) {
                const updatedPrompts = [...state.prompts];

                const tempOrder = updatedPrompts[index + 1].order;
                updatedPrompts[index + 1].order = updatedPrompts[index].order;
                updatedPrompts[index].order = tempOrder;
                return { prompts: updatedPrompts.sort((a, b) => a.order - b.order) };
            }
            return state;
        }),
}));

export default useScenarioStore;

