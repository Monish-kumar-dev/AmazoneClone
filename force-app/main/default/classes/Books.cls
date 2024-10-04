public class Books {
    @auraEnabled(cacheable=true)
    public static List<Book__c> getAllBooks(){
        return [SELECT Id,Name,backgroundImg__c,Author_Name__c,language__c,Book_Catogory__c,price__c FROM Book__c];
    }

}