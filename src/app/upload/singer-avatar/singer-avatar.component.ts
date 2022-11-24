import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/storage";

@Component({
  selector: 'app-singer-avatar',
  templateUrl: './singer-avatar.component.html',
  styleUrls: ['./singer-avatar.component.scss']
})
export class SingerAvatarComponent implements OnInit {
selectFile:File;
  fileInFireBase :AngularFireStorageReference;
  urlFile :string
  check =false
  @Output()
  urlFormFirebase = new EventEmitter<string>();
  constructor(private afService:AngularFireStorage) { }

  ngOnInit(): void {
  }

  onchangeFile($event ) {
    console.log('event--->>>',$event)
    this.selectFile = $event.target.files[0];
  }
  upload(){
    this.check = true
    this.fileInFireBase = this.afService.ref(this.selectFile.name);
    this.fileInFireBase.put(this.selectFile).then(data=>{
      return data.ref.getDownloadURL();//tra ve 1 duong dan Firebase
    }).then(url =>{
      this.check = false;
      this.urlFile = url;
      this.urlFormFirebase.emit(this.urlFile);
      return this.urlFile;
    }).catch(error =>{
      `Upload File Failed! ${error}`
    })
  }
}
