import React from 'react';
import ReactDOM from 'react-dom';
import Link from '@instructure/ui-elements/lib/components/Link';


export default function (props) {
    return (
        <div>
            <div id='gradebook-disclaimer__flash' className='ic-flash-info'>
                <div className='ic-flash__icon' aria-hidden='true'>
                    <i className='icon-info'></i>
                </div>
                {props.message}
            </div>
        </div>
    );
};
