import random

subjects = [
    "Barack Obama",
    "Donald Trump",
    "Elon Musk",
    "Taylor Swift",
    "The Rock",
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Narendra Modi",
    "Rahul Gandhi",
    "Amit Shah",
    "Arvind Kejriwal",
    "Virat Kohli",
    "Rohit Sharma",
    "MS Dhoni",
    "Sachin Tendulkar",
    "Jasprit Bumrah",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Shah Rukh Khan",
    "Salman Khan",
    "Aamir Khan",
    "Ranbir Kapoor",
    "Allu Arjun",
    "Prabhas",
    "Rajinikanth",
    "Deepika Padukone",
    "Alia Bhatt",
    "Priyanka Chopra",
    "A talking squirrel",
    "A confused pigeon",
    "Your neighbour",
    "A chaiwala",
    "An engineering student",
    "A sleepy software developer",
    "An angry auto driver"
]

actions = [
    "was spotted",
    "unexpectedly announced",
    "secretly revealed",
    "accidentally leaked",
    "attempted to",
    "is now demanding",
    "has been arrested for",
    "accidentally invented",
    "swapped bodies with",
    "declared war on",
    "challenged",
    "started teaching",
    "won a competition against",
    "opened a startup with",
    "was caught dancing with",
    "launched",
    "sold",
    "forgot"
]

objects = [
    "a talking dog",
    "the secret to cold fusion",
    "a portal to Narnia",
    "infinite pizza",
    "a plan to cancel Mondays",
    "flying lessons for cats",
    "anti-gravity socks",
    "the recipe for happiness",
    "a time machine",
    "unlimited biryani",
    "free samosas for everyone",
    "IPL trophy",
    "a magical cricket bat",
    "a lifetime supply of pani puri",
    "a plate of butter chicken",
    "India's hidden treasure",
    "the world's largest cup of chai",
    "an AI-powered auto rickshaw",
    "a secret Bollywood script"
]

locations = [
    "the Moon",
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Goa",
    "the Taj Mahal",
    "the Red Fort",
    "Parliament",
    "the IPL stadium",
    "a Mumbai local train",
    "a roadside tea stall",
    "ISRO headquarters",
    "the International Space Station",
    "the Himalayas",
    "a shopping mall",
    "the back of a bus"
]

connectors = [
    "causing chaos",
    "leading to hilarious consequences",
    "sparking global debate",
    "much to everyone's surprise",
    "in a shocking turn of events",
    "and the internet exploded",
    "and scientists are baffled",
    "while everyone watched in disbelief",
    "breaking every social media record",
    "making memes trend worldwide",
    "leaving reporters speechless",
    "and nobody saw it coming"
]
while True:
    subject=random.choice(subjects)
    action=random.choice(actions)
    object=random.choice(objects)
    location=random.choice(locations)
    connector=random.choice(connectors)

    headline=f" BREAKING NEWS: {subject} {action} {object} {location} {connector}"
    print("\n" + headline)

    user_input=input("\n Do you want another headline? (y/n):").strip().lower()
    if user_input =="n":
        break

    print("\n Thanks for using Fake News Headline Generator")