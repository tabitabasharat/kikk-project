import React from "react";
import "./Landingpage.css";
import Header from "../Header/Header";
import mainimg from "../../assets/image.png";
import main from "../../assets/mobile1image.png";
import logomrkyellow from "../../assets/logomark-yellow.svg.png";
import logomrk from "../../assets/logomark.svg.png";
import learnbutton from "../../assets/Link.png";
import { Button, ProgressBar } from "react-bootstrap";
import Footer from "../Footer/Footer";
import water from "../../assets/water.png";
import dot from "../../assets/span.Tag_decoration__XmEyo.png";
// import purpleimg from "../../assets/div.HeroBackground_gradient__OuxEh.png"

function Landingpage() {
  return (
    <div className="main-bg-photo ">
      <div>
        <Header />
        <div>
          <img src={mainimg} className="mainimg" />
          <img src={main} className="main" />
        </div>
      </div>
      <div className="waterflow row nav-connt ">
        <p className="talks text-warning">WHERE TO START?</p>
        <div className=" where-to-start-card rm mt-5 pb-5">
          <div className="crd flex-row ">
            <img src={logomrkyellow} className="" />
            <p className="text-white kik-font">
              KIKK for<span className="text-warning"> Pro</span>
            </p>
            <ul className="text-white text-start mb-2 ps-4">
              <li>Participate in talks</li>
              <li>
                Book workshops and
                <br /> masterclasses
              </li>
              <li>Participate in B to B activities</li>
              <li>Register on the Festival app</li>
              <li>Participate to the KIKK parties</li>
              <li>
                Discover the KIKK in Town and <br />
                the Market
              </li>
            </ul>
            <img src={learnbutton} />
          </div>
          <div className="text-white crd">
            <img src={logomrk} className="" />
            <p className="text-white kik-font">
              KIKK for<span className="text-secondary"> All</span>
            </p>
            <ul className="text-white text-start mb-2 ps-4">
              <li>Discover the KIKK in Town</li>
              <li>Discover the KIKK Market</li>
              <li>
                Test, handle, pre-order at the
                <br />
                Market
              </li>
              <li>
                Enjoy the atmosphere of the
                <br />
                KIKK Festival
              </li>
              <li>
                Register your children to the
                <br />
                workshops for kids
              </li>
            </ul>
            <img src={learnbutton} />
          </div>
        </div>
        <div className="pt-5">
          <Button className="learn rounded-pill">Learn from other</Button>
          <p className="talks text-warning">TALKS</p>
          <p className="text1 text-white">
            More than 35 talks about creative coding, data
            <br />
            visualization, artificial intelligence, branding and
            <br />
            strategy, VR/AR, bioart, design, research and more. With
            <br />
            the support of Digital Wallonia.
          </p>
        </div>
        <div className=" gap-4 mb-5 d-flex justify-content-center flex-wrap align-items-center ">
          <div className=" box d-flex justify-content-start ">
            <div>
              <p className="proto text-white">Porto Rocha</p>
              <p className="text-warning ticket mb-2">Ticket required</p>
              <p className="text-white text-start">
                The creative journey of an exceptional
                <br />
                design duo.
              </p>

              <div>
                <div className="bgfont rounded-pill mb-2">
                  <p className="text-white ticket mb-0">
                    {" "}
                    <img src={dot} className="dot me-1" />
                    ART & CULTURE
                  </p>
                </div>
                <div className="bgfont rounded-pill mb-2">
                  <p className="text-white ticket mb-0">
                    {" "}
                    <img src={dot} className="dot me-1" />
                    GRAPHIC DESIGN
                  </p>
                </div>
                <div className="bgfont rounded-pill">
                  <p className="text-white ticket mb-0">
                    {" "}
                    <img src={dot} className="dot me-1" />
                    BRANDING AND STRATEGY
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box talks-text1 talk-box d-flex justify-content-start ">
            <div className="talk-box">
              <p className="proto  text-white">Anagram</p>
              <p className="text-warning ticket mb-2">Ticket required</p>
              <p className="text-white text-start">
                Kirsty will discuss the power of
                <br /> physical experiences in virtual spaces to shape
                perception.
              </p>
              <div className="">
                <div className="d-flex">
                  <div className="bgfont rounded-pill mb-2 me-1">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      VR
                    </p>
                  </div>
                  <div className="bgfont rounded-pill mb-2">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      STORYTELLING
                    </p>
                  </div>
                </div>
                <div className="bgfont rounded-pill mb-2">
                  <p className="text-white ticket mb-0">
                    {" "}
                    <img src={dot} className="dot me-1" />
                    IMMERSIVE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box talk-box d-flex justify-content-start align-items-end">
            <div className="talk-box">
              <p className="proto text-white">Gemma O’Brien</p>
              <p className="text-warning ticket mb-2">Ticket required</p>
              <p className="text-white text-start">
                Gemma will share the hands-on
                <br />
                processes behind her largest wall
                <br />
                installations.
              </p>
              <div className="">
                <div className="d-flex">
                  <div className="bgfont rounded-pill mb-2 me-1">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      GRAPHIC DESIGN
                    </p>
                  </div>
                  <div className="bgfont rounded-pill mb-2 me-1">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      BRANDING
                    </p>
                  </div>
                </div>
                <div className="bgfont rounded-pill mb-2">
                  <p className="text-white ticket mb-0">
                    {" "}
                    <img src={dot} className="dot me-1" />
                    ART
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box talk-box d-flex justify-content-start align-items-end">
            <div className="talk-box">
              <p className="proto text-white">Edan Kwan</p>
              <p className="text-warning ticket mb-2">Ticket required</p>
              <p className="text-white text-start">
                Through the looking glass of this talk,
                <br />
                we’ll dive deep into the oceans of
                <br />
                immersive experiences.
              </p>
              <div className="">
                <div className="d-flex">
                  <div className="bgfont rounded-pill mb-2 me-1">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      AR
                    </p>
                  </div>
                  <div className="bgfont rounded-pill mb-2 me-1">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      VR
                    </p>
                  </div>
                  <div className="bgfont rounded-pill mb-2 me-1">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      XR
                    </p>
                  </div>
                  <div className="bgfont rounded-pill mb-2 me-1">
                    <p className="text-white ticket mb-0">
                      {" "}
                      <img src={dot} className="dot me-1" />
                      DATAVIZ
                    </p>
                  </div>
                </div>
                <div className="bgfont rounded-pill mb-2 ">
                  <p className="text-white ticket mb-0">
                    {" "}
                    <img src={dot} className="dot me-1" />
                    WEBGL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProgressBar now={40} variant="warning" />
        </div>
        <div className="view">
          <Button className="rounded-pill nav-view-buttn ps-4 view-button">
            View all<span className="text-warning ps-4">+</span>
          </Button>
          <Button className="rounded-pill navbuttn bg-warning border-warning view-button ">
            Get Tickets
          </Button>
        </div>
        <div>
          <div>
            <div className="btm">
              <Button className="learn rounded-pill">
                Discover the unique
              </Button>
              <p className="talks text-warning">MARKET</p>
              <p className="text-white">
                The Market is the place where you will discover the
                <br />
                unique and innovative projects of talented Belgian and
                <br />
                international entrepreneurs. On the program : a<br />
                selection of innovative objects to handle, to test before
                <br />
                everyone else. From 10am to 6pm (except Sunday from
                <br />
                10am to 4pm). Supported by the Feder.
              </p>
            </div>
            <div className="rm">
              <div className=" d-flex justify-content-center gap-4 flex-wrap align-items-center">
                <div className="box d-flex justify-content-start">
                  <div>
                    {/* <img src={water} className="water1" /> */}
                    <p className="proto text-white">Piano LED (FR)</p>
                    <p className="text-warning ticket mb-2">Free</p>
                    <p className="text-white text-font">
                      An intelligent LED strip for learning the piano in a fun
                      and accessible way.
                    </p>

                    <div>
                      <div className="bgfont rounded-pill mb-2">
                        <p className="text-white ticket mb-0">
                          <img src={dot} className="dot me-1" />
                          MUSIC TECH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box d-flex justify-content-start align-items-end">
                  <div className="talk-box">
                    <p className="proto text-white">ONA (BE)</p>
                    <p className="text-warning ticket mb-2">Free</p>
                    <p className="text-white text-font">
                      An interactive journey across the world to discover the
                      quest of humanity.
                    </p>
                    <div className="">
                      <div className="d-flex">
                        <div className="bgfont rounded-pill mb-2 me-1">
                          <p className="text-white ticket mb-0">
                            <img src={dot} className="dot me-1" />
                            VR
                          </p>
                        </div>
                        <div className="bgfont rounded-pill mb-2">
                          <p className="text-white ticket mb-0">
                            <img src={dot} className="dot me-1" />
                            MOTION DESIGN
                          </p>
                        </div>
                      </div>
                      <div className="bgfont rounded-pill mb-2">
                        <p className="text-white ticket mb-0">
                          <img src={dot} className="dot me-1" />
                          DIGITAL ART
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box d-flex justify-content-start align-items-end">
                  <div className="talk-box">
                    <p className="proto text-white">MetaMorphos VR (BE)</p>
                    <p className="text-warning ticket mb-2">Free</p>
                    <p className="text-white text-font">
                      Explore the internal structure of
                      <br />
                      animals, from insects to starfish, using
                      <br />
                      3D avatars.
                    </p>
                    <div className="">
                      <div className="d-flex">
                        <div className="bgfont rounded-pill mb-2 me-1">
                          <p className="text-white ticket mb-0">
                            <img src={dot} className="dot me-1" />
                            ED TECH
                          </p>
                        </div>
                        <div className="bgfont rounded-pill mb-2 me-1">
                          <p className="text-white ticket mb-0">
                            <img src={dot} className="dot me-1" />
                            BIOLOGY
                          </p>
                        </div>
                        <div className="bgfont rounded-pill mb-2 ">
                          <p className="text-white ticket mb-0">
                            <img src={dot} className="dot me-1" />
                            VR
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box d-flex justify-content-start align-items-end water">
                  <div className="talk-box">
                    <p className="proto text-white">Epistolary (CA)</p>
                    <p className="text-warning ticket mb-2">Free</p>
                    <p className="text-white text-font">
                      Witness a musical revolution with
                      <br />
                      Quebec’s very first virtual music video !
                    </p>
                    <div className="">
                      <div className="d-flex">
                        <div className="bgfont rounded-pill mb-2 me-1">
                          <p className="text-white ticket mb-0">
                            <img src={dot} className="dot me-1" />
                            VR
                          </p>
                        </div>
                        <div className="bgfont rounded-pill mb-2 me-1">
                          <p className="text-white ticket mb-0">
                            <img src={dot} className="dot me-1" />
                            ART & CULTURE
                          </p>
                        </div>
                        <div className="bgfont rounded-pill mb-3 me-1">
                          <p className="text-white mb-0">
                            <img src={dot} className="dot me-1" />
                            MUSIC
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProgressBar now={40} variant="warning" />
              <div className="view">
                <Button className="rounded-pill nav-view-buttn ps-4 view-button">
                  View all<span className="text-warning ps-4">+</span>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="btm">
              <Button className="learn rounded-pill">Play the city</Button>
              <p className="talks text-warning">KIKK IN TOWN</p>
              <p className="text-white">
                KIKK invades the whole city with an art exhibition in 10
                <br />
                different locations. Discover Namur in a different way
                <br />
                thanks to this journey including monumental and
                <br />
                interactive installations ! Entrance fee 5€ for the entire
                <br />
                trail (free for children under 16).
              </p>
            </div>
            <div>
              <div className=" d-flex justify-content-center gap-4 flex-wrap align-items-center">
                <div className="box d-flex justify-content-start align-items-end">
                  <div>
                    <p className="proto text-white">Nicky Assmann</p>
                    <p className="text-warning ticket mb-2">Ticket required</p>
                    <p className="text-white text-start">
                      An exploration of the mental process and physical activity
                      of seeing through soap films.
                    </p>

                    <div className="">
                      <div className="bgfont rounded-pill mb-2">
                        <p className="text-white mb-0">
                          <img src={dot} className="dot me-1" />
                          BODIES OF WATER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box d-flex justify-content-start align-items-end">
                  <div className="talk-box">
                    <p className="proto text-white">Diane Mahín</p>
                    <p className="text-warning ticket mb-2">Ticket required</p>
                    <p className="text-white text-start">
                      GUT imagines how humans behave when their bodies are
                      turned inside out.
                    </p>
                    <div className="">
                      <div className="bgfont rounded-pill mb-2">
                        <p className="text-white mb-0">
                          <img src={dot} className="dot me-1" />
                          BODIES OF WATER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box d-flex justify-content-start align-items-end">
                  <div className="talk-box">
                    <p className="proto text-white">
                      Navid Navab & Michael Montanaro
                    </p>
                    <p className="text-warning ticket mb-2">Ticket required</p>
                    <p className="text-white text-start">
                      This installation separates speech into vital elements, a
                      drop at a time.
                    </p>
                    <div className="">
                      <div className="bgfont rounded-pill mb-2">
                        <p className="text-white mb-0">
                          <img src={dot} className="dot me-1" />
                          BODIES OF WATER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box d-flex justify-content-start align-items-end water">
                  <div className="talk-box">
                    <p className="proto text-white">Lawrence Malstaf</p>
                    <p className="text-warning ticket mb-2">Ticket required</p>
                    <p className="text-white text-start">
                      This spectacular installation turns out to mesmerise as a
                      kind of meditation machine.
                    </p>
                    <div className="">
                      <div className="d-flex mb-1">
                        <div className="bgfont rounded-pill mb-2 me-1">
                          <p className="text-white mb-0">
                            <img src={dot} className="dot me-1" />
                            CAPTURE #2
                          </p>
                        </div>
                        <div className="bgfont rounded-pill mb-2">
                          <p className="text-white mb-0">
                            <img src={dot} className="dot me-1" />
                            LE PAVILLON
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ProgressBar now={40} variant="warning" />
              </div>
              <div className="view">
                <Button className="rounded-pill nav-view-buttn ps view-button">
                  View all<span className="text-warning ps-4">+</span>
                </Button>
                <Button className="rounded-pill navbuttn bg-warning border-warning view-button">
                  Get Tickets
                </Button>
              </div>
            </div>
            <div>
              <p className="text-warning get-the-latest mb-0">
                GET THE LATEST
                <br /> NEWS
                <br />
                ABOUT KIKK
              </p>
              <p className="text-white get-text">
                Register to our newsletter and don't miss anything
                <br />
                anymore. We promise we will not spam you!
              </p>
            </div>
          </div>
          <div>
  <div className="rm d-flex justify-content-center">
    <div className="input-group">
      <input
        type="email"
        placeholder="Enter your email"
        className="email-input"
      />
      <button className="subscribe-button">Subscribe</button>
    </div>
  </div>
  <button className="subscribe1">Subscribe</button>
</div>

          {/* <div>
            <div className="rm">
              <input
                type="Email"
                placeholder="Enter your email"
                className="rm mailbox"
              />
              <div className="rm3">
                <Button className=" subscribe">Subscribe</Button>
              </div>
            </div>
            <Button className=" subscribe1">Subscribe</Button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landingpage;
