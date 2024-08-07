import { addListener, launch } from 'devtools-detector';
import { useEffect, useState } from 'react';


export const DevToolsDetector = () => {
  const [text, setText] = useState('');

  
  useEffect(() => {
    addListener(
      (isOpen) => {
        const text = isOpen ? 'open' : 'close';
        setText(text)
      }
    );
    launch();
  })

  console.log(text);
  
  return (
    <div className="">
      <p>Static text</p>
      <p>{text}</p>
      {text}
    </div>
  );
}