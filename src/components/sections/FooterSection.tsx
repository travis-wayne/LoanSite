import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "@/components/ui/input";
import MainButton from "../common/MainButton";

function FooterSection() {
  const data = {
    group1: ["Home", "About Us", "Featurs", "Consult"],
    group2: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
    group3: ["Take Tour", "Live Chat", "Enquire"],
  };
  return (
    <section className="pb-[80px]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <div className="w-[117px]">
            <p className="font-bold text-[35px] md:text-[35px]  leading-tight md:leading-[4rem]">
            Asusu. <br />
          </p>
          </div>
          <div className="flex items-center gap-2  mt-4">
            <div>
              <img src="/images/envelop.svg" alt="envelop icon" />
            </div>
            <p className="text-black text-[16px] font-medium">
              info@asusu.com
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div>
              <img src="/images/phone.svg" alt="envelop icon" />
            </div>
            <p className="text-black text-[16px] font-medium">
              +234 813 729 7274
            </p>
          </div>
        </div>
        <div>
          <p className="font-medium text-[18px] md:text-[32px]">Links</p>
          <div className="inline-flex mt-4 flex-col gap-4 font-medium">
            {data.group1.map((link, index) => (
              <Link href={"/"} key={index}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium text-[18px] md:text-[32px]">Legal</p>
          <div className="inline-flex mt-4 flex-col gap-4 font-medium">
            {data.group2.map((link, index) => (
              <Link href={"/termsandconditions"} key={index}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium text-[18px] md:text-[32px]">Product</p>
          <div className="inline-flex mt-4 flex-col gap-4 font-medium">
            {data.group3.map((link, index) => (
              <Link href={"/contact"} key={index}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium text-[18px] md:text-[32px]">Newsletter</p>
          <div className="inline-flex mt-4 flex-col gap-4 font-medium">
            Stay Up To Date
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
            <div>
              <Input
                type="email"
                placeholder="Your email"
                className="h-[50px] border-none outline-none"
              />
            </div>
            <MainButton text="Subscribe" classes="font-bold" />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[92px] mb-[39px]">
          <Separator />
        </div>
        <p className="text-center font-medium">
          Copyright 2025 @ Asusu.com all rights reserved
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
