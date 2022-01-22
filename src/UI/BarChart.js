import { useState } from "react/cjs/react.development"
import style from "./BarChart.module.css"
const BarChart = (props) =>{
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const [year,setYear]=useState("2021")

const getSelectedValue= (e) =>{
   const selectedVal=props.sendData.filter(item=>item.date_year==e.target.value)
   props.filteredList(e.target.value)
   setYear(e.target.value)
   return selectedVal
}

console.log(props.sendData)

    return (
<>
<div style={{margin:"auto",textAlign:"center"}}>
    <select name="year" onChange={getSelectedValue} id="year">
        <option>2021</option>
        <option>2022</option>
    </select>
    </div>
<div className={style.main}>
    {months.map((item)=>{
    const datemonthFilter=(props.sendData)?props.sendData.filter(helpyear=>helpyear.date_year==year).filter(helper=>helper.date_month==item).map(x=>+x.price).reduce((prev,next)=>prev+next,0):0
        return (     
<div key={item} className={style.month_columns}>
<div className={style.month_columns__bar} >
<div className={style.month_columns__emptybar} style={{height:props.totals?(150-150*datemonthFilter/props.totals):"150px"}} ></div>
<div className={style.month_columns__filledbar} style={{height:props.totals?150*datemonthFilter/props.totals:"0px"}} ></div>
</div>
<div className={style.month_columns__name}> 
    {item} </div>
    <div className={style.month_columns__name}> 
    {datemonthFilter} $ 
</div>
    </div>

         ) })}

</div>

</>


    )
}

export default BarChart