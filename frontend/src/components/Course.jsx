import list from "../list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>

    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

    <div className="mt-14 p-10 items-center justify-center text-center">

 <h1 className="text-2xl  md:text-3xl">
  We&apos;re Delighted to have you <span className="text-pink-500">Here! :)</span> 
  </h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda enim tenetur tempora a nisi, iste minima repellendus cumque culpa magnam odio aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aperiam.</p>

 <Link to="/">
 <button href="/" className=" bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6">Back</button>
 
 </Link>

    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">

{
  list.map((item)=>(
    <Cards key={item.id} item={item}/>
  ))

}
      
    </div>
 
    </div>
      
    </>
  )
}

export default Course
