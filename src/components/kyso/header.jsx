import Image from 'next/image'
import Link from 'next/link'

import avatarImage from '@/images/avatar.jpg'
import {
    GitHubIcon,
    GitlabIcon,
  } from '@/components/SocialIcons'
import { Button } from '../Button'

  function SocialLink({ icon: Icon, ...props }) {
    return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-8 w-8 fill-gray-800 transition group-hover:fill-gray-600 " />
      </Link>
    )
  }

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <Image
                  className="h-14 w-14"
                  src={avatarImage}
                  alt="Kyso"
                />
            
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Kyso is open source now!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Kyso - the universal aggregator for all research formats was shut down on September 31, 2023.
                </p>
                <div className="mt-6 sm:mt-32 lg:mt-16">
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Check our open source project here:</span>
                    </span>
                </div> 
                {/* <div className="mt-6 flex gap-6">
                    <SocialLink
                    href="https://gitlab.com"
                    aria-label="Check Gitlab"
                    icon={GitlabIcon}
                    />
                    <SocialLink
                    href="https://github.com"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                    />

                </div> */}
                <div className="mt-6 flex items-center gap-x-6">
               
                  <a
                    href="https://github.com"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Gitlab
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
                <iframe
                    src={'https://www.loom.com/embed/f714ef5a9ca54c3fa3b81ef6f7bb341d?sid=632d89c8-32c1-4bdb-8dfe-3b203aba5b60'}
                    frameBorder="0"
                    allowFullScreen
                    className="abosolute t-0 l-0 w-100% h-100% rounded-xl"
                    style={{ width: '100%', height: '100%' }}
                />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
