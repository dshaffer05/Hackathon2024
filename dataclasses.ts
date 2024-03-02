export class Activity {
    name: string; //Name of the activity
    location: string; //Address of the activity
    time: string; //Time that the activity is open/happening
    price: string; // Price of the activity
    website: string; // activity website
    description: string; // any extra info

    //testing 
    constructor(name, location, time, price, website, description) {
        this.name = name;
        this.location = location;
        this.time = time;
        this.price = price;
        this.website = website;
        this.description = description;
    }
}
