import { combineReducers } from "redux";
import commandReducer from "./command";
import snakeGameReducer from "./snakeGame";
import systemInfoReducer from "./systemInfo";
import userStatusReducer from "./userStatus";

export const rootReducer = combineReducers({
    systemInfo: systemInfoReducer,
    userStatus: userStatusReducer,
    snakeGame: snakeGameReducer,
    command: commandReducer,
})

export type rootStateType = ReturnType<typeof rootReducer>