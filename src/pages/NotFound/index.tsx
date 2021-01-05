import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

interface Props { }

const NotFound: React.FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div>{t('not_found.title')}</div>
            <Link to={`/`}>{t('not_found.goto_home')}</Link>
        </div>
    );
};

export default NotFound;