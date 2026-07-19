
# pyrefly: ignore [missing-import]
from fastapi import FastAPI
from generator import generate_headline

app =FastAPI()

@app.get("/")
def home():
    return{
        "message":"Fake News Generator API is running!"
    }

@app.get("/headline")
def headline():
    return{
        "headline":generate_headline()
    }