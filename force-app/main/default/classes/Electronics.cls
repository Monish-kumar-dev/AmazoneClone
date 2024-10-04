public class Electronics {
     @auraEnabled(cacheable=true)
    public static List<Electronics__c> getAllElectronics(){
        return [SELECT Id,Brand__c,Lens_type__c,Model__c,Price__c,Headphone_type__c,Processor__c, Product_Image__c,Product_Type__c,Battery__c,Ram__c FROM Electronics__c];
    }

    

}