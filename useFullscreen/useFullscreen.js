export const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFullscreen = () => {
      if (element.current) {
        element.current.requestFullscreen();
      }
      if (callback && typeof callback === "function") {
        callback(true);
      }
    };
    const exitFullscreen = () => {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    }
    return { element, triggerFullscreen, exitFullscreen };
  }