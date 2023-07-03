// Define interface for animation properties
interface AnimationProps {
  x: number;
  y: number;
  opacity: number;
}

// Define interface for transition properties
interface TransitionProps {
  type: string;
  delay: number;
  duration: number;
  ease: string;
}

// Define interface for fade-in animation properties
interface FadeInProps {
  hidden: AnimationProps; // Initial state of the element before animation starts
  show: AnimationProps & {
    transition: TransitionProps; // Animation behavior (type, delay, duration, ease)
  };
}

// Define the fadeIn function taht returns FadeInProps
export const fadeIn = (
  direction: "left" | "right" | "up" | "down", // Direction of the fade-in animation
  type: string, // Type of animation (e.g., "tween", "spring", "keyframes")
  delay: number, // Delay before animation starts (in seconds)
  duration: number // Duration of the animation (in seconds)
): FadeInProps => ({
  hidden: {
    // Initial state of the element before animation starts
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Set initial x coordinate based on direction
    y: direction === "up" ? 100 : direction === "down" ? 100 : 0, // Set initial y coordinate based on direction
    opacity: 1, // Set initial opacity to 1, indicating the element is fully visible
  },
  show: {
    x: 0, // Return to the original x coordinate
    y: 0, // Return to the original y coordinate
    opacity: 1, // Maintain opacity at 1, indicating the element remains fully visible
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut", // Easing function used for the animation
    },
  },
});
