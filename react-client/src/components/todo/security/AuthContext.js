import { createContext, useContext, useState } from "react";

// create a context
export const AuthContext = createContext();

// create hook
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(10);
    const [username, setUsername] = useState('username');  // 초기값을 'username'으로 설정

    setInterval( () => setNumber(number + 1), 1000)
    return (
        <AuthContext.Provider value={{ number, username, setNumber, setUsername }}>
            {children}
        </AuthContext.Provider>
    );
}
