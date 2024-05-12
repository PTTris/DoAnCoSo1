import React, { useState } from "react";
import "./ScroolToTop.scss";
const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true);
        } else if (scrolled <= 500) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            // Tăng khoảng cách
            window.scrollTo(0, c - c / 12);
        }
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className="scroll-top"
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
        >
            <i class="fa fa-angle-up" aria-hidden="true"></i>
        </button>
    );
};

export default ScrollButton;
