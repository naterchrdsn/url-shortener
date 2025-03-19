import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Settings:
    BASE_URL = os.getenv("BASE_URL", "http://localhost:8000")
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/urlshortener")
    ENVIRONMENT = os.getenv("ENVIRONMENT", "development")
    DEBUG = ENVIRONMENT == "development"

settings = Settings()