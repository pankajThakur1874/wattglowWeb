import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { getAssetPath } from '../../utils/constants';
import type { NavigationItem } from '../../types';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Initialize Bootstrap dropdowns after component mounts
  useEffect(() => {
    const positionDropdown = (toggle: HTMLElement, menu: HTMLElement) => {
      const rect = toggle.getBoundingClientRect();
      menu.style.position = 'fixed';
      menu.style.top = `${rect.bottom + 8}px`;
      menu.style.left = `${rect.left}px`;
      menu.style.zIndex = '999999';
      menu.style.minWidth = `${Math.max(200, rect.width)}px`;
    };

    const handleDropdownShow = (e: Event) => {
      const toggle = e.target as HTMLElement;
      const menu = toggle.nextElementSibling as HTMLElement;
      if (menu && menu.classList.contains('dropdown-menu')) {
        positionDropdown(toggle, menu);
      }
    };

    const initializeDropdowns = () => {
      const bootstrap = (window as any).bootstrap;
      if (!bootstrap) {
        setTimeout(initializeDropdowns, 200);
        return;
      }

      // Add event listeners for dropdown show events
      document.addEventListener('show.bs.dropdown', handleDropdownShow);
      document.addEventListener('shown.bs.dropdown', handleDropdownShow);

      // Initialize all dropdowns
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref) {
          try {
            const existingInstance = bootstrap.Dropdown.getInstance(ref);
            if (existingInstance) {
              existingInstance.dispose();
            }
            
            new bootstrap.Dropdown(ref, {
              boundary: 'viewport',
              offset: [0, 8],
            });
          } catch (error) {
            console.warn('Dropdown initialization error:', error);
          }
        }
      });
    };

    initializeDropdowns();
    const timer = setTimeout(initializeDropdowns, 300);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('show.bs.dropdown', handleDropdownShow);
      document.removeEventListener('shown.bs.dropdown', handleDropdownShow);
      const bootstrap = (window as any).bootstrap;
      if (bootstrap) {
        Object.values(dropdownRefs.current).forEach((ref) => {
          if (ref) {
            try {
              const instance = bootstrap.Dropdown.getInstance(ref);
              if (instance) {
                instance.dispose();
              }
            } catch (error) {
              // Ignore cleanup errors
            }
          }
        });
      }
    };
  }, []);

  const handleDropdownClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const dropdownMenu = target.nextElementSibling as HTMLElement;
    
    if (dropdownMenu && window.innerWidth >= 992) {
      setTimeout(() => {
        const rect = target.getBoundingClientRect();
        dropdownMenu.style.position = 'fixed';
        dropdownMenu.style.top = `${rect.bottom + 8}px`;
        dropdownMenu.style.left = `${rect.left}px`;
        dropdownMenu.style.zIndex = '999999';
        dropdownMenu.style.minWidth = `${Math.max(200, rect.width)}px`;
      }, 10);
    }
  };

  const renderNavItem = (item: NavigationItem) => {
    if (item.dropdown) {
      const dropdownId = `dropdown-${item.label.replace(/\s+/g, '-').toLowerCase()}`;
      return (
        <li key={item.label} className="nav-item dropdown">
          <a
            className={`nav-link dropdown-toggle text-gray-800 hover:text-blue-600 ${isActive(item.path) ? 'active text-blue-600' : ''}`}
            href="#"
            role="button"
            id={dropdownId}
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
            style={{ color: '#1a2a36', cursor: 'pointer' }}
            onClick={handleDropdownClick}
            ref={(el) => {
              if (el) {
                dropdownRefs.current[item.label] = el;
                // #region agent log
                setTimeout(() => {
                  const menu = el.nextElementSibling as HTMLElement;
                  fetch('http://127.0.0.1:7243/ingest/689acc4f-6fb5-4fe6-a0b0-3c76fbb96c99',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.tsx:98',message:'Dropdown ref set',data:{label:item.label,id:dropdownId,hasMenu:!!menu,menuClasses:menu?.className},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
                }, 100);
                // #endregion
              }
            }}
          >
            {item.label}
          </a>
          <ul className="dropdown-menu bg-Div-light" aria-labelledby={dropdownId}>
            {item.dropdown.map((subItem) => (
              <li key={subItem.path}>
                <Link className="dropdown-item text-gray-800 hover:text-blue-600" to={subItem.path} style={{ color: '#1a2a36' }}>
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
        <Link className={`nav-link text-gray-800 hover:text-blue-600 ${isActive(item.path) ? 'active text-blue-600' : ''}`} to={item.path} style={{ color: '#1a2a36' }}>
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="top-0 navbar navbar-expand-lg navbar-light sticky-top p-1 bg-Div-light">
      <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <img
          src={getAssetPath('/assets/images/WattGlow.png')}
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
