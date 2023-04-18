import "./App.css";
import { MdLocationOn } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { AiFillAudio } from "react-icons/ai";
import { HiCurrencyRupee } from "react-icons/hi";
import { TbSpeakerphone } from "react-icons/tb";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <div className="app-1"></div>

      <div className="app-2">
        <div className="header">
          <div className="nav">
            <MdLocationOn className="icons location-icon" />
            <div className="address">777/A 28th Main Rd, Bengaluru, Be...</div>
            <BsFillBellFill className="icons" />
            <MdOutlineAddShoppingCart className="icons" />
          </div>
        </div>
        <div className="hero">
          <div className="search-icon">
            <GoSearch className="icons icon" />
            <input type="text" placeholder="Search for Products..." />
          </div>
          <AiFillAudio className="icons audio-icon" />
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide main mt-3"
        >
          <div className="carousel-indicators bg-gradient">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          <div
            id="carouselcontainerInterval"
            className="carousel slide spam"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1500">
                <img
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="img-fluid"
                  alt="Camera"
                />
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img
                  src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="img-fluid"
                  alt="Phone"
                />
              </div>
              <div className="carousel-item " data-bs-interval="1500">
                <img
                  src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="img-fluid"
                  alt="Makeup"
                />
              </div>
              <div className="carousel-item " data-bs-interval="1500">
                <img src="./flowers.jpg" className="img-fluid" alt="Makeup" />
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-4">
          <div>
            <img src="./mobile-recharge-icon.jpg" alt="Recharge-icon" />
            <br />
            <span>Prepaid Mobile Recharge</span>
          </div>
          <div>
            <img src="./tv.jpg" alt="Recharge-icon" />
            <br />
            <span>DTH Recharge</span>
          </div>
          <div>
            <HiCurrencyRupee className="services-icons" />
            <br />
            <span>Loans</span>
          </div>
          <div>
            <TbSpeakerphone className="services-icons" />
            <br />
            <span>Promotions</span>
          </div>
          <br />
          <br />
          <div>
            <img src="./news.png" alt="News-icon" />
            <br />
            <span>News</span>
          </div>
          <div>
            <img src="./blog-icon.png" alt="Blog-icon" />
            <br />
            <span>Blog</span>
          </div>
          <div>
            <img src="./jobs.png" alt="Job-icon" />
            <br />
            <span>Jobs</span>
          </div>
          <div>
            <img src="./feedback-icon.png" alt="Job-icon" />
            <br />
            <span>Anonymous Feedback</span>
          </div>
          <div>
            <img src="./flame.png" alt="Job-icon" />
            <br />
            <span>Gas Booking</span>
          </div>
          <div>
            <img src="./light-bulb.png" alt="Job-icon" />
            <br />
            <span>Electricity Bill</span>
          </div>
          <div>
            <img src="./water.png" alt="Job-icon" />
            <br />
            <span>Water Bill </span>
          </div>
          <div>
            <img src="./right-icons.png" alt="Job-icon" />
            <br />
            <span>See More </span>
          </div>
        </footer>

        <div className="description mt-4">
          <h3>popular service products</h3>
          <h3>all popular service providers</h3>
          <h3>services we provide</h3>
        </div>
        <img
          src="./putatoe-icon.png"
          alt="Business-Logo"
          className="putato-icon"
        />
      </div>

      {/* <div className="business-logo">
      </div> */}
      <div className="app-3"></div>
    </div>
  );
}

export default App;
