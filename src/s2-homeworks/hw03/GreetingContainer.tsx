import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string) => void) => {
    if (name.trim() !== '') {
        addUserCallback(name.trim());
        setName('');
    } else {
        setError('Name is required!');
    }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
    if (!name.trim()) {
        setError('Name is required!');
    }
}

export const pureOnEnter = (event: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (event.key === 'Enter') {
        addUser();
    }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = event.currentTarget.value.trim();
        if (trimmedName) {
            setName(trimmedName);
            error && setError('');
        } else {
            setName('');
            setError('Name is required!');
        }
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(event, addUser)
    }

    const totalUsers = users.length;
    const lastUserName = totalUsers > 0 ? users[users.length - 1].name : '';


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
