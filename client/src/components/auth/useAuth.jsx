import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";


const AuthContext = createContext();


export function AuthProvider({children}) {

    const [authUser,setAuthUser] = useState(null);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{

        async function checkAuth(){

            try {

                const res = await axios.get(
                    "http://localhost:3000/api/flowdesk/user",
                    {
                        withCredentials:true
                    }
                );

                setAuthUser(res.data.user);


            } catch(error){

                setAuthUser(null);

            } finally {

                setLoading(false);

            }

        }


        checkAuth();

    },[]);



    return (
        <AuthContext.Provider
            value={{
                authUser,
                setAuthUser,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}


export function useAuth(){

    return useContext(AuthContext);

}