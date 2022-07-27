import React from 'react';
import './Table2.css';

function Table2() {
  const style1={
    border:"1px solid blue",
    borderBottom:"1px solid black",
    borderCollapse:"collapse",
    
  }
  const style2={
    border:"1px solid rgb(34, 195, 34)",
    borderBottom:"1px solid black",
    borderCollapse:"collapse"
  }
  const style3={
    border:"1.5px solid yellow",
    borderBottom:"1px solid black",
    borderCollapse:"collapse" 
  }
  return (
    <div>
     <table class="table">
  <tbody>
    <tr>
      <td rowspan="2" colspan="2" style={style3}>HSN/SAC</td>
      <td rowspan="2"  colspan="2" style={style1}>Taxable<br/>Value</td>
      <td  colspan="2" style={style2}>Central Tax</td>
      <td  colspan="2" style={style2}>State Tax</td>
      <td rowspan="2"  colspan="2" style={style1}>Total<br/>Tax Amount</td>
    </tr>
    <tr>
      <td colspan="1" className="g1">Rate</td>
      <td colspan="1" className="g2">Amount</td>
      <td colspan="1" className="g1">Rate</td>
      <td colspan="1" className="g2">Amount</td>
      
    </tr>
    <tr>
      <td colspan="2" className="yellow">9983</td>
      <td colspan="2" className="blue">40,000.00</td>
      <td colspan="1" className="g1">9%</td>
      <td colspan="1" className="g2">3,600.00</td>
      <td colspan="1" className="g1">9%</td>
      <td colspan="1" className="g2">3,600.00</td>
      <td colspan="2" className="blue">7,200.00</td>
    </tr>
    <tr>
      <td colspan="2" className="yellow y"><b>Total</b></td>
      <td colspan="2" className="blue b">40,000.00</td>
      <td colspan="1" className="g1 g"></td>
      <td colspan="1" className="g2 g">3,600.00</td>
      <td colspan="1" className="g1 g"></td>
      <td colspan="1" className="g2 g">3,600.00</td>
      <td colspan="2" className="blue b">7,200.00</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table2