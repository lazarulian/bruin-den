/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfilePicture from "../../public/next.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className=" bg-gray-200">
      {({ open }) => (
        <>
          <div className="container lg:mx-auto lg:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Bruin Den"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Bruin Den"
                    />
                  </Link>
                  <Link href="/">
                    <span className="transition duration-500 hover:text-indigo-500 cursor-pointer font-semibold px-3 text-2xl text-slate-600 hidden lg:block">
                      {/* <span className="transition duration-500 hover:text-yellow-400 cursor-pointer font-header text-4xl text-white"> */}
                      Bruin Den
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Profile dropdown */}
                <div className="hidden md:ml-6 md:block px-3">
                  <div className="flex space-x-4"></div>
                </div>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        src={ProfilePicture}
                        alt="Profile Picture"
                        className="h-8 w-8 rounded-full"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.apurvashah.org/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Portfolio
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://github.com/lazarulian"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            GitHub
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.goodreads.com/user/show/148133170-apurva-shah"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            GoodReads
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <div className=" text-white bg-indigo-600 opacity-70 block px-3 py-2 rounded-md text-base font-medium w-full text-center">
                <Link key="Home" href="/">
                  Home
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
