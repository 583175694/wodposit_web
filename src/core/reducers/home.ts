import { handleActions, Action, Reducer } from 'redux-actions'
import { ACTION_LOGIN_SUCCESS } from '../actions/home'

export interface HomeState {

}

let defaultStatus = {
    sharedReport: {
        showModal: false
    }
}

function successHandleAction(state: HomeState, action: Action<any>) {
    return Object.assign({}, state, action.payload)
}

// Reducer
export const HomeReducer: Reducer<HomeState, any> = handleActions(
    {
        [ACTION_LOGIN_SUCCESS]: successHandleAction,
    },
    defaultStatus
)
