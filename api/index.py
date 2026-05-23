from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

@app.get("/api/py/hello")
def hello_world():
    return {"message": "Hello from FastAPI!"}

@app.post("/api/py/contact")
def submit_contact(msg: ContactMessage):
    # In a real app, send an email or save to DB here
    return {"status": "success", "message": f"Thanks {msg.name}! Your message was received."}
