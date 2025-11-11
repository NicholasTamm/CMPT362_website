interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover ? "hover:shadow-xl hover:transform hover:scale-105" : "";

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
