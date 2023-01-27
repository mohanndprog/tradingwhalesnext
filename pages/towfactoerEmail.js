import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const towfactoerEmail = () => {
  return (
    <Layout>
      <PageBanner pageName={"استرجاع كلمة المرور"} />
      <section className="login-area pt-130 rpt-95 pb-100 rpb-70">
        <div className="container">
          <div className="row">
          <div className="col-lg-3"></div>
            <div className="col-lg-5 mmmm">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="login-form"
                name="login_form"
                className="login-form rmb-35"
                action="#"
                method="POST"
              >
                <h3 className="from-title mb-25 text-center">التحقق بخطوتين</h3>
                    <p className=" text-center">
                    أدخل رمز التحقق الذي أرسلناه إلى
                        ******7859@gmail.com
                        اكتب رمز الحماية المكون من 6 أرقام
                    </p>
                <hr />
                <div className="row mt-35">

                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
        
                  <div className="about-btns">
               
                  <Link href="/login">
                    <a className="read-more mr-3">
                      تسجيل دخول ؟ 
                    </a>
                  </Link>
                </div>
               
              
              
                </div>
            
                <button type="submit" className="theme-btn mt-30 w-100">
                  اعادة تعيين كلمة المرور
                </button>
              </form>
            </div>
        
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default towfactoerEmail;
