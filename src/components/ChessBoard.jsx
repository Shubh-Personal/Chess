import React, { useContext, useEffect } from 'react'
import { chessContext } from '../context/ChessContextProvider'
import ChessBlock from './ChessBlock'

function ChessBoard() {

    return (
        <>
            <div className='flex flex-column'>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='0, 0' color='black' />
                    <ChessBlock blockNo='0, 1' color='white' />
                    <ChessBlock blockNo='0, 2' color='black' />
                    <ChessBlock blockNo='0, 3' color='white' />
                    <ChessBlock blockNo='0, 4' color='black' />
                    <ChessBlock blockNo='0, 5' color='white' />
                    <ChessBlock blockNo='0, 6' color='black' />
                    <ChessBlock blockNo='0, 7' color='white' />
                </div>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='1, 0' color='white' />
                    <ChessBlock blockNo='1, 1' color='black' />
                    <ChessBlock blockNo='1, 2' color='white' />
                    <ChessBlock blockNo='1, 3' color='black' />
                    <ChessBlock blockNo='1, 4' color='white' />
                    <ChessBlock blockNo='1, 5' color='black' />
                    <ChessBlock blockNo='1, 6' color='white' />
                    <ChessBlock blockNo='1, 7' color='black' />
                </div>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='2, 0' color='black' />
                    <ChessBlock blockNo='2, 1' color='white' />
                    <ChessBlock blockNo='2, 2' color='black' />
                    <ChessBlock blockNo='2, 3' color='white' />
                    <ChessBlock blockNo='2, 4' color='black' />
                    <ChessBlock blockNo='2, 5' color='white' />
                    <ChessBlock blockNo='2, 6' color='black' />
                    <ChessBlock blockNo='2, 7' color='white' />
                </div>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='3, 0' color='white' />
                    <ChessBlock blockNo='3, 1' color='black' />
                    <ChessBlock blockNo='3, 2' color='white' />
                    <ChessBlock blockNo='3, 3' color='black' />
                    <ChessBlock blockNo='3, 4' color='white' />
                    <ChessBlock blockNo='3, 5' color='black' />
                    <ChessBlock blockNo='3, 6' color='white' />
                    <ChessBlock blockNo='3, 7' color='black' />
                </div>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='4, 0' color='black' />
                    <ChessBlock blockNo='4, 1' color='white' />
                    <ChessBlock blockNo='4, 2' color='black' />
                    <ChessBlock blockNo='4, 3' color='white' />
                    <ChessBlock blockNo='4, 4' color='black' />
                    <ChessBlock blockNo='4, 5' color='white' />
                    <ChessBlock blockNo='4, 6' color='black' />
                    <ChessBlock blockNo='4, 7' color='white' />
                </div>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='5, 0' color='white' />
                    <ChessBlock blockNo='5, 1' color='black' />
                    <ChessBlock blockNo='5, 2' color='white' />
                    <ChessBlock blockNo='5, 3' color='black' />
                    <ChessBlock blockNo='5, 4' color='white' />
                    <ChessBlock blockNo='5, 5' color='black' />
                    <ChessBlock blockNo='5, 6' color='white' />
                    <ChessBlock blockNo='5, 7' color='black' />
                </div>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='6, 0' color='black' />
                    <ChessBlock blockNo='6, 1' color='white' />
                    <ChessBlock blockNo='6, 2' color='black' />
                    <ChessBlock blockNo='6, 3' color='white' />
                    <ChessBlock blockNo='6, 4' color='black' />
                    <ChessBlock blockNo='6, 5' color='white' />
                    <ChessBlock blockNo='6, 6' color='black' />
                    <ChessBlock blockNo='6, 7' color='white' />
                </div>
                <div className='flex flex-row'>
                    <ChessBlock blockNo='7, 0' color='white' />
                    <ChessBlock blockNo='7, 1' color='black' />
                    <ChessBlock blockNo='7, 2' color='white' />
                    <ChessBlock blockNo='7, 3' color='black' />
                    <ChessBlock blockNo='7, 4' color='white' />
                    <ChessBlock blockNo='7, 5' color='black' />
                    <ChessBlock blockNo='7, 6' color='white' />
                    <ChessBlock blockNo='7, 7' color='black' />
                </div>
            </div>
        </>
    )
}

export default ChessBoard