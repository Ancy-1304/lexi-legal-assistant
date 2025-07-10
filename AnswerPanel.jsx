import CitationPanel from './CitationPanel';

const AnswerPanel = ({ answer, citations }) => {
  if (!answer) return null;

  return (
    <div className="bg-green-50 border border-green-300 p-4 rounded-lg shadow mt-6">
    <h2 className="text-lg font-semibold mb-2 text-green-700">Answer</h2>
    <p className="mb-4 text-gray-800">{answer}</p>
  
    {citations.length > 0 && (
      <div>
        <h3 className="text-md font-semibold text-green-600 mb-2">Citations</h3>
        {citations.map((citation, index) => (
          <CitationPanel key={index} citation={citation} />
        ))}
      </div>
    )}
  </div>  
  );
};

export default AnswerPanel;
