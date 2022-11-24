import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../model/SignInForm";
import {JwtResponse} from "../model/JwtResponse";
import {ChangeAvatar} from "../model/change-avatar";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   API_LOCAL
private API_SIGNUP = environment.API_LOCAL + 'signup';
private API_LOGIN = environment.API_LOCAL+ 'login';
private APi_UPDATE_AVATAR = environment.API_LOCAL+ 'change_avatar';

  //API_SERVER
  // private API_SIGNUP = environment.API_SERVER + 'signup';
  // private API_LOGIN = environment.API_SERVER + 'login';
constructor(private http: HttpClient) { }
  signup(singUpForm: SignUpForm):Observable<any>{
  return this.http.post(this.API_SIGNUP,singUpForm)
  }
  login(signInForm: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_LOGIN,signInForm)
  }
  updateAvatar(changeAvatar:ChangeAvatar):Observable<any>{
  return this.http.put(this.APi_UPDATE_AVATAR,changeAvatar)
  }
}
