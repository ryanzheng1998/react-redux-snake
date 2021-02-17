import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameStart } from '../reduce/action'
import { rootStateType } from '../reduce/reducers/root'

const textStyle = {
    textAnchor: 'middle' as const,
    dominantBaseline: 'middle' as const,
    fontSize: '50px',
}

const scoreTextStyle = {
    ...textStyle,
    fontSize: '35px'
}

const GameOverTextStyle = {
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

const WelcomeScreen: React.FC = () => {
    
    const selectIsFirstTimePlaying = (state: rootStateType) => state.userStatus.isFirstTimePlaying
    const isFirstTimePlaying = useSelector(selectIsFirstTimePlaying)

    const dispatch = useDispatch()

    return (
        <>
            <text x='50%' y='40%' style={textStyle}>Snake Game</text>

            <g>
                <text
                    x='50%'
                    y='55%'
                    style={buttonTextStyle}
                    onClick={() => dispatch(GameStart())}
                >Start</text>
            </g>
        </>
    )
}

export default WelcomeScreen