import React from "react";
import SearchVideo from "./search_video";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
const Header = ({ onClickMenu }) => {
    return (
        <header className="header">
            <div className="logo">
                <MenuIcon className="menu" onClick={onClickMenu} />
                <YouTubeIcon />
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
                <GitHubIcon />
            </a>
        </header>
    );
};

export default Header;
