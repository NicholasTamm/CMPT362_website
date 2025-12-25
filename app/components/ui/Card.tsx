interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover ? "hover:shadow-xl hover:transform hover:scale-105" : "";

  return (
    <div className={`bg-[var(--component-background)] rounded-xl shadow-lg p-6 transition-all duration-300 border border-gray-800 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
