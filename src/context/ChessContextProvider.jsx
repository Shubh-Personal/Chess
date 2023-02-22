import { createContext, useState } from "react";
import { BLACK_TEAM, CAMEL, ELEPHANT, HOURSE, KING, QUEEN, SOLDIER, WHITE_TEAM } from "../constants";

export const chessContext = createContext();


// let chessState = {
//     players: [
//         //black team
//         {
//             type: ELEPHANT,
//             position: '0, 0',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: ELEPHANT,
//             position: '0, 7',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: HOURSE,
//             position: '0, 1',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: HOURSE,
//             position: '0, 6',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: CAMEL,
//             position: '0, 2',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: CAMEL,
//             position: '0, 5',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: KING,
//             position: '0, 3',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: QUEEN,
//             position: '0, 4',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 0',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 7',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 1',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 6',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 2',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 5',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 3',
//             isAlive: true,
//             team: BLACK_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '1, 4',
//             isAlive: true,
//             team: BLACK_TEAM
//         },

//         //white team
//         {
//             type: ELEPHANT,
//             position: '7, 0',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: ELEPHANT,
//             position: '7, 7',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: HOURSE,
//             position: '7, 1',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: HOURSE,
//             position: '7, 6',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: CAMEL,
//             position: '7, 2',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: CAMEL,
//             position: '7, 5',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: KING,
//             position: '7, 3',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: QUEEN,
//             position: '7, 4',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 0',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 7',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 1',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 6',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 2',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 5',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 3',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//         {
//             type: SOLDIER,
//             position: '6, 4',
//             isAlive: true,
//             team: WHITE_TEAM
//         },
//     ],
//     activePlayer: null,
//     possiblePositions: [],
//     setPossiblePositions: (pos) => {
//         possiblePositions = pos
//     },
//     setActivePlayer: (player) => {
//         activePlayer = player
//     }
// }

function ChessContextProvider({ children }) {
 
    const [players, setPlayers] = useState([
        //black team
        {
            type: ELEPHANT,
            position: '0, 0',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: ELEPHANT,
            position: '0, 7',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: HOURSE,
            position: '0, 1',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: HOURSE,
            position: '0, 6',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: CAMEL,
            position: '0, 2',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: CAMEL,
            position: '0, 5',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: KING,
            position: '0, 3',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: QUEEN,
            position: '0, 4',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 0',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 7',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 1',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 6',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 2',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 5',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 3',
            isAlive: true,
            team: BLACK_TEAM
        },
        {
            type: SOLDIER,
            position: '1, 4',
            isAlive: true,
            team: BLACK_TEAM
        },

        //white team
        {
            type: ELEPHANT,
            position: '7, 0',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: ELEPHANT,
            position: '7, 7',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: HOURSE,
            position: '7, 1',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: HOURSE,
            position: '7, 6',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: CAMEL,
            position: '7, 2',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: CAMEL,
            position: '7, 5',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: KING,
            position: '7, 3',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: QUEEN,
            position: '7, 4',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 0',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 7',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 1',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 6',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 2',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 5',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 3',
            isAlive: true,
            team: WHITE_TEAM
        },
        {
            type: SOLDIER,
            position: '6, 4',
            isAlive: true,
            team: WHITE_TEAM
        },
    ]);
    const [activePlayer, setActivePlayer] = useState();
    const [possiblePositions, setPossiblePositions] = useState([]);
    return (
        <chessContext.Provider value={{ players, activePlayer, possiblePositions, setActivePlayer, setPlayers, setPossiblePositions }}>
            {children}
        </chessContext.Provider>
    )
}

export default ChessContextProvider