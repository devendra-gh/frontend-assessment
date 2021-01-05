import React from "react";
import { Link } from "react-router-dom";

interface Props { }

const About: React.FC<Props> = () => {
    const postId = 5;
    return (
        <div>
            <div>About us</div>
            <Link to={`/posts/${postId}`}>go to post 1</Link>
        </div>
    );
};

export default About;