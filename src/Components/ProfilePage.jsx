import React, { useState } from 'react';
import "./ProfilePage.css";
const ProfilePage = () => {
  const [form, setForm] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  return (
    <div>
      <div className="page">
        <div className="sidebar" >
          <h3 style={{ fontWeight: "bold" }}>Manage My Account</h3>
          <div>My Profile</div>
          <div>Address Book</div>
          <div>My Payment Options</div>

          <h3 style={{ fontWeight: "bold" }}>My Orders</h3>
          <div>My Returns</div>
          <div>My Cancellations</div>

          <h3 style={{ fontWeight: "bold" }}>My Wishlist</h3>
        </div>

        {/* Main Content */}
        <div className="edit">
          <h2>Edit Your Profile</h2>

          {/* First Name and Last Name in one row */}
          <div className="form-row">
            <div className="form-field">
              <label>First Name</label>
              <input
                type="text"
                value={form.firstName}
                onChange={e => setForm({ ...form, firstName: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <input
                type="text"
                value={form.lastName}
                onChange={e => setForm({ ...form, lastName: e.target.value })}
              />
            </div>
          </div>

          {/* Email and Address in one row */}
          <div className="form-row">
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label>Address</label>
              <input
                type="text"
                value={form.address}
                onChange={e => setForm({ ...form, address: e.target.value })}
              />
            </div>
          </div>

          {/* Password Changes Section */}
          <div className="password-section">
            <label>Password Changes</label>
            <input
              type="password"
              placeholder="Current Password"
              value={form.currentPassword}
              onChange={e => setForm({ ...form, currentPassword: e.target.value })}
            />
            <input
              type="password"
              placeholder="New Password"
              value={form.newPassword}
              onChange={e => setForm({ ...form, newPassword: e.target.value })}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={form.confirmPassword}
              onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
            />
          </div>

          {/* Buttons */}
          <div className="button-row">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;