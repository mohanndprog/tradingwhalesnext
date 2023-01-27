import { useState } from "react";
import { Accordion, Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import WellernAccordion from "../src/components/WellernAccordion";
import Layout from "../src/layout/Layout";

const Faq = () => {
  const faqsLeft = [
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟" },
  ];
  const faqsRight = [
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟"},
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟" },
    { title: " ما هي منصة تداول الحيتان ؟" },
  ];
  const [active, setActive] = useState(`a1`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <div className="row">
      <div className="col-lg-6">
        {faqsLeft.map((faq, i) => (
          <WellernAccordion
            title={faq.title}
            onClick={() => onClick(`a${i + 1}`)}
            active={active}
            eventName={`a${i + 1}`}
            key={i}
          >
            <p>
            في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول وقتها باتخاذ لأفضل ألا تصاب بالذعر أو تيـــــــــــأس خاطئة وقد يُزيد هذا من خسارته
              
              {" "}
            </p>
          </WellernAccordion>
        ))}
      </div>
      <div className="col-lg-6">
        {faqsRight.map((faq, i) => (
          <WellernAccordion
            key={i}
            title={faq.title}
            onClick={() => onClick(`b${i + 1}`)}
            active={active}
            eventName={`b${i + 1}`}
          >
            <p>
            في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول وقتها باتخاذ لأفضل ألا تصاب بالذعر أو تيـــــــــــأس خاطئة وقد يُزيد هذا من خسارته
              {" "}
            </p>
          </WellernAccordion>
        ))}
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <Layout>
      <PageBanner pageName={"الاسئلة الشائعة"} />
      <section className="faqs-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="section-title mb-35">
            <span className="sub-title-two">هل لديك أسئلة ؟</span>
            <h2>اليك اكثر الاسئلة الشائعة </h2>
          </div>
          <Tab.Container defaultActiveKey={"tabContent1"}>
            <Nav className="nav faqs-tab mb-40">
              <li>
                <Nav.Link eventKey={"tabContent1"} href="#tabContent1">
                متطلبات الدورة
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent2"} href="#tabContent2">
                  من نحن
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent3"} href="#tabContent3">
                المدربين
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent4"} href="#tabContent4">
                  الاسعار
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent5"} href="#tabContent5">
                  الاعدادات &amp; الخصوصية
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content className="tab-content faq-accordion">
              <Tab.Pane className="tab-pane fade" eventKey="tabContent1">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent2">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent3">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent4">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent5">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* FAQ's Section End */}
      {/* Video Section Start */}
      {/* <div className="video-section wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="video-inner overlay">
            <img src="assets/images/video/video-section-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div> */}
      {/* Video Section End */}

    </Layout>
  );
};
export default Faqs;
