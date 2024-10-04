import { LightningElement ,track,wire} from 'lwc';
import getAllElectronics from '@salesforce/apex/Electronics.getAllElectronics';

export default class Electronics extends LightningElement {

    @track ElectronicsInfo;
    
    @wire(getAllElectronics) 
    Electronics({error,data}){
        if(data){
            console.log("books record",data);
            this.ElectronicsInfo=data.map(electronics => ({
                ...electronics,
                isLaptop: electronics.Product_Type__c === 'Laptop',      
                isSmartWatch: electronics.Product_Type__c === 'Smart Watch',
                isCamera: electronics.Product_Type__c === 'Camera',
                isHeadphone: electronics.Product_Type__c === 'Headphone',
            }));
        }
        else if(error){
            console.log("error",error);
        }
    }
    

}