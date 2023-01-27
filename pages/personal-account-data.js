import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const personalaccountdata = () => {
  return (
    <Layout>
      <PageBanner pageName={"حسابي"} />
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
                        <a className="mr-2 action" >البيانات الشخصية</a>
                      </Link>{" "}
                     
                    </li>
                    <li>
                      <Link href="/personal-account-courses">
                        <a className="mr-2">الدورات الخاصة بي </a>
                      </Link>{" "}
                    
                    </li>
                    <li>
                      <Link href="/coupon-details">
                        <a className="mr-2">تفاصيل الكوبون  </a>
                      </Link>{" "}
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="checkout-form"
                name="checkout_form"
                className="checkout-form rmb-35"
                action="#"
                method="POST"
              >
                <h3 className="from-title mb-25">البيانات الشخصية</h3>
                <hr />
                <div className="row mt-35">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="الاسم الاول"
                        required=""
                        value={"احمد "}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="الاسم الثاني"
                        required=""
                        value={"ابو سيدو "}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder="رقم الجوال"
                        required=""
                        value={"0598871102 "}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="emailAddress"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="البريد الالكتروني"
                        required=""
                        value={"mohanndprog@gmail.com "}
                      />
                    </div>
                    
                  </div>
                        <button type="submit" className="theme-btn mt-30 w-100 account">
                        حفظ التعديلات
                        </button>
                </div>
              </form>
            </div>
        
          </div>
        </div>
      </section>
      
    </Layout>
  );
};
export default personalaccountdata;
