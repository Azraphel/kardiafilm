import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary',
  href,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50',
    secondary: 'border border-purple-900/50 hover:border-purple-500 hover:bg-purple-500/5 backdrop-blur-sm',
    outline: 'border border-purple-500/30 hover:border-purple-500/50 bg-transparent'
  };

  const baseClasses = 'px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group';

  const content = (
    <>
      {children}
      {variant === 'primary' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
};

export default Button;