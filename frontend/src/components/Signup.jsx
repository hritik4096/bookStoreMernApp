import { Link,useLocation, useNavigate} from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
const location = useLocation()
const Navigate = useNavigate();
 const from =  location.state?.from?.pathname || "/"


  const{
    register,
    handleSubmit,
    formState: {errors},
}=useForm();

const onsubmit = async(data) => {
  const userInfo = {
    fullname:data.fullname,
    email:data.email,
    password:data.password,
  }
  await axios.post("http://localhost:4000/user/signup",userInfo)
   .then((res)=>{
    console.log(res.data);

   if(res.data){
    toast.success("signup successfully");
    Navigate(from,{replace:true});
    
   }
   
   localStorage.setItem("Users",JSON.stringify(res.data.user));

   }).catch((err)=>{
    if(err.response){
      toast.error("Error : " + err.response.data.message);
    }
   })
}



  return (
    <>

    <div className="flex h-screen items-center justify-center border  ">
   

<div  className=" w-[600px] ">
  <div className="modal-box dark:bg-slate-900 dark:text-white ">
    <form onSubmit={handleSubmit(onsubmit)} method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Signup</h3>
    <div className="mt-5 space-y-3">
        <span>Name</span><br></br>
        <input type="name"
        placeholder="Enter Your Full Name"
        className="w-80 py-1 px-3 border rounded-md outline-none"
        {...register("fullname", { required: true })}
        /> 
        <br/>
        {errors.fullname && <span className="text-red-600 text-sm ml-3">This field is required</span>}
    </div>
    <div className="mt-5 space-y-3">
        <span>Email</span><br></br>
        <input type="email"
        placeholder="Enter Your Email"
        className="w-80 py-1 px-3 border rounded-md outline-none"
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className="text-red-600 text-sm ml-3">This field is required</span>}
    </div>
    <div className="mt-5 space-y-3">
        <span>Password</span><br></br>
        <input type="password"
        placeholder="Enter Your Password"
        className="w-80 py-1 px-3 border rounded-md outline-none"
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password && <span className="text-red-600 text-sm ml-3">This field is required</span>}
    </div>

    <div className="flex justify-around mt-4 ">

        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200  ">Signup</button>
        <p className="text-xl">Have Account? <button className="cursor-pointer underline text-blue-400"
        onClick={()=>document.getElementById("my_modal_3").showModal()} >Login</button></p><Login/>
    </div>
    </form>
  </div>
                   
  </div>
  
        
    </div>
      
    </>
  )
}

export default Signup
