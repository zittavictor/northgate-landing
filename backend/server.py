from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="NorthGate API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    message: str


@app.get("/")
def root():
    return {"status": "NorthGate API running"}


@app.get("/api/health")
def health():
    return {"status": "healthy"}


@app.post("/api/contact")
def contact(form: ContactForm):
    # In production, send email or store in DB
    return {"success": True, "message": "Thank you for reaching out!"}
