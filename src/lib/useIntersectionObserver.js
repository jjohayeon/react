import { useCallback, useEffect, useRef } from "react";

export const useScrollFadeIn = (direction, duration, delay) => {
  const element = useRef();
  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate(0, 100%)";
      case "down":
        return "translate(0, -50%)";
      case "left":
        return "translate(50%, 0)";
      case "right":
        return "translate(-50%, 0)";
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate(0,0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }
    return () => observer && observer.disconnect();
  }, [onScroll]);
  return {
    ref: element,
    style: { opacity: 1, transform: handleDirection(direction) },
  };
};
