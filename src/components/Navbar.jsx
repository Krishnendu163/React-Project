import React, { useEffect, useState } from 'react';
import Alerts from './Alerts';
import { Link} from "react-router-dom";


const Navbar = () => {
// Show ALert Function =====>
    const [alert, setAlerts] = useState(null)

    const showAlert = (message, type) => {
        setAlerts({
            msg: message,
            type: type
        })
    }

    // Dark mode Enable Disable Function =====>
    const [theme, setTheme] = useState('light'); // default to light

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setSelectedColor(null)

        if( newTheme === 'light') {
            showAlert("Light Mode Activted", "success")
        } else {
            showAlert("Dark Mode Activted", "success")            
        }
    }

    // Color Pallete Setting
    const colors = ['purple', 'yellow', 'cyan'];
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setTheme(color);
    };


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${theme === 'light' ? '' : 'makeblack'}`}>
                <div className="container-fluid">
                    
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>
                                    About
                                </Link>
                            </li>                            
                            <li className="nav-item">
                                <Link className="nav-link" to='/text-utils'>
                                    Text Utils
                                </Link>
                            </li>                            
                        </ul>
                        <div className="color-palette align-items-center">
                            <strong>Choose From Here</strong>
                            {colors.map((color) => (
                                <div
                                    key={color}
                                    className={`color-circle ${color} ${selectedColor === color ? 'selected' : ''}`}
                                    onClick={() => handleColorClick(color)}
                                    role="button"
                                >
                                </div>
                            ))}
                        </div>
                        <div className="form-check form-switch">
                            <label>{theme === "light" ? 'Light' : 'Dark'} Mode</label>
                            <input onClick={toggleTheme} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        </div>
                    </div>
                </div>
            </nav>
            <Alerts alert={alert} setAlerts={setAlerts}/>
        </>
    );
}

export default Navbar;