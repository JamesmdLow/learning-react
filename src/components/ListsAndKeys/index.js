import React from 'react';

const numbers = [1, 2, 3, 4];

export default class ListsAndKeys extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <ul>
                    { numbers.map(i => (
                        <li>{`number: ${i}`}</li>
                    ))}
                </ul>

            </div>
        )
    }
}