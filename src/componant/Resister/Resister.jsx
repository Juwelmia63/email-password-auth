import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Resister = () => {


    const [resisterError, setResisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showpassword, setshowpassword] = useState(false);


    const handleResister = e => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        const TermsCondition= e.target.terms.checked;

        console.log(Email, Password,TermsCondition);
        setResisterError('');
        setSuccess('')

        if (Password.length < 6) {
            setResisterError('Password Should Be 8 charecter or longer');
            return;
        }

        else if (!/[A-Z]/.test(Password)) {
            setResisterError('Password Must Have One Uppercase Letter');
            return;
        }

        else if (!TermsCondition){
            setResisterError('Please Accept Terms')
        }

        createUserWithEmailAndPassword(auth, Email, Password)
            .then(result => {
                console.log(result.user);
                setSuccess('Resister Success')
            })

            .catch(error => {
                console.error(error);
                setResisterError(error.message);
            })
    }
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-5 mt-2">
                    Please Resister
                </h2>


                <form onSubmit={handleResister}>

                    <input className="mb-4 w-full py-2 px-4 bg-slate-200 rounded-xl" type="email" name="email" placeholder="Email Address" id="" /> <br />
                    <div className="relative">
                        <input
                            className="  w-full py-2 px-4 bg-slate-200 rounded-xl"
                            type={showpassword ? "text" : "password"}
                            name="password" placeholder="Password" id="" />

                        <span className="absolute top-3 right-3" onClick={() => setshowpassword(!showpassword)}>{
                            showpassword ? <FaEye /> : <FaEyeSlash />
                        }</span>

                    </div>
                    <br />



                    <div>
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-1" htmlFor="terms">Accept Our <a href="">Terms And Condition</a></label>
                    </div>


                    <br />
                    <input className="mb-4 w-full py-2 px-4  rounded-xl btn btn-secondary" type="submit" value="Resister" />
                </form>


                {
                    resisterError && <p>{resisterError}</p>
                }


                {
                    success && <p>{success}</p>
                }
            </div>
        </div>
    );
};

export default Resister;