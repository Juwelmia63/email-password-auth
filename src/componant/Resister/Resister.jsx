import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";


const Resister = () => {


    const [resisterError, setResisterError]= useState('');
    const [success, setSuccess]=useState('');


    const handleResister = e => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email, Password);
        setResisterError('');
        setSuccess('')

        createUserWithEmailAndPassword(auth, Email,Password)
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

                    <input className="mb-4 w-3/4 py-2 px-4 bg-slate-200 rounded-xl" type="email" name="email" placeholder="Email Address" id="" /> <br />
                    <input className="mb-4 w-3/4 py-2 px-4 bg-slate-200 rounded-xl" type="password" name="password" placeholder="Password" id="" /> <br />
                    <input className="mb-4 w-3/4 py-2 px-4  rounded-xl btn btn-secondary" type="submit" value="Resister" />
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