// eslint-disable-next-line no-unused-vars
import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

function ComponentA() {

    const [user, setUser] = useState('Javier')

    return(
        <div>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponentB></ComponentB>
            </UserContext.Provider>
        </div>
    )
    }

export const UserContext = createContext()

export default ComponentA