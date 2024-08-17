const form = document.querySelector("form")
// console.log(form)

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const h = Number(document.querySelector("#height").value);
  const w = Number(document.querySelector("#weight").value);

  const res = document.querySelector("#results");
  // console.log(h)
  // console.log(w)
  console.log(res)

  if(h<0 || isNaN(h) || h === 0 || w<0 || isNaN(w) || w === 0){
    res.innerHTML="Please enter a valid height and weight"
  }else{
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    res.innerHTML=<span>${bmi}</span>
    if(bmi<18.6){
      res.innerHTML='<span>${bmi}</span> Under Weight';
    }else if(bmi>18.6 && bmi<24.9){
      res.innerHTML='<span>${bmi}</span> Normal Range'
    } else{
      res.innerHTML='<span>${bmi}</span> Overweight'
    }
  }
})  