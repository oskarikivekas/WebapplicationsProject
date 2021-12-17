import './css/editor.css'; 


const Editor = (props) => {
    return (
       /* Add highlighting */
        <div className="editor">   
            {props.code}
        </div>
    )
}
  
export default Editor
