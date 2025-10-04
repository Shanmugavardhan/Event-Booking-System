function UserMenu() {
    return (
        <div class="user-Menu visible">
            <div class="user-Menu-content">
                <ul class="user-Menu-list">
                    <li style="margin-bottom:8px;"><a href="#"
                        style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                        onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#374151'">Profile</a></li>
                    <li style="margin-bottom:8px;"><a href="#"
                        style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                        onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#374151'">My Bookings</a></li>
                    <li style="margin-bottom:8px;"><a href="#"
                        style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                        onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#374151'">Settings</a></li>
                    <li><a href="#" style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                        onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#374151'">Logout</a></li>
                </ul>
            </div>
        </div>
    );
}
export default UserMenu;