import React, {useRef, useState} from 'react';

const Userfile = () => {

    const [users, setUsers] = useState([]);

    const usernameRef = useRef();
    const imageRef = useRef();

    function addUser() {
        const newUser = {
            name: usernameRef.current.value,
            image: imageRef.current.value,
        };
        setUsers([...users, newUser]);
        usernameRef.current.value = '';
        imageRef.current.value = '';
    }
    return (
        <div className="d-flex gap-4">
            <div>
                <input type="text" placeholder="Username" ref={usernameRef}/>
                <input type="text" placeholder="Image link" ref={imageRef}/>
                <button type='submit' onClick={addUser}>Submit</button>
            </div>
            <div className="d-flex  gap-4">
                {users.map((user, index) => (
                    <div key={index} className="p-3 border d-flex">
                        <div className='me-4'><img
                            src={user.image}
                            alt={user.name}
                            style={{width: '100%', maxHeight: '100px', objectFit: 'cover', borderRadius: '50%'}}
                        /></div>
                        <div className="mt-2 text-center">{user.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Userfile;