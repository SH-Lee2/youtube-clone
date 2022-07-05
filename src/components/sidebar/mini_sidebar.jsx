import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
const MiniSideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="short-sidebar">
                <div className="short-item">
                    <HomeIcon />홈
                </div>
                <div className="short-item">
                    <ExploreIcon />
                    탐색
                </div>
                <div className="short-item">
                    <SubscriptionsIcon /> 구독
                </div>
                <div className="short-item">
                    <VideoLibraryIcon />
                    <span>보관함</span>
                </div>
                <div className="short-item">
                    <HistoryIcon />
                    시청 기록
                </div>
            </div>
        </div>
    );
};

export default MiniSideBar;
