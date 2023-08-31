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
import { SocialLink } from '@/components/kyso/SocialIcons'
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
                <MobileNavItem href="/about">
                    <SocialLink icon={GitlabIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
                    Gitlab
                </MobileNavItem>
                <MobileNavItem href="/about">
                    <SocialLink icon={GitHubIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
                    Github
                </MobileNavItem>
                <MobileNavItem href="/about">
                    <SocialLink icon={Book} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
                    Gitbook
                </MobileNavItem>
                <MobileNavItem href="/about">
                    <SocialLink icon={Docs} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
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
        <NavItem href="/about">
            <SocialLink icon={GitlabIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Gitlab
        </NavItem>
        <NavItem href="/about">
            <SocialLink icon={GitHubIcon} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Github
        </NavItem>
        <NavItem href="/about" >
            <SocialLink icon={Book} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Gitbook
        </NavItem>
        <NavItem href="/about">
            <SocialLink icon={Docs} className="mr-1 h-4 w-4 fill-black transition group-hover:fill-gray-900 "/>
            Docs
        </NavItem>
      </ul>
    </nav>
  )
}


function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
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

  let headerRef = useRef(null)
  let avatarRef = useRef(null)
  let isInitial = useRef(true)

  // useEffect(() => {
  //   let downDelay = avatarRef.current?.offsetTop ?? 0
  //   let upDelay = 64

  //   function setProperty(property, value) {
  //     document.documentElement.style.setProperty(property, value)
  //   }

  //   function removeProperty(property) {
  //     document.documentElement.style.removeProperty(property)
  //   }

  //   function updateHeaderStyles() {
  //     if (!headerRef.current) {
  //       return
  //     }

  //     let { top, height } = headerRef.current.getBoundingClientRect()
  //     let scrollY = clamp(
  //       window.scrollY,
  //       0,
  //       document.body.scrollHeight - window.innerHeight,
  //     )

  //     if (isInitial.current) {
  //       setProperty('--header-position', 'sticky')
  //     }

  //     setProperty('--content-offset', `${downDelay}px`)

  //     if (isInitial.current || scrollY < downDelay) {
  //       setProperty('--header-height', `${downDelay + height}px`)
  //       setProperty('--header-mb', `${-downDelay}px`)
  //     } else if (top + height < -upDelay) {
  //       let offset = Math.max(height, scrollY - upDelay)
  //       setProperty('--header-height', `${offset}px`)
  //       setProperty('--header-mb', `${height - offset}px`)
  //     } else if (top === 0) {
  //       setProperty('--header-height', `${scrollY + height}px`)
  //       setProperty('--header-mb', `${-scrollY}px`)
  //     }

  //     if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
  //       setProperty('--header-inner-position', 'fixed')
  //       removeProperty('--header-top')
  //       removeProperty('--avatar-top')
  //     } else {
  //       removeProperty('--header-inner-position')
  //       setProperty('--header-top', '0px')
  //       setProperty('--avatar-top', '0px')
  //     }
  //   }

  //   function updateAvatarStyles() {

  //     let fromScale = 1
  //     let toScale = 36 / 64
  //     let fromX = 0
  //     let toX = 2 / 16

  //     let scrollY = downDelay - window.scrollY

  //     let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
  //     scale = clamp(scale, fromScale, toScale)

  //     let x = (scrollY * (fromX - toX)) / downDelay + toX
  //     x = clamp(x, fromX, toX)

  //     setProperty(
  //       '--avatar-image-transform',
  //       `translate3d(${x}rem, 0, 0) scale(${scale})`,
  //     )

  //     let borderScale = 1 / (toScale / scale)
  //     let borderX = (-toX + x) * borderScale
  //     let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

  //     setProperty('--avatar-border-transform', borderTransform)
  //     setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
  //   }

  //   function updateStyles() {
  //     updateHeaderStyles()
  //     updateAvatarStyles()
  //     isInitial.current = false
  //   }

  //   updateStyles()
  //   window.addEventListener('scroll', updateStyles, { passive: true })
  //   window.addEventListener('resize', updateStyles)

  //   return () => {
  //     window.removeEventListener('scroll', updateStyles)
  //     window.removeEventListener('resize', updateStyles)
  //   }
  // })

  return (
    <>
      <header>
      <div className="mx-auto max-w-7xl pt-10 ">
      <nav className="flex items-center justify-between px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Avatar />
          </a>
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
