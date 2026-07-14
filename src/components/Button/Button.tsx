import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false
}) => {
  const baseStyle: React.CSSProperties = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    transition: 'background-color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variantStyles: React.CSSProperties = {
    ...(variant === 'primary' && {
      backgroundColor: '#007bff',
      color: 'white',
      '&:hover': { backgroundColor: '#0056b3' },
    }),
    ...(variant === 'secondary' && {
      backgroundColor: '#6c757d',
      color: 'white',
      '&:hover': { backgroundColor: '#5a6268' },
    }),
    ...(variant === 'danger' && {
      backgroundColor: '#dc3545',
      color: 'white',
      '&:hover': { backgroundColor: '#c82333' },
    }),
  };

  const sizeStyles: React.CSSProperties = {
    ...(size === 'small' && { padding: '6px 12px', fontSize: '12px' }),
    ...(size === 'medium' && { padding: '10px 20px', fontSize: '14px' }),
    ...(size === 'large' && { padding: '14px 28px', fontSize: '16px' }),
  };

  const combinedStyle: React.CSSProperties = {
    ...baseStyle,
    ...variantStyles,
    ...sizeStyles,
    opacity: disabled ? 0.6 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };

  return (
    <button
      style={combinedStyle}
      onClick={onClick}
      disabled={disabled}
      aria-label={children as string}
    >
      {children}
    </button>
  );
};

export default Button;
