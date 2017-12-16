import React from 'react'

const DropdownList = props => (
    <div>
        <select onChange={props.onSelectChange}>
            <option
                key={'all'}
                value={'all'}
                default
            >
                all
            </option>
            {
                props.options.map(item => (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.name}
                        </option>
                    )
                )
            }
        </select>
    </div>
)

export default DropdownList