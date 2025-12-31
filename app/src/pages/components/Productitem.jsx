import { useState , useEffect } from "react";
function Users () {
    const [ usersList, setUsersList ] = useState([]);


    async function fetchAllUsers(){
        try{
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();

            setUsersList(result.users);
        } catch (error){
            console.error("Error fetchinh users :", error);
        }
    }
    useEffect(()=> {
    fetchAllUsers();
},[]);

return (
    <div>
        <h1>
            All users 
        </h1>

        <ul>
            {usersList.map((user) =>(
<li key = {user.id}>
    {user.firstName } {user.lastName}
</li>
            )

            )}
        </ul>
    </div>
);
}

export default Users;





