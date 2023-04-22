const Signup = () => {
    return (
        <form style={{width:'50%'}} className="container">
        <label for="name">Name
        <input type="text" id="name" name="name" placeholder="Name..." required/>

        </label>
        <label for="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Email address" required/>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" required></input>
        <small>We'll never share your email with anyone else.</small>
        <button type="submit">Submit</button>
    </form>
    )
}

export default Signup
