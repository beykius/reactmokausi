import {create} from 'zustand'
import {useNavigate} from "react-router-dom";


const useStore = create((set) => ({

    allUsers: [],
    setAllUsers: (users) => set({ allUsers: users }),

    loggedInUser: '',
    setLoggedInUser: (user) => set({ loggedInUser: user }),
    notifications: [],
    pokedBackNotifications: [],


    pokeBack: (pokedUserUsername) =>
        set((state) => ({
            notifications: [
                ...state.notifications,
                {
                    message: `You poked back ${pokedUserUsername}!`,
                    timestamp: new Date().toLocaleString(),
                },
            ],
        })),

    addPokeBackNotification: (pokedUserUsername, username) => {
        console.log(`Adding poke back notification for ${pokedUserUsername} from ${username}`);
        set((state) => ({
            pokedBackNotifications: [
                ...state.pokedBackNotifications,
                {
                    message: `${username} poked you back!`,
                    timestamp: new Date().toLocaleString(),
                },
            ],
        }));
    },

}));


export default useStore;