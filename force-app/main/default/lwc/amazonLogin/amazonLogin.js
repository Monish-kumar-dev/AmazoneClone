import { LightningElement } from 'lwc';
import login from '@salesforce/apex/LoginUserr.login';
export default class AmazonClone extends LightningElement {
email;
password;
errorMessage='';
isError=false;
handleUsername(event) {
this.email = event.target.value;
}
handlepasswordChange(event) {
this.password = event.target.value;
}
handleLogin() {
    console.log("Inside Login");
    console.log("Email: "+this.email);
    console.log("Password: "+this.password);

    if(this.email!=null && this.password!=null){login({
        username: this.email,
        password: this.password
    }).then((result)=>{

        this.isError=false;
        console.log('Result is:',result);
        window.location.href = result;
        

    }).catch((error)=>{
        console.log('error: ',error);
        this.isError=true;
        this.errorMessage=error.body.message;
    })}
    
    
}


}