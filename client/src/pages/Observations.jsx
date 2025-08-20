import { useState } from 'react';
import axios from 'axios';

function Observations() {
  const [userInput, setUserInput] = useState('');
  const [generatedObservation, setGeneratedObservation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!userInput.trim()) {
      setError('Please enter some observation notes');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/ai', {
        userInput: userInput
      });
      
      setGeneratedObservation(response.data.observation);
    } catch (err) {
      setError('Failed to generate observation. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUserInput('');
    setGeneratedObservation(null);
    setError('');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Generate Professional Observation</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="userInput" className="block text-sm font-medium mb-2">
            Enter your raw observation notes:
          </label>
          <textarea
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="e.g., Child was building with blocks, showed persistence when tower fell down, rebuilt it 3 times..."
            className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading ? 'Generating...' : 'Generate Observation'}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </form>

      {generatedObservation && (
        <div className="bg-black-800 p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-white-800">Generated Professional Observation</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white-700">Observation:</h3>
              <p className="text-white-400 mt-1">{generatedObservation.observation}</p>
            </div>
            
            {generatedObservation.eylf_outcomes && (
              <div>
                <h3 className="font-semibold text-white-700">EYLF Learning Outcomes:</h3>
                <ul className="list-disc list-inside text-white-600 mt-1">
                  {generatedObservation.eylf_outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {generatedObservation.achievements && (
              <div>
                <h3 className="font-semibold text-white-700">How Outcomes Were Achieved:</h3>
                <p className="text-white-600 mt-1">{generatedObservation.achievements}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Observations;