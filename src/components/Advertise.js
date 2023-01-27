import Link from "next/link";
import advertise1 from "/public/assets/images/advertise/1.png";
import advertise2 from "/public/assets/images/advertise/2.png";
const Advertise = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="advertise-item wow fadeInUp delay-0-2s">
          <div className="content">
            <h4>هل تريد دخل شهريا؟</h4>
            <p>
            في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول
            </p>
            <Link href="/signup">
              <a className="theme-btn">
              اشترك مجانا الان <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
          <div className="image">
            <img src={advertise1.src} alt="Advertise" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="advertise-item bg-two wow fadeInUp delay-0-4s">
          <div className="content">
            <h4>احصل على دورتنا</h4>
            <p>
            في بعض الأحيان ينتاب المتداولين فــــي الأسواق المالية حالة من الخوف والقلق وقد يقوم المتداول
            </p>
            <Link href="/signup">
              <a className="theme-btn style-two">
                اشترك مجانا الان <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
          <div className="image">
            <img src={advertise2.src} alt="Advertise" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advertise;
