const InputBox = (props)=>{
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const getData= (e)=>{
        e.preventDefault()
        props.receiveData({
            date_day:e.target.date.value.substr(-2),
            date_month:months[+e.target.date.value.substr(5,2)-1],
            date_year:e.target.date.value.substr(0,4),
            content:e.target.content.value,
            price:e.target.price.value
        })
        
        e.target.date.value=""
        e.target.content.value=""
        e.target.price.value=""
    }


return(
<>

<form onSubmit={getData} style={{margin:"0.1rem auto",width:"350px"}}>
    
<label htmlFor="content">Harcama : </label>
<input type="text" id="content" name="content" style={{width:"60%"}}></input>
<br/><label htmlFor="date">Tarih : </label>
<input type="date"  id="date"  name="date" style={{width:"80%"}}></input>
<label htmlFor="price">Fiyat:($) </label>
<input type="number" id="price" step="0.2" name="price" maxLength="5" style={{width:"60%"}}></input>
<input type="submit" value="Ekle"></input>
</form>
</>




)

}

export default InputBox