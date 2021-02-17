// system info
export enum EnumSystemInfoAction {
    SCREEN_RESIZE = 'SCREEN_RESIZE'
}

export const ScreenResize = (newWidth: number, newHeight: number) => ({
    type: EnumSystemInfoAction.SCREEN_RESIZE as const,
    payload: {newWidth: newWidth, newHeight: newHeight},
})

export type interfaceSystemInfoAction = 
      ReturnType<typeof ScreenResize>


// user status
export enum EnumUserStatusAction {
    PLAY_THE_SNAKE_GAME_FIRST_TIME = 'PLAY_THE_SNAKE_GAME_FIRST_TIME',
    NEW_SCORE = 'NEW_SCORE',
}

export const PlayTheSnakeGameFirstTime = () => ({
    type: EnumUserStatusAction.PLAY_THE_SNAKE_GAME_FIRST_TIME as const,
})

export const NewScore = (newScore: number) => ({
    type: EnumUserStatusAction.NEW_SCORE as const,
    payload: newScore,
})

export type interfaceUserStatusAction = 
      ReturnType<typeof PlayTheSnakeGameFirstTime>
    | ReturnType<typeof NewScore>

// command
export enum EnumCommandAction {
    START_GAME_TICK = 'START_GAME_TICK',
    STOP_GAME_TICK = 'STOP_GAME_TICK',
    GET_NEW_RANDOM_NUMBER = 'GET_NEW_RANDOM_NUMBER',
}

export const StartGameTick = () => ({
    type: EnumCommandAction.START_GAME_TICK as const,
})

export const StopGameTick = () => ({
    type: EnumCommandAction.STOP_GAME_TICK as const,
})

export const GetNewRandomNumber = (theNumber: number) => ({
    type: EnumCommandAction.GET_NEW_RANDOM_NUMBER as const,
    payload: theNumber,
})

export type interfaceCommandAction = 
      ReturnType<typeof StartGameTick>
    | ReturnType<typeof StopGameTick>
    | ReturnType<typeof GetNewRandomNumber>

// snake game
export enum EnumSnakeGameAction {
    KEY_PRESS = 'KEY_PRESS',
    GAME_TICK = 'GAME_TICK',
    GAME_START = 'GAME_START',
}

export const GameTick = (randomSideEffect: {x: number, y: number}) => ({
    type: EnumSnakeGameAction.GAME_TICK as const,
    payload: randomSideEffect,
})

export const KeyPress = (key: string) => ({
    type: EnumSnakeGameAction.KEY_PRESS as const,
    payload: key,
})

export const GameStart = () => ({
    type: EnumSnakeGameAction.GAME_START as const,
})

export type interfaceSnakeGramAction =
      ReturnType<typeof KeyPress>
    | ReturnType<typeof GameTick>
    | ReturnType<typeof GameStart>