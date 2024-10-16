import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Fetch friends from the API
    useEffect(() => {
        axios.get('https://outdev.online/backend/api/friends')
            .then(response => {
                setFriends(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the friends!', error);
            });
    }, []);

    // Add a friend
    const addFriend = () => {
        axios.post('https://outdev.online/backend/api/friends', {
            name: name,
            email: email
        })
        .then(response => {
            setFriends([...friends, { name, email }]);
            setName('');
            setEmail('');
        })
        .catch(error => {
            console.error('There was an error adding the friend!', error);
        });
    };

    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>{friend.name} - {friend.email}</li>
                ))}
            </ul>

            <h3>Add a new friend</h3>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={addFriend}>Add Friend</button>
        </div>
    );
};

export default Friends;
