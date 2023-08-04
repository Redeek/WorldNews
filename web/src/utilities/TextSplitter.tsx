import React from 'react'

const TextSplitter = (text: string) => {
    
    const splittedText = text.substring(0, text.indexOf(' ', 200));


  return (splittedText)
}

export default TextSplitter