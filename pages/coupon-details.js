import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const coupondetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"تفاصيل الكوبون"} />
      <section className="login-area pt-130 rpt-95 pb-100 rpb-70">
        <div className="container">
          <div className="row">
          <div className="col-lg-4">
              <div className="course-sidebar rmb-55">
                {/* <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="text" placeholder="ابحث هنا" required="" />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div> */}
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">تفاصيل الحساب</h4>
                  <ul>
                    <li>
                      <Link href="/personal-account-data">
                        <a className="mr-2 " >البيانات الشخصية</a>
                      </Link>{" "}
                     
                    </li>
                    <li>
                      <Link href="/course-details">
                        <a className="mr-2">الدورات الخاصة بي </a>
                      </Link>{" "}
                    
                    </li>
                    <li>
                      <Link href="/coupon-details">
                        <a className="mr-2 action">تفاصيل الكوبون  </a>
                      </Link>{" "}
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
                 {/* Counter Start */}
      <div className="counter-section-three">
        <div className="container">
        <h3>تفاصيل الكوبون</h3>
          <div className="counter-three-wrap bg-light-blue text-white">
            
            <div className="success-item">
              <span
                className="count-text "
            
              >
                <h2>7</h2>
              </span>
              <span className="mr-2">
                عدد المشتركين
             
              </span>
            </div>
            <div className="success-item">
              <span
                className="count-text "
                
              >
                
                <h2>256$</h2>
              </span>
              <span className="mr-2">
                قيمة الاشتراك
             
              </span>
            </div>
      

          </div>
        </div>
      </div>
      {/* Counter End */}
            </div>
        
          </div>
        </div>
      </section>
      
    </Layout>
  );
};
export default coupondetails;
