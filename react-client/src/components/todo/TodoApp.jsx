import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from './LoginComponent'
import LogOutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticatedRoute( {children} ){
    const authContext = useAuth()

    if (authContext.isAuthenticated) 
        return children

    return <Navigate to="/" />
}

// This is main application container
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter> 
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element= { <LoginComponent/> } />
                        <Route path='/login' element= { <LoginComponent/> } />
                        <Route path='/welcome/:username' element= { 
                            <AuthenticatedRoute>
                                <WelcomeComponent/> 
                            </AuthenticatedRoute>
                        } />
                        <Route path='/todos/:username' element= {
                            <AuthenticatedRoute>
                                <ListTodosComponent/> 
                            </AuthenticatedRoute>
                        } />
                        <Route path='/logout' element= { 
                            <AuthenticatedRoute>
                                <LogOutComponent/> 
                            </AuthenticatedRoute>
                        } />
                        <Route path='*' element= { <ErrorComponent/> } />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
 

