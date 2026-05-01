// components/Reveal.jsx
import { useReveal } from './hooks';

export default function Reveal({ children, className = '', style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`rm-reveal ${visible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
