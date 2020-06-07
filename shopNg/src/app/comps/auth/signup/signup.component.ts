import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFormGroup = this.fb.group({
    user:['', Validators.required],
    pass:['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupFormGroup
  }

  signup(){
    
  }
}
