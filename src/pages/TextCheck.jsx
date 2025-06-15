import React, { useState } from 'react';
import axios from 'axios';
import './TextCheck.css'; // We'll style this separately

const TextCheck = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_GATEWAY}/analyze/text`, formData);
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError('Upload failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-check-container">

      <div className="text-card">
        <input type="file" accept=".txt,.pdf" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={loading || !file}>
          {loading ? 'Analyzing...' : 'Analyze Text'}
        </button>

        {error && <div className="error">{error}</div>}

        {result && result.prediction && typeof result.probability === 'number' && (
          <pre className="result-box">
            {JSON.stringify({
              prediction: result.prediction,
              probability: result.probability.toFixed(4)
            }, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default TextCheck;
