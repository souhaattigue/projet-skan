from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    address: str
class PasswordChange(BaseModel):
    currentPassword: str
    newPassword: str
    confirmPassword: str

class User(UserBase):
    id: int
    
    class Config:
        from_attributes = True  # Allows compatibility with ORM models
