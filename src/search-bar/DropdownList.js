import React from 'react'

const DropdownList = props => (
    <div>
        <select
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
        </select>
    </div>
)

export default DropdownList