const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("data fetched")
        },1000)
    })
}


const processData = (data) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${data} processed`)
        },1000)
    })
}


const display= (data)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${data} display`)
        },1000)
    })
}

try {
    fetchData()  
.then((data)=> processData(data))
.then((data)=> display(data))
.then((data)=>console.log(data))

} catch (error) {
    console.log(`error in fetching `);
}