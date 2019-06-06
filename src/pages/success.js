import React from "react"
import Helmet from 'react-helmet'

import SEO from "../components/seo"

import Video from "../images/vippa-video-15sec.mp4"
import BackgroundImage from "../images/Background-photo.jpg"
import FooterImage from "../images/ACC-logo.jpg"
import Logo from "../images/logo.png"

import { FaFacebookF, FaTwitter } from 'react-icons/fa'


const IndexPage = () => (
  <div>
  <Helmet>
    <body className="Home page-template page-template-landing-page-v2 page-template-landing-page-v2-php page page-id-42 logged-in admin-bar no-customize-support custom-header header-full-width full-width-content landing-page landing-page-v2"></body>

  </Helmet>

  {/* <div className="Home page-template page-template-landing-page-v2 page-template-landing-page-v2-php page page-id-42 logged-in admin-bar no-customize-support custom-header header-full-width full-width-content landing-page landing-page-v2">
    <div className="site-container"> */}
      <SEO title="Home" />


      <div className="video-background" id="video-background">
        <video width={1280} height={720} autoPlay playsInline loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <img style={{ display: 'none' }} src={BackgroundImage} alt title />
        <footer className="site-footer" itemScope itemType="http://schema.org/WPFooter">
          <div className="wrap">
            <p><span>Vippa is proud to be a</span> <img src={FooterImage} alt title /></p>
          </div>
        </footer>
      </div>

      <header className="site-header" itemScope itemType="http://schema.org/WPHeader"><div className="wrap"><div className="title-area">
        <img src={Logo} alt title />
      </div>
        <div className="header-social-media">
          <a target="_blank" href="https://www.facebook.com/Vippa-1665314713759988/" className="social-media-icon"><FaFacebookF /></a>
          <a target="_blank" href="https://twitter.com/VippaHQ" className="social-media-icon"><FaTwitter /></a>
        </div>
      </div></header>

      <div className="site-inner">
        <div className="content-sidebar-wrap">
          <main className="content" id="genesis-content">
            <article className="post-42 page type-page status-publish entry" itemScope itemType="http://schema.org/CreativeWork">
              <div className="entry-content" itemProp="text">
                <div className="section-table">
                  <div className="section-cell">
                    <div className="one-half first">
                      <h1>We help your business grow faster online</h1>
                      <p>You now have the potential to instantly reach thousands of consumers at the tap of a button.</p>
                      <p>
                        <a className="button" href="https://www.vippa.co.nz/">
                          Go to vippa.co.nz	</a>
                      </p></div>

                    <div className="one-half ">
                      <p>Thanks for contacting us! We will get in touch with you shortly.</p>
                    </div>


                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>



    </div>
  // </div>
)

export default IndexPage
