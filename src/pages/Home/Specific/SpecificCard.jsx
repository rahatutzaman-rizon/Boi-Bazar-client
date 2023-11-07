import {  useParams } from "react-router-dom";


const SpecificCard = ({item}) => {
  const {id}=useParams();
  console.log(item)
    const {image,name,author,category,rating}=item;
   
    return (
   

       




            <div className="card w-72 bg-base-100 shadow-xl content-center  ml-24 my-8">
  <img  className="w-36 ml-12"  src={image} alt="" />
 
  <div className="card-body ">
   
  <h2 className="text-2xl bg-pink-300 text-center">brand :{author}</h2>
    <h2 className="card-title">
    {name}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    
    <div className="card-actions justify-end">
       
      <div className="badge badge-outline bg-red-300">rating : {rating}</div>
    

    <div className="flex">
    {/* <button className="btn btn-outline btn-success"> <Link to={`/moredetail/${_id}`}>More details </Link></button>
      <button className="btn btn-outline btn-error">
      <Link to={`/updateproduct/${_id}`}>Update</Link>
      
      </button> */}
      
    </div>
    </div>
  </div>
</div>
        
    );
};

export default SpecificCard;