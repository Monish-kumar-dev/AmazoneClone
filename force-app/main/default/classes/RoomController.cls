public with sharing class RoomController {
    @AuraEnabled(cacheable=true)
    public static List<Room__c> getAvailableRooms() {
        return [SELECT Id, Name, Price__c FROM Room__c WHERE Availability_Status__c = 'Available'];
    }

    @AuraEnabled
    public static void bookRoom(Id roomId, Date checkIn, Date checkOut) {
        Booking__c newBooking = new Booking__c(Room__c = roomId, Check_In_Date__c = checkIn, Check_Out_Date__c = checkOut, Booking_Status__c = 'Confirmed');
        insert newBooking;

        Room__c room = [SELECT Id FROM Room__c WHERE Id = :roomId];
        room.Availability_Status__c = 'Booked';
        update room;
    }
}