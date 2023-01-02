import React, { useState, useContext } from 'react'
import { BLACK_TEAM, ELEPHANT } from '../constants';
import { chessContext } from '../context/ChessContextProvider';

function Player({ iposition, iteam = BLACK_TEAM, itype = ELEPHANT }) {


    return (
        <p>{itype.name.substring(0, 3)}</p>
    )
}

export default Player