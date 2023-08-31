import { Navbar } from '@/components/kyso/navbar'
import {
    GitHubIcon,
    GitlabIcon,
  } from '@/components/Icons'
import { SocialLink } from '@/components/kyso/SocialIcons'
import { Button } from '../Button'


export default function Header() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <Navbar/>
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Kyso is now open-source!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Kyso - the universal aggregator for all research formats was shut down on September 31, 2023.
                </p>
                <div className="mt-6">
                    <span className="inline-flex items-center space-x-2 text-sm leading-6 font-semibold text-gray-900">
                      <span>Check our open source project here:</span>
                    </span>
                </div> 
                <div className="mt-6 flex items-center gap-x-6">
                  <Button
                    href="https://gitlab.com"
                    aria-label="Check Gitlab"
                  >
                    <SocialLink
                      icon={GitlabIcon}
                      className="h-6 w-6 fill-white transition group-hover:fill-gray-100 "
                    />
                    Gitlab
                  </Button>
                  <Button
                    href="https://gitlab.com"
                    aria-label="Check Gitlab"
                  >
                    <SocialLink
                      icon={GitHubIcon}
                      className="h-6 w-6 fill-white transition group-hover:fill-gray-100 "
                    />
                    Gitlab
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none flex">
                <div className="w-screen overflow-hidden max-h-max">
                  <div className="min-h-screen h-48 min-w-screen">
                    <iframe
                      src={'https://www.loom.com/embed/f714ef5a9ca54c3fa3b81ef6f7bb341d?sid=632d89c8-32c1-4bdb-8dfe-3b203aba5b60'}
                      frameBorder="0"
                      allowFullScreen
                      className="abosolute t-0 l-0 w-100% h-100% rounded-xl"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10"
                      aria-hidden="true"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
