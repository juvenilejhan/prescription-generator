import "./Footer.css";
import logo from "../../../public/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="rx-rule-footer" />
      <div className="container">
        <img src={logo} alt="" />
        <div className="full-address">
          <p>
            <span className="center-name">
              ফিট অ্যান্ড ফাইন ফিজিওথেরাপি অ্যান্ড রিহ্যাবিলিটেশন সেন্টার
            </span>
            <br />
            <span className="center-address">
              সাক্ষাৎকার - রাত ৮:০০ থেকে রাত ৯:৩০ পর্যন্ত। <br />
              মোবাইল: ০১৭৬৮-০৯৬২৭৮ (জরুরি প্রয়োজনে)।
              <br />
              ঠিকানা: বাড়ি-৬৮, ১ম তলা, রোড-০৩, গাউসুল আজম এভিনিউ, সেক্টর-১৪,
              উত্তরা, ঢাকা-১২৩০।
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
