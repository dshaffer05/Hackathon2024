/**Creators: Andrew Shaffer, Thomas Glenn, Janek Schnitzer */
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
    "$14.50",
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

export let SkyZone: Activity = new Activity(
    "Sky Zone Trampoline Park", 
    "211 Executive Dr #3, Newark, DE 19702",
    "4-8PM", 
    "$26", 
    "https://www.skyzone.com/newark", 
    `Skyzone consists of a multitude of fun and active activities including dodgeball,
    Ninja Warrior Course, Skyslam, and many more`
)

export let MainEvent: Activity = new Activity(
    "Main Event Newark",
    "2900 Fashion Center Blvd, Newark, DE 19702",
    "!!AM-12AM",
    "$30+",
    "http://www.mainevent.com/locations/delaware/newark",
    `Main Event is full of a wide array of highly-enjoyable games
     such as bowling, arcade games, virtual reality, or any other game you can think of!`
)

export let Taverna: Activity = new Activity(
    "Taverna Rustic Italian",
    "121 Main St, Newark, DE 19711",
    "11:30AM-10:PM",
    "$20-$30",
    "https://www.tavernapdg.com/location/taverna-main-street/",
    "Enjoy rustic Italian cuisine with friends and family!"
)

export let SportsCenter: Activity = new Activity(
    "Vince's Sports Center",
    "14 Gender Rd, Newark, DE 19713",
    "10AM-9PM",
    "$8",
    "http://www.vincessports.com/",
    `Vince's Sports Center's main attraction is its mini-golf course, but you must not 
    forget itself incredible indoor hitting cage and range of arcade games`
)

export let HomeGrown: Activity = new Activity(
    "Home Grown Cafe",
    "126 E Main St, Newark, DE 19711",
    "11:30AM-1AM",
    "$10-$20",
    "https://www.homegrowncafe.com",
    "Enjoy a colorful eatery with vegetearian-friendly meals. Features local art and regular live music"
)
export let activities = [Axxiom, Brandywine, NatureMuseum, ArtMuseum, SkyZone, MainEvent, Taverna, SportsCenter, HomeGrown];