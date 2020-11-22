import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInfo, extractNeededData } from '../Utils';
import ButtonComponent from './ButtonComponent'
import Posts from './Posts'
import { setUsers } from '../redux/actions'
import UserDetails from './UserDetails';

function Wrapper() {

    const [user_info, setUsersInfo] = useState([]);
    const [render, setRender] = useState(false);
    const [active, setActive] = useState({})
    const dispatch = useDispatch()
    const all_users = [];

    useEffect(() => {
        fetchInfo("https://jsonplaceholder.typicode.com/users")
            .then(data => {
                extractNeededData(data, all_users,
                     function callback(all_users) {
                        setUsersInfo(all_users)
                        dispatch(setUsers(all_users)) // set needed data for all the users to the store
                        setRender(true)
                    })
            })
    }, [])

    const handleClick = useCallback((id) => { 
        const newObj = { ...active }
        newObj[id] = !newObj[id]
        setActive(newObj)
    }, [active])

    return (
        <div className="wrapper">
            {
                render ? user_info.map((res, i) => {

                    const id = Object.keys(res)[0]
                    const user_details = res[id]

                    return <div key={i} className="user-container" >
                        <span>{user_details.name}</span>
                        <button onClick={() => handleClick(id)}>{`${!active[id] ? 'hide' : 'show'} user`}</button>
                        <div className={!active[id] ? 'active' : 'inactive'}>
                            <UserDetails // RENDER EACH USER
                                length={user_info}
                                information={user_details}
                                user_id={id}
                            />
                            <ButtonComponent user_id={id} />
                            <Posts user_id={id} />
                        </div>
                    </div>
                }) : null
            }
        </div>
    );
}

export default Wrapper;
