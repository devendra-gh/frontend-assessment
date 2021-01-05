import React from "react";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps<{ id: string }> { }

const WhatWeDo: React.FC<Props> = ({ match }) => {
    // React.useEffect(() => {
    //   fetch(`api.example.com/posts/${match.params.id}`)
    // }, [match.params.id])

    return <div>rendering post {match.params.id}</div>;
};

export default WhatWeDo;
