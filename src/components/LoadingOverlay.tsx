
import { Loader } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay = ({ message = "Loading your dream universities..." }: LoadingOverlayProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
      
      const finalTimer = setTimeout(() => {
        setProgress(100);
      }, 600);
      
      return () => clearTimeout(finalTimer);
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center gap-6 max-w-md text-center px-4">
        <div className="relative animate-spin text-[#6E4D8B]">
          <Loader size={48} className="stroke-[#6E4D8B]" strokeWidth={2} />
        </div>
        
        <div className="w-full space-y-4">
          <Progress value={progress} className="h-2 w-64 bg-gray-100" />
          
          <p className="text-[#6E4D8B] font-medium text-lg animate-pulse">{message}</p>
          
          <div className="space-y-3">
            <div className="flex gap-2">
              <Skeleton className="h-4 w-12 bg-[#6E4D8B]/10" />
              <Skeleton className="h-4 w-32 bg-[#6E4D8B]/10" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-4 w-20 bg-[#6E4D8B]/10" />
              <Skeleton className="h-4 w-24 bg-[#6E4D8B]/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
