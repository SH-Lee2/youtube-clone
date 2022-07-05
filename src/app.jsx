import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import MiniSideBar from "./components/sidebar/mini_sidebar";
import SideBar from "./components/sidebar/sidebar";

import VideoList from "./components/video_list/video_list";
import "./style.css";
const KEY = process.env.REACT_APP_KEY;

function App() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(true);
    useEffect(() => {
        const getVideos = async () => {
            try {
                const response = await (
                    await fetch(
                        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=kr&maxResults=25&key=${KEY}`
                    )
                ).json();
                // 나중에 인피니티 스크롤 추가
                setVideos(response);
                setLoading(true);
            } catch (error) {
                // 나중에 에러 처리 우선 구현!
                console.log(error);
            }
        };
        getVideos();
    }, []);

    const handleMenu = () => {
        setMenu((pre) => !pre);
    };

    return (
        <>
            <Header onClickMenu={handleMenu} />
            <main className="main">
                {!menu ? <SideBar /> : <MiniSideBar />}
                {loading && <VideoList videos={videos} />}
            </main>
        </>
    );
}

export default App;
