import { useState } from "react"
import { axios } from "axios"

export default function hi(){
    const[image, setImage]= useState('')
    function handleImage(e){
        const inputs = document.querySelectorAll('input[type=file]');
        inputs.forEach(input=>{
          //deal with each input
          let file = input.files[0];
          //use file
        });
    }
    function handleApi(){
        const formData=new FormData()
        formData.append('image', image)
        axios.post('http://localhost:1337/api/posts',{
            "data": {
                "File":formData
            }
        }).then((res)=>{
            console.log(res)
        })
    }
    
    
    
    
    return(
        <div>
        <input type="file" name="file" onChange={handleImage}/>
        <button onClick={handleApi}> Submit </button>
        </div>
    )   
    
}