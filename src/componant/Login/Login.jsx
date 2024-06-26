import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();

        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email,Password);

        signInWithEmailAndPassword(auth,Email,Password)
        .then (result => {
            console.log(result.user);
        })

        .catch(error => {
            console.error(error);
            
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form  onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;