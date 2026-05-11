import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={show ? "scroll_top show" : "scroll_top"}
      onClick={goTop}
      aria-label="Scroll to top"
      type="button"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;