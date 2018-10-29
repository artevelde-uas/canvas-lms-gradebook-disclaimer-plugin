import React from 'react';
import ReactDOM from 'react-dom';
import Link from '@instructure/ui-elements/lib/components/Link';
import Modal from './Modal';

import styles from './index.css';


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
