import React from 'react'
import { rootStateType } from '../reduce/reducers/root'
import { useSelector, useDispatch } from 'react-redux'

const snakeStyle = {
    fill: '#0f0',
}

const fruitStyle = {
    fill: 'red',
}

const SnakeGame: React.FC = () => {
    const selectSnakeGameValue = (state: rootStateType) => state.snakeGame
    const snakeGameValue = useSelector(selectSnakeGameValue)

    const blockSize = snakeGameValue.gameSetting.blockSize


    const dispatch = useDispatch()
    
    return (
        <>
            <g>
                {snakeGameValue.snake.body.map((block, i) =>
                    <rect 
                        key={i}
                        x={ block.x * blockSize}
                        y={ block.y * blockSize}
                        height={blockSize - 2}
                        width={blockSize - 2}
                        style={snakeStyle}
                    />
                )}
                <rect
                    x={snakeGameValue.fruit.x * blockSize}
                    y={snakeGameValue.fruit.y * blockSize}
                    height={blockSize - 2}
                    width={blockSize - 2}
                    style={fruitStyle}
                />
            </g>
        </>
    )
}

export default SnakeGame