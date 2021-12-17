import React from 'react';
import { Link } from '@instructure/ui-link'
import Modal from './Modal';

import styles from './index.module.css';


export default function (props) {
    return (
        <div id={styles.flash} className='ic-flash-info'>
            <div className='ic-flash__icon' aria-hidden='true'>
                <i className='icon-info'></i>
            </div>
            {props.options.message} {props.options.modalText &&
                <Modal title={props.options.modalTitle} text={props.options.modalText}>
                    <Link>{props.options.modalLink || 'More info...'}</Link>
                </Modal>
            }
        </div>
    );
};
