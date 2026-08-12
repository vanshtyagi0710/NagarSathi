def predict_priority(text):
    text = text.lower()

    high_priority_words = [
        "accident",
        "danger"
        "dangerous",
        "emergency",
        "severe",
        "injury",
        "open manhole"
    ]

    for word in high_priority_words:
        if word in text:
            return "HIGH"

    medium_priority_words = [
        "not working",
        "broken",
        "blocked",
        "leaking",
        "overflowing",
        "not available",
        "no supply"
    ]

    for word in medium_priority_words:
        if word in text:
            return "MEDIUM"
    return "LOW"

