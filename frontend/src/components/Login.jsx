import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
function Login() {

    const{
        register,
        handleSubmit,
        formState: {errors},
    }=useForm();

    const onsubmit = (data) => console.log(data);




  return (
    <>

    <div className="dark:bg-slate-900 dark:text-white">


  {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onsubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/">
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById('my_modal_3').close()}>✕</button></Link>
    <h3 className="font-bold text-lg">Login</h3>
    <div className="mt-5 space-y-3">
        <span>Email</span><br></br>
        <input type="email"
        placeholder="Enter Your Email"
        className="w-80 py-1 px-3 border rounded-md outline-none"
        {...register("email", { required: true })}
         /><br/>
               {errors.email && <span className="text-red-600 text-sm">This field is required</span>}

    </div>
    <div className="mt-5 space-y-3">
        <span>Password</span><br></br>
        <input type="password"
        placeholder="Enter Your Password"
        className="w-80 py-1 px-3 border rounded-md outline-none" 
        {...register("password", { required: true })}
/><br/>
     {errors.password && <span className="text-red-600 text-sm ml-3">This field is required</span>}

    </div>

    <div className="flex justify-around mt-4 ">

        <button type="submit"
         className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200  " >Login</button>
        <p>Not Register? <Link className="cursor-pointer underline text-blue-400" to="/signup">Signup</Link></p>
    </div>
   
   
  </form>
  </div>
</dialog>

    </div>
      
    </>
  )
}

export default Login
