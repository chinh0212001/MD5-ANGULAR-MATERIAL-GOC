import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/storage";

@Component({
    selector: 'app-multilple-avatar',
    templateUrl: './multilple-avatar.component.html',
    styleUrls: ['./multilple-avatar.component.scss']
})
export class MultilpleAvatarComponent implements OnInit {
    selectFile: File[];
    arrFileInFireBase: AngularFireStorageReference;
    arrUrlFormFirebase = [];
    check = false;
@Output()
arrUrl = new EventEmitter<string[]>();
    constructor(private afService: AngularFireStorage) {
    }

    ngOnInit(): void {
    }

    multiple($event) {
        console.log("Event--->", $event)
        this.selectFile = $event.target.files;
    }

    upload() {
        this.check = true;
        for (let i = 0; i < this.selectFile.length; i++) {
            this.arrFileInFireBase = this.afService.ref(this.selectFile[i].name);
            this.arrFileInFireBase.put(this.selectFile[i]).then(data=>{
                return data.ref.getDownloadURL();
            }).then(url =>{
                this.check = false;
                this.arrUrlFormFirebase.push(url);
                this.arrUrl.emit(this.arrUrlFormFirebase);
            }).catch(error =>{
                console.log('Upload Failed!')
            })
        }
    }

}
