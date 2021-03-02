import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  panelOpenState = false;
  categories_list:boolean=true
  categories_update:boolean=false
  categories_update_value:string |undefined
  categories_update_id:string |undefined
  categories_get_data:any=[]
  blog_data:any
  file:any
  error=false
  hello:any
  form_temp:string |undefined
  blog_update:any

 
  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    console.log(this.hello,'output');
    
    this._adminService.blog_list().subscribe((result:any)=>{
      this.blog_data=result
      console.log(result);
      
      
      })
      this._adminService.categories_list().subscribe((result:any)=>{
        this.categories_get_data=result
        
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
   
    if(this.categories_list === false){
     this.categories_list=true 
     this.panelOpenState=false
     this.categories_update=false
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
  
    if(this.categories_update===false){
      this.categories_list=false
      this.panelOpenState=false
      this.categories_update=true
     console.log(data,'update');
      this.blog_update=data
      
}
else{
 this.categories_update=false
}
  
  }
  onupdate(update:any){
    console.log(update);
    console.log('update');
    
   
    
  }
  displayCounter(event:any){
    console.log(event,'e');
    
  }
  
}
