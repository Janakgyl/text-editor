import React from 'react'

export default function Alert(props) {

    //To capitalize first letter of word
    const capitalize=(word)=>{
        let text=word.toLowerCase();
        return text.charAt(0).toUpperCase()+text.slice(1)
    }


  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
    
  </div>
  )
}
