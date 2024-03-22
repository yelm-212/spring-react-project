import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from './LoginComponent'
import LogOutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'

// This is main application container
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element= { <LoginComponent/> } />
                    <Route path='/login' element= { <LoginComponent/> } />
                    <Route path='/welcome/:username' element= { <WelcomeComponent/> } />
                    <Route path='/todos' element= { <ListTodosComponent/> } />
                    <Route path='/logout' element= { <LogOutComponent/> } />
                    <Route path='*' element= { <ErrorComponent/> } />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}
 

