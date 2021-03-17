import React from 'react'
import styles from './Signup.module.css'
import avatar from './img_avatar.png'
import {Link} from 'react-router-dom'

const signup = () => {
    const getInputHandler = () => {

    }

    return (
        <form className={styles.form}>
            <div className={styles.imgcontainer}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
            </div>

            <div className={styles.container}>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" 
                onChange={getInputHandler} required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw"
                onChange={getInputHandler} required />
                    
                <Link to="/about"><button type="submit">Login</button></Link>
                <label>
                <input type="checkbox" checked="checked" name="remember"
                onChange={getInputHandler} />
                Remember me
                </label>
            </div>

            <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
                <button type="button" className={styles.cancelbtn}>Cancel</button>
                <span className={styles.psw}><a href="/">Forgot password?</a></span>
            </div>
        </form>
    )
}

export default signup