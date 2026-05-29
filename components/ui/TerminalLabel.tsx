interface TerminalLabelProps {
  name?: string;
  className?: string;
}

export default function TerminalLabel({ name = "Tempura", className = "" }: TerminalLabelProps) {
  return (
    <div className={`flex items-center gap-2 py-1.5 ${className}`}>
      {/* Sleek SVG Terminal Prompt Icon >_ */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="2.5" 
        stroke="currentColor" 
        className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform duration-200"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3" />
      </svg>
      
      {/* Monospaced Port label */}
      <span className="typ-label-mono text-xs font-bold text-primary uppercase tracking-widest">
        {name} Port
      </span>
    </div>
  );
}
