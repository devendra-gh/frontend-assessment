import React from "react";
import Modal from 'react-modal';
import './style.scss';

interface Props {
    children: React.ReactNode,
    isOpenModel: boolean,
    closeModal(): any,
}

const customStyles = {
    content: {
        width: '300px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const ModalWrapper: React.FC<Props> = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const closeModal = () => {
        setIsOpen(false);
        props.closeModal();
    }

    return (
        <Modal
            isOpen={props?.isOpenModel || modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
            onAfterOpen={() => { }}
        >
            <button onClick={closeModal} className="modal__close">X</button>
            {props.children}
        </Modal>
    );
};

export default ModalWrapper;