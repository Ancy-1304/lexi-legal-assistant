import { useState } from 'react';

const InputPanel = ({ onSubmit, loading }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    onSubmit(question); 
  };

  return (
    <div className="mb-6">
      <textarea
  rows="4"
  className="w-full p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
  placeholder="Type your legal query here..."
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
/>

<button
  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
  onClick={handleSubmit}
  disabled={loading}
>
  {loading ? 'Loading...' : 'Submit'}
</button>
    </div>
  );
};

export default InputPanel;
