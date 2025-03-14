'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiArrowDropDownLine, RiHome5Line } from 'react-icons/ri';

import appLogo from '@/public/apple-touch-icon.png';

const Navbar = () => {
  const [accountValue, setAccountValue] = useState('£4,817.99');

  return (
    <nav className="bg-[var(--bg-color)]">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Account Section */}
          <div className="flex items-center h-10 gap-4 bg-[var(--field-color)] rounded-full p-2">
            <div className="flex items-center">
              <Image
                src={appLogo}
                alt="appLogo"
                width={28}
                height={28}
                className="mr-2 border-2 border-[var(--divider-color)] rounded-full"
              />
              <div className="text-[var(--text-color)] font-bold">212</div>
              <span className="text-[var(--accent-color)] font-semibold ml-1">Track</span>
            </div>
            <div className="border-l border-[var(--divider-color)] h-4"></div>
            <div className="text-[var(--text-color)] font-semibold">
              {accountValue} <RiArrowDropDownLine className="inline-block h-6 w-6" />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[var(--text-color)] hover:text-gray-800">
              <RiHome5Line className="h-6 w-6" />
            </Link>
          </div>

          {/* Search and Notifications */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(---color)]" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-full bg-[var(--field-color)] border-none w-[200px]"
              />
            </div>
            <button className="text-[var(--text-color)] hover:text-gray-800 ml-4">
              <IoMdNotificationsOutline className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
