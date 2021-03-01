import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  panelOpenState = false;
  categories_list:boolean=false
  categories_update:boolean=false
  categories_update_value:string |undefined
  categories_update_id:string |undefined
  categories_data:any=[]
  blog_data:any
  file:any
  error=false
  form_temp:string |undefined
  

 
  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this._adminService.blog_list().subscribe((result:any)=>{
      this.blog_data=result
      console.log(result);
      
      
      })
    
  }
  toggle_list(){
  
   if(this.panelOpenState === false){
    this.panelOpenState=true 
    this._adminService.categories_list().subscribe((result:any)=>{
      this.categories_data=result
      
      })
    this.categories_update=false
   }
   else{
     this.panelOpenState=false
   }
  }
  toggle_list_view(){
   
    if(this.categories_list === false){
     this.categories_list=true 
     this.panelOpenState=false
     this._adminService.blog_list().subscribe((result:any)=>{
      this.blog_data=result
      console.log(result);
      
      
      })
    }
    else{
      this.categories_list=false
    }
   }
  // categories

 

  categories_form = new FormGroup({
    Item_categories:new FormControl(''),
    Item_title:new FormControl(''),
    Item_Images:new FormControl(''),
    Item_Description:new FormControl(''),
    is_Active:new FormControl(false),
    is_Featured:new FormControl(false)
  })
 
  onChange(event:any){
    this.file=<File>event.target.files[0]
  
   
  }
  onSubmit(){
    this.error=true
    console.log(this.categories_form.value);
    // if(this.categories_form.value.is_Active===""){
    //    this.categories_form.value.is_Active=false
    //    console.log( this.categories_form.value.is_Active);
       
    // }
    const jqueryForm = new FormData();
    jqueryForm.append('Item_categories',this.categories_form.value.Item_categories)
    jqueryForm.append('Item_Images',this.file,this.file.name)
    jqueryForm.append('Item_title',this.categories_form.value.Item_title)
    jqueryForm.append('Item_Description',this.categories_form.value.Item_Description)
    jqueryForm.append('is_Active',this.categories_form.value.is_Active)
    jqueryForm.append('is_Featured',this.categories_form.value.is_Featured)
    
   if(this.categories_form.value.Categories_name==""){
    this.form_temp="invalid flieds"
   }
   else{
    this._adminService.blog_add(jqueryForm).subscribe((result:any)=>{
      console.log(result);
      this.ngOnInit()
    },
    (error:any)=>{
   
     
      
      console.log(error);
      
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
