import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Login = () => {
  return (
    <Layout>
      <PageBanner pageName={"تسجيل دخول"} />
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
                <h3 className="from-title mb-25 text-center">تسجيل دخول</h3>
                <hr />
                <div className="row mt-35">
                 
                 
              
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="emailAddress"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="البريد الالكتروني"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        defaultValue=""
                        placeholder="كلمة المرور"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="about-btns">
               
                  <Link href="/forgetpassword">
                    <a className="read-more mr-3">
                      هل نسيت كلمة المرور ؟ 
                    </a>
                  </Link>
                </div>
               
              
              
                </div>
            
                <button type="submit" className="theme-btn mt-30 w-100">
                  تسجيل دخول
                </button>
              </form>
            </div>
        
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Login;
