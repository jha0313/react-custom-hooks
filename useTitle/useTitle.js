import { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
    const [ title, setTitle ] = useState(initialTitle);
    const update = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
  
    useEffect(update, [title]);
    return setTitle;
  }