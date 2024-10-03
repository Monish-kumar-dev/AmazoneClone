import { LightningElement, wire } from 'lwc';
import BOOKS from '@salesforce/resourceUrl/Books';
import getAllBooks from '@salesforce/apex/Books.getAllBooks';
export default class Books extends LightningElement {
    bookInfo;
    @wire(getAllBooks) 
    books({error,data}){
        if(data){
            console.log("books record",data);
            this.bookInfo=data;
        }
        else if(error){
            console.log("error",error);
        }
    }

}