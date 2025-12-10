from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/")
def read_book():
    html_content = """
    <html>
        <head>
            <title>Physical AI & Humanoid Robotics</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px; }
                h1 { color: #2c3e50; }
                p { font-size: 18px; color: #34495e; }
            </style>
        </head>
        <body>
            <h1>Welcome to the Book!</h1>
            <p>This is your book page content with simple styling.</p>
        </body>
    </html>
    """
    return HTMLResponse(content=html_content)
