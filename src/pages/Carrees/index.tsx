import React from "react";
import { useTranslation } from 'react-i18next';
import LayoutWrapper from "../../components/LayoutWrapper";
import Articles from "../../components/Articles";

interface Props { }

const Carrees: React.FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <LayoutWrapper>
            <h1 className="pb__20">{t('carrees.title')}</h1>
            <Articles />
        </LayoutWrapper>
    );
};

export default Carrees;
