import joblib
from priority import predict_priority


# Load trained model and vectorizer
model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")


def predict_category(text):
    """
    Predict the category of a complaint.
    """
    text_tfidf = vectorizer.transform([text])
    prediction = model.predict(text_tfidf)

    return prediction[0]


def analyze_complaint(text):
    """
    Return both category and AI priority.
    """
    category = predict_category(text)
    priority = predict_priority(text)

    return {
        "category": category,
        "priority": priority
    }