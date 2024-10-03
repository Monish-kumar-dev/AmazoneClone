import { LightningElement,wire } from 'lwc';
import getAllMobiles from '@salesforce/apex/Mobiles.getAllMobiles';
export default class Mobiles extends LightningElement {

    MobileInfo;
    @wire(getAllMobiles) 
    books({error,data}){
        if(data){
            console.log("books record",data);
            this.MobileInfo=data;
        }
        else if(error){
            console.log("error",error);
        }
    }
}