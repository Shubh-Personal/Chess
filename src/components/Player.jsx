import React, { useState } from 'react'

function Player() {
    const [position, setPosition] = useState();
    const [team, setTeam] = useState(BLACK_TEAM);
    const [type, setType] = useState(BLACK_TEAM);


    return (
        <div>Player</div>
    )
}

export default Player