import React, { useState } from 'react';
import axios from 'axios';

const VideoCheck = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(import.meta.env.VITE_VIDEO_API, formData);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setResult({ error: 'Failed to analyze video' });
    }
  };

  return (
    <div className="page">
      <h2>Analyze Video File</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Analyze</button>
      </form>
      {result && <div className="result-card"><pre>{JSON.stringify(result, null, 2)}</pre></div>}
    </div>
  );
};

export default VideoCheck;
