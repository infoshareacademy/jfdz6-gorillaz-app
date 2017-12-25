import React from 'react'
import {Button} from 'react-bootstrap'

import './MasterView.css'

const MasterView = props => {
    const {items, PreviewItem, onItemClick} = props

    return (
        <div className="MasterView__wrapper">
        <ul>
            {
                items.map(item => (
                        <li key={item.id}>
                            <PreviewItem item={item}/>

                            <Button
                                onClick={onItemClick}
                                data-item-id={item.id}
                            >
                                See more..
                            </Button>
                        </li>
                    )
                )
            }
        </ul>
        </div>
    )
}

export default MasterView