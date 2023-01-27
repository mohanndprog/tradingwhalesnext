import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const newpassword = () => {
  return (
    <Layout>
      <PageBanner pageName={"اعادة تعيين كلمة المرور"} />
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
                <h3 className="from-title mb-25 text-center">اعادة تعيين كلمة المرور</h3>
                <hr />
                <div className="row mt-35">
                 
                 
                <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        defaultValue=""
                        placeholder="كلمة المرور الجديدة"
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
                        placeholder="تاكيد كلمة المرور الجديدة"
                        required=""
                      />
                    </div>
                  </div>

                </div>
            
                <button type="submit" className="theme-btn mt-30 w-100">
                  اعادة تعيين
                </button>
              </form>
            </div>
        
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default newpassword;
