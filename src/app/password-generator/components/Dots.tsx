'use client';

import { useState, useEffect } from 'react';

export default function Dots() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (content !== '...') {
        setContent((prevState) => (prevState += '.'));
      }
    }, 200);

    return () => clearInterval(interval);
  }, [content]);

  return <span>{content}</span>;
}
