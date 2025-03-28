
import { Plane } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay = ({ message = "Loading your dream universities..." }: LoadingOverlayProps) => {
  const [progress, setProgress] = useState(0);
  const [planePosition, setPlanePosition] = useState(0);
  
  useEffect(() => {
    // Progress bar animation
    const timer = setTimeout(() => {
      setProgress(66);
      
      const finalTimer = setTimeout(() => {
        setProgress(100);
      }, 800);
      
      return () => clearTimeout(finalTimer);
    }, 500);
    
    // Plane animation
    const animatePlane = () => {
      setPlanePosition(prev => {
        // Reset to beginning when it reaches the end
        if (prev >= 100) return -20;
        // Move the plane
        return prev + 1;
      });
    };
    
    const planeInterval = setInterval(animatePlane, 25);
    
    return () => {
      clearTimeout(timer);
      clearInterval(planeInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center gap-8 max-w-md text-center px-4">
        {/* Flight animation container */}
        <div className="w-64 h-12 relative">
          {/* Flight path line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#6E4D8B]/20 to-[#6E4D8B]/40 rounded-full"></div>
          
          {/* Cloud elements */}
          <div className="absolute top-0 left-1/4 w-8 h-3 bg-[#6E4D8B]/10 rounded-full"></div>
          <div className="absolute bottom-0 left-2/3 w-10 h-4 bg-[#6E4D8B]/10 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-3 bg-[#6E4D8B]/10 rounded-full"></div>
          
          {/* Plane element - positioned based on animation state */}
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 transition-none"
            style={{ left: `${planePosition}%` }}
          >
            <Plane 
              size={28} 
              className="text-[#6E4D8B] transform -rotate-[15deg]" 
              strokeWidth={2.5} 
              fill="#6E4D8B" 
              fillOpacity={0.1}
            />
          </div>
        </div>
        
        <div className="w-full space-y-5">
          {/* Progress bar with gradient */}
          <div className="w-64 h-2 bg-[#6E4D8B]/10 rounded-full overflow-hidden mx-auto">
            <Progress 
              value={progress} 
              className="h-full bg-gradient-to-r from-[#6E4D8B]/40 to-[#6E4D8B]"
            />
          </div>
          
          {/* Message */}
          <p className="text-[#6E4D8B] font-medium text-lg">{message}</p>
          
          {/* Decorative dotted line suggesting flight path/journey */}
          <div className="flex items-center justify-center gap-1.5 opacity-60">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6E4D8B]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6E4D8B]/70"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6E4D8B]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6E4D8B]/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6E4D8B]/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
