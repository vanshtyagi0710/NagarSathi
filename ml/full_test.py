from issue_groups import (
    find_similar_complaint,
    count_similar_complaints,
    calculate_final_score,
    get_final_priority
)

from predict import predict_category
from priority import predict_priority
from hotspots import get_hotspots


# Test complaint
test_complaint = "There is a deep pothole near the College Gate."

# Test location
location = "College Gate"


print("========================================")
print("       NAGARSATHI COMPLETE TEST")
print("========================================")
print()


# ----------------------------------------
# 1. CATEGORY
# ----------------------------------------

category = predict_category(test_complaint)

print("New Complaint:", test_complaint)
print("Category:", category)
print()


# ----------------------------------------
# 2. SIMILAR COMPLAINT
# ----------------------------------------

result = find_similar_complaint(test_complaint)

if result["similar"]:
    print("Similar Complaint:", result["complaint"])
    print("Similarity:", result["similarity"])
else:
    print("No similar complaint found.")
    print("Highest Similarity:", result["similarity"])

print()


# ----------------------------------------
# 3. REPORT COUNT
# ----------------------------------------

frequency = count_similar_complaints(test_complaint)

report_count = frequency["report_count"]

print("Report Count:", report_count)
print()


# ----------------------------------------
# 4. AI PRIORITY
# ----------------------------------------

ai_priority = predict_priority(test_complaint)

print("AI Priority:", ai_priority)
print()


# ----------------------------------------
# 5. FINAL PRIORITY SCORE
# ----------------------------------------

final_score = calculate_final_score(
    report_count,
    ai_priority
)

print("Final Priority Score:", final_score)


# ----------------------------------------
# 6. FINAL PRIORITY
# ----------------------------------------

final_priority = get_final_priority(final_score)

print("Final Priority:", final_priority)
print()


# ----------------------------------------
# 7. LOCATION HOTSPOT
# ----------------------------------------

hotspots = get_hotspots()

print("Location:", location)

for hotspot in hotspots:

    if hotspot["location"].lower() == location.lower():

        print("Location Reports:", hotspot["report_count"])
        print("Hotspot Level:", hotspot["hotspot_level"])

        break

else:
    print("Location not found in hotspot data.")


print()
print("========================================")
print("             TEST COMPLETE")
print("========================================")