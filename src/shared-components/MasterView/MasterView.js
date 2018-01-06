import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import './MasterView.css'

const MasterView = props => {
    const {items, PreviewItem, onItemClick} = props

    return (
        <div className="MasterView__wrapper">
        <ListGroup>
            {
                items.map(item => (
                        <ListGroupItem
                            key={item.id}
                            onClick={onItemClick}
                            data-item-id={item.id}
                        >
                            <PreviewItem item={item}/>
                        </ListGroupItem>
                    )
                )
            }
        </ListGroup>
        </div>
    )
}

export default MasterView
