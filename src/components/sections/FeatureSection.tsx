import React from "react";

function FeatureSection() {
  const data = [
    {
      icon: "/images/star_icon.svg",
      title: "Easy & Fast Loan Access",
      description:
        "Access quick and flexible loan options with a seamless application process. No long paperwork, no unnecessary delays—just instant financial support when you need it.",
    },
    {
      icon: "/images/mesh_icon.svg",
      title: "Profitable Investment Opportunities",
      description:
        "Grow your wealth with carefully curated investment plans designed for maximum returns. Whether you're a beginner or an experienced investor, our platform provides smart, risk-managed options to help you achieve your financial goals.",
    },
    {
      icon: "/images/cube_icon.svg",
      title: "Secure & Transparent Transactions",
      description:
        "Enjoy a safe, user-friendly platform with clear terms and no hidden fees. We provide clear terms, no hidden fees, and real-time tracking to ensure you stay in control of your finances.",
    },
  ];
  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row items-center">
      <div>
        <img src="/images/feature.png" alt="feature" />
      </div>
      <div>
        <div>
          <p className="text-primary leading-tight font-medium uppercase">
            Features
          </p>
          <p className="text-black text-[48px] font-bold leading-tight">
            With Asusu you can: 
          </p>
        </div>
        <div className="flex flex-col gap-[32px] mt-[32px]">
          {data.map((feature, index) => (
            <div key={index}>
              <div className="flex gap-2">
                <div>
                  <img src={feature.icon} alt="feature icon" />
                </div>
                <p className="font-semibold">{feature.title}</p>
              </div>

              <div className="text-gray-500">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
