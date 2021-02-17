import { userStatusInitialState } from "../initialState";
import { interfaceUserStatusAction, EnumUserStatusAction } from "../action";


const userStatusReducer =
    (state = userStatusInitialState, action: interfaceUserStatusAction)
    : typeof userStatusInitialState => {
        switch(action.type) {
            case EnumUserStatusAction.NEW_SCORE:
                const newScore = 
                    action.payload >= state.bestScore
                        ? action.payload
                        : state.bestScore

                return {
                    ...state,
                    bestScore: newScore,
                }

            case EnumUserStatusAction.PLAY_THE_SNAKE_GAME_FIRST_TIME:
                return {
                    ...state,
                    isFirstTimePlaying: false,
                }
            default:
                return state
            
        }
    }

export default userStatusReducer