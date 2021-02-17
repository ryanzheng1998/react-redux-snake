import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameStart } from '../reduce/action'
import { rootStateType } from '../reduce/reducers/root'

const textStyle = {
    textAnchor: 'middle' as const,
    dominantBaseline: 'middle' as const,
    fontSize: '50px'
}

const scoreTextStyle = {
    ...textStyle,
    fontSize: '25px'
}

const gameOverTextStyle = {
    ...textStyle,
    fill: '#CF1E25',
}

const buttonTextStyle = {
    textAnchor: 'middle' as const,
    dominantBaseline: 'middle' as const,
    fontSize: '30px',
    cursor: 'pointer',
    fill: 'blue',
}


const GameOver: React.FC = () => {
    const dispatch = useDispatch()

    const selectBestScore = (state: rootStateType) => state.userStatus.bestScore
    const bestScore = useSelector(selectBestScore)

    return (
        <>
            <text x='50%' y='35%' style={gameOverTextStyle}>Game Over</text>
            <text x='50%' y='50%' style={scoreTextStyle}>Your Score: </text>
            <text x='50%' y='55%' style={scoreTextStyle}>Best Score: {bestScore}</text>

            <g>
                <text
                    x='50%'
                    y='65%'
                    style={buttonTextStyle}
                    onClick={() => dispatch(GameStart())}
                >Restart</text>
            </g>
        </>
    )
}

export default GameOver