import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
const SideBar = () => {
    return (
        <div className={`sidebar-container open-menu`}>
            <div className="sidebar">
                <div className="item">
                    <HomeIcon />홈
                </div>
                <div className="item">
                    <ExploreIcon />
                    탐색
                </div>
                <div className="item">
                    <SubscriptionsIcon /> 구독
                </div>
                <hr />
                <div className="item">
                    <VideoLibraryIcon />
                    보관함
                </div>
                <div className="item">
                    <HistoryIcon />
                    시청 기록
                </div>
                <hr />
                <div className="login">
                    로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할
                    수 있습니다.
                    <button type="button" className="login-button">
                        <AccountCircleOutlinedIcon />
                        로그인
                    </button>
                </div>
                <hr />
                <h2 className="items-title">인기 YOUTUBE</h2>
                <div className="item">
                    <LibraryMusicOutlinedIcon />
                    음악
                </div>
                <div className="item">
                    <SportsBasketballOutlinedIcon />
                    스포츠
                </div>
                <div className="item">
                    <SportsEsportsOutlinedIcon />
                    게임
                </div>
                <div className="item">
                    <MovieOutlinedIcon />
                    영화
                </div>
                <div className="item">
                    <ArticleOutlinedIcon />
                    뉴스
                </div>
                <div className="item">
                    <LiveTvOutlinedIcon />
                    실시간
                </div>
                <hr />
                <div className="item">
                    <SettingsOutlinedIcon />
                    설정
                </div>
                <div className="item">
                    <FlagOutlinedIcon />
                    신고 기록
                </div>
                <div className="item">
                    <HelpOutlineOutlinedIcon />
                    고객센터
                </div>
            </div>
        </div>
    );
};

export default SideBar;
