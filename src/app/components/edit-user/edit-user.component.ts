import { Component,OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  standalone: false,  
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  id:any;
  user:any;
  name:string='';
  email:string='';
  constructor(private userService:UserService,private route:ActivatedRoute, private router :Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')!;
    this.user=this.userService.getuser(this.id);
    this.userService.getuser(this.id).subscribe(user => {
      this.name=user.name;
      this.email=user.email;
    });
  }
  updateuser(): void{
    const uu={name:this.name,email:this.email};
    this.userService.updateuser(this.id,uu).subscribe(()=>{
      alert("User updated successfully");
      this.router.navigate(["/users"]);
    })
  }
}
