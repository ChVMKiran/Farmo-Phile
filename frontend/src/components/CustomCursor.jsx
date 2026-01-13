import { useEffect, useState, useCallback } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const updatePosition = useCallback((e) => {
    const newPos = { x: e.clientX, y: e.clientY, id: Date.now() };
    setPosition({ x: e.clientX, y: e.clientY });
    setTrail((prev) => [...prev.slice(-12), newPos]);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      updatePosition(e);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [updatePosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Trail dots */}
      {trail.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-primary"
          style={{
            left: dot.x,
            top: dot.y,
            width: 4 + index * 0.8,
            height: 4 + index * 0.8,
            opacity: (index + 1) / trail.length * 0.6,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="absolute h-5 w-5 rounded-full border-2 border-primary bg-primary/20"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Inner dot */}
      <div
        className="absolute h-2 w-2 rounded-full bg-primary"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
