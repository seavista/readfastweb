"use client";

import Script from "next/script";

export default function LandingPage() {
  return (
    <>
      {/* ======== preloader ======== */}
      <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="spinner-container">
              <div className="spinner-rotator">
                <div className="spinner-left">
                  <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                  <div className="spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======== header ======== */}
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <img src="/img/logo/logo.svg" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="page-scroll active" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#features">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#why">
                          Why
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#pricing">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#chat"
                          className="button main-btn btn-padding"
                        >
                          Download
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ======== hero-section ======== */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Experience the Future of Reading with AI
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  ReadFast is revolutionizing the way you read by utilizing the
                  latest in AI technology to enhance reading speed and
                  comprehension. Reading just got smarter with AI and the
                  ReadFast app. Easily improve your reading speed, comprehension
                  and increase your vocabulary.
                </p>
                <h6 className="wow fadeInUp" data-wow-delay=".6s">
                  Join Today for FREE and Blast off into the Next Level of
                  Reading Speed!
                </h6>
                <div className="store-buttons wow fadeInUp" data-wow-delay=".6s">
                  <a
                    href="#"
                    className="store-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                  </a>
                  <a
                    href="#"
                    className="store-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                  </a>
                </div>
                <a href="#features" className="scroll-bottom">
                  <i className="lni lni-arrow-down"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                <div id="player"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== feature-section ======== */}
      <section id="features" className="feature-section pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <i className="lni lni-rocket"></i>
                </div>
                <div className="content">
                  <h3>Read Faster</h3>
                  <p>
                    With ReadFast app for iOS, Android, Mac, Windows and the
                    web. Your content follows you and can help increase your
                    reading speed, comprehension and make reading more
                    efficient, all while enjoying a seamless, distraction-free
                    reading experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <i className="lni lni-graduation"></i>
                </div>
                <div className="content">
                  <h3>Learn More</h3>
                  <p>
                    Powerful AI for busy professionals, students, or anyone who
                    wants to save time and improve their reading efficiency and
                    enjoyment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-feature">
                <div className="icon">
                  <i className="lni lni-coffee-cup"></i>
                </div>
                <div className="content">
                  <h3>Get More Done</h3>
                  <p>
                    The smart summarization feature uses AI technology to craft
                    customizable summaries of the text, allowing you to quickly
                    grasp the main ideas and important concepts and meanings
                    without reading the complete content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== about-section 1 ======== */}
      <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img">
                <img
                  src="/img/about/about-1.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="/img/about/about-left-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="/img/about/left-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Revolutionize Your Reading Speed with AI Technology
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Unlock the true potential of your reading speed with our
                    groundbreaking AI-powered app. Gone are the days of slow,
                    laborious reading. We are revolutionizing the way people
                    read by harnessing the cutting-edge capabilities of AI
                    technology. Our app is your key to unlocking enhanced
                    reading speed and comprehension like never before.
                    <br />
                    <br />
                    Experience a game-changing speed-reading interface
                    meticulously designed to propel you forward. With our
                    innovative approach, we utilize non-peripheral vision shift
                    techniques, enabling you to effortlessly absorb more words
                    at once.
                    <br />
                    <br />
                    Developing your reading speed is a skill that can be honed,
                    and our AI-powered app is here to guide you every step of
                    the way. With practice and our advanced techniques,
                    you&apos;ll witness a remarkable improvement in both speed
                    and comprehension, empowering you to consume more
                    information in less time.
                  </p>
                </div>
                <div className="store-buttons wow fadeInUp" data-wow-delay=".6s">
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                  </a>
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== about-section 2 ======== */}
      <section className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Unlock Reading Speeds Up To 70% Faster with Better
                    Comprehension
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Experience a groundbreaking way to read with our
                    cutting-edge technology that can supercharge your reading
                    speeds by up to 70% while enhancing your comprehension like
                    never before. Gone are the days of sluggish reading and
                    struggling to retain information. Our innovative system
                    leverages the power of AI to optimize your reading
                    experience, allowing you to breeze through texts with
                    lightning-fast speed and gain a deeper understanding of the
                    content. Say goodbye to traditional reading methods and
                    embrace a new era of efficiency and productivity. Unlock
                    your true reading potential today and open doors to a world
                    of knowledge and achievement. Try it now and start reading
                    smarter today.
                  </p>
                </div>
                <ul>
                  <li>Distraction-free Reading</li>
                  <li>Track Reading Progress</li>
                  <li>Increase Speed Instantly</li>
                </ul>
                <div className="store-buttons wow fadeInUp" data-wow-delay=".6s">
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                  </a>
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-first order-lg-last">
              <div className="about-img-2">
                <img
                  src="/img/about/about-2.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="/img/about/about-right-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="/img/about/right-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== about-section 3 ======== */}
      <section className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img">
                <img
                  src="/img/about/about-3.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="/img/about/about-left-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="/img/about/left-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Build Your Reading Library from Content From Your Work,
                    School or Everyday Life
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Create your own personal reading library with content from
                    every aspect of your life. Whether it&apos;s articles from
                    your work, textbooks from school, or even fascinating
                    pieces from your everyday life, we provide you with a
                    seamless solution to curate a collection that resonates
                    with you. No more scattered resources or forgotten
                    bookmarks - our user-friendly interface empowers you to
                    organize and access all your reading materials in one
                    centralized hub. Dive into a world of endless knowledge
                    and inspiration as you effortlessly create a library
                    tailored to your interests and goals. Start building your
                    reading sanctuary today and unlock the gateway to a
                    universe of information that fuels your personal and
                    professional growth.
                  </p>
                </div>
                <div className="store-buttons wow fadeInUp" data-wow-delay=".6s">
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                  </a>
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== about-section 4 ======== */}
      <section className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Fully Customizable for Your Reading Style
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Your reading experience takes center stage. With our fully
                    customizable user interface, you have the power to create a
                    reading environment that aligns perfectly with your style
                    and preferences. From the font type and size to the color
                    scheme and layout, every aspect can be tailored to enhance
                    your reading comfort and enjoyment. Whether you prefer a
                    classic serif font or a modern sans-serif, a soothing
                    background color or a vibrant theme, the choice is yours.
                    We believe that reading is a personal journey, and our
                    platform empowers you to design it just the way you
                    envision. Embrace the freedom of customization and embark
                    on a reading experience that reflects your unique taste and
                    enhances your immersion. Dive into your favorite content
                    with a user interface that&apos;s truly yours. Start
                    customizing today and elevate your reading to a whole new
                    level.
                  </p>
                </div>
                <div className="store-buttons wow fadeInUp" data-wow-delay=".6s">
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                  </a>
                  <a href="#" className="store-btn" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-first order-lg-last">
              <div className="about-img-2">
                <img
                  src="/img/about/about-4.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="/img/about/about-right-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="/img/about/right-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== why choose readfast ======== */}
      <section id="why" className="feature-extended-section pt-100">
        <div className="feature-extended-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                <div className="section-title text-center mb-60">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Why Choose ReadFast
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    ReadFast is designed to help you read smarter, faster, and
                    more efficiently. With a range of features that cater to
                    different reading needs and preferences, it helps to
                    improve your reading now.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-display"></i>
                  </div>
                  <div className="content">
                    <h3>Speed Reading</h3>
                    <p>
                      Powerful non-peripheral vision technology to take in more
                      words at once. Increase your reading speed while
                      improving comprehension.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-leaf"></i>
                  </div>
                  <div className="content">
                    <h3>Smart Summaries</h3>
                    <p>
                      Quickly grasp main ideas and concepts without having to
                      read the whole text. Save time and improve reading
                      efficiency. Customizable summary level, personalize your
                      reading experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-grid-alt"></i>
                  </div>
                  <div className="content">
                    <h3>Comprehension</h3>
                    <p>
                      Utilize the latest in AI technology to enhance your
                      understanding of the texts you read and increase your
                      vocabulary. Gain a deeper understanding of the texts you
                      read.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-rocket"></i>
                  </div>
                  <div className="content">
                    <h3>Real Time AI Quizzes</h3>
                    <p>
                      AI creates quizzes that can challenge your comprehension.
                      Quickly read and understand complex texts. Get
                      personalized reading recommendations. Track your reading
                      progress and get insights.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-layers"></i>
                  </div>
                  <div className="content">
                    <h3>Free From Distractions</h3>
                    <p>
                      Enjoy a seamless, distraction-free reading experience.
                      Improve focus and concentration while reading, helps
                      improve reading concentration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-package"></i>
                  </div>
                  <div className="content">
                    <h3>Track Progress</h3>
                    <p>
                      Track your reading progress. Get insights into your
                      reading habits. Customizable for your style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== pricing-section ======== */}
      <section id="pricing" className="pricing-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
              <div className="section-title text-center mb-35">
                <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Choose a Plan
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Unlock the full potential of your reading with our premium
                  subscription
                </p>
              </div>
            </div>
          </div>
          <div className="pricing-nav-wrapper mb-60">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li role="presentation">
                <a
                  className="active"
                  id="pills-month-tab"
                  data-bs-toggle="pill"
                  href="#pills-month"
                  role="tab"
                  aria-controls="pills-month"
                  aria-selected="true"
                >
                  Monthly
                </a>
              </li>
              <li role="presentation">
                <a
                  id="pills-year-tab"
                  data-bs-toggle="pill"
                  href="#pills-year"
                  role="tab"
                  aria-controls="pills-year"
                  aria-selected="false"
                >
                  Yearly
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            {/* Monthly Tab */}
            <div
              className="tab-pane fade show active"
              id="pills-month"
              role="tabpanel"
              aria-labelledby="pills-month-tab"
            >
              <div className="row justify-content-center">
                {/* LEARN */}
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="single-pricing">
                    <div className="pricing-header">
                      <h1 className="price">FREE</h1>
                      <h3 className="package-name">LEARN</h3>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Speed Reader
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Smart Pacer
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>
                          Customizable Word Sets
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Focus
                          Highlight
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Basic
                          Support
                        </li>
                        <li>
                          <i className="lni lni-close"></i> AI Smart Summaries
                        </li>
                        <li>
                          <i className="lni lni-close"></i> AI Comprehension
                          Booster
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Progress Tracker
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Customizable Font
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Reader Themes
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Text-To-Speech
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a
                        href="#chat"
                        className="main-btn btn-hover border-btn"
                      >
                        Join Waitlist
                      </a>
                    </div>
                  </div>
                </div>
                {/* ReadFast Plus */}
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="single-pricing">
                    <div className="pricing-header">
                      <h1 className="price">$4.99</h1>
                      <h3 className="package-name">ReadFast Plus</h3>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Speed Reader
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Smart Pacer
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>
                          Customizable Word Sets
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Focus
                          Highlight
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>24/7
                          Support
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>100 AI Smart Summaries</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>100 AI Comprehension Test</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Progress Tracker</b>
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Customizable Font
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Reader Themes
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Text-To-Speech
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a
                        href="https://buy.stripe.com/test_9AQ3dTacL7tS0pO001"
                        className="main-btn btn-hover border-btn"
                      >
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
                {/* ReadFast Pro */}
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="single-pricing">
                    <div className="pricing-header">
                      <h1 className="price">$9.99</h1>
                      <h3 className="package-name">ReadFast Pro</h3>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Speed Reader
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Smart Pacer
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>
                          Customizable Word Sets
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Focus
                          Highlight
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>24/7
                          Support
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>500 AI Smart Summaries</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>500 AI Comprehension Test</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Progress Tracker</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Customizable Font</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Reader Themes</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Text-To-Speech</b>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a
                        href="https://buy.stripe.com/test_9AQ15L98Hg0o3C0fZ0"
                        className="main-btn btn-hover border-btn"
                      >
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yearly Tab */}
            <div
              className="tab-pane fade"
              id="pills-year"
              role="tabpanel"
              aria-labelledby="pills-year-tab"
            >
              <div className="row justify-content-center">
                {/* Basic */}
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="single-pricing">
                    <div className="pricing-header">
                      <h1 className="price">FREE</h1>
                      <h3 className="package-name">Basic Account</h3>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Speed Reader
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Smart Pacer
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>
                          Customizable Word Sets
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Focus
                          Highlight
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Basic
                          Support
                        </li>
                        <li>
                          <i className="lni lni-close"></i> AI Smart Summaries
                        </li>
                        <li>
                          <i className="lni lni-close"></i> AI Comprehension
                          Test
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Progress Tracker
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Customizable Font
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Reader Themes
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Text-To-Speech
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a
                        href="#chat"
                        className="main-btn btn-hover border-btn"
                      >
                        Join Waitlist
                      </a>
                    </div>
                  </div>
                </div>
                {/* ReadFast Plus Yearly */}
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="single-pricing">
                    <div className="pricing-header">
                      <h1 className="price">$39.99</h1>
                      <h3 className="package-name">ReadFast Plus Yearly</h3>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Speed Reader
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Smart Pacer
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>
                          Customizable Word Sets
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Focus
                          Highlight
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>24/7
                          Support
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>100 AI Smart Summaries</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>100 AI Comprehension Test</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Progress Tracker</b>
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Customizable Font
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Reader Themes
                        </li>
                        <li>
                          <i className="lni lni-close"></i> Text-To-Speech
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="#chat" className="main-btn btn-hover">
                        Join Waitlist
                      </a>
                    </div>
                  </div>
                </div>
                {/* Pro Yearly */}
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="single-pricing">
                    <div className="pricing-header">
                      <h1 className="price">$69.99</h1>
                      <h3 className="package-name">Pro Yearly</h3>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Speed Reader
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>ReadFast
                          Smart Pacer
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>
                          Customizable Word Sets
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>Focus
                          Highlight
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>24/7
                          Support
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>500 AI Smart Summaries</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>500 AI Comprehension Test</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Progress Tracker</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Customizable Font</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Reader Themes</b>
                        </li>
                        <li>
                          <i className="lni lni-checkmark active"></i>{" "}
                          <b>Text-To-Speech</b>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a
                        href="#chat"
                        className="main-btn btn-hover border-btn"
                      >
                        Join Waitlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== testimonial-section ======== */}
      <section id="testimonials" className="testimonial-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-30">What our users say</h2>
          </div>
          <div className="testimonial-active-wrapper">
            <div className="shapes">
              <img
                alt=""
                className="shape shape-1"
                src="/img/testimonial/testimonial-shape.svg"
              />
              <img
                alt=""
                className="shape shape-2"
                src="/img/testimonial/testimonial-dots.svg"
              />
            </div>

            <div className="testimonial-active">
              {/* Testimonial 1 */}
              <div className="single-testimonial">
                <div className="row">
                  <div className="col-xl-5 col-lg-5">
                    <div className="testimonial-img">
                      <img
                        alt=""
                        src="/img/testimonial/testimonial-1.png"
                      />
                      <div className="quote">
                        <i className="lni lni-quotation"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1">
                    <div className="content-wrapper">
                      <div className="content">
                        <p>
                          I never thought I could read so fast until I started
                          using Readfast. It has changed the way I approach my
                          work and I&apos;m able to get through materials much
                          quicker now.
                        </p>
                      </div>
                      <div className="info">
                        <h4>Taylor Vines</h4>
                        <p>University Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="single-testimonial">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="testimonial-img">
                      <img
                        alt=""
                        src="/img/testimonial/testimonial-2.png"
                      />
                      <div className="quote">
                        <i className="lni lni-quotation"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1">
                    <div className="content-wrapper">
                      <div className="content">
                        <p>
                          As a busy professional, Readfast has allowed me to
                          save time and be more productive. I&apos;m able to
                          get through emails and reports much quicker now.
                        </p>
                      </div>
                      <div className="info">
                        <h4>Simon Green</h4>
                        <p>UIX Designer and Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="single-testimonial">
                <div className="row">
                  <div className="col-xl-5 col-lg-5">
                    <div className="testimonial-img">
                      <img
                        alt=""
                        src="/img/testimonial/testimonial-1.png"
                      />
                      <div className="quote">
                        <i className="lni lni-quotation"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1">
                    <div className="content-wrapper">
                      <div className="content">
                        <p>
                          I was skeptical about Readfast at first, but now I
                          can&apos;t imagine going back to my old reading
                          speed. It&apos;s made such a huge difference in my
                          life.
                        </p>
                      </div>
                      <div className="info">
                        <h4>Jonathon Smith</h4>
                        <p>Business Leader</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== subscribe/CTA section ======== */}
      <a id="chat"></a>
      <section id="contact" className="subscribe-section pt-120">
        <div className="container">
          <div className="subscribe-wrapper img-bg">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title mb-15">
                  <h2 className="text-white mb-25">
                    Be among the first to experience the power of ReadFast AI
                    App!
                  </h2>
                  <p className="text-white pr-5">
                    Join our early access beta program and help us build
                    something awesome. Get exclusive access to our latest
                    features and provide valuable feedback that will shape the
                    future of our app. Sign up now for your chance to be a part
                    of the ReadFast community and elevate your reading game!
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <a
                  href="https://discord.gg/UTY9wyvRR6"
                  className="button main-btn btn-hover discord-btn"
                >
                  Request Discord Invite
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== footer ======== */}
      <footer className="footer">
        <div className="container">
          <div className="widget-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="logo mb-30">
                    <a href="/">
                      <img
                        src="/img/logo/logo.svg"
                        className="footerlogo"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="desc mb-30 text-white">
                    Revolutionize the Way You Read.
                  </p>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h3>About Us</h3>
                  <ul className="links">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#features">Feature</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#testimonials">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3>Features</h3>
                  <ul className="links">
                    <li>
                      <a href="#features">How it works</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy policy</a>
                    </li>
                    <li>
                      <a href="/terms-of-service">Terms of service</a>
                    </li>
                    <li>
                      <a href="/refund-policy">Refund policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3>Resources</h3>
                  <ul className="links">
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">App Store</a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">Google Play</a>
                    </li>
                    <li>
                      <a href="/readingtest">Speed Reading Test</a>
                    </li>
                    <li>
                      <a href="/account-deletion">Account Deletion</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Data &amp; Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ======== scroll-top ======== */}
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>

      {/* YouTube IFrame API */}
      <Script
        id="youtube-api"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;
            function onYouTubeIframeAPIReady() {
              player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: 'WZGRzv0-UEU',
                playerVars: {
                  'playsinline': 1,
                  'autoplay': 1,
                  'rel': 0
                },
                events: {
                  'onReady': function(event) { event.target.playVideo(); },
                  'onStateChange': function(event) {}
                }
              });
            }
          `,
        }}
      />

      {/* Testimonial tiny-slider init */}
      <Script
        id="tns-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function initSlider() {
              if (typeof tns === 'undefined') {
                setTimeout(initSlider, 200);
                return;
              }
              tns({
                container: '.testimonial-active',
                mode: 'gallery',
                loop: true,
                items: 1,
                slideBy: 'page',
                nav: true,
                autoplay: true,
                speed: 400,
                autoplayButtonOutput: false,
                mouseDrag: true,
                lazyload: false,
                controls: false,
              });
            })();
          `,
        }}
      />
    </>
  );
}
