import { FaPhoneAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Testimonials from "../components/Testimonials";
import bannerImg from "../assets/banner.jpg";

export default function Home() {
  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero */}
      <section
        className="hero min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Orkid Hills Hotel
            </h1>
            <p className="mb-5">
              Experience luxury, serenity, and unmatched hospitality in the
              heart of nature.
            </p>
            <button className="btn bg-orange-900 text-white">Book Now</button>
          </div>
        </div>
      </section>

      {/* Facilities */}
      {/* <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Facilities</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Infinity Pool",
            "Spa & Wellness",
            "Gourmet Restaurant",
            "Luxury Suites",
            "Free Wi-Fi",
            "Conference Hall",
          ].map((item, i) => (
            <div
              key={i}
              className="card shadow-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-sm">
                Enjoy world-class {item.toLowerCase()} with exceptional service.
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Rooms Preview */}
      {/* <section className="py-16 bg-base-200 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Luxury Rooms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((room) => (
            <div key={room} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={`/room-${room}.jpg`}
                  alt={`Room ${room}`}
                  className="w-full h-52 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Room {room}</h3>
                <p>Comfortable and elegant with stunning views.</p>
                <div className="flex items-center gap-1 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="card-actions justify-end mt-2">
                  <button className="btn btn-sm btn-success">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
