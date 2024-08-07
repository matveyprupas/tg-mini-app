import { addListener } from 'devtools-detector';
import { useState } from 'react';


export const DevToolsDetector = () => {
  const [text, setText] = useState('');

  addListener(
    (isOpen) =>
      setText(isOpen
        ? 'devtools status: open'
        : 'devtools status: close')
  );  
  
  return (
    <div className="">
      {text}
    </div>
  );
}