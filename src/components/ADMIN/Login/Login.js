import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='animation'>
            </div>
            <form>
                <label htmlFor='username'>Username</label>
                <input type="text" name='username' placeholder='username' id='username' />
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' placeholder='password' id='password' />
            </form>
        </div>
    );
}

export default Login;
