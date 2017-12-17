import React from 'react'
import {Button} from 'react-bootstrap'

const MasterView = props => {
    const {items, PreviewItem, onItemClick} = props

    return (
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
    )
}

export default MasterView