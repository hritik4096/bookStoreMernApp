import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Contact() {
  return (
    <>
      <div >
        
      <Navbar/>
     
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white ">
       <h1 className="mt-16 pt-20 text-center items-center text-2xl font-semibold"> For Any Query Contact Us </h1>
        <form  className="border rounded-t-md  text-center mt-10" action="">

        <div className="mt-5 space-y-3">
        <input type="email"
        placeholder="Enter Your Name"
        className="w-80 py-1 px-3 border rounded-md outline-none" />
    </div>

    <div className="mt-5 space-y-3">
        <input type="email"
        placeholder="Enter Your Email "
        className="w-80 py-1 px-3 border rounded-md outline-none" />
    </div>
    <div className="mt-5 space-y-3">
        <input type="Number"
        placeholder="Enter Your Phone"
        className="w-80 py-1 px-3 border rounded-md outline-none" />


    </div>

    <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900"></label>
        <div className="mt-2.5">
          <textarea placeholder="write your query here" name="message" id="message" rows="4" className="block m-auto w-80 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
    
        </div>

         <button className="bg-pink-500 m-8 py-1 px-3 border rounded-md">submit</button>

        </form>
      
      </div>
      <Footer/>

      </div>

    </>
  )
}

export default Contact;
