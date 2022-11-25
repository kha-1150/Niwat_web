import React from "react";
import { useState } from "react";
import  { Button,Form}  from "react-bootstrap";

function Bisection () {

    const [fx,setfx] = useState(" ");
    const [xr,setxr] = useState(" ");
    const [xl,setxl] = useState(" ");
    const [ans,setans] = useState(" ");
    const [Error,seterror] = useState(" ");

    const Submit =()=>{
        
        var x=0,xo,fxm,fxr,xm,ans,error=1,a,XL,XR;
        XL= Number(xl);
            XR= Number(xr); 
        do{
            xm=(XL+XR)/2;
            x=xm;
            fxm=eval(fx);
            x=XR;
            fxr=eval(fx);
            a=fxm*fxr;
            if (a<0){

                xo=XL;
                XL=xm;
                
            }
            else{
                xo=XR;
                XR=xm;
            }
        
            error=Math.abs((xm-xo)/xm)*100;
        }
        while(error>0.000001);
        ans=xm.toFixed(6);
        var percent=error.toFixed(6);
        setans(ans);
        seterror(percent);
    }

   
return(
    <>
    <div className=" text-center">
        <h1 >Bisection</h1>
            <Form>
                
                <Form.Group className="mb-3 "  >      
                    <Form.Label className="text-center">input FX XL and XR </Form.Label><br/>
                    <Form.Control id ="FX"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="FX"  onChange={event => setfx(event.target.value)}/>  
                    <Form.Control id ="XR"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="XR"  onChange={event => setxr(event.target.value)}/> 
                    <Form.Control id ="XL"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="XL"  onChange={event => setxl(event.target.value)}/> 
                <Button className="btn-dark " onClick={Submit}>
                        Submit
                </Button>
                </Form.Group>
            </Form>

                
            <div className=" text-center p-5 " id="ans">
                
                Ans : {ans} | Error :  {Error}%
            
            </div>
        </div>
        
    </>
)




}

export default Bisection;