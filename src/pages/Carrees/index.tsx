import React from "react";
import { Link } from "react-router-dom";

interface Props { }

const Carrees: React.FC<Props> = () => {
    const postId = 5;
    return (
        <div>
            <div>Carrees</div>
            <Link to={`/posts/${postId}`}>go to post 1</Link>
        </div>
    );
};

export default Carrees;