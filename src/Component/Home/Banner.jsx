import BannerCard from "./BannerCard";



const Banner = () => {
   
    return (
        <div className="px-4 lg:px-24 bg-teal-200 flex items-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40">
              

              <div className=" md:w-1/2 h-full space-y-7">
                <h2 className="text-4xl font-bold text-black">Cse students books store</h2>
              <p>If youre looking for a list of recommended computer science and engineering books for a library or personal use, here is a selection of widely regarded textbooks and reference materials covering various aspects of computer science and engineering.</p>
              <div>
              <input type="text" name="query" id="query" placeholder="Search by name" className="w-48 py-2 px-4 outline-none" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 transition duration-150 ease-in-out">
          Search
        </button>
              </div>
              
              </div>
            </div>

            <div className="w-1/2 h-full">
            <BannerCard></BannerCard>

          
            </div>
        </div>
    );
};

export default Banner;