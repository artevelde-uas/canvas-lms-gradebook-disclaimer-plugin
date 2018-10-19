import React from 'react';
import ReactDOM from 'react-dom';
import Modal, { ModalHeader, ModalBody } from '@instructure/ui-overlays/lib/components/Modal';
import CloseButton from '@instructure/ui-buttons/lib/components/CloseButton';
import Heading from '@instructure/ui-elements/lib/components/Heading';


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
                    <ModalHeader>
                        <CloseButton
                            placement='end'
                            offset='medium'
                            variant='icon'
                            onClick={this.handleClose.bind(this)}
                        >
                            Close
                        </CloseButton>
                        <Heading>{this.props.title || '\u00a0'}</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <div dangerouslySetInnerHTML={{ __html: this.props.text}}></div>
                    </ModalBody>
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

