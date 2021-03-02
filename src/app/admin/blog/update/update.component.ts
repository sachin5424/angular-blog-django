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
    Item_categories:new FormControl(''),
    Item_title:new FormControl(''),
    Item_Images:new FormControl(''),
    Item_Description:new FormControl(''),
    is_Active:new FormControl(false),
    is_Featured:new FormControl(false)
  })
  

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this._adminService.categories_list().subscribe((result:any)=>{
      this.categories_get_data=result
      this.blog_form.setValue({
        id:this.data.id,
        Item_categories:this.data.Item_categories,
        Item_title:this.data.Item_title,
        Item_Images:this.data.Item_Images,
        Item_Description:this.data.Item_Description,
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
    jqueryForm.append('Item_categories',this.blog_form.value.Item_categories)
    jqueryForm.append('Item_Images',this.file,this.file.name)
    jqueryForm.append('Item_title',this.blog_form.value.Item_title)
    jqueryForm.append('Item_Description',this.blog_form.value.Item_Description)
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
