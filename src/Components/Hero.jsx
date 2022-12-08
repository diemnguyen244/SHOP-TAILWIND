const Hero = () => {
  return (
    <header>
      {/* Hero */}
      <div className="relative bg-[url(https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60)] bg-no-repeat bg-cover bg-center">
        <div className="bg-white/75 inset-0 absolute sm:bg-gradient-to-r sm: from-white/95 sm:to-white/25 sm:bg-transparent"></div>
        <div className="px-4 py-32 max-w-screen-xl sm:px-6 relative lg:px-8 lg:flex flex-wrap lg:items-center lg:h-screen mx-auto ">
          {/* Content */}
          <div className="text-center sm:text-left">
            <div className="text-3xl font-extrabold sm:text-5xl ">
              <h4>Let us find your</h4>
              <h4 className="capitalize text-[#4338ca]">forever clothes.</h4>
            </div>
            <p className="m-4 mb-8 ml-0 max-w-lg sm:text-xl sm:leading-[32.5px] sm:mx-0 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            {/* Action */}
            <div className="">
              <button className="bg-[#4338ca]/90 hover:bg-[#4338ca] text-white text-sm font-medium rounded px-12 py-3 block w-full sm:inline sm:w-fit capitalize">
                <a href="">Shop now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
