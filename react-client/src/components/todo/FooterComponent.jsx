import { AuthContext } from './security/AuthContext';
import { useContext } from 'react';

function FooterComponent(){
    const authContext = useContext(AuthContext);

    console.log(` Footer component : ${authContext.number} `);

    return(
        <div className="FooterComponent">
            <footer className='footer'>
                <div className='container'>
                    My Footer
                </div>
            </footer> 
        </div>
    ) 
}

export default FooterComponent