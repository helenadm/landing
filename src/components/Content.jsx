
export default function Content() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Open source</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Team{`'`}s Note</h1>
        <div className="mt-10 max-w-2xl">
        <p className="mt-6">
          We originally started Kyso in 2018 because we were passionate about helping the growing data science community 
          share their insights with the world. Our founding team had experienced first-hand the difficulties one can 
          encounter collaborating on technical results when everyone has their own preferred workflows & tools. This was 
          the foundation on which Kyso was born. Over the next 4 years, we had the honour to collaborate with {`'`}000s of 
          users and {`'`}00s of organisations, and were supported by a fantastic network of investors, all helping us on 
          this journey.
        </p></div>
        <div className="mt-10 max-w-2xl">
          <p>
          During this time, the platform went through a number of iterations as we gained a deeper understanding of which 
          needs were most underserved in the space. Our original focus was on Jupyter Notebooks specifically, already fast 
          becoming the new Excel, providing cloud-based compute environments and a simple reporting frontend. We also 
          experimented with building a public Jupyter-based blog, which at one point had over 60k monthly readers! In the 
          meantime, we were speaking with more & more organisations, and a common thread in those conversations began to 
          emerge: the complex tooling ecosystem for data-based workflows, which extends far beyond our previous Jupyter-only 
          focus. 
          </p>
          <p className="mt-8">           
            We realised that data science encompasses a wide range of positions within an organisation which today uses 
            code & data to generate results & effect business actions. Now, the problem arises when these technical teams 
            are embedded in a wide variety of tools, even within a single organisation. Because there is no central hub to 
            document & share everything, whatever the source or format, results end up scattered across many different 
            applications. Collaboration happens in smaller, private channels, which impacts wider & long-term discovery.
          </p>
          <p className="mt-8">   
            As companies continue to expand their data science & analytics capabilities, pouring a lot of $$$ into these efforts, 
            they will fail to <span className="font-semibold">truly leverage all of the value created by these teams</span> 
            if knowledge is not documented & searchable. This is the problem the Kyso team consequently set out to solve, a problem 
            so well known that both Stripe and Airbnb built internal solutions. Spotify is working on something similar, and 
            we also know that Netflix is building an in-house aggregator, <span className="underline">something most companies 
            don{`'`}t have the resources to do.</span>
          </p>
          <p className="mt-8">   
          In collaboration with leading Fortune 500s, we built out what is now the current iteration of the product: Kyso is the 
          Sharepoint for modern web formats & technical workflows. A platform where technical teams can publish their work for 
          wider discovery without having to convert to traditional presentation tools when they{`'`}re ready to share. They can just 
          push their notebooks, html, markdown, & more to Kyso, where they are rendered as readable reports. Kyso{`'`}s CLI tool 
          makes it easy to integrate into other applications like Git & S3, so published reports are connected to the data source 
          and automatically updated as changes are deployed. As with collaboration on general knowledge management software like 
          Google Docs & Notion, teams can make inline comments and create tasks directly on Kyso reports, shortening the feedback 
          loop between data teams and biz users. In this way, the platform ultimately centralises & streamlines internal research 
          discovery & collaboration.
          </p>
          <p className="mt-12">  
            Our team has worked incredibly hard building Kyso over the last few years. However, the current market environment has 
            made it difficult for us to continue growing the business as we had originally envisioned, and we have decided that 
            the best way forward is to open-source the platform. In this way, organisations can continue using what we{`'`}ve built, 
            which our team will maintain & develop over time.
          </p>
          <p className="mt-8">   
            Kyso is still alive thanks to our team{`'`}s continued support of the open-source project. Our long-term vision is a 
            workflow-independent, composable knowledge base where users can even build their own workflows & renderers. We already 
            have many ideas about future improvements & developments required to become the <span className="font-semibold">global 
            aggregator for all knowledge types.</span> Please feel free to get in touch with us if you have thoughts on this or would 
            like to expedite feature development for your team{`'`}s deployment.
          </p>
          <p className="mt-8">   
            We want to take this time to extend a massive thank you to our customers, the community and investors who believed in us. 
            We are excited to see how Kyso evolves in the future.
          </p>
          <p className="mt-10">   
            Until next time,
          </p>
          <p className="mt-1">   
            The Kyso Team.
          </p>
          </div>
          </div>
    </div>
  )
}