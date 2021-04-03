

const Contact = ()=>{
   
   
    return(
<div className='contact-body'>   

    <div className='contact-start'>
        <form className='contact-form'>
            <label htmlFor='fname'>Full Name:</label>
            <input id='fname' name='fname' placeholder='Full Name' />
            <label htmlFor='phone-number'>Number:</label>
            <input id='phone-number' name='phone-number' type='number' placeholder='Enter your number here' />
            <label htmlFor="email">Enter your email:</label>
            <input className='input-number' type="email" id="email" name="email" placeholder='E-mail' />
            <textarea rows="10" cols='20' name='message' placeholder="Let me know what you're up to"></textarea>
        </form>
    </div>
        
        
        <footer className='contact-links'>
            <div className='git-links'>
                <a
                    id="profile-link"
                    href="https://github.com/ayronman99"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-details"
                    ><i className="fab fa-github"></i>
                </a>
                
                <a
                    id="profile-link"
                    href="https://www.linkedin.com/in/lee-lacay-5564b51a4/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-details"
                    ><i className="fab fa-linkedin"></i>
                </a>

                <a
                    id="profile-link"
                    href="https://github.com/ayronman99"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-details"
                    ><i className="fab fa-twitter"></i>
                </a>    
            </div>  
        </footer>
</div>
    )
}
export default Contact;