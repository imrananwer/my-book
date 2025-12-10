from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="RAG Chatbot for Physical AI Book")

class Query(BaseModel):
    question: str

@app.get("/")
async def root():
    return {"message": "RAG Chatbot is running"}

@app.post("/ask")
async def ask_question(query: Query):
    # Placeholder: yahan RAG logic implement hoga
    answer = f"Received question: {query.question}"
    return {"answer": answer}
