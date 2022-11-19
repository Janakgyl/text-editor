import React,{useState}from 'react'

export default function Textform(props) {
    const[text,setText]=useState("enter your text");

    const ChangeHandler=(event)=>{
        setText(event.target.value)

    }

    const ChangeToUpper=()=>{

        let newtext=text.toUpperCase();
        setText(newtext)  //text can be updated only by using settext not manually like text="can not be changed"
        props.showalert("Text changed to Uppercase","success")

    }

    const ChangeToLower=()=>{

        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("Text changed to Lowercase","success")



    }

    const CopyText=()=>{
      
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied","success")

    }

    const handleExtraSpace=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("Extra spaces has been removed","success")
      
    }

    const ClearTextarea=()=>{
        setText('')
        props.showalert("Textarea set to be empty","danger")
    }

    
  return (
   <>
   <div className="mb-3" >
    <h1>{props.heading}</h1>
    <textarea className="form-control"  value={text} onChange={ChangeHandler} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="mybox" rows="10"></textarea>
    <button className='btn btn-success my-2 mx-1' onClick={ChangeToUpper}>Change to Uppercase</button>
    <button className='btn btn-danger my-2 mx-1' onClick={ChangeToLower}>Change to Lowercase</button>
    <button className='btn btn-secondary my-2 mx-1' onClick={CopyText}>Copy Text</button>
    <button className='btn btn-warning my-2 mx-1' onClick={handleExtraSpace}>Remove Extra space</button>
    <button className='btn btn-primary my-2 mx-1' onClick={ClearTextarea}>Clear textarea</button>
  
  </div>

  <div className="container">
    <h1>Your Text Summary</h1>
    <h4>You have {text.split(" ").length>0?text.split(" ").length:0} words and {text.length} characters in your textbox</h4>
    <p>You will take {0.08* text.split(" ").length} minutes to read this</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"<---Enter something in textarea to preview here--->"}</p>
  </div>

 
   </>
  )
}
