import { create } from 'zustand'

const useStore = create((set) => ({
    color: 'green',
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    changeColor: () => set({ color: 'pink' }),
    updateColor: (newColor) => set({ color: newColor }),
}))

export default useStore;