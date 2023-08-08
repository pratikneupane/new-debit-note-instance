import { useEffect, RefObject } from "react";

/**
 * useClickAwayListener Hook
 *
 * A hook to attach a click-away listener to the specified element reference.
 *
 * @param {object} options - The options object.
 * @param {RefObject<HTMLElement>} options.ref - The element reference to watch for clicks outside of.
 * @param {() => void} options.callback - The callback function to execute when a click outside is detected.
 */
const useClickAwayListener = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref, callback]);
};

export default useClickAwayListener;
