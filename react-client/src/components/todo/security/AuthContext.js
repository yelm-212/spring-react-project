import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(10);
    const [username, setUsername] = useState('username');  // 초기값을 'username'으로 설정

    return (
        <AuthContext.Provider value={{ number, username, setNumber, setUsername }}>
            {children}
        </AuthContext.Provider>
    );
}
