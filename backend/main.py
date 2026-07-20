
# pyrefly: ignore [missing-import]
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from generator import generate_headline

app =FastAPI()

app.add_middleware(
    app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
)

@app.get("/")
def home():
    return{
        "message":"Fake News Generator API is running!"
    }

@app.get("/headline")
def headline():
    result = generate_headline()
    return {
        "headline": result["headline"],
        "source": result["source"],
    }