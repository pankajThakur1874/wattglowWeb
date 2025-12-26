import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import type { NavigationItem } from '../../types';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const renderNavItem = (item: NavigationItem) => {
    if (item.dropdown) {
      return (
        <li key={item.label} className="nav-item dropdown">
          <Link
            className={`nav-link dropdown-toggle ${isActive(item.path) ? 'active' : ''}`}
            to={item.path === '#' ? '#' : item.path}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
          >
            {item.label}
          </Link>
          <ul className="dropdown-menu bg-Div-light" aria-labelledby="navbarDropdown">
            {item.dropdown.map((subItem) => (
              <li key={subItem.path}>
                <Link className="dropdown-item" to={subItem.path}>
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li key={item.label} className="nav-item">
        <Link className={`nav-link ${isActive(item.path) ? 'active' : ''}`} to={item.path}>
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="top-0 navbar navbar-expand-lg navbar-light sticky-top p-1 bg-Div-light">
      <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <img
          src="/assets/images/WattGlow.png"
          alt="WattGlow Power - Solar EPC Company Logo"
          className="mb-2"
          style={{ width: '120px', height: 'auto' }}
        />
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-auto p-4 p-lg-0">{navigationItems.map(renderNavItem)}</ul>
      </div>
    </nav>
  );
}
