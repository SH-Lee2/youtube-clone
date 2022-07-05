import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchVideo = () => {
    const formRef = useRef();
    const inputRef = useRef();
    const handleSearch = (event) => {
        event.preventDefault();
    };
    return (
        <div className="search_video-header">
            <form
                className="search_video"
                ref={formRef}
                onSubmit={handleSearch}
            >
                <input ref={inputRef} type="text" placeholder="검색" />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default SearchVideo;
