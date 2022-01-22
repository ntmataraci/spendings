import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import InputBox from './UI/InbutBox';
import {useState,useEffect} from "react"
import BarChart from './UI/BarChart';

function App() {


const [expenseList,SetExpenseList]=useState([])
const [filterList,setFilterList]=useState("2021")
const [totalAmount,setTotalAmount]=useState()



function receiveData(e){
SetExpenseList( (current)=>{ 
return [...current,e]
})
}


const filteredList=(x)=>{
  setFilterList(x)
  yearlySpend(expenseList,document.getElementById("year").value)
}

const yearlySpend = (x,y)=>{
let a=0
x.filter(item=>item.date_year==y).map(item=>a+=+item.price)
console.log(a)
setTotalAmount(a)
}

useEffect(()=>yearlySpend(expenseList,document.getElementById("year").value),[expenseList])

  return (
    <>

    <BarChart sendData={expenseList} filteredList={filteredList} totals={totalAmount}/>
    <InputBox receiveData={receiveData}/>
<h1 style={{margin:"auto",textAlign:"center"}}>In {filterList} your spend: {totalAmount} $</h1>
    {expenseList ?
    expenseList.filter(item=>item.date_year==filterList).map(item=>
      <Card key={Math.random()} details={item}/> ):console.log(expenseList)
    }
</>
  );
}

export default App;
