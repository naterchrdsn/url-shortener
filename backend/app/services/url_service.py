from sqlalchemy.orm import Session
from backend.app.config.database import URLModel
from backend.app.utils.shortcode_generator import generate_short_code
import validators

class URLService:
    @staticmethod
    def create_short_url(db: Session, original_url: str) -> str:
        # Validate URL
        if not validators.url(original_url):
            raise ValueError("Invalid URL format")

        # Check if URL already exists
        existing_url = db.query(URLModel).filter(URLModel.original_url == original_url).first()
        if existing_url:
            return existing_url.short_code

        # Generate unique short code
        short_code = generate_short_code()
        while db.query(URLModel).filter(URLModel.short_code == short_code).first():
            short_code = generate_short_code()

        # Create new URL entry
        url_model = URLModel(
            original_url=original_url,
            short_code=short_code
        )
        db.add(url_model)
        db.commit()
        db.refresh(url_model)

        return short_code

    @staticmethod
    def get_original_url(db: Session, short_code: str) -> str:
        url = db.query(URLModel).filter(URLModel.short_code == short_code).first()
        if not url:
            raise ValueError("URL not found")

        db.commit()

        return url.original_url