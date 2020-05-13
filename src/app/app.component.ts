import {Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CommonModule, NgLocalization, NgLocaleLocalization} from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgLocalization, useClass: NgLocaleLocalization }]
})
export class AppComponent {
    form: FormGroup;
    formSubmitted = false;
  title: any;
   fv:boolean;
    constructor(private formBuilder: FormBuilder) {}
    buildForm() {
        this.form = this.formBuilder.group({
          email: [''],
          username: [null],
          institution: [null],
          company: [null],
          salary: [null],
        });
      }
      ngOnInit() {
        this.buildForm();
       // this.setUserCategoryValidators();
       
      }
      onSubmit(event) {
        event.preventDefault();
        this.setEmailValidators();
        if(this.fv ==false)
        {
            this.formSubmitted = false;
        }
        else
        {
            this.formSubmitted = true;
        }
        if (this.form.valid) {
          console.log(this.form.value); // Process your form
        }
      }
      setEmailValidators(){
        const usercntrl=this.form.get('username');
        const companycntrl=this.form.get('company');
        const salarycntrl=this.form.get('salary');
        let ev=this.form.value.email;
        if(ev.length>0)
        {
            usercntrl.setValidators([Validators.required]);
            companycntrl.setValidators([Validators.required]);
            salarycntrl.setValidators(null)

        }
        usercntrl.updateValueAndValidity();
        companycntrl.updateValueAndValidity();
        salarycntrl.updateValueAndValidity();
        this.fv=false;
        
      }
}

