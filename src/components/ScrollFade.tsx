"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
}

export function ScrollFade({ children, className = "" }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
