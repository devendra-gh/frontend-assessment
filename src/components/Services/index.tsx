import React from "react";
import { useTranslation } from 'react-i18next';
import Cloud from "../../images/cloud.png";
import Partners from "../../images/partners.png";
import Compliance from "../../images/compliance.png";
import Dl from "../../images/dl.png";
import AppDev from "../../images/app-dev.png";
import './style.scss';

interface Props { }

const serviceData = [
    {
        icon: Cloud,
        content: 'service.item_1',
    },
    {
        icon: Compliance,
        content: 'service.item_2',
    },
    {
        icon: Dl,
        content: 'service.item_3',
    },
    {
        icon: AppDev,
        content: 'service.item_4',
    }
];

const Services: React.FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className="services__wrapper">
            <div className="services__section__left">
                <h1>{t('service.title')}</h1>
                <ul className="services__list">
                    {
                        serviceData.map((service) => {
                            const { icon, content } = service;
                            return (
                                <li key={`${content}`} className="services__item">
                                    <span className="services__img"><img src={icon} alt={t(content)} /></span>
                                    <span className="services__label">{t(content)}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="services__section__right">
                <img src={Partners} />
            </div>
        </div>
    );
};

export default Services;