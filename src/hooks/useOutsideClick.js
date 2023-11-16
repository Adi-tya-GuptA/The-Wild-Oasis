import { useEffect, useRef } from "react";

export function useOutsideClick({ handler, listenCapturing = true }) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      // Check if ref.current is null or undefined
      if (ref.current && !ref.current.contains(e.target)) {
        // Ensure that handler is a function before calling it
        if (typeof handler === "function") {
          handler();
        } else {
          console.error("Handler is not a function");
        }
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
