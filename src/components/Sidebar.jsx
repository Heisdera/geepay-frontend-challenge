import Logo from "./Logo";
import { useDarkMode } from "../context/DarkModeContext";

function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <aside className="none flex gap-[150px] border-r border-r-border-color bg-sidebar-bgColor py-5 md:row-span-2 md:row-start-1 md:flex md:flex-col">
      <div className="flex flex-col items-center justify-center gap-5">
        <Logo />

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <nav className="w-full">
            <ul className="flex flex-col items-center gap-4">
              <li className="relative flex w-full items-center">
                <button className="nav-icon">
                  <img src="../../assets/category.png" />
                </button>
                <img
                  className="absolute right-0"
                  src="../../assets/current-nav.svg"
                />
              </li>
              <li className="w-full">
                <button className="nav-icon">
                  <img src="../../assets/trend-up.svg" />
                </button>
              </li>
              <li className="w-full">
                <button className="nav-icon">
                  <img src="../../assets/profile-2.svg" />
                </button>
              </li>
              <li className="w-full">
                <button className="nav-icon">
                  <img src="../../assets/box.svg" />
                </button>
              </li>
              <li className="w-full">
                <button className="nav-icon">
                  <img src="../../assets/discount-shape.svg" />
                </button>
              </li>
              <li className="w-full">
                <button className="nav-icon">
                  <img src="../../assets/info-circle.svg" />
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col items-center justify-center gap-2 rounded-[100px] bg-white-color p-2">
            <button
              className={`${!isDarkMode && "active-theme"} flex h-[30px] w-[30px] items-center justify-center disabled:cursor-not-allowed`}
              onClick={toggleDarkMode}
              disabled={!isDarkMode}
            >
              <img src="../../assets/sun.svg" />
            </button>

            <button
              className={`${isDarkMode ? "active-theme" : ""} disabled:cursor-not-allowed`}
              onClick={toggleDarkMode}
              disabled={isDarkMode}
            >
              <img src="../../assets/moon.svg" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <button className="nav-icon">
          <img src="../../assets/arrow-right.svg" />
        </button>

        <button className="nav-icon">
          <img src="../../assets/settings.svg" />
        </button>

        <button className="nav-icon">
          <img src="../../assets/logout.svg" />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
