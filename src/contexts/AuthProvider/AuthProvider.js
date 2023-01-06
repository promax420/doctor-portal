import React, { createContext } from 'react';
import useFirebase from '../../hooks/userfirebase';

export const AuthContext = createContext();

const AuthProvider = ({childern}) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={{allContexts}}>

          {childern}

        </AuthContext.Provider>
            
       
    );
};

export default AuthProvider;