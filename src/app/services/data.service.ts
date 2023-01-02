import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any={
    // "manu@gmail.com":{username:'manu',number:2208830,gmail:'manu@gmail.com',password:1},
    // "appu@gmail.com":{username:'appu',number:2208830,gmail:'appu@gmail.com',password:2},
    // "kichu@gmail.com":{username:'kichu',number:2208830,gmail:'kichu@gmail.com',password:3}
   }



   saveDetails()
   {

   }

  //--------------------------------------------------------------------------------------------------------

  register(username:any,number:any,gmail:any,password:any)
  {

    var userDetails=this.userDetails

    if(gmail in localStorage)
    {
      return false

    }
    else
    {
      userDetails={
        username:username,
        number:number,
        gmail:gmail,
        password:password
      }
      localStorage.setItem(gmail,JSON.stringify(userDetails))
      return true
    }

  }
// ------------------------------------------------------------------------------------------------------

  login(gmail:any,pswd:any)
  {

    if(gmail in localStorage)
    {
  
      const userPassword=JSON.parse(localStorage.getItem(gmail) || '{}')
      console.log(userPassword.password)

      if(pswd== userPassword.password)
      {
        return true

      }
      else
      {
        alert('invalid password')
        return false
      }
    }
    else
    {
      alert('invalid account')
      return false
    }

  }

  constructor() { }
}
