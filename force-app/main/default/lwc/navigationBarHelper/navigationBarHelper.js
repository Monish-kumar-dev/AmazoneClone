import { LightningElement } from 'lwc';
import {NavigationMixin}from  'lightning/navigation';
export default class NavigationBarHelper extends NavigationMixin(LightningElement)  {
    navigateToBooks() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
               "url": "/books"
            }
        })
    
}
navigateToHome() {
    this[NavigationMixin.Navigate]({
        "type": "standard__webPage",
        "attributes": {
           "url": "/s"
        }
    })

}
navigateToMobiles() {
    this[NavigationMixin.Navigate]({
        "type": "standard__webPage",
        "attributes": {
           "url": "/mobiles"
        }
    })

}
navigateToElectronics() {
    this[NavigationMixin.Navigate]({
        "type": "standard__webPage",
        "attributes": {
           "url": "/electronics"
        }
    })

}
}