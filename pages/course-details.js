import Link from "next/link";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import WellernAccordion from "../src/components/WellernAccordion";
import Layout from "../src/layout/Layout";
import { coachSlider } from "../src/sliderProps";
const CourseDetails = () => {
  const now = 60;
  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
 
  };
  return (
    
    <Layout>
      <PageBanner pageName={"تفاصيل الدورة"} />
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">تحليل فني</span>
                  <img src="assets/images/shapes/line-shape.png" alt="Line" />
                  {/* <span className="off">30% off</span> */}
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(50)</span>
                  </div>
                </div>
                <h2>الاستراتيجيات و المهارات الأساسية لاحتراف التداول</h2>
                <ul className="author-date-enroll">
                  <li>
                    <img
                      src="assets/images/hero/sss.jpeg"
                      alt="Authro"
                    />
                    <h6 className="mr-3">احمد ابو سيدو</h6>
                  </li>
                  <li>
                    <i className="fas fa-cloud-upload-alt ml-2" /> 
                    آخر تحديث 15 فبراير 2022
                  </li>
                  <li>
                    <i className="far fa-user ml-2" /> 
                    25 مشترك
                  </li>
                </ul>
                <div className="image mb-35">
                  <img
                    src="assets/images/coachs/courss1.png"
                    alt="Course Details"
                  />
                </div>
                <p>
                في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول وقتها باتخاذ قرارات خاطئة وقد يُزيد هذا من خسارته. 
                ولـــــكن من الأفضل ألا تصاب بالذعر أو تيـــــــــــأس خاطئة وقد يُزيد هذا من خسارته. ولـــــكن من الأفضل ألا تصاب بالذعر أو تيـــــــــــأس .
               
                في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول وقتها باتخاذ قرارات خاطئة وقد يُزيد هذا من خسارته. 
                ولـــــكن من الأفضل ألا تصاب بالذعر أو تيـــــــــــأس خاطئة وقد يُزيد هذا من خسارته. ولـــــكن من الأفضل ألا تصاب بالذعر أو تيـــــــــــأس .
               
                </p>
                <h3 className="mt-40">المتطلبات</h3>
                <ul className="list-style-two mb-45">
                  <li  >
                  نصائح واختصارات تصحيح DevTools (Chrome و Firefox و
                    حافة)
                  </li>
                  <li>
                  قائمة مراجعة الأداء للواجهة الأمامية 2021 (PDF ، صفحات Apple ، MS
                    كلمة)
                  </li>
                  <li>
                  دليل محطم لعالم تحسين محركات البحث
                  </li>
                </ul>
                <h3>الجمهور المستهدف</h3>
                <ul className="list-style-two mb-45">
                  <li>أي شاغلين لوظائف ، طلاب</li>
                  <li>مدرب شركات</li>
                  <li>تربويون (مدرسون ، محاضر ، أعضاء هيئة تدريس)</li>
                </ul>
                <h3>منهج الدورة في تعلم التداول والتحليل الفني</h3>
                <h4>نسبة اجتياز الدورة</h4>
                <ProgressBar now={now} label={`${now}%`} />
                <Accordion
                  className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
                  id="course-faq"
                  defaultActiveKey="collapse1"
                >
                  <WellernAccordion
                    eventName={"collapse1"}
                    title={"تقديم الدورة"}
                    active={active}
                    onClick={() => onClick("collapse1")}
                  >
                    <ul className="course-video-list ">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">ما هو التداول والتحليل الفني ؟</span>{" "}
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">18:23</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                          ما هو التداول والتحليل الفني  ؟
                          </span>{" "}
                          <i className="far fa-play-circle" />
                          <span className="duration">35:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                          ما هو التداول والتحليل الفني  ؟
                          </span>
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">120:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                          ما هو التداول والتحليل الفني  ؟
                          </span>
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">13:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"فئة عملية "}
                    eventName={"collaps2"}
                    active={active}
                    onClick={() => onClick("collaps2")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">ما هو التداول والتحليل الفني  ؟</span>{" "}
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">18:23</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                          ما هو التداول والتحليل الفني  ؟
                          </span>{" "}
                          <i className="far fa-play-circle" />
                          <span className="duration">35:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                          ما هو التداول والتحليل الفني  ؟
                          </span>
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">120:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">ما هو التداول والتحليل الفني  ؟</span>
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">13:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"مشروع متقدم "}
                    eventName={"collaps3"}
                    active={active}
                    onClick={() => onClick("collaps3")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">ما هو التداول والتحليل الفني  ؟</span>{" "}
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">18:23</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                          ما هو التداول والتحليل الفني  ؟
                          </span>{" "}
                          <i className="far fa-play-circle" />
                          <span className="duration">35:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                          ما هو التداول والتحليل الفني  ؟
                          </span>
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">120:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">ما هو التداول والتحليل الفني  ؟</span>
                          <i className="far fa-play-circle" />{" "}
                          <span className="duration">13:24</span>{" "}
                          <i className="fas fa-lock" />
                        </a>
                      </li>
                    </ul>
                  </WellernAccordion>
                </Accordion>
                <h3>المدرب</h3>
                <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <div className="instructor-image">
                        <img
                          src="assets/images/teams/instructor.jpg"
                          alt="instructor"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="instructor-details">
                        <h4>المهندس احمد ابو سيدو</h4>
                        <span className="designations">
                          خبير في تداول
                        </span>
                        <div className="ratting mb-10">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>(50)</span>
                        </div>
                        <p>
                        في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول وقتها باتخاذ قرارات خاطئة وقد يُزيد هذا من خسارته.
                        </p>
                        <h5>تابعني</h5>
                        <div className="social-style-two">
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-twitter" />
                            </a>
                          </Link>
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-facebook-f" />
                            </a>
                          </Link>
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-instagram" />
                            </a>
                          </Link>
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-pinterest-p" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>تقييمات الحيتان</h3>
                <div className="student-feedback pt-10 wow fadeInUp delay-0-2s">
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="student-average-feedback bg-green text-center text-white">
                        <b>5.0</b>
                        <div className="ratting mb-10">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>إجمالي 25 التقييم</h6>
                      </div>
                    </div>
                    <div className="col-sm-7 align-self-center">
                      <div className="student-feedback-details">
                        <div className="student-feedback-author mb-20">
                          <img
                            src="assets/images/hero/sss.jpeg"
                            alt="Authro"
                          />
                          <div className="content mr-2">
                            <h4>مهندس احمد ابو سيدو</h4>
                            <span className="designations">
                            خبير في تداول
                            </span>
                          </div>
                        </div>
                        <div className="ratting-total">
                          <div className="ratting-total-item">
                            <div className="ratting mb-10">
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <span>(5)</span>
                            </div>
                            <span className="ratting-bar">
                              <span style={{ width: "100%" }} />
                            </span>
                            <span className="ratting-number">25 تقييم</span>
                          </div>
                          <div className="ratting-total-item">
                            <div className="ratting mb-10">
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star" />
                              <span>(4)</span>
                            </div>
                            <span className="ratting-bar">
                              <span style={{ width: 0 }} />
                            </span>
                            <span className="ratting-number">0 تقييم</span>
                          </div>
                          <div className="ratting-total-item">
                            <div className="ratting mb-10">
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <span>(3)</span>
                            </div>
                            <span className="ratting-bar">
                              <span style={{ width: 0 }} />
                            </span>
                            <span className="ratting-number">0 تقييم</span>
                          </div>
                          <div className="ratting-total-item">
                            <div className="ratting mb-10">
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <span>(2)</span>
                            </div>
                            <span className="ratting-bar">
                              <span style={{ width: 0 }} />
                            </span>
                            <span className="ratting-number">0 تقييم</span>
                          </div>
                          <div className="ratting-total-item">
                            <div className="ratting mb-10">
                              <i className="fas fa-star selected" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <span>(1)</span>
                            </div>
                            <span className="ratting-bar">
                              <span style={{ width: 0 }} />
                            </span>
                            <span className="ratting-number">0 تقييم</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar rmt-75">
                <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                  <div className="widget-video">
                    <img
                      src="assets/images/about/about11.png"
                      alt="Course Details"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe youtube-video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="price-off">
                    <span className="price">50</span>
                    {/* <span className="off">25% off</span> */}
                  </div>
                  <ul className="course-details-list mb-25">
                    {/* <li>
                    <span></span> <b>محاضرة</b>
                      <i className="far fa-file-alt" />{" "}
                     
                    </li> */}
                    <li>
                    
                    <b>25.5 ساعة</b>
                      <i className="far fa-clock" /> <span>عدد الساعات</span>{" "}
                     
                    </li>
                    <li>
                    <b>9 محاضرة</b>
                      <i className="far fa-play-circle" /> <span>المحاضرات</span>{" "}
                     
                    </li>
                    {/* <li>
                    <b>Web Design</b>
                      <i className="far fa-clipboard" /> <span>Subject</span>{" "}
                      
                    </li> */}
             
                  </ul>
                  <p>
                  في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة 
                  </p>
                  <Link href="/checkout">
                    <a className="theme-btn">
                    الــــــدفــــع <i className="fas fa-arrow-right mr-2" />
                    </a>
                  </Link>
                  <div className="social-style-two d-flex">
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-instagram" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">التصنيفات</h4>
                  <ul>
                    <li>
                      <Link href="/course-grid">
                        <a className="mr-2">تحليل فني </a>
                      </Link>{" "}
                      <span>(25)</span>
                    </li>
                    <li>
                      <Link href="/course-grid">
                        <a className="mr-2">تحليل شعبي </a>
                      </Link>{" "}
                      <span>(07)</span>
                    </li>
                    <li>
                      <Link href="/course-grid">
                        <a className="mr-2">تحليل فني </a>
                      </Link>{" "}
                      <span>(12)</span>
                    </li>
                    <li>
                      <Link href="/course-grid">
                        <a className="mr-2">تحليل شعبي </a>
                      </Link>{" "}
                      <span>(55)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recent-courses wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">اخر الـــدورات</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course1.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content mr-2">
                        <h6>
                          <Link href="/course-details">
                          الاستراتيجيات و المهارات الأساسية 
                          </Link>
                        </h6>
                        <span>
                          المدرب <Link href="/course-grid">احمد ابو سيدو</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course2.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content mr-2">
                        <h6>
                          <Link href="/course-details">
                          الاستراتيجيات و المهارات الأساسية 
                          </Link>
                        </h6>
                        <span>
                        المدرب <Link href="/course-grid">احمد ابو سيدو</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course3.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content mr-2">
                        <h6>
                          <Link href="/course-details">
                          الاستراتيجيات و المهارات الأساسية 
                          </Link>
                        </h6>
                        <span>
                        المدرب <Link href="/course-grid">احمد ابو سيدو</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course4.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content mr-2">
                        <h6>
                          <Link href="/course-details">
                          الاستراتيجيات و المهارات الأساسية 
                          </Link>
                        </h6>
                        <span>
                        المدرب <Link href="/course-grid">احمد ابو سيدو</Link>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details End */}
      {/* Recent Coach Start */}
      <section className="coach-section-two rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-45">
                <span className="sub-title-two">أحدث الدورات</span>
                <h2>تصفح أحدث الدورات</h2>
              </div>
            </div>
          </div>
          <Slider {...coachSlider} className="coach-slider">
            <div className="coach-item style-two wow fadeInUp delay-0-2s">
              <div className="coach-image">
                <img src="assets/images/coachs/courss1.png" alt="Coach" />
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
                <img src="assets/images/coachs/courss2.png" alt="Coach" />
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
                <img src="assets/images/coachs/couress3.png" alt="Coach" />
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
                <img src="assets/images/coachs/courss1.png" alt="Coach" />
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
                <img src="assets/images/coachs/courss2.png" alt="Coach" />
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
                <img src="assets/images/coachs/couress3.png" alt="Coach" />
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
    </Layout>
  );
};
export default CourseDetails;
