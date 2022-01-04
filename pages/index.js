import Link from 'next/link'
import  Head  from 'next/head'

const Home = () => {
  return (
      <>
      <Head>
        <title>This is a test page </title>
        {/* <meta name="description" content="this is a page for testing" /> */}
      </Head>
        <section>
            <h1>Next.js</h1>
            <p className="h3">The React Framework for Production </p>
        </section>

        <section>
          <h2>What is next js?</h2>
          <p>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
        </section>

        <section>
          <h2>Routing in Next.js</h2>
          <p>Default routing is as simple as creating a page in the pages directory, no seriously thats it. 
            For more complex things such as protected route, you can use <a href="https://nextjs.org/docs/api-reference/next/router">next/router</a> which is loaded for you. 
          </p>
          <p>This will also `automagically` code split on the pages for you. This pairs nicely with...</p>
        </section>

        <section>
          <h2>Links in NEXT.js</h2>
          <p>
            Linking in NEXT.js uses the <a href="https://nextjs.org/docs/api-reference/next/link">next/link</a> import.
            You then wrap your a tag with the link and assign the href to the next link.
          </p>
          <p>
            This is so NEXT.js can see the Link component and then pre-fetch the bundles for the components it links to, spiffy!
          </p>
        </section>

        <section>
          <h2>Images in NEXT.js</h2>
          <p>
            Images in NEXT.js are via <a href="https://nextjs.org/docs/api-reference/next/image">next/image</a>.
            Next image is a one stop shop for lazy loading, optimizing, src setting, etc.
            <Link href="/image">
              <a className="block-link">To the Batcave......</a>
            </Link>
          </p>
          <p>
            This is so NEXT.js can see the Link component and then pre-fetch the bundles for the components it links to, spiffy!
          </p>
        </section>

        <section>
          <h2>SEO in NEXT.js</h2>
          <p>
            Since at tis core Next.js returns html, SEO is mostly out of the box, but what about the page titles? We can fix that with
            <a href="https://nextjs.org/docs/api-reference/next/head"> next/head</a>.
          </p>
        </section>

        <section>
          <h2>Rendering in NEXT.js</h2>
          <p>
            There are several different ways to rendering NEXT.js. Lets touch on two.
          </p>
          <ul className="default-list">
                <li>If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build . This HTML will then be reused on each request. It can be cached by a CDN.</li>
                <li>Server-side Rendering: The HTML is generated on each request.</li>
              </ul>
          <p>
            For static, we can use getStaticProps. SSR (server side render) will use getServerSideProps. Lets check that out:
            <Link href="/starwars">
              <a className="block-link">The old react way</a>
            </Link>
            <Link href="/starwars-pre">
              <a className="block-link">With get static props</a>
            </Link>
          </p>
        </section>

        <section>
          <h2>Whats new in Next.JS 12</h2>
          <p>
            At the recent Next.js conference, Next.js 12 was introduced and here are some of the major take aways:
            (this page is using Next.12 with some features enabled.)
          </p>
        </section>

        <section>
          <h2>
            <a href="https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler">Rust compiler</a>
          </h2>
          <p>
            A new compiler was put in place using rust which promises 3x faster refresh and 5x faster builds. 
            It also promises 17x faster than Babel and uses a new minification that is 7x faster than Terser(currently opt in in next.config)
            At the time this page was created, it does not support styled-components so a Babel file was needed, this will be corrected before launch.
          </p>
        </section>

        <section>
          <h2>
            <a href="https://nextjs.org/blog/next-12#introducing-middleware">Middleware</a>
          </h2>
          <p>
            Middleware allows the ability to intercept requests and responses and manipulate data.
            In NEXT.JS, this allows for code over configuration via a `_middleware file`. This can be used on pages, and on APIS.

            <Link href="/geo">
              <a className="block-link">Geo Localization</a>
            </Link>
          </p>
            
        </section>

        <section>
          <h2>
            <a href="https://nextjs.org/blog/next-12#introducing-middleware">Support for React 18</a>
          </h2>
          <p>
            There is a bunch of new stuff coming in React 18. Next JS is set(ting) up to handle the features.
            As they are in Alpha / Beta some currently do not work as expected yet.
          </p>

          <h3> Server Components</h3>
          <p>
            This feature will allow for components to be rendered server side. This means no `getStatic...``
            as it can now be handled on a component basis. 
            <Link href="/server-sidebar">
              <a className="block-link">Server sidebar</a>
            </Link>
          </p>

          <h3>Server-Side Streaming</h3>
          <p>
            Currently not available. This when active will allow for server side suspense and SSR
            streaming, which all will add up to the ability to server side render pages using HTTP streaming.
          </p>
        </section>
      </>

  )
}

export default Home
