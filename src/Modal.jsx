import React from 'react';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading'


export default class extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            open: false,
            size: 'auto'
        };
    }
    
    handleClose() {
        this.setState({ open: false });
    }
    
    render () {
        return (
            <span>
                <Modal
                    open={this.state.open}
                    onDismiss={this.handleClose.bind(this)}
                    size='medium'
                    label={this.props.title}
                    shouldCloseOnDocumentClick
                >
                    <Modal.Header>
                        <CloseButton
                            placement='end'
                            offset='medium'
                            variant='icon'
                            onClick={this.handleClose.bind(this)}
                        >
                            Close
                        </CloseButton>
                        <Heading>{this.props.title || '\u00a0'}</Heading>
                    </Modal.Header>
                    <Modal.Body>
                        <div dangerouslySetInnerHTML={{ __html: this.props.text}}></div>
                    </Modal.Body>
                </Modal>
                {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, {
                        onClick: (...args) => {
                            if (child.props.onClick) child.props.onClick(...args);
                            this.setState({ open: true });
                        }
                    })
                )}
            </span>
        );
    }
};

