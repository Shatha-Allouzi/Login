
export default function RegisterPage(){
    return (
        <form className="register">
        <h1>Register</h1>
            <input type="text" placeholder="Username" required></input>
            <input type="password" placeholder="Password" required></input>
        <button type="submit">Register</button>
    </form>
    )
}