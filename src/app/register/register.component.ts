import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router:Router,private ds:DataService){}

  uname:any
  phnum:any
  gmail:any
  pswd:any

 
  register()
  {
    var uname=this.uname
    var phnum=this.phnum
    var gmail=this.gmail
    var pswd=this.pswd

    // var userDetails=this.ds.userDetails

    const result=this.ds.register(uname,phnum,gmail,pswd)

    if(result)
    {
      alert('register successfull')
      this.router.navigateByUrl('')
    }
    else
    {
      alert('account is already registered')
    }
  }

}
