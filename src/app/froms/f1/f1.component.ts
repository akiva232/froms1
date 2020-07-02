import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class F1Component implements OnInit {

  constructor() { }

  name = new FormControl('');

  ngOnInit(): void {
    this.name.valueChanges.subscribe(value=>{

    })
  }
  logthenamer(){
    console.log({
      errors:this.name.errors,
      dirty:this.name.dirty,
      pristine:this.name.pristine,
      status:this.name.status,
      value:this.name.value,
      valid:this.name.valid,
      invalid:this.name.invalid,
      touched:this.name.touched,
      untouched:this.name.untouched,
    });


}
}
