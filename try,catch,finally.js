
function hello()
{
    throw new Error("There is an error");
}

try
{
    hello();
}catch(error){
    console.log("Error "+error.name);
    console.log("Error "+error.message);
}finally
{
    console.log("Do something");// will definitely run this block irrespective of try and catch.
}

