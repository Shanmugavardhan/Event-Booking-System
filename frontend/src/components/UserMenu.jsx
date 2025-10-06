import "./style.css";
import { useState } from "react";

function UserMenu() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const hideUserMenu = () => {
    setShowUserMenu(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      {showUserMenu && (
        <div className="user-Menu visible">
          <div className="user-Menu-content">
            <ul className="user-Menu-list">
              <li style="margin-bottom:8px;">
                <a
                  href="#"
                  style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                  onMouseOver="this.style.color='#2563eb'"
                  onMouseOut="this.style.color='#374151'"
                >
                  Profile
                </a>
              </li>
              <li style="margin-bottom:8px;">
                <a
                  href="#"
                  style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                  onMouseOver="this.style.color='#2563eb'"
                  onMouseOut="this.style.color='#374151'"
                >
                  My Bookings
                </a>
              </li>
              <li style="margin-bottom:8px;">
                <a
                  href="#"
                  style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                  onMouseOver="this.style.color='#2563eb'"
                  onMouseOut="this.style.color='#374151'"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style="display:block;color:#374151;text-decoration:none;transition:color 0.2s;"
                  onMouseOver="this.style.color='#2563eb'"
                  onMouseOut="this.style.color='#374151'"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
export default UserMenu;
