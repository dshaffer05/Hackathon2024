export class Activity {
    name: string; //Name of the activity
    location: string; //Address of the activity
    time: string; //Time that the activity is open/happening
    price: string; // Price of the activity
    website: string; // activity website
    description: string; // any extra info

    constructor(name: string, location: string, time: string, price: string, website: string, description: string) {
        this.name = name;
        this.location = location;
        this.time = time;
        this.price = price;
        this.website = website;
        this.description = description;
    }
}
