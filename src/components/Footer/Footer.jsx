import "./Footer.css";
import logo from "../../../public/logo.jpg";

export default function Footer() {
  return (
    <>
      <div className="rx-rule" />
      <div class="container">
        <img src={logo} alt="" />
        <div class="full-address">
          <p>
            <span className="center-name">
              ফিট অ্যান্ড ফাইন ফিজিওথেরাপি অ্যান্ড রিহ্যাবিলিটেশন সেন্টার
            </span>
            <br />
            <span className="center-address">
              মোবাইল: ০১৭৬৮-০৯৬২৭৮ (জরুরি প্রয়োজনে)।
              <br />
              ঠিকানা: বাড়ি-৬৮, ১ম তলা, রোড-০৩, গাউসুল আযম রোড, সেক্টর-১৪,
              উত্তরা, ঢাকা-১২৩০।
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
