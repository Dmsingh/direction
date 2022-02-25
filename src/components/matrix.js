import React,{useState,useEffect} from 'react'
import './style.css'

function Matrix() {
    const [counter, setcounter] = useState(1)
    const [box1, setbox1] = useState("")
    const [box2, setbox2] = useState("")
    const [click, setclick]  = useState(0)

    
    
    const changehandler =(e)=>{
        if(click===0 || click===2){
            alert("box",box1)
            try{
                document.getElementById(`div${e.target.id}`).style.backgroundColor='red'
                document.getElementById(`${e.target.id}`).style.color='white'
                document.getElementById(`${e.target.id}`).innerHTML=`${counter}`
            }catch(e){
                
                console.log(e,'try')
            }
            

          
            
    
            
            if(box1)
            {
                
                try{
                    document.getElementById(`div${box1}`).style.backgroundColor='blue'

                }
                catch(e){
                    
                    console.log(e,'try')
                }

            }
            
            
            setbox1(`${e.target.id}`)
            
            setclick(2)
            const count=counter+1
        
            setcounter(count)

        }
        if(click===1){
            document.getElementById(`div${e.target.id}`).style.backgroundColor='red'
            document.getElementById(`${e.target.id}`).style.color='white'
            document.getElementById(`${e.target.id}`).innerHTML=`${counter}`
        

            if(box2 )
            {
                
                try{
                    document.getElementById(`div${box1}`).style.backgroundColor='blue'

                }
                catch(e){
                    
                    console.log(e,'try')
                }

            }
            
            setbox2(`${e.target.id}`)
            setclick(1)
            setcounter(counter+1)

        }
    }
  return (
    <div id="container">
        <div style={{display: 'flex', }}>
        <div onClick={(e)=>{changehandler(e)}} id="div1" class="box">
    <p id="1" class="contents">1</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div2" class="box">

    <p id="2" class="contents">2</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div3" class="box">

    <p id="3" class="contents">3</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div4" class="box">

    <p id="4" class="contents">4</p>
  </div>
        </div>
  

        <div style={{display: 'flex', }}>
        <div onClick={(e)=>{changehandler(e)}} id="div4" class="box">
    <p id="5" class="contents">5</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div6" class="box">

    <p id="6" class="contents">6</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div7" class="box">

    <p id="7" class="contents">7</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div8" class="box">

    <p id="8" class="contents">8</p>
  </div>
        </div>

        <div style={{display: 'flex', }}>
  <div onClick={(e)=>{changehandler(e)}} id="div9" class="box">
    <p id="9" class="contents">9</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div10" class="box">

    <p id="10" class="contents">10</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div11" class="box">

    <p id="11" class="contents">11</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div12" class="box">

    <p id="12" class="contents">12</p>
  </div>
        </div>

        <div style={{display: 'flex', }}>
<div onClick={(e)=>{changehandler(e)}} id="div13" class="box">
    <p id="13" class="contents">13</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div14" class="box">

    <p id="14" class="contents">14</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div15" class="box">

    <p  id="15" class="contents">15</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div16" class="box">

    <p id="16" class="contents">16</p>
  </div>
        </div>
</div>
  )
}

export default Matrix