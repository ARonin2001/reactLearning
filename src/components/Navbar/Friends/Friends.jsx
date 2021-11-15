import friendsClass from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {    
    let items = props.state.friends.map( el => <FriendItem name={el.name} /> );

    return (
        <div className={friendsClass.friends}>
            <h2 className='title'>Friends</h2>

            <div className={friendsClass.firends__items}>
                { 
                    items
                }
            </div>
        </div>
    );
}

export default Friends;