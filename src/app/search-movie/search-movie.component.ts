import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyValidators } from '../my-validators';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {

  myForm = this.formBuilder.group({
    idOrTittle: this.formBuilder.group({
      id:[''],
      tittle: ['']
    }),
    type: [''],
    releaseYear: ['', [Validators.required, this.validators.rangeDateValidator(1900, new Date().getFullYear())]],
    form: [''],

  })

  constructor (private formBuilder : FormBuilder, private validators : MyValidators){
   
   

    this.myForm.controls.idOrTittle.setValidators(validators.isRequiredValidator(this.myForm.controls.idOrTittle.controls.tittle, this.myForm.controls.idOrTittle.controls.id));

    this.defineTypeForm();

    // this.myForm.controls.idOrTittle.setValidators(validators.isIdActivated(this.myForm.controls.idOrTittle.controls.id))

    this.myForm.valueChanges
    .subscribe(value=>{
      console.log(value);
    });
  }

  onSubmit(){
    this.myForm.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  defineTypeForm(){
    this.myForm.patchValue({
      type: "séries",
      form: "courte"
    })
  }

  viewForm(){
    console.log(JSON.stringify(this.myForm.getRawValue()));
  }

}
