import { useEffect, useState } from "react";
import { Sprout } from "lucide-react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-primary/5" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] animate-pulse rounded-full bg-primary/5" style={{ animationDelay: "0.5s" }} />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 animate-pulse rounded-full bg-primary/5" style={{ animationDelay: "1s" }} />
      </div>

      {/* Logo and Title */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" style={{ animationDuration: "2s" }} />
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
            <Sprout className="h-12 w-12 text-primary-foreground animate-bounce" style={{ animationDuration: "2s" }} />
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground md:text-6xl">
            Farmo <span className="text-primary">Phile</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Cultivating Success, One Crop at a Time
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 md:w-80">
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Loading... {progress}%
          </p>
        </div>

        {/* Leaf decorations */}
        <div className="absolute -left-16 top-0 opacity-20">
          <Sprout className="h-8 w-8 rotate-[-30deg] text-primary" />
        </div>
        <div className="absolute -right-16 bottom-0 opacity-20">
          <Sprout className="h-8 w-8 rotate-[30deg] text-primary" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
