export const Not = <Args extends any[], Fn extends (...args: Args) => Boolean>(fn: Fn) => {
  return (...args: Args) => {
    return fn(...args);
  };
};
