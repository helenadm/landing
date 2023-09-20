'use client'

import { Fragment, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import {
  GitHubIcon,
  Book,
  GitlabIcon,
  Docs
} from '@/components/Icons'
import { SocialIcon } from '@/components/SocialIcon'
import avatarImage from '@/images/avatar.jpg'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}



function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="flex items-center py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 ">
                {/* <MobileNavItem href="/about">
                    <SocialIcon icon={GitlabIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 " />
                    Gitlab
                </MobileNavItem> */}
                <MobileNavItem href="/about">
                  <SocialIcon icon={GitHubIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
                  Github
                </MobileNavItem>
                <MobileNavItem href="/about">
                  <SocialIcon icon={Book} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
                  Gitbook
                </MobileNavItem>
                <MobileNavItem href="https://docs.kyso.io">
                  <SocialIcon icon={Docs} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
                  Docs
                </MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative flex  items-center px-3 py-2 transition',
          isActive
            ? 'text-gray-500'
            : 'hover:text-gray-500',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-gray-500/40 to-gray-500/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
        {/* <NavItem href="/about">
            <SocialIcon icon={GitlabIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Gitlab
        </NavItem> */}
        <NavItem href="/about">
            <SocialIcon icon={GitHubIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Github
        </NavItem>
        <NavItem href="/about" >
            <SocialIcon icon={Book} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Gitbook
        </NavItem>
        <NavItem href="https://docs.kyso.io">
            <SocialIcon icon={Docs} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Docs
        </NavItem>
      </ul>
    </nav>
  )
}


function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          large ? 'h-18 w-18' : 'h-11 w-11',
        )}
        priority
      />
    </Link>
  )
}

export function Navbar() {
  return (
    <>
      <header>
      <div className="mx-auto max-w-7xl pt-10 ">
      <nav className="flex items-center justify-between px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <span href="#" className="-m-1.5 p-1.5">
            <Avatar />
          </span>
        </div>
        <MobileNavigation className="pointer-events-auto md:hidden" />
        <DesktopNavigation className="pointer-events-auto hidden md:block" />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
       
        </div>
      </nav>
      </div>
    </header>
    </>
  )
}
