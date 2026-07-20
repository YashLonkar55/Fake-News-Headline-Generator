import random
from data import *

def generate_headline():
    template = random.choice(templates)
    source = random.choice(sources)

    headline = template.format(
        subject=random.choice(subjects),
        object=random.choice(objects),
        location=random.choice(locations),
        connector=random.choice(connectors),
        source=source,
    )

    return {"headline": headline, "source": source}