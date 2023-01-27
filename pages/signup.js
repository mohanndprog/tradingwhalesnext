import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const signup = () => {
  return (
    <Layout>
      <PageBanner pageName={"انشاء حساب"} />
      <section className="login-area pt-130 rpt-95 pb-100 rpb-70">
        <div className="container">
          <div className="row">
          <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="login-form"
                name="login_form"
                className="login-form rmb-35"
                action="#"
                method="POST"
              >
                <h3 className="from-title mb-25 text-center">انشاء حساب</h3>
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
                      />
                    </div>
                  </div>
               
                  <div className="col-lg-12 adrees">
                    <h6>عنوانك</h6>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="form-group">
                      <select name="country" id="country">
                        <option value="value1">اختار الدولة</option>
                        <option value="value2">فلسطين</option>
                        <option value="value3">امارات</option>
                        <option value="value4">سعودية</option>
                        <option value="value5">الاردن</option>
                        <option value="value6">مصر</option>
                        <option value="value7">سوريا</option>
                        <option value="value8">قطر</option>
                        <option value="value8">البحرين</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        defaultValue=""
                        placeholder="المدينة"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        defaultValue=""
                        placeholder="تاكيد كلمة المرور"
                        required=""
                      />
                    </div>
                  </div>
                  <Link href="/login">
                    <a className="read-more mr-3">
                     تسجيل دخول ؟
                    </a>
                  </Link>
                  {/* <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">اوافق على سياسة الخصوصية والاستخدام</label>
                  </div> */}
                </div>
            
                <button type="submit" className="theme-btn mt-30 w-100">
                  انشاء حساب
                </button>
              </form>
            </div>
        
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default signup;
