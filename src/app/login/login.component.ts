import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router,private ds:DataService){}

  gmail:any
  pswd:any
  

  //  userDetails:any={
  //   "manu@gmail.com":{number:2208830,username:'manu',gmail:'manu@gmail.com',password:1},
  //   "appu@gmail.com":{number:2208830,username:'appu',gmail:'appu@gmail.com',password:2},
  //   "kichu@gmail.com":{number:2208830,username:'kichu',gmail:'kichu@gmail.com',password:3}
    
  //  }

  // login(g:any,p:any)
  // {
  //   // alert('login successful')
  //   // console.log('hello good morning')
  //   var gmail=g.value
  //   var pswd=p.value
  //   var userDetails=this.userDetails
  //   if(gmail in userDetails)
  //   {
  //     if(pswd==userDetails[gmail]['password'])
  //     {
  //       alert('login successful')
  //     }
  //     else
  //     {
  //       alert('password incorrect')
  //     }
  //   }
  //   else
  //   {
  //     alert('invalid account')
  //   }

  // }

  login()
  {
    var gmail=this.gmail
    var pswd=this.pswd
    var userDetails=this.ds.userDetails
    const result=this.ds.login(gmail,pswd)

    if(result)
    {
      alert('Login successfull')
      this.router.navigateByUrl('home')
    }
    else
    {
      alert('register failure')
    }

  }

  // gmailChange(event:any)
  // {
  //   this.gmail=event.target.value
  //   console.log(this.gmail)
    
  // }

  // pswdChange(event:any)
  // {
  //   this.pswd=event.target.value
  //   console.log(this.pswd)
  // }


}
