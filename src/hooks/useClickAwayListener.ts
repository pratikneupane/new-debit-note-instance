import { useEffect, RefObject } from "react";


const useClickAwayListener = (
  ref: RefObject<HTMLElement>,
  callback: () => void
): void => {
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
