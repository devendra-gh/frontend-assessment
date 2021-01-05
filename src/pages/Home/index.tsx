import React, { lazy } from "react";
const Services = lazy(() => import('../../components/Services'));

interface Props { }

const Home: React.FC<Props> = () => {
    return (
        <>
            <Services />
        </>
    );
};

export default Home;