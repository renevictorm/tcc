import React from 'react'
import If from './if'
export default props => (
    <If test={!props.hide}>
        <button className={'btn ' + props.style +' center'}
            onClick={props.onClick}>
            <i className={'material-icons center' }>{props.icon}</i>
        </button>
    </If>
)