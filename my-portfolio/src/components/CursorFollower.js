import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const followerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const updatePosition = (x, y) => {
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const handleMouseMove = (e) => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Smooth interpolation for better following effect (higher factor = faster response)
        const lerp = (start, end, factor) => start + (end - start) * factor;
        const factor = 0.5; // Higher value for faster, more responsive following
        
        lastX = lerp(lastX, x, factor);
        lastY = lerp(lastY, y, factor);
        
        updatePosition(lastX - 12, lastY - 12); // -12 to center the 24px circle
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className={`fixed pointer-events-none z-50 top-0 left-0 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        willChange: 'transform',
      }}
    >
      <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow-lg"></div>
    </div>
  );
};

export default CursorFollower;

