import React, { useState } from 'react';
import { Link } from '@instructure/ui-link'
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading'


export default ({ children, link, title }) => {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <span>
            <Link onClick={handleOpen}>{link}</Link>
            <Modal
                open={open}
                onDismiss={handleClose}
                size='medium'
                label={title}
                shouldCloseOnDocumentClick
            >
                <Modal.Header>
                    <CloseButton
                        placement='end'
                        offset='medium'
                        variant='icon'
                        onClick={handleClose}
                        screenReaderLabel='Close'
                    >
                        Close
                    </CloseButton>
                    <Heading>{title || '\u00a0'}</Heading>
                </Modal.Header>
                <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: children }}></div>
                </Modal.Body>
            </Modal>
        </span>
    );
};

