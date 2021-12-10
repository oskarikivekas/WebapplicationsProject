import React from 'react'



import './css/editor.css'; 
const Editor = () => {
    const codeString = 'const str = "Hello World! " \n console.log(str + This is my first snippet);'
    const language = "javascript"
    return (
        <div className="editor">
             tähän koodi  
        </div>
    )
}
  
export default Editor
