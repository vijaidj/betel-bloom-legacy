const GIBadge = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <div className={`${sizes[size]} ${className} flex-shrink-0`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Outer saffron ring */}
        <circle cx="100" cy="100" r="96" fill="#FF9933" />
        <circle cx="100" cy="100" r="84" fill="#FFFFFF" />
        {/* Inner green ring */}
        <circle cx="100" cy="100" r="72" fill="#138808" />
        <circle cx="100" cy="100" r="60" fill="#FFFFFF" />
        
        {/* Ashoka Chakra */}
        <circle cx="100" cy="100" r="18" fill="none" stroke="#000080" strokeWidth="2" />
        <circle cx="100" cy="100" r="4" fill="#000080" />
        {/* 24 spokes */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x2 = 100 + 18 * Math.cos(angle);
          const y2 = 100 + 18 * Math.sin(angle);
          return <line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke="#000080" strokeWidth="1" />;
        })}
        
        {/* Top text - GEOGRAPHICAL INDICATION */}
        <defs>
          <path id="topArc" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
          <path id="bottomArc" d="M 165,110 A 65,65 0 0,1 35,110" fill="none" />
        </defs>
        <text fontSize="11" fontWeight="bold" fill="#138808" fontFamily="Arial, sans-serif">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            GEOGRAPHICAL INDICATION
          </textPath>
        </text>
        <text fontSize="16" fontWeight="bold" fill="#FF9933" fontFamily="Arial, sans-serif">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            INDIA
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default GIBadge;
