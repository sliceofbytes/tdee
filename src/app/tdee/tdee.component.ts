import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-tdee',
  templateUrl: './tdee.component.html',
  styleUrls: ['./tdee.component.scss']
})
export class TDEEComponent implements OnInit {

  tdeeForm: FormGroup;


  constructor(private fb: FormBuilder) {   
    // To initialize FormGroup  
    this.tdeeForm = fb.group({  
      'Gender' : [null, Validators.required],
      'Age' : [null, [Validators.required, Validators.max(100), Validators.min(18)]],
      'Units': [null,Validators.required],
      'Height' : [null, Validators.required],  
      'Weight': [null, Validators.required],
      
      // 'Units' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
      // 
      // 'Weight':[null, Validators.required],  
      // 'Email':[null, Validators.compose([Validators.required,Validators.email])],  
      // 'IsAccepted':[null]  
    });  

    console.log(this.tdeeForm);
  
  }  

  ngOnInit() {}

  onFormSubmit() {

  }

}