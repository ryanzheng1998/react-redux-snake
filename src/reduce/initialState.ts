// system info
export const systemInfoInitalState = {
    deviceHight: screen.height,
    deviceWidth: screen.width,
}

// user status
export const userStatusInitialState = {
    isFirstTimePlaying: true,
    bestScore: 0,
}

// command
export const commandInitialState = {
    gameTick: false,
    keypressEventLisener: false,
    touchEventLisener: false,
}

// snake game
interface block {
    x: number;
    y: number;
}

export enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const snake = {
    body: [{x: 5, y: 3}, {x: 4, y: 3}, {x: 3, y: 3}] as block[],
    direction: Direction.Right,
}

const gameSetting = {
    canvas: {height: 600, width: 600},
    blockSize: 20
}

export const snakeGameInitialState = {
    gameSetting: gameSetting,
    step: 0,
    snake: snake,
    fruit: {x: 20, y: 3} as block,
    isDead: true,
    gameIsActive: false,
}