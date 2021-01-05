import React from "react";
import { Link } from "react-router-dom";

interface Props { }

const NotFound: React.FC<Props> = () => {
    const postId = 5;
    return (
        <div>
            <div>NotFound</div>
            <Link to={`/posts/${postId}`}>go to post 1</Link>
        </div>
    );
};

export default NotFound;