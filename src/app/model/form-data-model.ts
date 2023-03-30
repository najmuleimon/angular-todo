import { formdataInterface } from "../interface/form-data-interface"

export class executive implements formdataInterface{
  id: number =1
  name: string='Najmul'
  salary: number=50000
}

export class manager implements formdataInterface{
  id: number =2
  name: string='Nodu'
  salary: number=200000
  laptop:boolean=true
}
