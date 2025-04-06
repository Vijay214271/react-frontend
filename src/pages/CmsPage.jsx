import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CmsPage = () => {
  const [headline, setHeadline] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch existing headline from backend
    axios.get(`${import.meta.env.VITE_APP_API_URL}`)
      .then(res => setHeadline(res.data.headline)) // ✅ Fixed typo here
      .catch(err => console.error(err));
  }, []);

  const handleSave = () => {
    axios.post(`${import.meta.env.VITE_APP_API_URL}`, { headline })
      .then(() => {
        alert("Headline updated successfully!");
        setIsEditing(false); // exit edit mode
      })
      .catch(err => alert("Error updating headline."));
  };

  return (
    <div className="container mt-5 p-4 rounded shadow bg-light" style={{ maxWidth: '600px' }}>
      <h4 className="mb-3">Headline</h4>
      <textarea
        className="form-control mb-3"
        value={headline}
        readOnly={!isEditing}
        rows={3}
        onChange={(e) => setHeadline(e.target.value)}
      />
      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-secondary"
          onClick={() => setIsEditing(prev => !prev)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button className="btn btn-primary" onClick={handleSave} disabled={!isEditing}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CmsPage;
