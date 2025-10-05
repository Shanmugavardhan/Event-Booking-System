import './Header.css';
import { useState } from 'react';

function Header() {

    // const [showSignIn, setShowSignIn] = useState(false);
    // const [showSignUp, setShowSignUp] = useState(false);
    // const [showUserMenu, setShowUserMenu] = useState(false);

    // const handleShowSignInModal = () => {
    //     setShowSignIn(true);
    //     document.body.style.overflow = 'hidden';
    // };

    // const handleShowSignUpModal = () => {
    //     setShowSignUp(true);
    //     document.body.style.overflow = 'hidden';
    // };

    // const handleShowUserMenu = () => {
    //     setShowUserMenu(true);
    //     document.body.style.overflow = 'hidden';
    // };
    return (
        <header className="main-header">
            <div className="header-container">
                <div className="header-flex">
                    <a className="header-logo" href="#" data-discover="true">
                        <div className="logo-icon">
                            <i className="ri-calendar-event-line"></i>
                        </div>
                        <span className="logo-text">EventHub</span>
                    </a>
                    <nav className="main-nav">
                        <a className="nav-link nav-link-active" data-discover="true">Events</a>
                        <a className="nav-link" data-discover="true">My Bookings</a>
                        <a className="nav-link" data-discover="true">Admin</a>
                    </nav>
                    <div className="header-actions">
                        <button className="btn btn-outline">Sign In</button>
                        <button className="btn btn-primary">Sign Up</button>
                        <div className="header-user hidden">
                            <div className="header-user">
                                <div className="user-avatar">
                                    <img alt="User Avatar" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                </div>
                                <span className="user-name">John Doe</span>
                            </div>
                            <i className="ri-menu-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}
export default Header;