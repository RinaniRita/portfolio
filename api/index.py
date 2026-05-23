import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException
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
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = os.environ.get("EMAIL_USER")
    sender_password = os.environ.get("EMAIL_APP_PASSWORD")
    
    # Send to the same email that is configured
    recipient_email = "minhhsgs.1@gmail.com"

    if not sender_email or not sender_password:
        # If env variables are not set, just simulate success so the frontend doesn't break
        # while the user is still configuring Vercel.
        print("Warning: Email credentials not set. Simulating success.")
        return {"status": "success", "message": "Simulated success. Set EMAIL_USER and EMAIL_APP_PASSWORD to send actual emails."}

    try:
        # Create the email message
        message = MIMEMultipart("alternative")
        message["Subject"] = f"New Portfolio Contact from {msg.name}"
        message["From"] = sender_email
        message["To"] = recipient_email

        text = f"""
        You have received a new message from your portfolio website!
        
        Name: {msg.name}
        Email: {msg.email}
        
        Message:
        {msg.message}
        """
        
        part = MIMEText(text, "plain")
        message.attach(part)

        # Connect to Gmail SMTP server
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, recipient_email, message.as_string())

        return {"status": "success", "message": f"Thanks {msg.name}! Your message was sent."}
    except Exception as e:
        print(f"Failed to send email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email.")
