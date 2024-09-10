import React, {useState} from 'react'


export default function TextForm(props) {
    const handleupClick=()=>{
        let newText = Text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to lowerrCase!","success")

    }
    const handleloClick=(props)=>{
        let newText = Text.toLowerCase();
        // props.showAlert("Converted to UpperCase!","success")

        setText(newText)
    }
    const handleonchange=(event)=>{
       setText(event.target.value)
    }
    const handlecolorClick=()=>{
        
        let vowels =["a","e","i","o"]
        for(let i=0;i<vowels.length;i++){
        // if(Text.includes(vowels[i])){
        if(Text.includes(vowels[i])){
           alert("vowels are present")
            
        }}
        
    }
    const [Text , setText]=useState(" ");
    return (
        <>
        <div>
            <h1>
                {props.Heading} 
            </h1>
            <div className="mb-3">
                <textarea value={Text} onChange={handleonchange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleupClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handlecolorClick}>Chane font color</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{Text.split(" ").length} words , {Text.length} characters</p>
        </div>
        
        </>
    )
}
