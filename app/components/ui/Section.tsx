interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen py-20 px-6 md:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
