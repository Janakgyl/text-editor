import React from 'react'
import { useState } from 'react'

export default function About() {

    const[mystyle,setmystyle]=useState({
        color:'black',
        backgroundColor:'white'
    })

    const[btntext,setbtntext]=useState('Enable Dark Mode')


    const ToggleMode=()=>{
        if(mystyle.color==='black'){
            setmystyle({
                color:'white',
                backgroundColor:'black'
            })

            setbtntext("Enable light Mode")
        }
        else{
            setmystyle({
                color:'black',
                backgroundColor:'white'
            })

            setbtntext("Enable Dark Mode")
        }
    }

   

  return (
    <div className="accordion my-4" id="accordionExample" >
  <div class="accordion-item" style={mystyle}>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       About TextUtiles
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>TextUtiles is a app which you can use to manipulate your text.</strong>
         <code>you</code> can perform many functionalities by using this app and manipulate your text
      </div>
    </div>
  </div>
  <div class="accordion-item" style={mystyle}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        functionalities of textutilies app
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Main Functionalities of textutilies app.</strong>  You can convert your text to uppercase or Lowercase also. you can remove extra spaces from your text if you want and also select all the text and can copy it .you can also clear your textarea by clicking on clear textarea.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={mystyle}>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Developed by-Janak Goyal
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This </strong> app is build by me  <code>Janak goyal</code>,I am doing B.Tech in cse in punjabi university patiala
      </div>
    </div>
  </div>
  <button  onClick={ToggleMode} className='btn btn-primary my-2 mx-2'>{btntext}</button>
</div>
  )
}
