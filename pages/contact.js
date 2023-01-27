import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactUs = () => {
  return (
    <Layout>
      <PageBanner pageName={"تواصل معنا"} />
      <section className="contact-info-area rel z-1 py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact-info-wrap rmb-75 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-two">هل تحتاج الى مساعدة او استشارة ؟</span>
                  <h2>تواصل مع مدراء المنصة</h2>
                </div>
                <p>
                 في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول وقتها باتخاذ لأفضل ألا تصاب بالذعر أو تيـــــــــــأس خاطئة وقد يُزيد هذا من خسارته.  
                </p>
                <div className="row no-gap mt-50">
                
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="far fa-envelope" />
                      <h4>البريد الالكتروني</h4>
                      <span>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                        <br />
                        <a href="mailto:infocoach.net">welsleww.net</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-phone-volume" />
                      <h4>رقم الجوال</h4>
                      <span>
                        <a href="callto:+896(321)4600">+896 (321) 46 00</a>
                        <br />
                        <a href="callto:+012(345)678">+012 (345) 678</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-phone-volume" />
                      <h4>رقم الجوال</h4>
                      <span>
                        <a href="callto:+896(321)4600">+896 (321) 46 00</a>
                        <br />
                        <a href="callto:+012(345)678">+012 (345) 678</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-page-image wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/contact/contactus.png"
                  alt="Contact Page"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">WHALES</span>
      </section>
      {/* Contact Info End */}
      {/* Contact Form Start */}
      <section className="contact-form-area wow fadeInUp delay-0-2s">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="contact-form"
            className="contact-form p-50 z-1 rel"
            name="contact-form"
            action="#"
            method="post"
          >
            <div className="section-title text-center mb-50">
              <span className="sub-title-two">أرسل لنا رسالة</span>
              <h2>لديك أي أسئلة! قل مرحبا</h2>
            </div>
            <div className="row mt-25">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="الاسم الكامل"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="البريد الالكتروني"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    defaultValue=""
                    placeholder="رقم الجوال"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="الرسالة"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-center mb-0">
                  <button type="submit" className="theme-btn">
                    ارسال الرسالــة <i className="fas fa-arrow-right mr-2" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Form End */}
      {/* Location Map Area Start */}
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
            height={975}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
