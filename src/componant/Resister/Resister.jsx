

const Resister = () => {
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-5 mt-2">
            Please Resister
                </h2>


                <form>

                   <input className="mb-4 w-3/4 py-2 px-4 bg-slate-200 rounded-xl" type="email" name="Email" placeholder="Email Address" id="" /> <br />
                   <input className="mb-4 w-3/4 py-2 px-4 bg-slate-200 rounded-xl" type="password" name="Password" placeholder="Password" id="" /> <br />
                   <input className="mb-4 w-3/4 py-2 px-4  rounded-xl btn btn-secondary" type="submit" value="Resister" />
                </form>
            </div>
        </div>
    );
};

export default Resister;