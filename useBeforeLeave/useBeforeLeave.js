export const useBeforeLeave = (onBefore) => {
    const listener = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    }
  
    useEffect(() => {
      document.addEventListener("mouseleave", listener);
      return () => document.removeEventListener("mouseleave", listener);
    }, []);
  };