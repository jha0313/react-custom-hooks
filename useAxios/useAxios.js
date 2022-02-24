import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, defaultInstance = defaultAxios) => {
  if (!opts.url) {
    return;
  }

  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    defaultInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({
          loading: false,
          error
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
