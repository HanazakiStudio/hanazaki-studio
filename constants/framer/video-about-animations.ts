export const ContainerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delayChildren: 0.3,
    },
  },
};

export const LineAnimation = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const TextAnimation = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.7,
      delay: 0.5,
    },
  },
};

export const PlayAnimation = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.7,
      delay: 0.5,
    },
  },
};
