import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token_key';
const NAME_KEY = 'name_key';
const AVATAR_KEY= 'avatar_key';
const AUTHORITIES_KEY = 'authorities_key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
    public roles =[];

  constructor() { }
  public setToken(token:string){
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY,token);
  }
  public getToken(): string{
    return localStorage.getItem(TOKEN_KEY);
  }
  public setName(name:string){
    localStorage.removeItem(NAME_KEY);
    localStorage.setItem(NAME_KEY,name);
  }
  public getName():string{
      return localStorage.getItem(NAME_KEY)
  }
 public setAvatar(avatar:string){
    localStorage.removeItem(AVATAR_KEY);
    localStorage.setItem(AVATAR_KEY,avatar)
 }
 public getAvatar():string{
      return localStorage.getItem(AVATAR_KEY)
 }
 public setAuthorities(authorities:string[]){
   localStorage.removeItem(AUTHORITIES_KEY);
   localStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));
 }
 public getAuthorities():string[]{
      if (this.getToken()){
          JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(role =>{
              this.roles.push(role.authority)
          })
      }
      return this.roles;
 }
}
