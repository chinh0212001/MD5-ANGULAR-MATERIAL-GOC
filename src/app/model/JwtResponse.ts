export class JwtResponse {
    token:string;
    name:string;
    avatar:string;
    authorities:any[]

    constructor(token: string, name: string, avatar: string, authorities: any[]) {
        this.token = token;
        this.name = name;
        this.avatar = avatar;
        this.authorities = authorities;
    }
}
