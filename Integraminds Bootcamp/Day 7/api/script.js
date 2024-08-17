const btn=document.getElementById('btn')
const list=document.getElementById('apidata')

const fetchPost=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json()
    .then(posts=>
    {
        list.innerHTML=''
        posts.forEach(post=>{
            const li=document.createElement('li')
            li.innerText=post.title
            const img=document.createElement('img')
            img.src=post.image
            list.appendChild(li)
            list.appendChild(img)
        })
    }).catch(error=>console.log('error'))
)}
console.log(fetchPost())

btn.addEventListener('click',fetchPost)