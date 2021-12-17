import React from 'react';
import Modal from './Modal';

import styles from './index.module.css';


export default function ({ options: { message, modalLink, modalTitle, modalText } }) {
    return (
        <div id={styles.flash} className='ic-flash-info'>
            <div className='ic-flash__icon' aria-hidden='true'>
                <i className='icon-info'></i>
            </div>
            {message} {modalText &&
                <Modal title={modalTitle} link={modalLink || 'More info...'}>
                    {modalText}
                </Modal>
            }
        </div>
    );
};
