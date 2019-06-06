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
                      <div className="gf_browser_chrome gform_wrapper" id="gform_wrapper_2">
                        <a id="gf_2" className="gform_anchor" />
                        <form
                          name="VippaContactForm"
                          method="post"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          action="/success"
                        >
                          <input
                            type="hidden"
                            name="bot-field"
                          />
                          <input
                            type="hidden"
                            name="form-name"
                            value="VippaContactForm"
                          />
                          
                          <div className="gform_body">

                            <ul id="gform_fields_2" className="gform_fields top_label form_sublabel_below description_below">

                              <li id="field_2_4" className="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible">
                              
                                <p><span style={{ color: '#ff3061' }}>Have a question</span> or want to learn more? Get in touch with us today.</p></li>
                              
                              <li id="field_2_1" className="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">

                                <label className="gfield_label" htmlFor="input_2_1">
                                  Full Name<span className="gfield_required">*</span>
                                </label>
                                
                                <div className="ginput_container ginput_container_text">

                                  <input 
                                    name="name" 
                                    id="input_2_1" 
                                    type="text" 
                                    className="medium" 
                                    tabIndex={100} 
                                    placeholder="Full Name" 
                                    // aria-required="true" 
                                    // aria-invalid="false" 
                                  />
                                </div>
                              </li>

                              <li id="field_2_2" className="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">

                                {/* <label className="gfield_label" htmlFor="input_2_2">
                                  Email<span className="gfield_required">*</span>
                                </label> */}

                                <div className="ginput_container ginput_container_email">

                                  <input 
                                    name="input_2" 
                                    // id="input_2_2" 
                                    type="email" 
                                    className="medium" 
                                    tabIndex={101} 
                                    placeholder="Email" 
                                    // aria-required="true" 
                                    // aria-invalid="false" 
                                  />
                                </div>
                              </li>

                              <li id="field_2_3" className="gfield field_sublabel_below field_description_below gfield_visibility_visible">

                                {/* <label className="gfield_label" htmlFor="input_2_3">
                                  Message
                                </label> */}

                                <div className="ginput_container ginput_container_textarea">

                                  <textarea 
                                    name="input_3" 
                                    id="input_2_3" 
                                    className="textarea medium" 
                                    tabIndex={102} 
                                    placeholder="Message" 
                                    // aria-invalid="false" 
                                    rows={10} 
                                    cols={50} 
                                  />
                                </div>
                              </li>
                              
                              {/* <li id="field_2_5" className="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_">

                                <label className="gfield_label" htmlFor="input_2_5">
                                  Comments
                                </label>

                                <div className="ginput_container">

                                  <input 
                                    name="input_5" 
                                    id="input_2_5" 
                                    type="text" 
                                  />
                                </div>
                                
                                <div className="gfield_description">This field is for validation purposes and should be left unchanged.</div>
                              </li> */}

                            </ul>
                          </div>

                          <div className="gform_footer top_label">
                            <input type="submit" id="gform_submit_button_2" className="gform_button button" defaultValue="Submit" tabIndex={103} onclick="if(window[&quot;gf_submitting_2&quot;]){return false;}  window[&quot;gf_submitting_2&quot;]=true;  " onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_2&quot;]){return false;} window[&quot;gf_submitting_2&quot;]=true;  jQuery(&quot;#gform_2&quot;).trigger(&quot;submit&quot;,[true]); }" /> <input type="hidden" name="gform_ajax" defaultValue="form_id=2&title=&description=&tabindex=100" />
                            <input type="hidden" className="gform_hidden" name="is_submit_2" defaultValue={1} />
                            <input type="hidden" className="gform_hidden" name="gform_submit" defaultValue={2} />
                            <input type="hidden" className="gform_hidden" name="gform_unique_id" defaultValue />
                            <input type="hidden" className="gform_hidden" name="state_2" defaultValue="WyJbXSIsIjcxYmFjZDJmNmU1YmIwNGRiZGFlZTAxMTAwYmEyNmZiIl0=" />
                            <input type="hidden" className="gform_hidden" name="gform_target_page_number_2" id="gform_target_page_number_2" defaultValue={0} />
                            <input type="hidden" className="gform_hidden" name="gform_source_page_number_2" id="gform_source_page_number_2" defaultValue={1} />
                            <input type="hidden" name="gform_field_values" defaultValue />
                          </div>
                        </form>
                      </div>
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
