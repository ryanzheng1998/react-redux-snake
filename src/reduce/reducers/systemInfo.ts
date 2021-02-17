import { systemInfoInitalState } from "../initialState"
import { interfaceSystemInfoAction, EnumSystemInfoAction } from "../action"

const systemInfoReducer =
    (state = systemInfoInitalState, action: interfaceSystemInfoAction)
    : typeof systemInfoInitalState => {
        switch(action.type) {
            case EnumSystemInfoAction.SCREEN_RESIZE:
                return {
                    ...state,
                    deviceWidth: action.payload.newWidth,
                    deviceHight: action.payload.newHeight,
                }
            default:
                return state
        }
    }

export default systemInfoReducer