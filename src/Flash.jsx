import React from 'react';
import Modal from './Modal';

import styles from './index.module.css';


export default function (props) {
    return (
        <div id={styles.flash} className='ic-flash-info'>
            <div className='ic-flash__icon' aria-hidden='true'>
                <i className='icon-info'></i>
            </div>
            {props.options.message} {props.options.modalText &&
                <Modal title={props.options.modalTitle} link={props.options.modalLink || 'More info...'}>
                    {props.options.modalText}
                </Modal>
            }
        </div>
    );
};
