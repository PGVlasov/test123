import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const RenderInWindow = (props) => {

  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  useEffect(() => {
    setContainer(document.createElement("div"));
    console.log(props.isCliced)
  }, [props.isCliced]);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};