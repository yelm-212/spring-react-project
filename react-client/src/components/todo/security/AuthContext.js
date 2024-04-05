import { createContext, useContext, useState } from "react";

// create a context
export const AuthContext = createContext();

// create hook
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(10);
    const [username, setUsername] = useState('username');  // 초기값을 'username'으로 설정
    const [isAuthenticated, setAuthenticated] = useState(false);  // 초기값을 false으로 설정

    function login(username, password){
        if (username === 'username' && password === 'password'){
            setAuthenticated(true)
            return true
        } else {  
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    setInterval( () => setNumber(number + 1), 10000)
    return (
        <AuthContext.Provider value={ { number, username, setNumber, setUsername, isAuthenticated, setAuthenticated, login, logout } }>
            {children}
        </AuthContext.Provider>
    );
}
