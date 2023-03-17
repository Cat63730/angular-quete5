import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class MyValidators{

  rangeDateValidator(min: number, max: number){
    return(control: AbstractControl) => {
      if (control.value >= min && control.value <= max){
        return null;
      }else {
        return { min: `année minimale : ${min}, année maximale : ${max}`}
      }
    }
  }


  isRequiredValidator(tittle: any, id: any){
    return () =>{
      if(tittle.value || id.value){
        return null;
    }else {
      return {isRequired : "L'un des deux champs 'Identifiant' ou 'Titre' doit être renseigné"}
    }
    }
  }

  // isIdActivated(id: any){
  //   return () =>{
  //     if(id.value){
  //       return null;
  //     } else{
  //       return {isRequired : "id nécessaire pour avoir la liste des ..."}
  //     }
  //   }
  // }
}