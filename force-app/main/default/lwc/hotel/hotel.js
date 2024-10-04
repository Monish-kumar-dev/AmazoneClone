import { LightningElement, track, wire } from 'lwc';
import getAvailableRooms from '@salesforce/apex/RoomController.getAvailableRooms';
import bookRoom from '@salesforce/apex/RoomController.bookRoom';

export default class RoomBooking extends LightningElement {
    @track availableRooms = [];
    @track selectedRoom;
    @track checkInDate;
    @track checkOutDate;

    @wire(getAvailableRooms)
    wiredRooms({ data, error }) {
        if (data) {
            this.availableRooms = data;
        } else if (error) {
            console.error(error);
        }
    }

    handleRoomSelection(event) {
        this.selectedRoom = event.target.value;
    }

    handleCheckInDate(event) {
        this.checkInDate = event.target.value;
    }

    handleCheckOutDate(event) {
        this.checkOutDate = event.target.value;
    }

    handleBookRoom() {
        bookRoom({ roomId: this.selectedRoom, checkIn: this.checkInDate, checkOut: this.checkOutDate })
            .then(result => {
                // Display success message
                alert('Booking successful!');
            })
            .catch(error => {
                console.error(error);
            });
    }
}