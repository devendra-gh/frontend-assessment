import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import './style.scss';

interface Props { }

const Articles: React.FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className="articles__wrapper">
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
            <div className="articles__item">
                <h2>{t('lorem.title')}</h2>
                <p>{t('lorem.desc')}</p>
            </div>
        </div>
    );
};

export default Articles;