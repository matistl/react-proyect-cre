import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

export default function Layout() {

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleButtonClick = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <>
            <header>
                <div className='nav-mobile'>
                    <button onClick={handleButtonClick}>
                        {mobileMenu ? (<i className='bx bx-x'></i>) : (<i className='bx bx-menu'></i>)}
                    </button>
                </div>
                <nav className='nav'>
                    <div className='nav-container'>
                        <div className='nav-logo'>
                            <img className='nav-logo_img' alt='Logo' src='/logolfc.png' width='80' />
                        </div>
                        <ul className={`nav-menu ${mobileMenu ? 'show' : ''}`}>
                            <li>
                                <Link className='nav-item' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-item' to='/about'>
                                    Acerca de
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-item' to='/'>
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}