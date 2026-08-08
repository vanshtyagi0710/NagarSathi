from fastapi import FastAPI

app = FastAPI(title="NagarSathi API")


@app.get("/")
def home():
    return {
        "message": "Welcome to NagarSathi API"
    }