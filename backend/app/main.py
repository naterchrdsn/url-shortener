from fastapi import FastAPI, Depends
from .api.routes.url_routes import router
from .config.database import init_db

app = FastAPI(
    title="URL Shortener API",
    description="Simple URL shortener service",
    version="0.0.1"
)

app.include_router(router)

init_db()

@app.get("/")
async def root():
    return {"message": f"Welcome to {app.title}"}
