const Hero = () => {
  return (
    <div
      className={`hero flex justify-center items-center w-full h-[600px] bg-[url('/assets/background.jpeg')] bg-cover bg-top mb-12`}
    >
      <div className=' bg-[rgba(0,0,0,.6)] w-full h-full flex justify-center items-center'>
        <h1 className=' text-7xl'>Welcome to NoeFlix</h1>
      </div>
    </div>
  );
};

export default Hero;
