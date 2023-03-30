import { Component, OnInit } from '@angular/core';
import { executive, manager } from 'src/app/model/form-data-model';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent implements OnInit {
  executive: executive[] = [];
  manager: manager[] = [];



  executiveObj=<executive>{}
  managerObj=<manager>{}

  constructor(private formDataService:FormDataService) {}

  ngOnInit(): void {}

  // executiveName:string='';
  // executiveSalary:number | undefined;
  // managerName:string='';
  // managerSalary:number | undefined;


  saveExecutiveData(){
    // console.log(this.executiveName, this.executiveSalary);
    // const obj = {
    //   "name": this.executiveObj.name
    // }

    // console.log(this.executiveObj);
    this.executive=this.formDataService.setExecutiveFormData(this.executiveObj)
    this.executiveObj=<executive>{}

  }
  saveManagerData(){
    // console.log(this.managerName, this.managerSalary);
    // console.log(this.managerObj);
    this.manager = this.formDataService.setManagerFormData(this.managerObj)
    this.managerObj=<manager>{}
  }
}
