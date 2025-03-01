import { Sections } from "../../constants/section";

const ContactUs = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-r from-black to-gray-900">
      <div
        id={Sections.ContactUs}
        className="flex flex-col justify-center text-[#E0E0E0]"
      >
        <div
          data-aos="zoom-out"
          className="min-h-[4rem] flex items-center justify-center text-6xl text-center"
        >
          Schedule a call with us
        </div>
        <div
          className="calendly-inline-widget min-w-[320px] h-[700px]"
          data-url="https://calendly.com/louieaniez/30min"
        ></div>
      </div>
    </div>
  );
};

export default ContactUs;
