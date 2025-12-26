import { memo } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'contact';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  href?: string;
  external?: boolean;
}

export const Button = memo(function Button({
  children,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  href,
  external = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    contact: 'btn-contact-us',
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };
  const magneticClass = magnetic ? 'btn-magnetic' : '';

  const combinedClasses =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${magneticClass} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
});
