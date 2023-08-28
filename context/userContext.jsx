import axios from 'axios';
import { createContext, useEffect, useState } from 'react';


export const UserContext = createContext({})

// L’on va wrap toute l’application dans le provider grace a children et 
// c’est dedans qu’on peut exécuter notre code que l’on veut appliquer sur toute l'application

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null); // null car au debut personne n'est co
    //Le useEffect va se déclencher chaque fois qu’il y a un render de page, 
    //en grose chaque fois qu’on va sur une page on sera en mesure de dire si il y a un user ou non 
    useEffect(() => {
        if(!user) {
            //.then car je ne peux pas utiliser await et async dans un useffect
            axios.get('/Profile').then(({data}) => {
                setUser(data)
            })
        }
    }, [])
    return (
        // le provider va s'appliquer a tout les children et on va envoyer une value a tt les child
        <UserContext.Provider value={{user, setUser}}>
              {children}
        </UserContext.Provider>
    )
}