import './Header.css';

function Header(){

    return <div className = "header">
        <h1>Users Mail</h1>

        <div className="link-box">
            <a>Home</a>
            <a>About</a>
            <a>Users</a>
            <a>Contact</a>
            <a>Payments</a>
        </div>

        <div>
            <input type="text"></input>
        </div>

    </div>
}

export default Header