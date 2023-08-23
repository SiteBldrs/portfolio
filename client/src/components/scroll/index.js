import React, { useEffect, useState } from "react";

import "./scroll.scss";
import { MoveToTopeIcon } from "constants/icons";

export const ScrollToTopComponent = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll_container flex items-center justify-center fixed ${
        showScrollButton && "show_scroll"
      }`}
      onClick={handleScroll}
    >
      <MoveToTopeIcon />
    </div>
  );
};
