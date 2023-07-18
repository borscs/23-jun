import {createContext, useEffect, useState} from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogOut: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1'){
            setIsLoggedIn(true);
        }
        console.log('isLoggedIn', localStorage.getItem('isLoggedIn'))
    },[])
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anywaysl
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogOut: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthContext;