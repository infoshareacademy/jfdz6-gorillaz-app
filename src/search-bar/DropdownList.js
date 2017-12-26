import React from 'react'
import {FormControl} from 'react-bootstrap'

const DropdownList = props => (
    <FormControl
        componentClass="select"
        value={props.value}
        onChange={props.onSelectChange}
    >
        <option
            key={'select'}
            value={''}
            disabled
        >
            select
        </option>
        <option
            key={'all'}
            value={0}
        >
            all
        </option>
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
