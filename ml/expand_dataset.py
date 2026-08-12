import pandas as pd

new_data = [
    #road
    ("The road has a large crack near the bus stop", "Road"),
    ("A deep pothole is causing problems for vehicles", "Road"),
    ("The street surface is broken near the school", "Road"),
    ("Several potholes are visible on the residential road", "Road"),
    ("The main road is badly damaged after the rain", "Road"),
    ("A section of the road has collapsed", "Road"),
    ("The road near the hospital needs urgent repair", "Road"),
    ("There are dangerous cracks on the street", "Road"),
    ("The pavement is uneven and damaged", "Road"),
    ("A pothole has appeared outside the market", "Road"),
    ("The road surface is full of cracks", "Road"),
    ("Vehicles are having difficulty because of the damaged road", "Road"),
    ("The lane near the bus stand has many potholes", "Road"),
    ("The road has broken patches near the intersection", "Road"),
    ("A damaged road is making travel difficult in our area", "Road"),
    ("A large crack has appeared across the road", "Road"),

    #garbage
    ("Garbage is piling up beside the road", "Garbage"),
    ("The waste collection truck has not arrived", "Garbage"),
    ("Trash is scattered around the neighborhood", "Garbage"),
    ("The garbage bin is completely full", "Garbage"),
    ("Household waste has been left uncollected", "Garbage"),
    ("There is a large pile of rubbish near the market", "Garbage"),
    ("Waste is accumulating outside the apartments", "Garbage"),
    ("The garbage container needs to be emptied", "Garbage"),
    ("Uncollected trash is creating a bad smell", "Garbage"),
    ("The street is covered with discarded waste", "Garbage"),
    ("Our area has not received garbage collection", "Garbage"),
    ("Rubbish has been lying near the bus stop", "Garbage"),
    ("The public garbage bin is overflowing", "Garbage"),
    ("Waste has accumulated near the community center", "Garbage"),
    ("Garbage bags are scattered across the street", "Garbage"),
    ("The waste disposal area is full", "Garbage"),
    ("Residents are complaining about missed garbage collection", "Garbage"),
    ("There is too much household waste near our building", "Garbage"),

    #streetlight
    ("The streetlight near the school is not working", "Streetlight"),
    ("A lamp post has stopped working", "Streetlight"),
    ("The road becomes dark because the streetlights are off", "Streetlight"),
    ("The street lamp outside our house is broken", "Streetlight"),
    ("Several streetlights are not functioning", "Streetlight"),
    ("The light on the main street has gone out", "Streetlight"),
    ("A broken lamp post is making the area dark", "Streetlight"),
    ("The streetlight near the bus stop needs repair", "Streetlight"),
    ("There is no light on our street at night", "Streetlight"),
    ("The lamp near the market is not turning on", "Streetlight"),
    ("A streetlight has been damaged by weather", "Streetlight"),
    ("The neighborhood needs a working street lamp", "Streetlight"),
    ("The light pole near the park is not working", "Streetlight"),
    ("The street remains dark due to a faulty lamp", "Streetlight"),
    ("A street lamp is flickering and needs repair", "Streetlight"),
    ("The streetlight outside the community hall is broken", "Streetlight"),
    ("The main road has several faulty streetlights", "Streetlight"),
    ("A lamp post near the crossing has stopped working", "Streetlight"),
    ("The street lamp near the hospital is not working", "Streetlight"),
    ("The lamp post on our street needs replacement", "Streetlight"),
    ("The streetlight near the school gate has gone out", "Streetlight"),


    #drainage
    ("The drain near our house is blocked", "Drainage"),
    ("Rainwater is collecting because the drain is clogged", "Drainage"),
    ("The roadside drain is overflowing", "Drainage"),
    ("Dirty water is standing near the blocked drain", "Drainage"),
    ("The drainage channel is filled with waste", "Drainage"),
    ("Water is accumulating on the street after rain", "Drainage"),
    ("The drain needs immediate cleaning", "Drainage"),
    ("A clogged drain is causing waterlogging", "Drainage"),
    ("The open drain is full of garbage", "Drainage"),
    ("Wastewater is not flowing through the drain", "Drainage"),
    ("The drainage pipe appears to be blocked", "Drainage"),
    ("Floodwater is collecting near the roadside drain", "Drainage"),
    ("The drain outside the house is overflowing", "Drainage"),
    ("Stagnant water has formed because of poor drainage", "Drainage"),
    ("The neighborhood drain is badly clogged", "Drainage"),
    ("Rainwater cannot flow through the drainage channel", "Drainage"),
    ("The drain is overflowing onto the road", "Drainage"),
    ("Blocked drainage is causing dirty water to collect", "Drainage"),

    #other
    ("The park bench is damaged", "Other"),
    ("The community hall needs repairs", "Other"),
    ("The public playground equipment is broken", "Other"),
    ("The park gate needs to be repaired", "Other"),
    ("A bench in the public garden is broken", "Other"),
    ("The community center requires maintenance", "Other"),
    ("The public toilet needs cleaning", "Other"),
    ("The park fence has been damaged", "Other"),
    ("A playground swing is broken", "Other"),
    ("The public facility near our area needs repair", "Other"),
    ("The garden gate is damaged", "Other"),
    ("A public bench needs replacement", "Other"),
    ("The community park needs maintenance", "Other"),
    ("The playground equipment is unsafe", "Other"),
    ("The public building needs general repairs", "Other"),
    ("A damaged fence is present near the park", "Other"),
    ("The park facilities require maintenance", "Other"),
    ("The public shelter needs repair", "Other"),

        #boundary cases

    # Garbage vs Drainage
    ("The garbage bin is overflowing onto the street", "Garbage"),
    ("Overflowing garbage bags are scattered outside the house", "Garbage"),
    ("Trash is overflowing from the waste container", "Garbage"),
    ("The drain is overflowing because it is blocked", "Drainage"),
    ("Water is overflowing from the blocked roadside drain", "Drainage"),
    ("A clogged drain is causing wastewater to overflow", "Drainage"),

    # Road vs Drainage
    ("Rainwater is collecting in potholes on the damaged road", "Road"),
    ("The road is flooded because the roadside drain is blocked", "Drainage"),
    ("A damaged road has deep water-filled cracks after rain", "Road"),
    ("Blocked drainage is causing waterlogging across the street", "Drainage"),

    # Road vs Streetlight
    ("The road is dark because the streetlights are not working", "Streetlight"),
    ("The damaged road has several dangerous potholes", "Road"),
    ("A broken streetlight is making the road difficult to see at night", "Streetlight"),
    ("The road surface is badly damaged near the lamp post", "Road"),

    # Garbage vs Other
    ("The public garbage bin needs to be emptied", "Garbage"),
    ("The park bench is broken and needs repair", "Other"),
    ("Waste is accumulating beside the community center", "Garbage"),
    ("The community hall requires maintenance", "Other"),

    # Drainage vs Other
    ("The public toilet drain is blocked and wastewater is backing up", "Drainage"),
    ("The park gate needs repair", "Other"),
    ("Stagnant water is collecting around the public toilet", "Drainage"),
    ("The playground equipment is damaged", "Other"),
]

new_df = pd.DataFrame(new_data, columns=["complaint_text", "category"])

df = pd.read_csv("ml/dataset.csv")

df = pd.concat([df, new_df], ignore_index=True)

df.to_csv("ml/dataset.csv", index=False)

print("Dataset expanded successfully!")
print()
print("Total complaints:", len(df))
print()
print(df["category"].value_counts())