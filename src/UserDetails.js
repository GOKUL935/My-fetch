import React, {useEffect, useState} from 'react';

function UserDetails() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error('Error fetching data:', err));
    }, []);

    return(
        <div>
            <h2>UserDetails</h2>
            {users.map((user) => (
                <div key={user.id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
                    <h3>{user.name}</h3>
                    <p><strong>Username:</strong>{user.usernmae}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>Phone:</strong>{user.phone}</p>
                    <p><strong>Website:</strong>{user.website}</p>
                    <p><strong>Company:</strong>{user.company.name}</p>
                    <p><strong>Address:</strong>
                    {user.address.street},
                     {user.address.city} - {user.address.zipcode}</p>
                </div>
            ))}
        </div>
    )
}

export default UserDetails;