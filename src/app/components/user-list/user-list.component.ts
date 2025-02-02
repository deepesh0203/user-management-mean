import { Component,OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users:any[]= [];
  constructor(private us:UserService){}
  ngOnInit() {
    this.loadusers();
  }
  loadusers(){
    this.us.getusers().subscribe(data=>{
      this.users=data
    });
  }
  deleteusers(id:number){
    this.us.deleteuser(id).subscribe(()=>{
      this.loadusers();
    });
  }
}
