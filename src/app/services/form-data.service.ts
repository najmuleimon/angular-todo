import { Injectable } from '@angular/core';
import { executive, manager } from '../model/form-data-model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  executive: executive[] = [];
  manager: manager[] = [];
  executiveObj=<executive>{}
  managerObj=<manager>{}

  exId:number = 1;
  mgId:number = 1;

  constructor() { }

  setExecutiveFormData(exObj:executive){
    this.executiveObj=exObj
    this.executiveObj.id=this.exId
    // console.log(this.executiveObj);
    // console.log(this.executive);

    this.executive.push(this.executiveObj);

    // console.log(this.executive);

    this.exId = this.executiveObj.id + 1;
    return this.executive
  }
  setManagerFormData(mgObj:manager){
    this.managerObj=mgObj
    this.managerObj.id=this.mgId
    // console.log(this.managerObj);
    // console.log(this.manager);

    this.manager.push(this.managerObj);

    // console.log(this.executive);

    this.mgId = this.managerObj.id + 1;
    this.managerObj =<manager>{};
    return this.manager
  }
}
