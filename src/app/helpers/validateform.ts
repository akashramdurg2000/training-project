import { FormControl, FormGroup } from "@angular/forms";


export default class ValidateForm{
    static validateAllFormFileds(formGroup:FormGroup){
        Object.keys(formGroup.controls).forEach(fields=>{
          const control=formGroup.get(fields);
          if(control instanceof FormControl){
            control.markAsDirty({onlySelf:true})
          }
          else if(control instanceof FormGroup){
            this.validateAllFormFileds(control);
          }
        })
      }
}