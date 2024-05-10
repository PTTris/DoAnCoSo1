import React, { useState } from "react";
import "./ScroolToTop.scss";
const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700) {
            setVisible(true);
        } else if (scrolled <= 700) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
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
