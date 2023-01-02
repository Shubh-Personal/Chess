import React, { useState } from 'react'

function ChessBlock({ color, blockNo }) {
    const [player, setPlayer] = useState({
        name: '',
        team: ''
    });
    return (
        <>
            <div className='chessBlock' style={{ background: color }}>
                <h2 style={color === 'white' ? { color: 'black' } : { color: 'white' }}>{blockNo}</h2>
            </div>
        </>
    )
}

export default ChessBlock