import random
from data import *

def generate_headline():
    template=random.choice(templates)

    return template.format(
        subject=random.choice(subjects),
        object=random.choice(objects),
        location=random.choice(locations),
        connector=random.choice(connectors)
    )