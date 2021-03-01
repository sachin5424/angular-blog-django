import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  panelOpenState = true;
  categories_list:boolean=false
  categories_update:boolean=false
  categories_update_value:string |undefined
  categories_update_id:string |undefined
  categories_data:any=[]
  error=false
  form_temp:string |undefined

 
  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this._adminService.categories_list().subscribe((result:any)=>{
      this.categories_data=result
      
      })
    
  }
  toggle_list(){
  
   if(this.panelOpenState === false){
    this.panelOpenState=true 
    this.categories_update=false
   }
   else{
     this.panelOpenState=false
   }
  }
  toggle_list_view(){
    this._adminService.categories_list().subscribe((result:any)=>{
      this.categories_data=result
      
      })
    if(this.categories_list === false){
     this.categories_list=true 
    }
    else{
      this.categories_list=false
    }
   }
  // categories
  categories_form = new FormGroup({
    Categories_name:new FormControl('',[Validators.minLength(2)])
  })
  // update
  
  onSubmit(){
    this.error=true
   if(this.categories_form.value.Categories_name==""){
    this.form_temp="invalid flieds"
   }
   else{
    this._adminService.categories_add(this.categories_form.value).subscribe((result:any)=>{
      console.log(result);
      this.ngOnInit()
    },
    (error:any)=>{
   
      this.form_temp=error.error.title[0]
      
      console.log(this.form_temp);
      
    }
    )
    this.ngOnInit()
   }
    
  }

  // update

  categorie_updateform(data:any){
    // console.log(data);
   if(this.categories_update===false){
           this.categories_list=false
           this.panelOpenState=false
           this.categories_update=true
           const categoriesUpdate = {
             id:data.id,
             Categories_name:data.Categories_name
           }
           this.categories_update_value=categoriesUpdate.Categories_name
           this.categories_update_id=categoriesUpdate.id
           console.log(categoriesUpdate);
          
           
    }
    else{
      this.categories_update=false
    }
  }
  onupdate(update:any){
    console.log(this.categories_update_value,update);
    const categoriesUpdate = {
      id:this.categories_update_id,
      Categories_name:update
    }
    console.log(categoriesUpdate);
    
    this._adminService.categories_update(this.categories_update_id,categoriesUpdate).subscribe(result=>{
      console.log(result);
      
    },
   (error)=>{
     this.form_temp= error.error.Categories_name
   } 
    )
    
  }
  ondelete(id:any){

  this._adminService.categories_delete(id.value).subscribe(result=>{
    console.log(result);
    this.categories_update=false
    this.categories_list=true
    this.ngOnInit()
    
    
  })

  }
  
}
