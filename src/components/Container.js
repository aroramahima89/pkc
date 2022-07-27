import React from 'react'

function Container() {
    const container={
        display:"flex"
    }
    const left={
        width:"40%",
        flex:"1"
    }
    const right={
        float:"right",
        width:"40%",
        flex:"1"
    }

    const p={
        border:"2px solid  rgb(34, 195, 34)",
        width:"28%",
        marginLeft:"20%"
    }
    const i1={
        border:"2px solid  rgb(34, 195, 34)",
        width:"70%"
    }
    const i2={
        border:"2px solid  rgb(34, 195, 34)",
        width:"14%"
    }
    const float={
        float:"right"
    }
    const sign={
        border:"2px solid green",
        width:"40%"
    }

  return (
    <>
 <div style={container}>
    <div style={left}>
        <p>Company's GSTIN/UIN   : <b>33AACFF9685L1ZW</b></p>
        <p>Company's PAN         : <b>AACFF9685L</b></p>
    </div>
    <div style={right}>
        <p>Company's Bank Details</p>
        <p>Bank Name         :<input type="text" id="bankname" style={i1}/></p>
        <p>A/c No.           :<b>602505062526</b></p>
        <p>Branch & IFSC Code:Puraswalkam, Chennai & ICIC0006025</p>   
        <div style={float}>
        <p><b>for <input type="text" style={i2}/>Management Consulting</b></p>
        <img src="sign.png" alt="sign"/>
        <p style={sign}>Authorized Signatory</p> 
        </div>    
    </div>
    </div>
    <p style={p}>This is a Computer Generated Invoice.</p>
    </>
   
    
  )
}

export default Container