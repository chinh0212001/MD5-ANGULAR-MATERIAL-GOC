import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {MatDialog} from "@angular/material/dialog";
import {ChangeAvatar} from "../../model/change-avatar";
import {DialogComponent} from "../../dialog/dialog/dialog.component";

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.scss']
})
export class UpdateAvatarComponent implements OnInit {
updateAvatar: ChangeAvatar;
check = false;
  constructor(private authService:AuthService,
              private tokenService:TokenService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

    changeAvatar($event: string) {
        this.updateAvatar = new ChangeAvatar($event);
        console.log("cos vao day ko???")
        this.authService.updateAvatar(this.updateAvatar).subscribe(data=>{
          console.log("data===>",data)
            if (data.message == 'yes'){
                this.check = true;
                this.tokenService.setAvatar($event);
                this.dialog.open(DialogComponent);
                console.log("dialog co vao day ko =-==>",this.dialog)
                // location.reload();
            }
        })
    }
}
