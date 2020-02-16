import {Action} from '@ngrx/store';

import * as AppActions from './app.action';

const initialState = {
    userConfirmed: true
};

export function appReducer(state = initialState, action: AppActions.SignInUser) {

    switch (action.type) {
        case AppActions.SIGNIN_USER:
            return {
                ...state,
                userConfirmed: action.payload
            };
        default:
            return state;
    }
}
