
let ftch=document.getElementById("fetch");
ftch.addEventListener('click',function(e) {
    
    let url="https://api.github.com/users";
    fetch(url).then(response=>{
            return response.json();
    }).then(data=>{
        console.log(data);
    })
});

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

function postData()
{
    let url="http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    let params={
        method: "post",
        headers:{
        "Content-Type":"application/json"
        },
        body:data
    }
    fetch(url,params).then(response=>{
                return response.json();
    }).then(data=>{
            console.log(data);
    })
}
postData();