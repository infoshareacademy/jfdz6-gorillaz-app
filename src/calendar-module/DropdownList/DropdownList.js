import React from 'react'
import {FormControl} from 'react-bootstrap'

const DropdownList = props => (
    <FormControl
        componentClass="select"
        value={props.value}
        onChange={props.onSelectChange}
    >
        {
            props.options.map(item => (
                    <option
                        key={item.value}
                        value={item.value}
                    >
                        {item.name || item.value}
                    </option>
                )
            )
        }
    </FormControl>
)

export default DropdownList
