import React from "react";
import { useState } from "react";
import  { Button,Form}  from "react-bootstrap";




function OnePointiteration () {
    const [fx,setfx] = useState(" ");
    const [x1,setx1] = useState(" ");
    const [ans,setans] = useState(" ");
    

    const Submit =()=>{
        
        var x=0,xone,ans,x2,error=1;       
        xone =Number(x1);
      while(Math.abs(x)>0.000001){
            x2=eval(fx);
            xone=x;

      
      }
        ans=xone;
        setans(x);

  }
        
    

   
return(
    <>
    <div className=" text-center">
        <h1 >One Point iteration</h1>
            <Form>
                
                <Form.Group className="mb-3 "  >      
                    <Form.Label className="text-center">input  XL and XR </Form.Label><br/> 
                    <Form.Control id ="FX"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="FX"  onChange={event => setfx(event.target.value)}/>
                    <Form.Control id ="X1"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="X1"  onChange={event => setx1(event.target.value)}/> 
                    
                <Button className="btn-dark " onClick={Submit}>
                        Submit
                </Button>
                </Form.Group>
            </Form>

                
            <div className=" text-center p-5">
                
                Ans : {ans} 

            
            </div>
        </div>
        
    </>
)




}

export default OnePointiteration ;