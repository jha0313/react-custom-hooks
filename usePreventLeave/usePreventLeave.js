export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    }
  
    const enableProtection = () => window.addEventListener("beforeunload", listener);
    const disableProtection = () => window.removeEventListener("beforeunload", listener);
  
    return { enableProtection, disableProtection };
  };