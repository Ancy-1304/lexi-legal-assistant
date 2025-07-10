import { useState } from 'react';
import InputPanel from './components/InputPanel';
import AnswerPanel from './components/AnswerPanel';

function App() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [citations, setCitations] = useState([]);

  const handleSubmit = (question) => {
    const trimmed = question.trim();

    if (!trimmed) {
      setAnswer('');
      setCitations([]);
      return;
    }

    setLoading(true);

    const q = trimmed.toLowerCase();
    let response;

    if (q.includes("motor") || q.includes("accident")) {
      response = {
        answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
        citations: [
          {
            text: "As the age of the deceased at the time of accident was held to be about 54–55 years...",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://example.com/Dani_Devi_v_Pritam_Singh.pdf"
          }
        ]
      };
    } else if (q.includes("divorce")) {
      response = {
        answer: "According to the Hindu Marriage Act, divorce can be filed under several grounds...",
        citations: [
          {
            text: "Cruelty is one of the common grounds under Section 13(1)(i-a)...",
            source: "Divorce_Law_Case.pdf",
            link: "https://example.com/Divorce_Law_Case.pdf"
          }
        ]
      };
    } else {
      response = {
        answer: "Sorry, I don't have an answer for that legal query.",
        citations: []
      };
    }

    setTimeout(() => {
      setAnswer(response.answer);
      setCitations(response.citations);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6 sm:p-10 font-sans">
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Lexi Legal Assistant
      </h1>
      <InputPanel onSubmit={handleSubmit} loading={loading} />
      {answer && <AnswerPanel answer={answer} citations={citations} />}
    </div>
  </div>  
  );
}

export default App;

