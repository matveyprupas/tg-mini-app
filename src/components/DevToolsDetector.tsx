import { addListener } from 'devtools-detector';
import { useState } from 'react';


export const DevToolsDetector = () => {
  const [text, setText] = useState('');

  addListener(
    (isOpen) => {
      const text = isOpen ? 'open' : 'close';
      setText(text)
    }
  );
  
  return (
    <div className="">
      {text}
    </div>
  );
}