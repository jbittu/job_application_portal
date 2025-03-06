import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        username : "Rahul Sing",
        useremail : "rahul123@gmail.com"
    })
    const updateUser = (updateUser) => {
        setUser(updateUser);
    };
  return (
    <UserContext.Provider value={{user, updateUser}}>
        {children}
    </UserContext.Provider>
  );
};

export default UserProvider