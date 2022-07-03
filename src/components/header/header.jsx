import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SearchVideo from "./search_video";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <FontAwesomeIcon icon={faYoutube} />
                <h1>
                    You<span>T</span>ube
                </h1>
            </div>
            <SearchVideo />
            <a
                href="https://github.com/SH-Lee2/youtube-clone"
                target="_blank"
                rel="noreferrer"
                className="github-page"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </header>
    );
};

export default Header;
