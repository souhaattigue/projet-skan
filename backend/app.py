# ============================================
# IMPORTS - Bringing in the tools we need
# ============================================
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas import UserBase, PasswordChange, User

# ============================================
# CREATE THE APP
# ============================================
# This creates our FastAPI application
# Think of it like creating a new website/server
app = FastAPI(title="User Profile API")

# ============================================
# CORS SETUP - Allow React to talk to our API
# ============================================
# CORS = Cross-Origin Resource Sharing
# This lets your React app (running on port 5173) talk to this API (running on port 8000)
# Without this, browsers block the connection for security reasons
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your React app address
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, PATCH, etc.)
    allow_headers=["*"],  # Allow all headers
)

# ============================================
# FAKE DATABASE - Temporary storage
# ============================================
# This is a simple dictionary acting as our database
# In a real app, you'd use PostgreSQL, MySQL, MongoDB, etc.
# For now, this helps us test without setting up a real database
fake_users_db = {
    1: {  # User ID 1
        "id": 1,
        "firstName": "Md",
        "lastName": "Rimel",
        "email": "rimel1111@gmail.com",
        "address": "Kingston, 5236, United State"
    }
}

# ============================================
# ENDPOINT 1: Home / Health Check
# ============================================
# URL: http://127.0.0.1:8000/
# Method: GET
# Purpose: Check if the API is running
@app.get("/")
def read_root():
    """Simple endpoint to check if API is working"""
    return {"message": "User Profile API", "version": "1.0"}

# ============================================
# ENDPOINT 2: Get User Profile
# ============================================
# URL: http://127.0.0.1:8000/api/users/1
# Method: GET
# Purpose: Fetch a user's profile information
# Example: When ProfilePage loads, it calls this to get user data
@app.get("/api/users/{user_id}", response_model=User)
def get_user(user_id: int):
    """
    Get user profile by ID
    
    Args:
        user_id: The ID of the user (from URL)
    
    Returns:
        User object with id, firstName, lastName, email, address
    """
    # Check if user exists in our fake database
    if user_id not in fake_users_db:
        # If not found, return 404 error
        raise HTTPException(status_code=404, detail="User not found")
    
    # Return the user data
    return fake_users_db[user_id]

@app.patch("/api/users/{user_id}", response_model=User)
def update_profile(user_id: int, user_data: UserBase):
    """
    Update user profile
    
    Args:
        user_id: The ID of the user (from URL)
        user_data: New profile data (firstName, lastName, email, address)
    
    Returns:
        Updated user object
    """
    # Check if user exists
    if user_id not in fake_users_db:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Update the user's data in our fake database
    # .update() merges the new data with existing data
    fake_users_db[user_id].update({
        "firstName": user_data.firstName,
        "lastName": user_data.lastName,
        "email": user_data.email,
        "address": user_data.address
    })
    
    # Return the updated user data
    return fake_users_db[user_id]

# ============================================
# ENDPOINT 4: Change Password
# ============================================
# URL: http://127.0.0.1:8000/api/users/1/change-password
# Method: POST
# Purpose: Change user's password
# Receives: currentPassword, newPassword, confirmPassword
# Returns: Success message
@app.post("/api/users/{user_id}/change-password")
def change_password(user_id: int, password_data: PasswordChange):
    """
    Change user password
    
    Args:
        user_id: The ID of the user (from URL)
        password_data: Object with currentPassword, newPassword, confirmPassword
    
    Returns:
        Success message
    """
    # Check if user exists
    if user_id not in fake_users_db:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Make sure new password and confirm password match
    if password_data.newPassword != password_data.confirmPassword:
        raise HTTPException(status_code=400, detail="New passwords do not match")
    
    # TODO: In a real app, you would:
    # 1. Verify currentPassword is correct (check against hashed password in DB)
    # 2. Hash the newPassword (never store plain text passwords!)
    # 3. Save the hashed password to the database
    
    # For now, just return success
    return {
        "message": "Password updated successfully",
        "user_id": user_id
    }

# ============================================
# RUN THE SERVER
# ============================================
# This runs when you execute: python app.py
# It starts the server on http://127.0.0.1:8000
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
