
import Cta from "../Components/Cta";
import Counter from "../Components/Counter";

import Testimonial from "../Components/Testimonial";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>


           <div id="hero-area" className="hero-area-bg">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <div className="contents">
                  <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">
                    Hi This is
                  </h5>
                  <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">
                    Tom Saulnier
                  </h2>
                  <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                    Front-end Web Developer and Graphic Designer
                  </p>
                  <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                    <li>
                      <a className="facebook" href="#">
                        <i className="icon-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="icon-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i className="icon-social-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="icon-social-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a className="google" href="#">
                        <i className="icon-social-google"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="header-button wow fadeInUp" data-wow-delay="1s">
                    <a href="#" className="btn btn-common">
                      Get a Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* <!-- About Section Start --> */}
      <section id="about" className="section-padding border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5  col-sm-12 col-xs-12">
              <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                <img
                  className="img-fluid"
                  src="assets/img/about/about-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7  col-sm-12 col-xs-12">
              <div
                className="profile-wrapper wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <span className="text-primary fs-5 fw-semibold">About Us </span>
                <h3 className="text-start text-black fs-1 fw-semibold">
                  We help teams build, ship, and scale the modern web.
                </h3>
                <p className="fs-6">
                  MeetMe is a powerful and intuitive platform designed to help
                  product teams move seamlessly from idea to impact—fast. By
                  eliminating the hassle of complex configurations,
                  infrastructure setup, and ongoing operational overhead, MeetMe
                  allows your developers to focus on what truly matters:
                  delivering customer value and driving innovation. Built with
                  security, performance, and reliability at its core, MeetMe
                  ensures that every project runs smoothly and scales
                  effortlessly. Whether you’re building your first MVP or
                  managing large-scale enterprise products, MeetMe provides the
                  speed, stability, and support your team needs to turn great
                  ideas into measurable success.
                </p>
                <div className="row">
                  <div className="col-4">
                    <div className="border d-flex  justify-content-center flex-column  rounded-3 shadow-sm px-3 py-2 ">
                      <h3 className="fw-semibold m-0 p-0">2019</h3>
                      <p className="p-0 m-0">Founded</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="border d-flex  justify-content-center flex-column  rounded-3 shadow-sm px-3 py-2 ">
                      <h3 className="fw-semibold m-0 p-0">120+</h3>
                      <p className="p-0 m-0">Teammates</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="border d-flex  justify-content-center flex-column  rounded-3 shadow-sm px-3 py-2 ">
                      <h3 className="fw-semibold m-0 p-0">50K+</h3>
                      <p className="p-0 m-0">Projects </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Section End --> */}

      {/* <!-- Services Section Start --> */}
<section id="services" className="services section-padding">
        <h1 className="section-title wow flipInX " data-wow-delay="0.4s">Our
     Services
        </h1>
        <div className="container">
          <div className="row">
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
                <div className="icon">
                  <i className="icon-grid"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Front-end Development</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                <div className="icon">
                  <i className="icon-layers"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Graphic Design</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                <div className="icon">
                  <i className="icon-briefcase"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Business Branding</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
                <div className="icon">
                  <i className="icon-bubbles"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Consultancy</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}

      {/* <!-- Resume Section Start --> */}
<Portfolio/>
      {/* <!-- Resume Section End --> */}
      {/*  */}
      {/* <!-- Portfolio Section --> */}

      <Testimonial />
      {/* <!-- Portfolio Section Ends -->  */}

      {/* <!-- Counter Area Start--> */}
      <Counter />
      {/* <!-- Counter Area End--> */}

      {/* <!-- Contact Section Start --> */}
 <section id="contact" className="section-padding">
        <div className="contact-form">
          <div className="container">


            <div
              className="row contact-form-area wow fadeInUp mt-0 pt-3"
              data-wow-delay="0.4s"
            >
                <h1 className='text-center mt-3 mb-5 '>Contact</h1>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="contact-block">
                  <h2>Contact Form</h2>
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Email"
                            id="email"
                            className="form-control"
                            name="email"
                            required
                            data-error="Please enter your email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Subject"
                            id="msg_subject"
                            className="form-control"
                            required
                            data-error="Please enter your subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
                            rows="5"
                            data-error="Write your message"
                            required
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="submit-button">
                          <button
                            className="btn btn-common"
                            id="submit"
                            type="submit"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="footer-right-area wow fadeIn">
                  <h2>Contact Address</h2>
                  <div className="footer-right-contact">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <p>San Francisco, CA</p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <p>
                        <a href="mailto:hello@tom.com">hello@tom.com</a>
                      </p>
                      <p>
                        <a href="mailto:tomsaulnier@gmail.com">
                          tomsaulnier@gmail.com
                        </a>
                      </p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <p>
                        <a href="#">+ (00) 123 456 789</a>
                      </p>
                      <p>
                        <a href="#">+ (00) 123 344 789</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <object
           
                  style={{border:"0",height:"450px",width:"100%"}}
                  data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"
                ></object>
              </div>
            </div>
          </div>
        </div>
      </section>     
      {/* <!-- Contact Section End --> */}
      <Cta />
      {/* <!-- Footer Section Start --> */}

    </>
  );
};

export default Home;
