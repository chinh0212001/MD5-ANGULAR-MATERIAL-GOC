import {Component, OnInit} from '@angular/core';
import {SignInForm} from "../../../model/SignInForm";
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: any = {};
    hide = true;
    signInForm: SignInForm;
    status = 'Please fill in the form to login!';

    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    signIn() {
        this.signInForm = new SignInForm(
            this.form.username,
            this.form.password
        );
        console.log("SignInForm--->", this.signInForm)
        this.authService.login(this.signInForm).subscribe(data => {
            console.log("datalogin--->", data)
            if (data.token != undefined) {
                this.tokenService.setToken(data.token);
                this.tokenService.setName(data.name);
                this.tokenService.setAvatar(data.avatar);
                this.tokenService.setAuthorities(data.authorities);
                this.router.navigate(['profile']).then(() => {
                    location.reload();
                });//dieu huong tu ts ----> Component
            }
            // @ts-ignore
            if (data.status == 202) {
                this.status = 'login failed! please check your username or password'
            }
        })
    }
}
