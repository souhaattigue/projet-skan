import React, { useState } from 'react';
import "./ProfilePage.css";
const ProfilePage = () => {
  const [form, setForm] = useState({
    firstName: 'Md',
    lastName: 'filme!',
    email: 'rimelllll@gmail.com',
    address: 'Kingston, 5238, United State'
  });

  return (
    <div>      
      <div className="page">
        <div className="sidebar" >
          <h3 style={{fontWeight:"bold"}}>Manage My Account</h3>
          <div>My Profile</div>
          <div>Address Book</div>
          <div>My Payment Options</div>

          <h3 style={{fontWeight:"bold"}}>My Orders</h3>
          <div>My Returns</div>
          <div>My Cancellations</div>

          <h3 style={{fontWeight:"bold"}}>My Wishlist</h3>
        </div>

        {/* Main Content */}
        <div className="edit">
          <h2>Edit Your Profile</h2>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
            <div className="profile">
              <div>First Name</div>
              <input 
                value={form.firstName} 
                onChange={e => setForm({...form, firstName: e.target.value})}
              />
            </div>
            <div  >
              <div style={{display:'flex',marginTop:'15px'}}>Last Name</div>
              <input 
                value={form.lastName} 
                onChange={e => setForm({...form, lastName: e.target.value})}
              />
            </div>
          </div>

          <div style={{gap: '20px', marginBottom: '20px'}}>
            <div>Email</div>
            <input 
              value={form.email} 
              onChange={e => setForm({...form, email: e.target.value})}
            />
          </div>

          <div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>Address</div>
            <input 
              value={form.address} 
              onChange={e => setForm({...form, address: e.target.value})}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button>Cancel</button>
            <button>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;