import Image from "next/image";
import Logo from "./Logo.svg";
import Ellipse from "./Ellipse 14.svg";
import Subtract from "./Subtract.svg";
import Close from "./close.png"
export default function Home() {
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   const response = await fetch("/api/submit", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const data = await response.json()
  // }
  return (
    <div className="border-solid border-[1px] w-[732px] h-[392px] rounded-lg bg-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-col w-[354px] h-[392px] bg-[#DD748C] rounded-s-lg">
          <Image className="flex mr-1 mb-2" src={Ellipse} alt="Ellipse" />
          <h3 className="flex items-center justify-center ml-[42px] w-[258px] h-[66px] font-bold text-[#ffffff] text-sm">
            Đăng nhập để nhận được các voucher giảm giá và các lời khuyên dinh
            dưỡng từ Chuyên Gia.
          </h3>
          <Image
            className="flex ml-6 my-[52px]"
            src={Subtract}
            alt="Subtract"
          />
        </div>
        <div className="flex flex-col p-6">
          <div className="flex flex-row justify-between mb-4">
            <Image className="h-[60px] w-[65px]" src={Logo} alt="Logo" />
            <button className="w-6  bg-no-repeat" style={{backgroundImage: `url(${Close.src})`}}></button>
          </div>
            <form className="flex flex-col mt-14 justify-end w-[318px] h-[215px]">
            <label className="flex w-[206.37px] h-[22px] font-medium text-sm ">
              Nhập số điện thoại của bạn
            </label>
            <input
              className=" w-[318px] h-14 p-4  rounded-sm border-[1px] gap-1 "
              type="Phone"
              placeholder="0901 398 346"
            />
            <hr className="w-[318px] h-[1px] mx-auto my-4 rounded bg-[#f0f0f0]"></hr>
            <button className="w-[318px] h-[54px] bg-[#cf385b] gap-2 rounded-lg text-white">
              Tiếp tục
            </button>
            </form>
          </div>
        </div>
      </div>
  );
}
