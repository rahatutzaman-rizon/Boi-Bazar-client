import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar";


const Moredetails = () => {
    const more=useLoaderData();
    console.log(more)
   const{image,name,author,category,rating,desc}=more
    return (
     
      <div>
      <Navbar className="my-10"></Navbar> 
      <figure className="ml-96 mt-24 "><img  className="w-48" src={image} alt="Album"/></figure>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
 
  <div className="card-body">
   
    
    <div className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-lg shadow-lg  mx-auto my-6 p-4">
      <div className="p-4">
      <h2 className="card-title mt-2">Book name  {name}</h2>
        <p className="text-sm font-semibold mb-2">Category {category}</p>
        <p className="text-lg font-bold mb-2">Name {author}</p>
        <p className="text-sm mb-4">rating : {rating}</p>
        <p className="text-sm mb-4">Book description goes here... {desc}</p>
        <div className="flex justify-between">

        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/borrow" >
        <button className="btn">Borrow Page</button>
           </Link>
      </form>
    </div>
  </div>
</dialog>
          
          <Link href="#" className="bg-teal-400 text-gray-800 px-4 py-2 rounded hover:bg-teal-600">
            Add to Wishlist
          </Link>
        </div>
      </div>
    </div>
    <div className="card-actions justify-end">
      <Link to="/"><button className="btn btn-success">Home</button></Link>
    </div>
  </div>
</div>

      </div>

    );
};

export default Moredetails;