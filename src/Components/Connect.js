import React, { useEffect, useState } from 'react'
import * as Styles from "../styles/connectStyle.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

function Connect(props) {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, isLoading] = useState(false);

    const darkTheme = props.darkTheme;
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 300,
            easing: 'ease-out',
            delay: 200,
        });
    }, [])

    const handleSubmit = (e) =>{
        isLoading(true);
        e.preventDefault();
        axios.post("https://formsubmit.co/2b3b45277057f9c4b0ddffe214858a3a", {
            _template: "table",
            _captcha: "false",
            _next: false,
            Name: name,
            email: email,
            Subject: subject,
            Message: message
        }).then((res)=>{
            isLoading(false);
            console.log(res);
            if(res.status===200){
                setSuccess(true);
            }
            else{
                setError(true);
            }
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        })
    }

    return (
        <div className={darkTheme ? Styles.container : Styles.lightContainer} id='Connect'>
            <h1 style={{ color: "aliceblue", "textAlign": "center" }}>CONNECT</h1>
            <div className={Styles.division}>
                <div className={Styles.message}>
                    Message me if you wish to know me, collaborate with me, ask me something, or just for a casual chit-chat !!
                </div>
                <div >
                    <form onSubmit={handleSubmit} className={darkTheme ? Styles.formGroup : Styles.lightFormGroup}>
                        <span>
                            <input data-aos="fade-right" value={name} onChange={(e)=>setName(e.target.value)} type="text" name="Name" placeholder='Name' required />
                            <input data-aos="fade-left" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder='Email' required />
                        </span>
                        <input type="text" data-aos="fade" value={subject} onChange={(e)=>setSubject(e.target.value)} name="Subject" placeholder='Subject' id={Styles.subject} required />
                        <textarea data-aos="fade" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your message' name="Message" id={Styles.message} required />
                        {loading && <div>Loading...</div>}
                        {success && <div id={Styles.success}>
                            <span style={{width: "auto"}}>Cool !! I'll get in touch with you soon.</span>
                            <CloseIcon onClick={()=>setSuccess(false)}/>
                        </div>}
                        {error && <div id={Styles.error}>
                            <span style={{width: "auto"}}>Error !! You may choose to mail me directly. (<a href="mailto:krishnadk8203@gmail.com">krishnadk8203@gmail.com</a>)</span>
                            <CloseIcon onClick={()=>setError(false)}/>
                        </div>}
                        <span id={Styles.buttons}>
                            <button id={darkTheme ? Styles.submitButton : Styles.lightSubmitButton} type="submit">Submit</button>
                            <button id={darkTheme ? Styles.resetButton : Styles.lightResetButton} type="reset">Reset</button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Connect