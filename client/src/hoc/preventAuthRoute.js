import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigation} from 'react-router-dom';

const PreventAuthRoute = (props) => {
    const users = useSelector(state=> state.users);
    const navigate = useNavigation();
    return(
        <>
            { users.auth ?
                navigate('/dashboard')
            :
                props.children
            }
        </>
    )
}

export default PreventAuthRoute;