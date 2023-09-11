import Image from "next/image";
import Logo from "public/img/Logo.svg";
import Ellipse from "public/img/Ellipse 14.svg";
import Subtract from "public/img/Subtract.svg";
import React from "react";
export default function Home() {
  async function onSubmit(formData: any){
    "use server";
    console.log(formData);
  }
  return (
    <div className="w-[732px] h-[392px] md:rounded-lg md:border ">
      <div className="flex flex-col items-center md:flex md:flex-row">
        <div className=" h-[392px] bg-[#DD748C] md:rounded-s-lg ">
          <Image className="mr-1 mb-2" src={Ellipse} alt="Ellipse" />
          <h3 className=" ml-[42px] w-[258px] h-[66px] font-bold text-white text-sm">
            Đăng nhập để nhận được các voucher giảm giá và các lời khuyên dinh
            dưỡng từ Chuyên Gia.
          </h3>
          <Image className="ml-6 my-[52px]" src={Subtract} alt="Subtract" />
        </div>
        <div className=" flex flex-col p-6">
          <div className="flex flex-row justify-between mb-4">
            <Image className="h-[60px] w-[65px]" src={Logo} alt="Logo" />
            <button className="w-6 h-6 bg-no-repeat bg-[url('../../public/img/close.svg')] "></button>
          </div>
          <form action={onSubmit} autoComplete="off"
            className="flex flex-col mt-14 justify-end w-[318px] h-[215px]"
          >
            <label className="h-[22px] font-medium text-sm ">
              Nhập số điện thoại của bạn
            </label>
            <input
              className="h-14 p-4 rounded-sm border-[1px] gap-1 "
              type="tel"
              placeholder="0901 398 346"
              name="phone number"
            />
            <hr className="w-[318px] h-[1px] mx-auto my-4 rounded bg-[#f0f0f0]"></hr>
            <button type="submit" className="h-[54px] bg-[#cf385b] gap-2 rounded-lg text-white">
              Tiếp tục
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
