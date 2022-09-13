import { useState, useEffect, useRef } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function jsonify(val) {
  return JSON.stringify(JSON.parse(val));
}
export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    if (!key) return;
    const storedValue = localStorage.getItem(key) || initialValue;

    localStorage.setItem(key, jsonify(state || storedValue));
  }, [state, initialValue]);

  useEffect(() => {
    console.dir({
      storedValue: localStorage.getItem(key),
      state,
      initialValue,
    });
  }, [state]);

  return [state, setState];
}

function browserIsDarkMode() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useLocalStorageState(
    "useDark",
    browserIsDarkMode()
  );
  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = document.getElementsByTagName("html")[0];
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.classList.replace(
      ...(!darkMode ? ["dark", "light"] : ["light", "dark"])
    );
  }, [darkMode]);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative">
        <header className="pointer-events-none relative z-50 flex flex-col">
          <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
          <div className="top-0 z-10 h-16 pt-6">
            <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="flex">
                      <div className="text-4xl flex-grow">
                        <span className="dark:text-white font-medium">
                          devmentor
                        </span>
                        <span className="text-blue-600 font-bold">pro</span>
                        <span className="font-thin dark:text-white text-base mx-4 italic">
                          a new web developer education experience!
                        </span>
                      </div>

                      <button
                        className="w-6 h-6 hover:cursor-pointer pointer-events-auto"
                        onClick={() => setDarkMode((prev) => !prev)}>
                        {!darkMode ? <MoonIcon /> : <SunIcon />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div style={{ height: "var(--content-offset)" }}></div>
        <main>
          <div className="sm:px-8 mt-9">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">{children}</div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
