import { useState, Fragment } from "react";
import { Dialog, Switch, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", id: "home" },
  { name: "Content", id: "content" },
  { name: "About", id: "about" },
  { name: "Documentation", id: "documentation" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const navContent = (param) => {
    const element = document.getElementById(`${param}`);
    element.scrollIntoView();
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src="./assets/img/uir.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, i) => (
            <li className="group overflow-hidden cursor-pointer" key={i}>
              <a
                onClick={() => navContent(item.id)}
                className="text-sm font-medium leading-6 text-white menu-items"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="bg-gray-200 relative inline-flex h-6 w-11 items-center rounded-full cursor-not-allowed"
            // className={`${
            //   enabled ? "bg-slate-900" : "bg-gray-200"
            // } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className="inline-block h-4 w-4 transform rounded-full transition translate-x-1"
              // className={`${
              //   enabled ? "translate-x-6" : "translate-x-1"
              // } inline-block h-4 w-4 transform rounded-full transition`}
            >
              <SunIcon />
              {/* {enabled ? <MoonIcon className="text-white" /> : <SunIcon />} */}
            </span>
          </Switch>
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="./assets/img/uir.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, i) => (
                      <a
                        key={i}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => navContent(item.id)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
