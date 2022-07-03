import React, { useRef } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchVideo = () => {
    const formRef = useRef();
    const inputRef = useRef();
    const handleSearch = (event) => {
        event.preventDefault();
    };
    return (
        <form className="search_video" ref={formRef} onSubmit={handleSearch}>
            <input ref={inputRef} type="text" placeholder="검색" />
            <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
};

export default SearchVideo;
