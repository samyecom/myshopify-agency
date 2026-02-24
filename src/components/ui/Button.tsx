import React from 'react';
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
}
export function Button({
  variant = 'primary',
  children,
  onClick,
  className = '',
  href,
  target
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-lg font-heading font-medium transition-all duration-200 inline-flex items-center justify-center';
  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md',
    secondary:
      'border-2 border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50'
  };
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={combinedClassName}>
        {children}
      </a>);

  }
  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>);

}