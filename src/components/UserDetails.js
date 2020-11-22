import { memo } from 'react';
import InputComponent from './InputComponent'
/**
 * 
 * @param {object} information 
 * @param {number} user_id 
 */
const UserDetails =  memo(({ information, user_id }) => {

    return (
        <div className="data-wrapper">
            {
                Object.keys(information).map(function(key, i) {
                       return <div className="details-wrapper" key={i} ><span>{`${key}`}</span>
                        <InputComponent // RENDER EACH INPUT FOR THE CURRENT USER
                            user_id={user_id} 
                            name={key}
                            defaultValue={information[key]}
                        /></div> 
                   })
            }
        </div>
    );
})

export default UserDetails;