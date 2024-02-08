export const fade_left_animation = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.5 },
  variants: {
    visible: { x: 0, opacity: 1, scale: 1 },
    hidden: { x: -50, opacity: 0, scale: 0.5 },
  },
};

export const fade_right_animation = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0, scale: 0.5, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0 },
  },
};

export const fade_in_animation = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
};

export const fade_in_animation_noscale = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export const fade_down_animation = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.8 },
  variants: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
};

export const fade_up_animation = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.8 },
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};
