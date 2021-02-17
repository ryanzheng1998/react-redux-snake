import React from 'react'
import { rootStateType } from '../reduce/reducers/root'
import { useSelector, useDispatch } from 'react-redux'
import WelcomeScreen from './WelcomeScreen'
import SnakeGame from './SnakeGame'
import { StartGameTick, StopGameTick } from '../reduce/action'
import GameOver from './GameOver'

const backgroundStyle = {
    width: '100%',
    height: '100%',
    fill: '#f0f0f0',
}

const SnakeGameContainer: React.FC = () => {

    const selectSnakeGameIsDeadValue = (state: rootStateType) => state.snakeGame.isDead
    const snakeGameIsDeadValue = useSelector(selectSnakeGameIsDeadValue)

    const selectGameSetting = (state: rootStateType) => state.snakeGame.gameSetting
    const gameSetting = useSelector(selectGameSetting)

    const selectIsFirstTimePlaying = (state: rootStateType) => state.userStatus.isFirstTimePlaying
    const isFirstTimePlaying = useSelector(selectIsFirstTimePlaying)

    const dispatch = useDispatch()

    return (
        <div>
            <svg width={gameSetting.canvas.width} height={gameSetting.canvas.height}>
                <rect style={backgroundStyle}></rect>
                {snakeGameIsDeadValue
                    ? isFirstTimePlaying ? <WelcomeScreen /> : <GameOver /> 
                    : <SnakeGame />
                }
            </svg>
        </div>

    )

}

export default SnakeGameContainer