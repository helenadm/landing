// import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Text() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Open source</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Founder's Note</h1>
        <div className="mt-10 max-w-2xl">
        <p className="mt-6 leading-8">
        We started Kyso in 2018 because we were passionate about sharing data knowledge. So, we built a platform for 
        data scientists that integrates with existing tools and workflows to focus on spreading wisdom across 
        the organization. Over the next five years, we had the honour to collaborate with fantastic customers and 
        investors who helped us drive through this journey. 
        </p></div>
        <div className="mt-10 max-w-2xl">
          <p>
          The market for sharing data is still in its early stages, and we have encountered various challenges. 
          We worked very hard to make Kyso successful. But, despite our efforts and enthusiastic usage, we couldn't 
          build a sustainable business. After considerable thought, we've decided to shut down Kyso and open source 
          all the effort and time our engineering has put in to build this product so every one of you can benefit from
           it, as we did from other open-source projects.
          </p>
          <p className="mt-8">            
          Kyso is still alive thanks to our team's support of the open-source project in our spare time. We want to
           extend a big thank you to the open-source community and donors. We are excited to see how Kyso will evolve.
          </p>
          </div>
          </div>
    </div>
  )
}