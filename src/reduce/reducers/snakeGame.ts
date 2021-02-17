import { snakeGameInitialState, Direction } from "../initialState";
import { interfaceSnakeGramAction, EnumSnakeGameAction } from "../action";
import { equals, uniq } from "ramda";

const snakeGameReducer =
    (state = snakeGameInitialState, action: interfaceSnakeGramAction)
    : typeof snakeGameInitialState => {
        switch(action.type) {
            case EnumSnakeGameAction.KEY_PRESS:
                const currentDirection = state.snake.direction
                const newDirection 
                    = action.payload === 'ArrowUp' && currentDirection !== Direction.Down ?
                        Direction.Up
                    : action.payload === 'ArrowDown' && currentDirection !== Direction.Up ?
                        Direction.Down
                    : action.payload === 'ArrowRight' && currentDirection !== Direction.Left ?
                        Direction.Right
                    : action.payload === 'ArrowLeft' && currentDirection !== Direction.Right ?
                        Direction.Left
                    :   currentDirection  

                return {
                    ...state,
                    snake: {
                        ...state.snake,
                        direction: newDirection,
                    }
                }
            case EnumSnakeGameAction.GAME_START:
                return {
                    ...snakeGameInitialState,
                }
            case EnumSnakeGameAction.GAME_TICK:
                const currentDirection2 = state.snake.direction
                const xyDirection = 
                    currentDirection2 === Direction.Down ?
                        {x: 0, y: 1}
                    : currentDirection2 === Direction.Up ?
                        {x: 0, y: -1}
                    : currentDirection2 === Direction.Left ?
                        {x: -1, y: 0}
                    :   {x: 1, y: 0}

                const mod = (x: number) => (y: number) => ((y % x) + x) % x
                const xBlockSize = state.gameSetting.canvas.width / state.gameSetting.blockSize
                const yBlockSize = state.gameSetting.canvas.height / state.gameSetting.blockSize

                const newFruit =
                    equals(state.snake.body[0])(state.fruit)
                    ? {
                        x: Math.floor(action.payload.x * xBlockSize), 
                        y: Math.floor(action.payload.y * yBlockSize),
                    }
                    : state.fruit

                const newIsDead = 
                    state.snake.body.length !== uniq(state.snake.body).length
                if(newIsDead){
                    return {
                        ...state,
                        isDead: true,
                    }
                }
                return {
                    ...state,
                    step: state.step + 1,
                    snake: {
                        ...state.snake,
                        body: [
                            {
                                x: mod(xBlockSize)(state.snake.body[0].x + xyDirection.x),
                                y: mod(yBlockSize)(state.snake.body[0].y + xyDirection.y),
                            },
                            ...equals(state.snake.body[0])(state.fruit) 
                            ? state.snake.body
                            : state.snake.body.slice(0, -1),
                        ]
                    },
                    fruit: newFruit,
                }
                
            default:
                return state
        }
    }

export default snakeGameReducer