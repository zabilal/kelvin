import React from 'react';
// import { connect } from 'react-redux';
import NavigationBar from './NavigationBar';

// import '../App.css'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="section-hero">
          <div className="container">
            <div className="text-center">
              <h1 className="hero-text"><span className="text-gradient-1">Crush-19 </span></h1>
              <h1 className="hero-text"><span className="text-gradient-2">The Pandemic<br />Dating app</span></h1>
              <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="fixed-nav w-nav">
                <NavigationBar />   
                <div className="nav-gradient-container">
                  <div className="gradient-line thin"></div>
                </div>
              </div>
            </div>
            <div className="small-container">
              <div className="text-center">
                <div className="text-holder">
                  <h6 className="text-display">When sliding into DMs can land you in quarantine. We bring you a safer, user friendly,<br /> dating experience in the world of a pandemic. </h6>
                </div>
              </div>
              <div data-w-id="3d8609da-3448-387d-1e0e-10521ed65395" className="hero-product-demo">
                <div className="product-macbookholder">
                  <img src="/images/macbook2x.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 77vw, (max-width: 1439px) 992px, 1120px" srcset="/images/macbook2x-p-500.png 500w, /images/macbook2x-p-800.png 800w, /images/macbook2x-p-1080.png 1080w, /images/macbook2x-p-1600.png 1600w, /images/macbook2x.png 1792w" alt="" />
                  <div className="product-icons-background"></div>
                </div>
                <div className="product-demo-sticky">
                  <div className="product-image-container">
                    <div className="product-container desktop">
                      <img src="/images/New-Project-4.png" loading="lazy" sizes="(max-width: 479px) 77vw, (max-width: 767px) 79vw, (max-width: 991px) 80vw, (max-width: 1279px) 58vw, (max-width: 1439px) 772px, 880px" srcset="/images/New-Project-4.png 500w, /images/New-Project-4.png 800w, /images/New-Project-4.png 972w" alt="" className="product-image" />
                      <a href="#" className="play-icon-holder w-inline-block w-lightbox">
                      <img src="/images/play-icon.svg" loading="lazy" alt="" className="play-icon-image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="small-container">
              <div className="text-center">
                <h3>No installation </h3>
                <p className="grey-text">Simply log into your account, put up your best pics, information about yourself, location. <br />Then check out the local singles you want to meet.</p>
              </div>
            </div>
            <div className="horizontal-line"></div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="text-center">
              <h2>Just say 💬 it</h2>
              <div className="text-container">
                <p className="grey-text">&quot; It&#x27;s not a date, we&#x27;re just agreeing to eat at the same table&quot;</p>
              </div>
            </div>
            {/*<div data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
              <div className="tabs-menu w-tab-menu">
                <a data-w-tab="Tab 1" className="tab-link w-inline-block w-tab-link w--current">
                  <div className="tab-icon-holder">
                    <div className="tab-icon-gradient"></div>
                      <img src="/images/pngwing-4.png" loading="lazy" alt="" className="tab-icon" />
                  </div>
                  <h4 className="tab-title">Fast and easy</h4>
                  <p className="tab-description">Stop looking at happy couples on instagram. Find a match in your area. In the comfort of your home. While keeping safe during a pandemic.</p>
                </a>
                <a data-w-tab="Tab 2" className="tab-link w-inline-block w-tab-link">
                  <div className="tab-icon-holder">
                    <div className="tab-icon-gradient"></div>
                      <img src="/images/pngwing-6.png" loading="lazy" alt="" className="tab-icon" />
                  </div>
                  <h4 className="tab-title">Chat Directly</h4>
                  <p className="tab-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.</p>
                </a>
                <a data-w-tab="Tab 3" className="tab-link w-inline-block w-tab-link">
                  <h4 className="tab-title">Setup Dates</h4>
                  <p className="tab-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.</p>
                  <div className="tab-icon-holder">
                    <div className="tab-icon-gradient"></div>
                    <img src="/images/pngwing-5.png" loading="lazy" alt="" className="tab-icon" />
                  </div>
                </a>
                <a data-w-tab="Tab 4" className="tab-link w-inline-block w-tab-link">
                  <div className="tab-icon-holder">
                    <div className="tab-icon-gradient"></div>
                    <img src="/images/pngwing-7.png" loading="lazy" height="55" alt="" className="tab-icon" />
                  </div>
                  <h4 className="tab-title">Local Covid Info</h4>
                  <p className="tab-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.</p>
                </a>
              </div>
              <div className="tab-content w-tab-content">
                <div data-w-tab="Tab 1" className="tab-pane w-tab-pane w--tab-active">
                  <img src="/images/pngwing-8.png" loading="lazy" alt="" />
                </div>
        
              </div>
            </div>*/}
          </div>
        </div>
        <div className="section section-grey">
          <div className="container">
            <h2>Make your Dating Life Simpler and Safer</h2>
            <div className="text-container">
              <p className="grey-text">“What are this blind dates?&#x27; he asked curiously .<br />&#x27;An old American institution of mismating.”<br />― <strong>Rona Jaffe</strong>.</p>
            </div>
            <div className="w-layout-grid feature-grid gap-30">
              <a id="w-node-e79ddfb4d30e-49f8c59e" href="#" className="card-item fadein-into-view change-color w-inline-block">
                <div className="card-item-content">
                  <img src="/images/aurora-icon.svg" loading="lazy" alt="" />
                  <h4>Built with saftey in mind</h4>
                </div>
                <div className="card-item-gradient"></div>
              </a>
              <a id="w-node-dd08978e7111-49f8c59e" href="#" className="card-item fadein-into-view change-color w-inline-block">
                <div className="card-item-content">
                  <img src="/images/direction-icon.svg" loading="lazy" alt="" />
                  <h4>Match with people anywhere</h4>
                </div>
                <div className="card-item-gradient"></div>
              </a>
              <a id="w-node-28d94f9e33a4-49f8c59e" href="#" className="card-item fadein-into-view change-color w-inline-block">
                <div className="card-item-content">
                  <h4>Chat and find book dates</h4>
                </div>
                <div className="card-item-gradient gradient-2"></div>
              </a>
              <a id="w-node-471198416976-49f8c59e" href="#" className="card-item fadein-into-view change-color w-inline-block">
                <div className="card-item-content">
                  <h4>Stay covid free or roll the dice</h4>
                </div>
                <div className="card-item-gradient gradient-2"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="section section-grey"></div>
        <div className="section section-grey">
          <div className="container">
            <div className="text-center">
              <h2>Feedback ⭐️</h2>
            </div>
          </div>
          <div className="slider-container">
            <div data-delay="3000" data-animation="slide" data-autoplay="1" data-duration="300" data-infinite="1" className="slider w-slider">
              <div className="slider-mask w-slider-mask">
                <div className="slide w-slide">
                  <div className="feedback-card">
                    <div className="card-item">
                      <div className="card-item-content">
                        <div className="content centered">
                          <div className="feedback-image-holder">
                            <img src="/images/User-1.jpg" loading="lazy" alt="" className="feedback-image" />
                          </div>
                          <p className="text-regular text-center">Found on my match and had great date! </p>
                          <p className="feedback-author"> Lina</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="feedback-card">
                    <div className="card-item">
                      <div className="card-item-content">
                        <div className="content centered">
                          <div className="feedback-image-holder">
                            <img src="/images/User-6.jpg" loading="lazy" alt="" className="feedback-image" />
                          </div>
                          <p className="text-regular text-center">I was worried about dating in the world of a pandemic. Crush-19 helped me stay safe and meet new people.</p>
                          <p className="feedback-author">Katie </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="af3cd836-e1a3-4233-f63c-beb7bfec406e" className="slide w-slide">
                  <div className="feedback-card">
                    <div className="card-item">
                      <div className="card-item-content">
                        <div className="content centered">
                          <div className="feedback-image-holder">
                            <img src="/images/User-3.jpg" loading="lazy" alt="" className="feedback-image" />
                          </div>
                          <p className="text-regular text-center">I had Covid already and I didn&#x27;t want to catch it again. This helped me match with someone who also had antibodies. </p>
                          <p className="feedback-author">Doug </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="feedback-card">
                    <div className="card-item">
                      <div className="card-item-content">
                        <div className="content centered">
                          <div className="feedback-image-holder">
                            <img src="/images/User-4.jpg" loading="lazy" alt="" className="feedback-image"/>
                          </div>
                          <p className="text-regular text-center">I&#x27;ve been stuck in quarantine. I was able to talk with people that had my same problem. Got to Netflix and chill from a distance.</p>
                          <p className="feedback-author">Roxie </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="feedback-card">
                    <div className="card-item">
                      <div className="card-item-content">
                        <div className="content centered">
                          <div className="feedback-image-holder">
                            <img src="/images/User-2.jpg" loading="lazy" alt="" className="feedback-image" />
                          </div>
                          <p className="text-regular text-center">Met Mr. Right! We both love dogs so we setup a date at the local park. Our dogs sniffed butts and so did we!</p>
                          <p className="feedback-author">Tricia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-left-arrow w-slider-arrow-left">
                <div className="w-icon-slider-left"></div>
              </div>
              <div className="slider-right-arrow w-slider-arrow-right">
                <div className="w-icon-slider-right"></div>
              </div>
              <div className="slider-nav w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
        <div className="preloader">
          <div className="preloader-content">
            <div className="preloader-line">
              <div className="preloader-gradient"></div>
            </div>
              <img src="/images/Logo-Final-1-1.png" loading="lazy" width="649" sizes="100vw" srcset="/images/Logo-Final-1-1-p-500.png 500w, /images/Logo-Final-1-1-p-800.png 800w, /images/Logo-Final-1-1-p-1080.png 1080w, /images/Logo-Final-1-1.png 3218w" alt="" />
          </div>
        </div>
        <div className="preloader">
          <div className="preloader-content">
            <div className="preloader-line">
              <div className="preloader-gradient"></div>
            </div>
            <img src="/images/Logo-Final-1-1.png" loading="lazy" width="649" sizes="100vw" srcset="/images/Logo-Final-1-1-p-500.png 500w, /images/Logo-Final-1-1-p-800.png 800w, /images/Logo-Final-1-1-p-1080.png 1080w, /images/Logo-Final-1-1.png 3218w" alt=""/>
          </div>
        </div>
        <div className="preloader">
          <div className="preloader-content">
            <div className="preloader-line">
              <div className="preloader-gradient"></div>
            </div>
            <img src="/images/Logo-Final-1-1.png" loading="lazy" width="649" sizes="100vw" srcset="/images/Logo-Final-1-1-p-500.png 500w, /images/Logo-Final-1-1-p-800.png 800w, /images/Logo-Final-1-1-p-1080.png 1080w, /images/Logo-Final-1-1.png 3218w" alt="" />
          </div>
        </div>
      </>
    )
  }
}

function mapState(state) {
  return {};
}

const actionCreators = {
}
      
export default Home;

