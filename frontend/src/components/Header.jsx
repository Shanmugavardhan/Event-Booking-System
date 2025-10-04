function Header() {
    return (
        <header class="main-header">
            <div class="header-container">
                <div class="header-flex">
                    <a class="header-logo" href="#" data-discover="true">
                        <div class="logo-icon">
                            <i class="ri-calendar-event-line"></i>
                        </div>
                        <span class="logo-text">EventHub</span>
                    </a>
                    <nav class="main-nav">
                        <a class="nav-link nav-link-active" href="#" data-discover="true">Events</a>
                        <a class="nav-link" href="#" data-discover="true">My Bookings</a>
                        <a class="nav-link" href="#" data-discover="true">Admin</a>
                    </nav>
                    <div class="header-actions">
                        <button onclick="showSignInModal()" class="btn btn-outline">Sign In</button>
                        <button onclick="showSignUpModal()" class="btn btn-primary">Sign Up</button>
                    </div>
                    <div onclick="showUserMenu()" class="header-user hidden">
                        <div class="user-avatar">
                            <img alt="User Avatar" src="https://randomuser.me/api/portraits/men/1.jpg" />
                        </div>
                        <span class="user-name">John Doe</span>
                    </div>
                    <button class="menu-btn">
                        <i class="ri-menu-line"></i>
                    </button>
                </div>
            </div>
        </header>
    );

}
export default Header;