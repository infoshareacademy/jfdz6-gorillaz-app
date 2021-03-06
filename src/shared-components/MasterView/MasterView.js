import React from 'react'

import {WrapperYLimited} from '../../styled-components/miscellaneous-components'
import {ListButton} from '../../styled-components/button-components'

const MasterView = props => {
    const {items, selectedItemId, PreviewItem, onItemClick} = props

    return (
        <WrapperYLimited xsMaxHeight="40vh" smMaxHeight="80vh">
            {
                items.map(item => (
                        <ListButton
                            key={item.id}
                            onClick={onItemClick}
                            data-item-id={item.id}
                            isSelected={selectedItemId === item.id}
                        >
                            <PreviewItem item={item}/>
                        </ListButton>
                    )
                )
            }
        </WrapperYLimited>
    )
}

export default MasterView
