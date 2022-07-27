import React from 'react';

function Table1() {
    const thead={
      border:"1.5px solid black",
    }
    const last={
        border:"none"
    }
    const th1={
      padding:"0.6px 0.3px",
      border:"none",
      borderLeft:"1.5px solid black",
      borderRight:"1.5px solid black"
    }
    const f={
      borderTop:"1.5px solid black",
      borderBottom:"1px solid black"
    }
    const td={
      border:"none",
      borderRight:"1.5px solid black"
    }
    const t={
      border:"none",
      border:"1.5px solid  rgb(34, 195, 34)"
    }      
  return (
    <div>
        <table class="table">
        <thead>
            <tr>
                <th scope="col" style={thead}>SI<br/>No.</th>
                <th scope="col" style={thead}>Particulars</th>
                <th scope="col" style={thead}>HSN/SAC</th>
                <th scope="col" style={thead}>Amount</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td style={th1}>1</td>
                <td style={td}><b>Professional Charges</b></td>
                <td style={td}>9983</td>
                <td style={td}><b>40,000.00</b></td>
            </tr>
            <tr>
                <td style={th1}></td>
                <td style={td}>Towards Advisory & Tamil Nadu of Company</td>
                <td style={td}></td>
                <td style={td}></td>
            </tr>
            <tr>
                <td style={th1}></td>
                <td style={td}><b>Output CGST</b></td>
                <td style={td}></td>
                <td style={td}><b>3,600.00</b></td>
            </tr>
            <tr>
                <td style={th1}></td>
                <td style={td}><b>Output SGST</b></td>
                <td style={td}></td>
                <td style={td}><b>3,600.00</b></td>
            </tr>
            <tr className="padding">
                <td style={th1}></td>
                <td style={td}></td>
                <td style={td}></td>
                <td style={td}></td>
            </tr>
            <tr style={f}>
                <td style={th1}></td>
                <td style={td}>Total</td>
                <td></td>
                <td style={t}><b>Rs. 47,200.00</b></td>
            </tr>
            <tr >
                <td  colspan="2" style={last}>Amount Chargeable (in words)</td>
                <td style={last}></td>
                <td style={last}>E. & O.E</td>
            </tr>
            <tr style={last}>
                <td  colspan="2" style={last}><b>INR Forty Seven Thousand Two Hundred Only</b></td>
                <td style={last}></td>
                <td style={last}></td>
            </tr>
        </tbody>           
        </table>
    </div>
  )
}

export default Table1