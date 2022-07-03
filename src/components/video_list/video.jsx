import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment/locale/ko";
const KEY = process.env.REACT_APP_KEY;

const Video = ({ video: { snippet } }) => {
    console.log(snippet);
    const [loading, setLoading] = useState(false);
    const [channel, setChannel] = useState([]);
    useEffect(() => {
        const getChannelData = async () => {
            try {
                const response = await (
                    await fetch(
                        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=${KEY}`
                    )
                ).json();
                setChannel(response);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };
        getChannelData();
    }, []);
    const title =
        snippet.title.length > 20
            ? snippet.title.substring(0, 20) + "..."
            : snippet.title;
    return (
        <>
            {loading && (
                <li className="card">
                    <div className="thumbnail">
                        <img
                            src={snippet.thumbnails.medium.url}
                            alt="영상 썸네일"
                        />
                    </div>
                    <div className="metadata">
                        <img
                            src={
                                channel.items[0].snippet.thumbnails.default.url
                            }
                            alt="채널 프로필 사진"
                        />
                        <div>
                            <p className="title">{title}</p>
                            <p className="channel-title">
                                {snippet.channelTitle}
                            </p>
                            <Moment fromNow className="publish-time">
                                {snippet.publishedAt}
                            </Moment>
                        </div>
                    </div>
                </li>
            )}
        </>
    );
};

export default Video;
