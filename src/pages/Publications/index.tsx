import React from "react";
import { Link } from "react-router-dom";

interface Props { }

const Publications: React.FC<Props> = () => {
    const postId = 5;
    return (
        <div>
            <div>Publications</div>
            <Link to={`/posts/${postId}`}>go to post 1</Link>
        </div>
    );
};

export default Publications;