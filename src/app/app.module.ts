import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {RegisterComponent} from './form_login/register/register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {LoginComponent} from './form_login/login/login/login.component';
import {ProfileComponent} from './profile/profile/profile.component';
import {ParentInputComponent} from './input/parent-input/parent-input.component';
import {ChildInputComponent} from './input/child-input/child-input.component';
import {OutputParentComponent} from './output/output-parent/output-parent.component';
import {OutputChildComponent} from './output/output-child/output-child.component';
import { AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import {SingerAvatarComponent} from './upload/singer-avatar/singer-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MultilpleAvatarComponent} from './upload/multilple-avatar/multilple-avatar.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {AuthInterceptor} from "./service/auth.interceptor";
import {UpdateAvatarComponent} from './profile/update-avatar/update-avatar.component';
import { DialogComponent } from './dialog/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


export const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {
        path: 'guide/getting-started',
        component: GettingStartedComponent,
        data: {title: 'Getting Started'}
    },
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'profile', component: ProfileComponent,
        children: [
            {path: 'update/avatar', component: UpdateAvatarComponent}
        ]
    }
];



@NgModule({
    declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, ProfileComponent, ParentInputComponent, ChildInputComponent, OutputParentComponent, OutputChildComponent, SingerAvatarComponent, MultilpleAvatarComponent, UpdateAvatarComponent, DialogComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatButtonModule,
        BrowserAnimationsModule,
        NavBarModule, FooterModule,
        NgxAudioPlayerModule,
        MatInputModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatProgressBarModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
