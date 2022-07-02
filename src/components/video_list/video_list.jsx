import Video from "./video";

const VideoList = ({ videos }) => {
    console.log(videos);
    return (
        <ul className="video-list">
            {videos.items.map((video) => (
                <Video video={video} key={video.id} />
            ))}
        </ul>
    );
};

export default VideoList;
