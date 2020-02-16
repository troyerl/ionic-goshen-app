import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

import {ConfirmEmailModalComponent} from '../modals/confirm-email-modal/confirm-email-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  declarations: [AuthPage, LoginComponent, SignupComponent, ConfirmEmailModalComponent],
  entryComponents: [ConfirmEmailModalComponent]
})
export class AuthPageModule {}
