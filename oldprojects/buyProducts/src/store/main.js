import { create } from 'zustand'

const useStore = create((set) => ({
    products: [
        { icon: '🍎', price: 10 },
        { icon: '🍐', price: 15 },
        { icon: '🍋', price: 5 },
    ],
    money: 100,
    purchasedProducts: [],
    totalSpent: 0,
    buyProduct: (product) => set((state) => {
        if (state.money >= product.price) {
            return {
                purchasedProducts: [...state.purchasedProducts, product],
                money: state.money - product.price,
                totalSpent: state.totalSpent + product.price,
            };
        }
        return state;
    }),


}))

export default useStore;