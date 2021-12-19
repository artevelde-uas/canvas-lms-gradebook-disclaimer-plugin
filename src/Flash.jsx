import React from 'react';
import Modal from './Modal';
import { EmotionThemeProvider } from '@instructure/emotion';
import { theme } from '@artevelde-uas/canvas-lms-app';

import styles from './index.module.css';


export default function ({ options: { message, modalLink, modalTitle, modalText } }) {
    return (
        <div id={styles.flash} className='ic-flash-info'>
            <div className='ic-flash__icon' aria-hidden='true'>
                <i className='icon-info'></i>
            </div>
            {message} {modalText &&
                <EmotionThemeProvider theme={theme}>
                    <Modal title={modalTitle} link={modalLink || 'More info...'}>
                        {modalText}
                    </Modal>
                </EmotionThemeProvider>
            }
        </div>
    );
};
