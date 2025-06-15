import React, { useState } from 'react';
import axios from 'axios';

const ImageCheck = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(import.meta.env.VITE_IMAGE_API, formData);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setResult({ error: 'Failed to analyze image' });
    }
  };

  return (
    <div className="page">
      <h2>Analyze Image File</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Analyze</button>
      </form>
      {result && <div className="result-card"><pre>{JSON.stringify(result, null, 2)}</pre></div>}
    </div>
  );
};

export default ImageCheck;
