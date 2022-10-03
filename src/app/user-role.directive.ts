import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective {
// @Input("user")user:boolean[]
//   constructor(private viewContainer:ViewContainerRef,private template:TemplateRef<any>) {
//     this.viewContainer.clear()
//     console.log("hhgghgh")
//   }
//   ngOnInit(){
//     if(this.user[0]){
//       this.viewContainer.createEmbeddedView(this.template)
//     }else{
//       this.viewContainer.clear()
//     }
//     //this.viewContainer.createEmbeddedView(this.template)
//   }

}
