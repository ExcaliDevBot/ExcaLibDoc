import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ language = 'java', children, title }) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <div className="code-block mt-6 mb-8 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-slate-800 py-2 px-4 text-sm text-slate-200 font-mono border-b border-slate-700">
          {title}
        </div>
      )}
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={vs2015}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            borderRadius: title ? '0' : '0.5rem',
            fontSize: '0.9rem',
          }}
        >
          {children}
        </SyntaxHighlighter>
        
        <button
          onClick={handleCopy}
          className="copy-button"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;