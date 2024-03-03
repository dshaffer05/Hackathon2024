import { Activity } from "./dataclasses";

export let Axxiom: Activity = new Activity(
    "Axxiom Escape Rooms Newark", 
    "280 E Main St, Newark, DE 19711", 
    "11AM-8:30PM",
    "$28",
    "https://www.axxiomnewark.com",
    "Multiple escape rooms for groups 4-12 and any age!"
)

export let Brandywine: Activity = new Activity(
    "Brandywinde Zoo",
    "1001 N Park Dr. Wilmington, DE 19802",
    "10AM-4PM",
    "$9",
    "https://brandywinezoo.org",
    "A zoo full of animals located along the Brandywine river!"
)

export let NatureMuseum: Activity = new Activity(
    "Delaware Museum of Nature & Science",
    "4840 Kennet Pike, Wilmington, DE 19807",
    "10AM-4PM",
    "14.50",
    "https://delmns.org",
    "Explore, Discover, and Protect the environment that you live in!"
)

export let ArtMuseum: Activity = new Activity(
    "Delaware Art Musuem",
    "2301 Kentmere Pkwy, Wilmington DE 19806",
    "10AM-4PM",
    "$7",
    "https://delart.org",
    "Explore classic collecttions of artwork and discover the deeper meaning behind the pieces!"
)

export let activities = [Axxiom, Brandywine, NatureMuseum, ArtMuseum];