
test = function(){
    fetch('http://localhost:3001',{
        method:'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    }).then((response)=>{
        console.log(response.json())
    })
}

