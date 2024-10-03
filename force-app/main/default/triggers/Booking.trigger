trigger Booking on Booking__c (after insert, after delete) {
    Set<Id> roomIds = new Set<Id>();
    for (Booking__c booking : Trigger.isInsert ? Trigger.new : Trigger.old) {
        roomIds.add(booking.Room__c);
    }
    
    List<Room__c> rooms = [SELECT Id, Availability_Status__c FROM Room__c WHERE Id IN :roomIds];
    for (Room__c room : rooms) {
        if (Trigger.isInsert) {
            room.Availability_Status__c = 'Booked';
        } else if (Trigger.isDelete) {
            room.Availability_Status__c = 'Available';
        }
    }
    update rooms;
}