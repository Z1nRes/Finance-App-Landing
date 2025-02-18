import './style/index.css'
import Logo from "./logo";

const NavBar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'><Logo/></div>
                <div>
                    <ul className='navigation'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
                <button className='login-btn'>Sign Up</button>
            </div>
        </>
    );
};

export default NavBar;