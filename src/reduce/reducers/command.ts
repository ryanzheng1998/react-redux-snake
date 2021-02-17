import { commandInitialState } from "../initialState";
import { interfaceCommandAction, EnumCommandAction } from "../action";

const commandReducer = 
    (state = commandInitialState, action: interfaceCommandAction)
    : typeof commandInitialState => {
        switch(action.type) {
            case EnumCommandAction.START_GAME_TICK:
                return {
                    ...state,
                    gameTick: true,
                }
            case EnumCommandAction.STOP_GAME_TICK:
                return {
                    ...state,
                    gameTick: false,
                }
            default:
                return state
        }
    }

export default commandReducer