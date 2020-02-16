import {Action} from '@ngrx/store';

export const SIGNIN_USER = 'SIGNIN_USER';

export class SignInUser implements Action {
    readonly type = SIGNIN_USER;
    payload: boolean;
}
