import React, { useState } from 'react';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading'


export default ({ children, title, text }) => {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    return (
        <span>
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
                    >
                        Close
                    </CloseButton>
                    <Heading>{title || '\u00a0'}</Heading>
                </Modal.Header>
                <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: text }}></div>
                </Modal.Body>
            </Modal>
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                    onClick: (...args) => {
                        if (child.props.onClick) child.props.onClick(...args);

                        setOpen(true);
                    }
                })
            )}
        </span>
    );
};

