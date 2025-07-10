const CitationPanel = ({ citation }) => {
   if (!citation || !citation.text || !citation.link) return null;
 
   return (
    <div className="border-l-4 border-blue-500 bg-blue-50 p-3 mb-2 rounded">
    <p className="italic text-gray-700">"{citation.text}"</p>
    <a
      href={citation.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 underline text-sm"
    >
      Source: {citation.source}
    </a>
  </div>  
   );
 };
 
 export default CitationPanel;
 