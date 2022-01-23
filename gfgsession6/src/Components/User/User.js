import './User.css';

function User(props){
    const userDetails = props.userDetails;
    console.log(userDetails)

    const picture = userDetails.picture;
    const name = userDetails.title + " "+ userDetails.firstName + " "+ userDetails.lastName;
    return <div className = "user-box">

        <div className = "image-box">
            <img src={picture} alt= {name} height="200px" width = "200px"/>
        </div>

        <div className = "name-box">
            <h3>{name}</h3>
        </div>


    </div>
}

export default User