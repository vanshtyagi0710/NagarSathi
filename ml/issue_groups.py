import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# Load existing complaints
df = pd.read_csv("dataset.csv")
complaints = df["complaint_text"].astype(str).tolist()


# Convert complaints into TF-IDF vectors
vectorizer = TfidfVectorizer(
    lowercase=True,
    ngram_range=(1, 2)
)

complaint_vectors = vectorizer.fit_transform(complaints)


def find_similar_complaint(new_complaint, threshold=0.50):
    """
    Find the most similar existing complaint.
    """

    new_vector = vectorizer.transform([new_complaint])

    similarities = cosine_similarity(
        new_vector,
        complaint_vectors
    )[0]

    best_index = similarities.argmax()
    best_score = similarities[best_index]

    if best_score >= threshold:
        return {
            "similar": True,
            "complaint": complaints[best_index],
            "similarity": float(best_score),
            "category": df.iloc[best_index]["category"]
        }

    return {
        "similar": False,
        "complaint": None,
        "similarity": float(best_score),
        "category": None
    }


def count_similar_complaints(new_complaint, threshold=0.50):
    """
    Count how many existing complaints are similar
    to the new complaint.
    """

    new_vector = vectorizer.transform([new_complaint])

    similarities = cosine_similarity(
        new_vector,
        complaint_vectors
    )[0]

    similar_indices = [
        i for i, score in enumerate(similarities)
        if score >= threshold
    ]

    return {
        "report_count": len(similar_indices),
        "similar_complaints": [
            complaints[i] for i in similar_indices
        ]
    }


def calculate_final_score(report_count, ai_priority):
    """
    Combine report frequency with AI-predicted priority.
    """

    severity_score = {
        "HIGH": 3,
        "MEDIUM": 2,
        "LOW": 1
    }

    severity = severity_score.get(
        ai_priority.upper(),
        1
    )

    final_score = report_count * severity

    return final_score


def get_final_priority(score):
    """
    Convert the final numerical score into a priority level.
    """

    if score >= 9:
        return "HIGH"

    elif score >= 4:
        return "MEDIUM"

    else:
        return "LOW"