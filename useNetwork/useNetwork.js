export const useNetwork = (onChange) => {
    const [ network, setNetwork ] = useState(navigator.onLine);
    const handle = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setNetwork(navigator.onLine);
    }
    useEffect(() => {
      window.addEventListener("online", handle);
      window.addEventListener("offline", handle);
      return () => {
        window.removeEventListener("online", handle);
        window.removeEventListener("offline", handle);
      }
    }, []);
  
    return network;
  }
  