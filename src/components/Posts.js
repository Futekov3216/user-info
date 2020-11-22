import { useSelector } from 'react-redux';
import { useEffect, useState, memo, useMemo } from 'react'
/**
 * 
 * @param {number} user_id 
 */
const Posts = memo(({ user_id }) => {

    const all_users = useSelector(state => state.all_users)
    const [posts, setPosts] = useState([])
    const user = useMemo(() => all_users.find(element => element[user_id])[user_id], [user_id, all_users]); // get current user
    const user_post = useMemo(() => user.posts, [ user.posts])

    useEffect(() => {
        setPosts(user_post)
    }, [user_post])

    return (
        <div className="posts-wrapper">
            {
                posts ? posts.map((res, i) => {
                    return <div key={i}>
                        <br />
                        <div style={{ fontWeight: 'bold' }}>{`${res.id}.`} Title: {res.title.toUpperCase()}</div>
                        <div>{res.body}</div>
                    </div>
                }) : null
            }

        </div>

    );
})

export default Posts;