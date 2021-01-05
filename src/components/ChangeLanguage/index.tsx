import React from "react";
import { useTranslation } from 'react-i18next';
import { CONSTANT } from '../../utils/constant';
import './style.scss';

interface Props { }

const Language: React.FC<Props> = () => {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();

    const changeLanguage = (lang: any) => {
        const { value = CONSTANT.EN } = lang;

        i18n.changeLanguage(value);
        document.body.dir = i18n.dir();
    }

    return (
        <div className="language__wrapper">
            <select onChange={(event) => { changeLanguage(event.target) }}>
                <option value={CONSTANT.EN}>{t('lang.en')}</option>
                <option value={CONSTANT.AR}>{t('lang.ar')}</option>
            </select>
        </div>
    );
};

export default Language;