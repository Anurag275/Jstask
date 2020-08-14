
async function hello()
{
    const response=await fetch("https:github.com/users");

    const users= await response.json(); 

    return users;
}

hello().then((data)=>
{
    console.log(data);
});