import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  categories_get_data:any
  @Input() data:any
  @Output() delete_value = new EventEmitter();
  file:any
  categories_list=false
  form_temp:boolean=false
  blog_form = new FormGroup({
    id:new FormControl(),
    Blog_categories:new FormControl(''),
    Blog_title:new FormControl(''),
    Blog_Images:new FormControl(''),
    Blog_Description:new FormControl(''),
    is_Active:new FormControl(false),
    is_Featured:new FormControl(false)
  })
  

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this._adminService.categories_list().subscribe((result:any)=>{
      this.categories_get_data=result
      this.blog_form.setValue({
        id:this.data.id,
        Blog_categories:this.data.Blog_categories,
        Blog_title:this.data.Blog_title,
        Blog_Images:this.data.Blog_Images,
        Blog_Description:this.data.Blog_Description,
        is_Active:this.data.is_Active,
        is_Featured:this.data.is_Featured,
      })
     
      
      })
    console.log(this.data);
    
  }

  onChange(event:any){
    console.log('ok');
    this.file=<File>event.target.files[0]
  console.log(this.file);
  
    
  }
  onSubmit(){
    const jqueryForm = new FormData();
    jqueryForm.append('id',this.blog_form.value.id)
    jqueryForm.append('Blog_categories',this.blog_form.value.Blog_categories)
    jqueryForm.append('Blog_Images',this.file,this.file.name)
    jqueryForm.append('Blog_title',this.blog_form.value.Blog_title)
    jqueryForm.append('Blog_Description',this.blog_form.value.Blog_Description)
    jqueryForm.append('is_Active',this.blog_form.value.is_Active)
    jqueryForm.append('is_Featured',this.blog_form.value.is_Featured)
  
    console.log(this.blog_form.value,'update');
    this._adminService.blog_update(this.data.id,jqueryForm).subscribe((result:any)=>{
      console.log(result);
      this.form_temp=true
      
     })
    console.log(this.blog_form.value,'update');
    
    window.setTimeout(()=>{
      this.form_temp=false
    },12000)
  }
  delete_item(){
    this._adminService.blog_delete(this.data.id).subscribe((result:any)=>{
      console.log(result);
      this.delete_value.emit(this.categories_list=true)
      
     })
  }

}
