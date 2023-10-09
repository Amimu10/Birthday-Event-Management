import 'aos/dist/aos.css'; // Import the styles
import AOS from 'aos';

AOS.init();

export default function Banner() {
  const unsplashImageUrl = "https://source.unsplash.com/600x400/?birthday";

  return (
    <div data-aos="flip-up">
      <div
        className="hero min-h-screen bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${unsplashImageUrl})`,
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="hero-overlay bg-black opacity-50 absolute inset-0"></div>

        <div className="hero-content flex items-center justify-center relative">
          <div className="max-w-md mx-auto text-center text-white">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold font-young pt-12">
              Celebrate Unforgettable Moments with Us
            </h1>
            <p className="mb-5 text-white font-bold font-young md:text-xl text-sm">
              Create lasting memories with our expert event planning services. From
              birthdays to weddings, we make every moment special.
            </p>
            <button className="bg-[#FDBF05] lg:p-3 p-2 rounded-md text-white md:font-young  font-thin">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
