import pandas as pd
import joblib
from sklearn.metrics.pairwise import cosine_similarity

dataset = pd.read_csv("ml/dataset.csv")
vectorizer = joblib.load("ml/vectorizer.pkl")

def find_duplicate(new_complaint):
    existing_complaints = dataset["complaint_text"].tolist()

    all_complaints = existing_complaints + [new_complaint]

    tfidf_vectors = vectorizer.transform(all_complaints)

    new_vector = tfidf_vectors[-1]
    existing_vectors = tfidf_vectors[:-1]

    similarities = cosine_similarity(new_vector, existing_vectors)[0]

    best_match_index = similarities.argmax()
    best_similarity = similarities[best_match_index]

    return {
        "complaint": existing_complaints[best_match_index],
        "similarity": best_similarity
    }

result = find_duplicate("Huge pothole near the college gate")

print("Closest complaint:", result["complaint"])
print("Similarity:", result["similarity"])