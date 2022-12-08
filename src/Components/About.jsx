const About = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:px-12 justify-between lg:gap-20 max-w-full md:mx-5 lg:mx-12 my-10">
      <div className="relative lg:w-full h:60 sm:h-80 lg:h-full overflow-hidden object-cover rounded-md lg:rounded-xl">
        <img
          src="https://plus.unsplash.com/premium_photo-1664202526336-9edbfc8e2886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNob3B8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="shopping"
          className="w-full sm:h-[256px] lg:h-[400px] object-cover sm:rounded-lg mr-auto"
        />
      </div>
      <div className="lg:w-full">
        <h2 className="font-sans text-4xl font-bold pt-5 lg:pt-24">About Us</h2>
        <p className=" text-extralight mt-4 text-[#4B5563]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
        <button className="group flex items-center font-sans bg-[#4F46E5] rounded-md px-7 mt-8 mb-16 hover:bg-white hover:border-[1.25px] hover:border-[#4F46E5]">
          <span className="text-white text-normal text-sm font-medium pt-3 pb-3 group-hover:text-[#4F46E5]">
            {" "}
            Know more{" "}
          </span>
          <svg
            className="ml-3 h-5 w-5 text-white text-sm group-hover:text-[#4F46E5]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default About;
