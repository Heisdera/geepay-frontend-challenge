import Logo from "./Logo";
import { todaysDate } from "../utils/helpers";

function Header({ handleToggle }) {
  return (
    <header className="flex items-center justify-between border-b border-border-color bg-neutral-gray-50 px-5 py-[18px] md:gap-[18px]">
      <button
        className="menu-button self-center rounded-full border-4 border-border-color p-1 drop-shadow-md md:hidden"
        onClick={handleToggle}
      >
        <Logo />
      </button>

      <div className="flex items-center justify-between md:w-[70%]">
        <h1 className="none text-xl font-semibold text-stat-color md:block">
          Dashboard
        </h1>

        <div className="none relative h-12 min-w-[51px] rounded-3xl border border-[#dadddd] bg-white-color focus:border-none focus-visible:outline-0 xl:block">
          <img
            className="absolute left-4 top-[30%]"
            src="../../assets/search-icon.svg"
          />

          <input
            className="focus-visible:outline-black-color block h-12 w-[350px] rounded-3xl bg-transparent pl-[42px] text-base leading-normal text-neutral-gray-800 outline-neutral-gray-800 focus-visible:border"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-5 md:w-[30%] lg:min-w-[506px]">
        <div className="my-1 flex items-center gap-5 px-4 py-3">
          <div className="flex items-center gap-[10px]">
            <img className="none md:block" src="../../assets/calendar.svg" />
            <p className="none text-sm font-medium text-neutral-gray-900 lg:block">
              {todaysDate}
            </p>
          </div>

          <button className="flex h-10 w-10 rounded-full border border-[#e6e6e6] p-2">
            <img src="../../assets/bell.svg" />
          </button>
        </div>

        <button className="flex items-center gap-3 rounded-full border border-[#dadddd] px-2 py-[6px] md:rounded-[28px]">
          <div className="flex items-center gap-2">
            <img
              className="h-[38px] w-[38px]"
              src="../../assets/profile-image.png"
              alt="profile-image"
            />

            <div className="none flex flex-col gap-1 lg:block">
              <h2 className="text-right font-normal text-neutral-gray-900">
                Justin Bergson
              </h2>
              <h3 className="text-neutral-gray-400">Justin@gmail.com</h3>
            </div>
          </div>

          <img className="none lg:block" src="../../assets/arrow-down.svg" />
        </button>
      </div>
    </header>
  );
}

export default Header;
