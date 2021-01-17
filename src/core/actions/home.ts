import { RootState } from '../reducers'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { createAction } from 'redux-actions'

export function LoginByMiniProgram() {
    return async (dispatch: ThunkDispatch<RootState, null, AnyAction>, getState: () => RootState) => {
        try {

        } catch (error) {

        }
    }
}

// 登录授权
export const ACTION_LOGIN_SUCCESS = "ACTION_LOGIN_SUCCESS"
export interface ActionLoginSuccessPayload {
    userInfo: any
}
const actionLoginSuccess = createAction(
    ACTION_LOGIN_SUCCESS,
    (payload: ActionLoginSuccessPayload) => {
        return payload
    }
)
