from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.config.database import get_db, URLModel
from backend.app.services.url_service import URLService
from backend.app.config.settings import settings

router = APIRouter(tags=["urls"])

@router.post("/shorten", response_model=dict)
def create_short_url(url: dict, db: Session = Depends(get_db)):
    try:
        short_code = URLService.create_short_url(db, url["original_url"])
        shortened_url = f"{settings.BASE_URL}/{short_code}"

        return {"shortened_url": shortened_url, "short_code": short_code}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/{short_code}")
def get_full_url(short_code: str, db: Session = Depends(get_db)):
    try:
        url_model = db.query(URLModel).filter_by(short_code=short_code).first()

        if url_model is None:
            raise HTTPException(status_code=404, detail="URL not found")

        return url_model
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))