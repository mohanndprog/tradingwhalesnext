import Link from "next/link";
import Slider from "react-slick";
import Advertise from "../src/components/Advertise";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import Image from 'next/image'
import { index2Course, testimonialtwoSlider } from "../src/sliderProps";
const Index2 = () => {
  return (
    <Layout>
      
      {" "}
      <section className="hero-section-two text-white text-center bg-blue rel z-1 pt-240 rpt-150 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="hero-content-two">
                <h1 className="mb-35 wow fadeInUp delay-0-2s">
                  هل تريد بناء حياة مشرقة؟
                  
                </h1>
                <h3>تعلم التداول مع أمهر الخبراء وبطرق واستراجيات مضمونة</h3>
                <ul className="list-style-one wow fadeInUp delay-0-4s">
                  <li>استراتيجيات وأساليب مضمونة</li>
                  <li>المتابعة والارشاد</li>
                  <li>أخبار العملات كل دقيقة والتوقعات</li>
                </ul>
                <div className="hero-two-btns mt-30 wow fadeInUp delay-0-6s">
                  <Link href="/signup">
                    <a className="theme-btn mb-15">
                      ابـــــــدا الان <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play mb-15"
                  >
                    <i className="fas fa-play" /> <span>فيديو تعريفي عن المنصة</span>
                  </a>
                </div>
                <div className="admin-speech mt-110 rmt-35 wow fadeInUp delay-0-8s">
                  <div className="image">
                    <Image src="/assets/images/hero/sss.jpeg" width={50} height={50} alt="Admin" />
                  </div>
                  <p className="mt-2">
                    لا أرى تحركات وتطورات الأســــــــواق
                    ولكن أرى المخاطر، الأرباح والأموال التي أحققها
                    ولكن أرى المخاطر، الأرباح والأموال التي أحققها
                  </p>
                  <span className="name">المهندس ، احمد ابو سيدو</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-two-left wow fadeInUp delay-0-6s">
          <Image src="/assets/images/hero/herooo.png" alt="Hero" width={500} height={500} />
        </div>
        <div className="hero-two-right wow fadeInRight delay-0-6s">
          <Image src="/assets/images/hero/hero-two-right.png" alt="Hero" width={407} height={640} />
        </div>
        <Image
          className="circle-one"
          src="/assets/images/shapes/circle-one.png"
          alt="Circle"
          width={15} height={15}
        />
        <Image
          className="circle-two"
          src="/assets/images/shapes/circle-two.png"
          alt="Circle"
          width={15} height={15}
          
        />
      </section>
      {/* Hero Section End */}
      {/* Features Section Start */}
      {/* <section className="features-section-two rel z-1 pt-120 rpt-90 pb-75 rpb-45">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title-two">ماذا عن تعلمنا</span>
            <h2>فرصة للتعلم عبر الإنترنت</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="feature-two-item wow fadeInUp delay-0-2s">
                <span className="number">01</span>
                <div className="icon">
                  <img src="assets/images/features/icon4.png" alt="Icon" />
                </div>
                <h4>دورات من الخبراء</h4>
                <p>
                لا أرى تحركات وتطورات الأســــــــواق ولكن أرى المخاطر، الأرباح والأموال التي أحققها ولكن أرى المخاطر، الأرباح والأموال التي أحققها
                </p>
                <Link href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="feature-two-item wow fadeInUp delay-0-4s">
                <span className="number">02</span>
                <div className="icon">
                  <img src="assets/images/features/icon5.png" alt="Icon" />
                </div>
                <h4>جودة عالية وشرح مُفصل</h4>
                <p>
                لا أرى تحركات وتطورات الأســــــــواق ولكن أرى المخاطر، الأرباح والأموال التي أحققها ولكن أرى المخاطر، الأرباح والأموال التي أحققها
                </p>
                <Link href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="feature-two-item wow fadeInUp delay-0-6s">
                <span className="number">03</span>
                <div className="icon">
                  <img src="assets/images/features/icon6.png" alt="Icon" />
                </div>
                <h4>تحديثات على الكورسات </h4>
                <p>
                لا أرى تحركات وتطورات الأســــــــواق ولكن أرى المخاطر، الأرباح والأموال التي أحققها ولكن أرى المخاطر، الأرباح والأموال التي أحققها
                </p>
                <Link href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Section End */}
      {/* Coach Section Start */}
      <section className="coach-section-two rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-45">
                <span className="sub-title-two">أخــــــر الــــــــــــدورات </span>
                <h2>تصفــــح أحـــدث الــــــــدورات</h2>
              </div>
            </div>
          </div>
          <Slider {...index2Course} className="coach-slider">
            <div className="coach-item style-two wow fadeInUp delay-0-2s">
              <div className="coach-image">
                <Image src="/assets/images/coachs/courss1.png" alt="Coach" width={570} height={369} />
              </div>
              <div className="coach-content">
                <Link href="/course-grid">
                  <a className="category">التداول اليومي</a>
                </Link>
                <h4>
                  <Link href="/course-details">
                    في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من

                  </Link>
                </h4>
                <ul className="coach-footer">

                  <li>

                    <span>12 محاضرة</span>

                    <i className="far fa-file-alt " />
                  </li>
                  <li>

                    <span>30 ساعة</span>
                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>احمد ابو سيدو</span>
                    <i className="far fa-user " />
                  </li>
                  <li>
                    <div className="ratting-price">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>(50)</span>
                      </div>
                      <span className="price">95</span>
                    </div>

                  </li>
                </ul>

              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-4s">
              <div className="coach-image">
                <Image src="/assets/images/coachs/courss2.png" alt="Coach"width={570} height={369}  />
              </div>
              <div className="coach-content">
                <Link href="/course-grid">
                  <a className="category">التداول اليومي</a>
                </Link>
                <h4>
                  <Link href="/course-details">
                    في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من

                  </Link>
                </h4>
                <ul className="coach-footer">

                  <li>

                    <span>12 محاضرة</span>

                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>30 ساعة</span>
                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>احمد ابو سيدو</span>
                    <i className="far fa-user " />
                  </li>
                  <li>
                    <div className="ratting-price">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>(50)</span>
                      </div>
                      <span className="price">95</span>
                    </div>

                  </li>
                </ul>

              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-6s">
              <div className="coach-image">
                <Image src="/assets/images/coachs/couress3.png" alt="Coach" width={570} height={369} />
              </div>
              <div className="coach-content">
                <Link href="/course-grid">
                  <a className="category">التداول اليومي</a>
                </Link>
                <h4>
                  <Link href="/course-details">
                    في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من

                  </Link>
                </h4>
                <ul className="coach-footer">

                  <li>

                    <span>12 محاضرة</span>

                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>30 ساعة</span>
                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>احمد ابو سيدو</span>
                    <i className="far fa-user " />
                  </li>
                  <li>
                    <div className="ratting-price">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>(50)</span>
                      </div>
                      <span className="price">95</span>
                    </div>

                  </li>
                </ul>

              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-2s">
              <div className="coach-image">
                <Image src="/assets/images/coachs/courss1.png" alt="Coach"width={570} height={369}  />
              </div>
              <div className="coach-content">
                <Link href="/course-grid">
                  <a className="category">التداول اليومي</a>
                </Link>
                <h4>
                  <Link href="/course-details">
                    في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من

                  </Link>
                </h4>
                <ul className="coach-footer">

                  <li>

                    <span>12 محاضرة</span>

                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>30 ساعة</span>
                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>احمد ابو سيدو</span>
                    <i className="far fa-user " />
                  </li>
                  <li>
                    <div className="ratting-price">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>(50)</span>
                      </div>
                      <span className="price">95</span>
                    </div>

                  </li>
                </ul>

              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-4s">
              <div className="coach-image">
                <Image src="/assets/images/coachs/courss2.png" alt="Coach"width={570} height={369}  />
              </div>
              <div className="coach-content">
                <Link href="/course-grid">
                  <a className="category">التداول اليومي</a>
                </Link>
                <h4>
                  <Link href="/course-details">
                    في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من

                  </Link>
                </h4>
                <ul className="coach-footer">

                  <li>

                    <span>12 محاضرة</span>

                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>30 ساعة</span>
                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>احمد ابو سيدو</span>
                    <i className="far fa-user " />
                  </li>
                  <li>
                    <div className="ratting-price">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>(50)</span>
                      </div>
                      <span className="price">95</span>
                    </div>

                  </li>
                </ul>

              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-6s">
              <div className="coach-image">
                <Image src="/assets/images/coachs/couress3.png" alt="Coach" width={570} height={369}  />
              </div>
              <div className="coach-content">
                <Link href="/course-grid">
                  <a className="category">التداول اليومي</a>
                </Link>
                <h4>
                  <Link href="/course-details">
                    في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من

                  </Link>
                </h4>
                <ul className="coach-footer">

                  <li>

                    <span>12 محاضرة</span>

                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>30 ساعة</span>
                    <i className="far fa-file-alt" />
                  </li>
                  <li>

                    <span>احمد ابو سيدو</span>
                    <i className="far fa-user " />
                  </li>
                  <li>
                    <div className="ratting-price">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>(50)</span>
                      </div>
                      <span className="price">95</span>
                    </div>

                  </li>
                </ul>

              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Coach Section End */}
      {/* About Section Start */}
      <section className="about-section-two pb-120 rpb-95 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content-two wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title-two">نبذة عن دوراتنا</span>
                  <h2>خبرة في مركز التعلم عبر الإنترنت</h2>
                </div>
                <p>
                  في بعض الأحيان ينتاب المتداولين فــــي
                  الأسواق المالية حالة من الخوف والقلق
                  وقد يقوم المتداول وقتها باتخاذ قرارات
                  خاطئة وقد يُزيد هذا من خسارته. ولـــــكن
                  من الأفضل ألا تصاب بالذعر أو تيـــــــــــأس
                  خاطئة وقد يُزيد هذا من خسارته. ولـــــكن
                  من الأفضل ألا تصاب بالذعر أو تيـــــــــــأس
                  .{" "}
                </p>
                <div className="about-btns">
                  <Link href="/course-grid">
                    <a className="theme-btn my-15">
                      جميع الــــــــــــدورات <i className="fas fa-arrow-right mr-2" />
                    </a>
                  </Link>
                  <Link href="/faqs">
                    <a className="read-more mr-3">
                      كيـــف نعمـــــل <i className="fas fa-arrow-right mr-2" />
                    </a>
                  </Link>
                </div>
                <div className="counter-wrap">
                  <div className="success-item">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={256}
                    >
                      <Counter end={256} />
                    </span>
                    <span>نسبة الأرباح</span>
                  </div>
                  <div className="success-item">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop="2.36"
                    >
                      <Counter end={2.36} />
                    </span>
                    <span>عدد المسجلين</span>
                  </div>
                  <div className="success-item">
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={99}
                    >
                      <Counter end={99} />
                    </span>
                    <span>عدد الدورات</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-left rmb-75 wow fadeInLeft delay-0-2s">
                <div className="about-two-images">
                  <img className="img about1" src="/assets/images/about/about11.png" alt="About" width={384} height={290} />
                  <img className="img about2" src="/assets/images/about/about12.png" alt="About" width={384} height={290}/>
                </div>
                <div className="about-image-over">
                  <div className="about-image-over-item">
                    <img src="assets/images/about/icon1.png" alt="Icon" />
                    <h5> خبرة في مركز التعلم عبر الإنترنت </h5>
                  </div>
                  <div className="about-image-over-item">
                    <img src="assets/images/about/icon2.png" alt="Icon" />
                    <h5> تعلم التداول مع أمهر الخبراء </h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Categories Section Start */}
      <section className="categories-section bg-lighter rel z-1 py-75 rpb-85">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="categories-content rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-two">أفضل استراتجيات التداول</span>
                  <h2>تصفح فئات الدورات  عبر الإنترنت</h2>
                </div>
                <p>
                  في بعض الأحيان ينتاب المتداولين فــــي
                  الأسواق المالية حالة من الخوف والقلق
                  وقد يقوم المتداول وقتها باتخاذ قرارات
                  خاطئة وقد يُزيد هذا من خسارته. ولـــــكن
                  من الأفضل ألا تصاب بالذعر أو تيـــــــــــأس

                </p>
                <Link href="/course-grid">
                  <a className="read-more color-two mt-5">
                    تصفح جميع الدورات <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="categories-wrap wow fadeInUp delay-0-4s">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="category-item mt-35">
                      <div className="icon">
                        <img
                          src="assets/images/categories/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>التداول اليومي</h4>
                    </div>
                    <div className="category-item">
                      <div className="icon">
                        <img
                          src="assets/images/categories/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>تداول المركز</h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="category-item">
                      <div className="icon">
                        <img
                          src="assets/images/categories/icon3.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>التداول المتأرجح</h4>
                    </div>
                    <div className="category-item">
                      <div className="icon">
                        <img
                          src="assets/images/categories/icon4.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>استراتيجية بليد</h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="category-item mt-40">
                      <div className="icon">
                        <img
                          src="assets/images/categories/icon5.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>تداول المضاربة</h4>
                    </div>
                    <div className="category-item">
                      <div className="icon">
                        <img
                          src="assets/images/categories/icon6.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>استراتيجية خطوط</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section End */}

      {/* Advertise Area Start */}
      <section className="advertise-area pb-100 rpb-70 pt-120">
        <div className="container">
          <Advertise />
        </div>
      </section>
      {/* Advertise Area End */}





    </Layout>
  );
};
export default Index2;
