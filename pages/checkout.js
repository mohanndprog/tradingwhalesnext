import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Checkout = () => {
  return (
    <Layout>
      <PageBanner pageName={"الـــدفــع"} />
      <section className="checkout-area pt-130 rpt-95 pb-100 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="checkout-form"
                name="checkout_form"
                className="checkout-form rmb-35"
                action="#"
                method="POST"
              >
                <h3 className="from-title mb-25">بيانات التاكد</h3>
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
               
                  <div className="col-lg-12">
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
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="payment-method"
                name="payment-method"
                className="checkout-form mb-30"
                action="#"
                method="POST"
              >
                <h3 className="from-title mb-25">ملخص الطلب</h3>
                <div className="package-summary mb-25">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          دورة تحليل فني 
                        </td>
                        <td>$50.00</td>
                      </tr>
                      <tr>
                        <td>
                        دورة تحليل فني 
                        </td>
                        <td>$50.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>الاجمالي</strong>
                        </td>
                        <td>
                          <strong>$100.00</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              
                  <input
                    className="coupon-code"
                    type="text"
                    placeholder="كود الخصم"
                  />
            
                   <button type="submit" className="theme-btn mt-30 w-100">
                      تـفـعـيــل
                    </button>
             
                <h5 className="title mt-20 mb-15">طريقة الدفع او السداد</h5>
                <div className="form-group">
                  <select name="payment" id="payment">
                    <option value="default">اختر طريقة الدفع</option>
                    <option value="payment1">بطاقة ائتمانية</option>
                    <option value="payment2">باي بال</option>
                    <option value="payment3">بهاينس عملات رقمية</option>
                  </select>
                </div>
                <button type="submit" className="theme-btn mt-30 w-100">
                  الـــذهاب لــــــدفــع
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Checkout;
