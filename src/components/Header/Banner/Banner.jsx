export default function Banner() {
    return (
      <div>
        <div
          className="hero min-h-screen bg-cover bg-no-repeat  opacity-50"
          style={{
            backgroundImage: "url(https://i.ibb.co/pwKj4nL/1.webp)",
            opacity: 0.5 ,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content flex items-center justify-center">
            <div className="max-w-md mx-auto text-center text-white">
              <h1 className="mb-5 text-5xl font-bold font-young pt-12">
                Celebrate Unforgettable Moments with Us
              </h1>
              <p className="mb-5 text-white font-bold font-young text-xl">
                Create lasting memories with our expert event planning services. From
                birthdays to weddings, we make every moment special.
              </p>
              <button className="bg-[#FDBF05] p-3 text-white font-young  font-thin">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  