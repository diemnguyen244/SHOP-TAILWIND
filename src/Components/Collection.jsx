const Collection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm-py-12 lg:px-8 ">
      <header className="text-center">
        <h2 className="font-bold text-xl text-gray-900 sm:text-3xl">
          New Collection
        </h2>
        <br />
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>
      {/* Collection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 px-4 gap-4">
        {/* item1 */}
        <div className="relative aspect-square">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Shoes"
          />
          <div className="absolute bottom-5 left-5 font-medium">
            <h4 className="text-white text-lg">Casual Trainers</h4>
            <button className="bg-black text-white py-2.5 px-5 mt-1.5 text-[11px]">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* item2 */}
        <div className="relative aspect-square">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Winter Jumpers"
          />
          <div className="absolute bottom-5 left-5 font-medium">
            <h4 className="text-white text-lg">Winter Jumpers</h4>
            <button className="bg-black text-white py-2.5 px-5 mt-1.5 text-[11px]">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* item3 */}
        <div className="relative aspect-square lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt="Skinny Blue Jeans"
          />
          <div className="absolute bottom-5 left-5 font-medium">
            <h4 className="text-white text-lg">Skinny Jeans Blue</h4>
            <button className="bg-black text-white py-2.5 px-5 mt-1.5 text-[11px]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
