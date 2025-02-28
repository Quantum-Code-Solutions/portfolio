const WhatWeDo = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div
        id="what-we-do"
        className="bg-[url(/software-development.jpg)] bg-cover bg-center min-h-[calc(100vh-4rem)] flex justify-center items-center text-[#E0E0E0]"
      >
        <div className="flex flex-col items-center gap-16 z-1">
          <label className="text-6xl">What we do?</label>
          <div className="max-w-9/10 text-wrap text-lg text-center">
            At Quantum Code Solutions, we specialize in providing innovative and
            efficient software development services tailored to meet the unique
            needs of our clients. Our team of experienced developers works
            closely with businesses to deliver cutting-edge, scalable solutions
            across web, mobile, and enterprise platforms. From custom software
            development and system integration to ongoing maintenance and
            support, we are committed to helping businesses thrive in a
            technology-driven world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
