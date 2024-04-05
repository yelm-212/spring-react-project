import { useAuth } from './security/AuthContext';

function FooterComponent(){
    // const authContext = useContext(AuthContext);

    const authContext = useAuth()

    // console.log(` Footer component : ${authContext.number} `);

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