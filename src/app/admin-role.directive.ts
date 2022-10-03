import { Directive,ViewContainerRef,TemplateRef ,Input} from '@angular/core';
import { BackendService } from './backend.service';

@Directive({
  selector: '[appAdminRole]'
})
export class AdminRoleDirective {

  // @Input("admin")role:boolean[]
  // constructor(private viewContainer:ViewContainerRef,private template:TemplateRef<any>) {
  //   this.viewContainer.clear()
  // }
  // ngOnInit(){
  //   if(this.role[0] && this.role[1]){
  //     this.viewContainer.createEmbeddedView(this.template)
  //   }else{
  //     this.viewContainer.clear()
  //   }
  //   this.viewContainer.createEmbeddedView(this.template)
  // }

}
