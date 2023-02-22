import React, { useContext, useEffect, useMemo, useState } from 'react'
import { BLACK_TEAM, HOURSE } from '../constants';
import { chessContext } from '../context/ChessContextProvider';
import Player from './Player';

function ChessBlock({ color, blockNo }) {

    const { players, activePlayer, possiblePositions, setPossiblePositions, setActivePlayer } = useContext(chessContext);
    const [filteredPlayer, setfilteredPlayer] = useState(null)
    const [isPosiblePosition, setIsPosiblePosition] = useState(false)
    const x = Number(String(blockNo).split(',')[0])
    const y = Number(String(blockNo).split(',')[1])
    let positions = useMemo(() => { if (filteredPlayer) return filteredPlayer.type.posiblePositions(x, y, filteredPlayer.team) }, [filteredPlayer, x, y])

    useEffect(() => {
        let player = players.filter(player => {
            return player.position === blockNo
        }
        )
        if (player[0]) {
            setfilteredPlayer(player[0]);
        }
    }, [players])

    useEffect(() => {
        setIsPosiblePosition(possiblePositions.includes(blockNo));
    }, [possiblePositions])



    const playerClicked = () => {
        if (
            filteredPlayer
            && activePlayer
            && filteredPlayer.team === activePlayer.team
            && filteredPlayer.position === activePlayer.position
        ) {
            //same player clicked
            setPossiblePositions([]);
            setActivePlayer(null);
        }
        else {

            setPossiblePositions(positions);
            setActivePlayer(filteredPlayer)
        }

    }
    const moveActivePlayer = () => {
        if (activePlayer.position !== filteredPlayer.position && activePlayer.team !== filteredPlayer.team) {
            const a = players.filter((player) => player.team === filteredPlayer.team && player.type === filteredPlayer.type)
            console.log(a);
        }
    }

    const newPosition = () => {
    }
    return (
        <>
            {/* <div className='chessBlock' style={{ background: color, padding: '0.02rem', cursor: filteredPlayer ? 'grab' : 'auto' }}> */}
            <div className='chessBlock' style={
                !isPosiblePosition ?
                    {
                        background:
                            activePlayer?.position === blockNo ?
                                'green'
                                :
                                filteredPlayer ?
                                    filteredPlayer.team === BLACK_TEAM ?
                                        `linear-gradient(${color} 90%, blue)`
                                        :
                                        `linear-gradient(${color} 90%, aqua )`
                                    :
                                    color,
                        padding: '0.02rem',
                        cursor: filteredPlayer ? 'grab' : 'default',
                    }
                    :
                    {
                        background:
                            `linear-gradient(${color} 60%, green )`,
                        padding: '0.02rem',
                    }
            }
                onClick={newPosition}
            >
                {/* <h2 style={filteredPlayer?.team === BLACK_TEAM ? { background: `blue` } : { background: 'aqua' }}> */}
                {filteredPlayer &&
                    (<h3 style={
                        filteredPlayer?.team === BLACK_TEAM ?
                            {
                                WebkitTextStroke: '0.5px white',
                                color: 'black',
                                letterSpacing: '2px'

                            }
                            :
                            {
                                WebkitTextStroke: '0.5px black',
                                color: 'white',
                                letterSpacing: '2px'
                            }
                    }
                        onClick={playerClicked}
                    >
                        {filteredPlayer.isAlive && <Player iposition={filteredPlayer?.position} itype={filteredPlayer?.type} />}
                    </h3>)
                }
            </div>
        </>
    )
}

export default ChessBlock