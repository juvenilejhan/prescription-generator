import "./Letterhead.css";

export default function Letterhead() {
  return (
    <>
      <div className="rx-letterhead">
        <p className="rx-tagline-bn">
          বাত, ব্যথা, প্যারালাইসিস ও স্পোর্টস ইনজুরি রিহ্যাব ফিজিও স্পেশালিস্ট
        </p>

        <div className="rx-header-grid">
          <div className="rx-header-col rx-header-col--bn">
            <p className="rx-doc-name">সহকারি অধ্যাপক ড. এ. কে. এম. রেজোয়ান</p>
            <p className="rx-doc-title">
              পোস্ট ডক্ট স্কলার (হেলথ সায়েন্স), পিএইচডি (পিটি) ভারত
            </p>
            <p className="rx-doc-credentials">
              এম পি এইচ (ইপিডিমিওলজি), এম পিটি (অর্থোপেডিক) বিডি
            </p>
            <p className="rx-doc-credentials">
              ফেলোশিপ ইন অর্থোপেডিক রিহ্যাবিলিটেশন (ইউ কে)
              <br />
              পিজি সার্টিফিকেট ইন মাসকিউলোস্কেলেটাল আল্ট্রাসাউন্ড (বিডি)
            </p>
          </div>

          <div className="rx-header-divider" />

          <div className="rx-header-col rx-header-col--en">
            <p className="rx-doc-name">
              Assistant Professor Dr. A. K. M. Rezwan
            </p>
            <p className="rx-doc-title">
              Postdoc Scholar (Health Science), PhD (PT) India
            </p>
            <p className="rx-doc-credentials">
              MPH (Epidemiology), MPT (Orthopedic) BD
            </p>
            <p className="rx-doc-credentials">
              Fellowship in Orthopedic Rehabilitation (UK) <br /> PG Certificate
              in Musculoskeletal Ultrasound (BD)
            </p>
          </div>
        </div>

        <p className="rx-affiliation">
          Gonoshasthaya Samaj Vittik College of Physiotherapy &amp; Health
          Science <br /> Former Faculty of Health Science, Gono Bishwabidyalay,
          Savar, Dhaka
        </p>
      </div>

      <div className="rx-rule" />
    </>
  );
}
