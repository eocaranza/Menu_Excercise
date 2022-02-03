import Button from './Button'

const Login = ({onLogin})=>{
    return (
        <div className="Login-form">
        <h2>User</h2>
        <input></input>
        <h2>Password</h2>
        <input></input>
        <Button
          color={'steelblue'}
          text={'Login'}
          onClick={onLogin}
        />
        </div>
    )
}

export default Login