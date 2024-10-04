import { LightningElement } from 'lwc';

export default class Carousel extends LightningElement {
    products = [
        {
            id: 1,
            name: 'Dell (Smartchoice) G15-5530 Core i5',
            price: '₹69,990',
            mrp: '₹1,06,790',
            discount: '34% off',
            imageUrl: 'https://m.media-amazon.com/images/I/41iiFgYZkZL._SR480,440_.jpg'
        },
        {
            id: 2,
            name: 'OnePlus Nord Buds 2r True Wireless',
            price: '₹1,599',
            mrp: '₹2,199',
            discount: '30% off',
            imageUrl: 'https://m.media-amazon.com/images/I/31hXqtvutdL._SR480,440_.jpg'
        },
        {
            id: 3,
            name: 'POCO X6 5G',
            price: '₹18,999',
            mrp: '₹27,999',
            discount: '32% off',
            imageUrl: 'https://m.media-amazon.com/images/I/41BE-YyQrBL._SR480,440_.jpg'
        },
        {
            id: 4,
            name: 'HP Victus Gaming Laptop',
            price: '₹94,990',
            mrp: '₹1,12,190',
            discount: '16% off',
            imageUrl: 'https://m.media-amazon.com/images/I/41RA6UMCv0L._SR480,440_.jpg'
        },
        {
            id: 5,
            name: 'Apple 20W USB-C Power Adapter',
            price: '₹1,499',
            mrp: '₹1,900',
            discount: '21% off',
            imageUrl: 'https://m.media-amazon.com/images/I/21rFLTV3tML._SR480,440_.jpg'
        },
        {
            id: 6,
            name: 'Lenovo LOQ 2024 Intel Core i5',
            price: '₹80,990',
            mrp: '₹1,11,990',
            discount: '28% off',
            imageUrl: 'https://m.media-amazon.com/images/I/51eIFIHTk8L._SR480,440_.jpg'
        }
        ,
        {
            id: 7,
            name: 'Apple MacBook Air Laptop: Apple M1 chip',
            price: '₹58,990',
            mrp: '₹92,900',
            discount: '37% off',
            imageUrl: 'https://m.media-amazon.com/images/I/316ArzLeJ2L._SR480,440_.jpg'
        }
        ,
        {
            id: 8,
            name: 'Sony Alpha 7M4K Full-Frame Camera',
            price: '₹2,06,988',
            mrp: '₹2,62,490',
            discount: '21% off',
            imageUrl: 'https://m.media-amazon.com/images/I/31+OD3z-xVL._SR480,440_.jpg'
        }
        ,
        {
            id: 9,
            name: 'Oneplus Bullets Z2 ',
            price: '₹1,299',
            mrp: '₹2,299',
            discount: '43% off',
            imageUrl: 'https://m.media-amazon.com/images/I/31pAe23ncfL._SR480,440_.jpg'
        }
        ,
        {
            id: 10,
            name: 'Aquaguard Delight NXT Aquasaver ',
            price: '₹9,499',
            mrp: '₹22,000',
            discount: '57% off',
            imageUrl: 'https://m.media-amazon.com/images/I/31cC+u5pfbL._SR480,440_.jpg'
        }
    ];
    visibleProducts;
    currentIndex = 0;
    itemsPerPage = 4; // Show 4 items at a time

    // Initialize visible products when the component is first loaded
    connectedCallback() {
        this.updateVisibleProducts();
    }

    // Update the list of visible products based on the current index
    updateVisibleProducts() {
        this.visibleProducts = this.products.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
    }

    // Move to the next set of products
    handleNext() {
        if (this.currentIndex + this.itemsPerPage < this.products.length) {
            this.currentIndex += this.itemsPerPage;
            this.updateVisibleProducts();
            this.template.querySelector('.deals-container').classList.add('move-right');
            
            // Remove the class after the transition ends (0.5s)
            setTimeout(() => {
                this.template.querySelector('.deals-container').classList.remove('move-right');
            }, 250);
        }
    }
    
    handlePrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex -= this.itemsPerPage;
            this.updateVisibleProducts();
            this.template.querySelector('.deals-container').classList.add('move-left');
            
            // Remove the class after the transition ends (0.5s)
            setTimeout(() => {
                this.template.querySelector('.deals-container').classList.remove('move-left');
            }, 250);
        }
    }}