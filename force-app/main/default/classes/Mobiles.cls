public class Mobiles {
    @auraEnabled(cacheable=true)
    public static List<Mobile__c> getAllMobiles(){
        return [SELECT Id,Brand_Name__c,MobileImage__c,Model__c,Price__c,Storage__c FROM Mobile__c];
    }

}