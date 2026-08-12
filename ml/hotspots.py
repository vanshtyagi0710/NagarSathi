import pandas as pd


# Load dataset
df = pd.read_csv("dataset.csv")


def get_hotspots():
    """
    Calculate complaint frequency and hotspot level
    for each location.
    """

    location_counts = df["location"].value_counts()

    hotspots = []

    for location, count in location_counts.items():

        if count >= 20:
            hotspot_level = "HIGH"

        elif count >= 15:
            hotspot_level = "MEDIUM"

        else:
            hotspot_level = "LOW"

        hotspots.append({
            "location": location,
            "report_count": int(count),
            "hotspot_level": hotspot_level
        })

    return hotspots