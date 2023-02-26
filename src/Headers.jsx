import "../dist/output.css";

function Header() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.removeItem("theme");

  return (
    <div className="text-center  ">
      <div className="navbar  border-b  pb-2 bg-gray-400 border-black dark:bg-black">
        <div className="flex-1">
          <a className="pl-4 font-semibold normal-case text-xl dark:text-white text-black">
            Formulario✔️
          </a>
        </div>

        <div className="flex-1" id="modos">
          <label className="swap swap-rotate ">
            <input
              className="invisible"
              type="checkbox"
              onClick={() => {
                const toggleDarkMode =
                  document.documentElement.className.includes("dark");

                toggleDarkMode.value =
                  document.documentElement.classList.toggle("dark");
                toggleDarkMode.value
                  ? (localStorage.theme = "dark")
                  : (localStorage.theme = "light");
              }}
            />
            <p className="btn bg-yellow-500 hover:bg-yellow-300 dark:bg-purple-900 dark:hover:bg-purple-800 text-black dark:text-white ">
              Modo
            </p>
          </label>
        </div>

        <div className="flex-none">
          <button className="btn btn-square btn-ghost border hover:bg-white dark:hover:bg-white ">
            <a href="https://github.com/JuanQuiro">
              <img src="../dist/github.svg" alt="" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
