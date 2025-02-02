import React from "react";

function TestimonialSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <p className="text-black leading-tight font-medium uppercase">
          Testimonial
        </p>
        <p className="text-black text-[48px] font-bold leading-tight">
          What People Say About Us?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/images/testimonial.png" alt="testimonial" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-[28px] uppercase">
              The Ultimate Fintech App for Smart Loans & Profitable Investments!
            </p>
          </div>

          <div className="text-gray-500 my-[24px]">
            “Take control of your financial future with seamless loan access and high-yield investment opportunities. Our platform is designed for speed, security, and success—helping you borrow with confidence and invest with ease. No hidden fees, no complications—just smart financial solutions at your fingertips.”
          </div>

          <div>
            <img src="/images/reviewers.png" alt="reviewers" />
          </div>
          <p className="font-bold mt-[24px]">CEO</p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
