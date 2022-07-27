import Header from "./components/Header";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Container from "./components/Container";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const s1={
    marginLeft:"3rem"
  }
  return (
     <div className="app">
        <div className="header">
         <Header/>
        </div>
        <div className="a">
          <span className="a1">Invoice No: 421</span>
          <span className="a2">Dated:26-Mar-2022</span>          
        </div>
        <h3>Tax InVoice</h3>
        <div className="party">
          <p>Party:TECHNOLOGIES PVT LTD</p>
        </div>
        <div className="content">
           <p>Swamy Naiken Street,</p>
           <p>Chintadripet, Chennai-600002</p>
           <p>State Name : Tamil Nadu, Code : 33</p>
        </div>
        <div className="table1">
          <Table1/>
        </div>
        <div className="table2"> 
        <Table2/>
        </div>
        <p style={s1}>Tax Amount (in words) : <b>INR Seven Thousand Two Hundred Only</b></p>
        <div className="container">
          <Container/>
        </div>
        <div>
         <Footer/>
        </div>
     </div>
  );
}

export default App;
