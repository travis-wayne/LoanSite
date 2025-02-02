import React from "react";
import FaqCard from "../cards/FaqCard";

function FaqSection() {
  const data: IFaqCardProps[] = [
    {
  title: "How do I apply for a loan on your platform?",
  description:
    "You can easily apply for a loan by creating an account, providing necessary details, and choosing the loan amount and repayment terms. Once submitted, your application will be processed quickly, and you’ll receive an approval decision within minutes.",
  type: "white",
},
{
  title: "What types of loans are available?",
  description:
    "We offer personal loans, emergency loans, and business loans with flexible repayment options to suit your needs. Each loan type has competitive interest rates and easy eligibility criteria.",
  type: "black",
},
{
  title: "How can I start investing through your platform?",
  description:
    "Simply sign up, browse the available investment plans, and choose the one that aligns with your financial goals. We provide detailed information on each investment option, including expected returns and risk factors.",
  type: "black",
},
{
  title: "Are there any hidden fees?",
  description:
    "No, we believe in complete transparency. All fees and terms are clearly outlined before you commit to any loan or investment. You can track and manage everything directly on the platform.",
  type: "white",
},
{
  title: "Is my financial information secure?",
  description:
    "Yes, your data is protected with advanced encryption technologies to ensure complete security. We take your privacy and security seriously and adhere to the highest standards in data protection.",
  type: "white",
},
{
  title: "What happens if I miss a loan repayment?",
  description:
    "We offer flexible repayment plans, but if you miss a payment, our team will reach out to assist you. Late fees may apply, but we’re here to help you get back on track and avoid any further complications.",
  type: "black",
},
  ];
  return (
    <section>
      <div className="mb-[40px]">
        <div className="">
          <p className="text-primary leading-tight font-medium uppercase">
            FAQ
          </p>
          <p className="text-black text-[48px] font-bold leading-tight">
            Frequently Asked Questions
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((faq, index) => (
          <FaqCard key={index} {...faq} />
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
