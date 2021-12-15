import React from 'react'



import './css/editor.css'; 
const Editor = (props) => {
    const codeString = 'const str = "Hello World! " \n console.log(str + This is my first snippet);'
    const language = "javascript"
    return (
        <div className="editor">
            {props.code}
        </div>
    )
}
  
export default Editor
