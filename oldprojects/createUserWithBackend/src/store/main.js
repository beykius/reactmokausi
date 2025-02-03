import {create} from 'zustand'
import {useNavigate} from "react-router-dom";


const useStore = create((set) => ({

    allUsers: [],
    newUser: {
        name: '',
        age: '',
        gender: '',
        race: '',
    },

    setAllUsers: (users) => set({ allUsers: users }),


}));
export default useStore;