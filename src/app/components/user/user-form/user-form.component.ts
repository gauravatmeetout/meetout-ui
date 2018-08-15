import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, User } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private userForm: FormGroup;
  private editMode:boolean=false;
  private user: User = {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    role: "",
    dob: ""
  };

  constructor(private userService: UserService, public route: ActivatedRoute) {
    if (route) {
      this.route.params.subscribe(this.onParamGet.bind(this));
    }
  }

  onParamGet(params) {
    if (params['id']) {
      this.userService.getUser(params['id']).subscribe(user => {
        this.editMode=true;
        this.setForm(user);
      });
    } else {
      this.setForm(this.user);
    }
  }

  setForm(user: User) {
    this.userForm = new FormGroup({
      'firstName': new FormControl(user.firstName, [Validators.required]),
      'lastName': new FormControl(user.lastName, [Validators.required]),
      'email': new FormControl(user.email, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(user.phoneNumber, [Validators.required, Validators.pattern(/(7|8|9)\d{9}/)]),
      'dob': new FormControl(user.dob, Validators.required),
      'address': new FormControl(user.address, Validators.required),
      'password': new FormControl(user.password, Validators.required),
      'confirmPassword': new FormControl("", [Validators.required, this.checkPasswordMatch])
    });
  }

  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get email() { return this.userForm.get('email'); }
  get phoneNumber() { return this.userForm.get('phoneNumber'); }
  get address() { return this.userForm.get('address'); }
  get dob() { return this.userForm.get('dob'); }
  get password() { return this.userForm.get('password'); }
  get confirmPassword() { return this.userForm.get('confirmPassword'); }


  checkPasswordMatch(control) {
    var otherControl = null;
    var thisControl = null;
    if (!control.parent) {
      return null;
    }
    // Initializing the validator.
    if (!thisControl) {
      thisControl = control;
      otherControl = control.parent.controls.password as FormControl;
      if (!otherControl) {
        throw new Error('matchOtherValidator(): other control is not found in parent group');
      }
      otherControl.valueChanges.subscribe(() => {
        thisControl.updateValueAndValidity();
      });
    }
    if (!otherControl) {
      return null;
    }
    if (otherControl.value !== thisControl.value) {
      return {
        matchOther: true
      };
    }
    return null;
  }

  ngOnInit() {
  }

  addUser() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(response => {
        console.log(response)
      });
    }
  }

}
