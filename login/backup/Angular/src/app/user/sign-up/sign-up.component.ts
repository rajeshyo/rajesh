import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service'



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.resetForm();

  }
  // resetForm(form?: NgForm) {
  //   if (form) {
  //     form.reset(); }
  //   this.userService.selectedUser = {
  //     fullName: '',
  //     position: '',
  //     email: '',
  //     password: '',
  //     imageUrl: null
  //   };
  // }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset(); }
    this.userService.selectedUser = {
      _id: '',
      fullName: '',
      position: '',
      salary: '',
      email: '',
      password: '',
      imageUrl: null
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
  image: any;
  fileChange(event) {

    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('files', file, file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.image = reader.result;
    };
  }
}

onSubmit(form: NgForm) {

  if (form.value === '')
alert("fgfd")
    form.value.imageUrl = this.image;
    console.log(form.value);
//       FileList fileImg =  form.value.imageUrl.files
//       // fileToUpload = files.item("imageUrl");
// let formData = new FormData();
// formData.append();
// this.http.post(“Your end-point URL”, formData).subscribe((val) => {

// console.log(val);
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
      );
  }
}

