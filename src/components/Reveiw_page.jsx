import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Reveiw_Page.css';
import axios from 'axios';


const CodeReviewComponent = () => {
  const [code, setCode] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);


const handleReviewCode = () => {
  setIsLoading(true);
  axios.post('http://localhost:8000/reveiw', {  
    prompt: code
  })
  .then((res) => {
    setAiResponse(res.data);
    setIsLoading(false);
  })
  .catch((error) => {
    console.error(error);
    setIsLoading(false);
  });
};




  return (
    <div className="code-review-container">
      <div className="panel code-panel">
        <div className="panel-header">
          <h2>Your Matrix Problem</h2>
        </div>
        <textarea
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your matrix question here... (e.g., 'Find the determinant of [[1,2],[3,4]]' or 'Multiply matrices A and B')"
        />
        <button 
          className="review-button" 
          onClick={handleReviewCode}
          disabled={isLoading || !code.trim()}
        >
          {isLoading ? 'Calculating...' : 'Solve Matrix'}
        </button>
      </div>
      
      <div className="panel response-panel">
        <div className="panel-header">
          <h2>AI Solution</h2>
        </div>
        <div className="response-content">
          {aiResponse ? (
            <ReactMarkdown>{aiResponse}</ReactMarkdown>
          ) : (
            <p className="placeholder-text">AI solution will appear here after you submit your matrix problem...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeReviewComponent;