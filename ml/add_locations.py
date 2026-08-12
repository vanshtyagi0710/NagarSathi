import pandas as pd
import random

# Load dataset
df = pd.read_csv("dataset.csv")

# Possible locations in NagarSathi
locations = [
    "College Gate",
    "Main Market",
    "Bus Stand",
    "Railway Station",
    "City Park",
    "Government Hospital",
    "School Road",
    "Temple Road",
    "Municipal Office",
    "Residential Area"
]

# Give each complaint a location
random.seed(42)

df["location"] = [
    random.choice(locations)
    for _ in range(len(df))
]

# Save updated dataset
df.to_csv("dataset.csv", index=False)

print("Location column added successfully!")
print()
print("Total complaints:", len(df))
print()
print("Location frequency:")
print(df["location"].value_counts())