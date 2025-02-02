import { Component ,OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-add-user',
  standalone: false, 
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
name:string='';
email:string='';
id:number=0;
constructor(private userService:UserService,private router:Router){}
addUser(){
  const nu={id:this.id,name:this.name,email:this.email}
  this.userService.adduser(nu).subscribe(()=>{
    alert('User added sucessfully');
    console.log(nu);
    this.router.navigate(["/users"]);
  });
}
}
