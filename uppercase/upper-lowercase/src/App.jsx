// import React, { useState } from "react";

// export default function TextConverter() {
//   const [text, setText] = useState("");

//   const handleUppercase = () => {
//     setText(text.toUpperCase());
//   };

//   const handleLowercase = () => {
//     setText(text.toLowerCase());
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-4">Text Converter</h1>

//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         rows={4}
//         placeholder="Enter your text here"
//         className="w-full max-w-md p-3 border rounded-md mb-4"
//       />

//       <div className="flex space-x-4 mb-4">
//         <button
//           onClick={handleUppercase}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           To Uppercase
//         </button>
//         <button
//           onClick={handleLowercase}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           To Lowercase
//         </button>
//       </div>

//       <div className="w-full max-w-md p-4 bg-white border rounded shadow">
//         <h2 className="font-semibold mb-2">Converted Text:</h2>
//         <p className="whitespace-pre-wrap">{text}</p>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";

export default function TextConverterTask() {
  const [text, setText] = useState("");
  const [realTimeUppercase, setRealTimeUppercase] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    if (realTimeUppercase) {
      setText(input.toUpperCase());
    } else {
      setText(input);
    }
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleReset = () => {
    setText("");
    setRealTimeUppercase(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Text Case Converter Task</h1>

      <textarea
        value={text}
        onChange={handleChange}
        rows={4}
        placeholder="Type your text here..."
        className="w-full max-w-md p-3 border rounded-md mb-4 resize-none"
      />

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleUppercase}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          To Uppercase
        </button>
        <button
          onClick={handleLowercase}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          To Lowercase
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        <label className="flex items-center space-x-2 ml-4">
          <input
            type="checkbox"
            checked={realTimeUppercase}
            onChange={() => setRealTimeUppercase(!realTimeUppercase)}
          />
          <span>Real-time Uppercase</span>
        </label>
      </div>

      <div className="w-full max-w-md bg-white p-4 border rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Converted Output:</h2>
        <p className="whitespace-pre-wrap">{text}</p>
      </div>

      <div className="w-full max-w-md mt-4 bg-white p-4 border rounded shadow">
        <h2 className="text-lg font-semibold mb-2">CSS Text Transform (visual only)</h2>
        <p className="uppercase text-gray-600">{text}</p>
      </div>
    </div>
  );
}
