import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import chatMessanger from "../../images/chat-messanger.png";
import Modal from "../Modal";
import './style.scss';

interface Props { }

const ChatMessanger: React.FC<Props> = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (value: boolean) => {
        setIsOpen(value);
    }

    const onClickSend = (event: any) => {
        event.preventDefault();
        console.log('sending data');
    }

    return (
        <div className="chat-messanger__wrapper">
            <button
                onClick={() => toggleModal(true)}
                className="chat-messanger__icon">
                <img src={chatMessanger} alt="Chat Messanger" />
            </button>

            <Modal isOpenModel={isOpen} closeModal={() => toggleModal(false)}>
                <div className="chat-messanger__section">
                    <h2>{t('chat.title')}</h2>
                    <form className="chat-messanger__form" noValidate>
                        <input type="text" placeholder={t('chat.your_name')} />
                        <textarea placeholder={t('chat.your_message')} />
                        <button onClick={onClickSend} className="primary-btn">{t('chat.send')}</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default ChatMessanger;