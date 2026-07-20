# 📰 Fake News Headline Generator

A fun full-stack web application that generates random and hilarious fake news headlines.

This project was built as part of my Python learning journey to understand the basics of **FastAPI**, REST APIs, and how a **React frontend** communicates with a **Python backend**.

> **Disclaimer:** All headlines are randomly generated for entertainment purposes only and do not represent real news or events.

---

## 🚀 Demo

**Live:** *[Project Live Link](https://fake-news-headline-generator-three.vercel.app/)*

## ✨ Features

* Generate random fake news headlines
* Modern React frontend
* FastAPI backend
* Responsive UI
* One-click headline generation
* Fun combinations of celebrities, politicians, cricketers, places, and random events

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Python
* FastAPI
* Uvicorn

---

## 📂 Project Structure

```text
fake-news-headline-generator/
│
├── backend/
│   ├── data.py
│   ├── generator.py
│   ├── main.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── ...
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <your-repository-url>
cd fake-news-headline-generator
```

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📚 What I Learned

While building this project, I learned:

* Python basics
* FastAPI fundamentals
* Creating REST APIs
* API routing
* Connecting React with a Python backend
* Handling CORS
* Building a simple full-stack application

---
