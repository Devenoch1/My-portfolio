import React from 'react'
import Head from 'next/head'
import Image from 'next/image'



function Home() {
  const extrastyling = {
    animation: "animateDown infinite 1.5s"
  } 
  const extrastyle = {
    animation: "animateUp infinite 1.5s"
  } 
  const extrastyld = {
    animation: "animatemiddle infinite 1.5s"
  } 
  const extrastyl = {
    animation: "animatemiddl infinite 1.5s"
  } 
  const extrasty = {
    animation: "animatemidd infinite 1.5s"
  } 
  return (


    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="Untitled.svg" />
        <meta name="title" content="Kalejaiye Enoch  | Home" />
        <meta name="description" content="Kalejaiye is the founder and developer of enochkalejaiye.vercel.com, a beautiful portfolio for software developers, designers and programmers. He is a tech enthusiast who is passionate about sharing his technical knowledge to everyone who is interested in learning"  />
        <meta name="keywords" content="Kalejaiye, Enoch, Gbolahan, Devenoch, kalejaiye enoch gbolahan, commisoiner model, developer, great developers, portfolio, great portfolio, a,d,v,g,h,j,y,r,t,b,f, i need a website, dev, kalejaiyenoch" />
      </Head>

      <div>
        <div id='home'></div>
        <div className=' lg:flex scroll-smooth lg:mt-8'>
          <div className=''>
            <h1 className='lg:text-left lg:ml-20 lg:pt-8 md:pt-8  md:mt-14  text-center pt-44 lg:text-2xl'>Hello, I'm <br></br></h1>
            <div  className='lg:text-left lg:mb-10 lg:block  flex  sm:mt-5 block hero font-extrabold text-white text-5xl tracking-tight sm:text-7xl lg:mt-6 xl:text-8xl justify-center'>
              <h2 className=' lg:text-left lg:ml-14   text-center'>Kalejaiye</h2>
              <h2 className='lg:text-left  lg:ml-14 md:pl-4 sm:pl-2 text-center'>Enoch</h2>
            </div>

            <p className='lg:text-left lg:ml-10 md:pl-10  mt-7  text-center'>Front-end developer</p>

          </div>
          <div id="about"></div>
          <div className='image lg:w-96 w-80 relative lg:mt-24 mx-auto p-4 border-4 border-yellow-300'>
            <Image src="/enochball.png"  className='sm:pt-10  md:pt-4' width={340} height={470} />
          </div>
        </div>

      </div>


      <div className='about-section'>
        <div className='about-container'>
          <div className='project-title'>
            <h1 className='lg:text-2xl text-xl font-bold text-center lg:text-left pl-8 lg:mt-10 lg:pt-10'>About Me.</h1>
          </div>

          <div className='about-content md:text-sm'>
            <p className='lg:ml-10 lg:mr-10 mt-4 text-xl md:ml-2 md:mr-2'>
              I am a Software Engineer and Product Designer from Nigeria, who as pleasure in  developing intuitive interfaces for users. I have about 1 years of experience developing and designing, and my stack revolves around Javascript technologies, mainly NextJS, on the Frontend. <br></br> <br></br>

              While code is important, I do not leave out the developer community, as I am also actively involved in various communities, contributing my quota, and building the community.
            </p>
          </div>
        </div>
      </div>



      <div id='project'></div>
      <h1 className='lg:text-left  lg:ml-8 pt-14 font-bold text-2xl text-center'>My Project</h1>
      <div className="project md:block lg:flex">
        <div className="project-container md:w-auto lg:w-96 w-80 lg:mt-16 relative mt-10 h-44 rounded-xl mx-auto p-4 border-4 border-yellow-300">
          <div className="project-intro text-center">
            Portfolio
          </div>
          <div className="image mx-0 pt-20 flex justify-between">
            <img   className='' src="/iconmonstr-github-1.svg" alt="" />
            <h2>Next js Tailwind CSS</h2>
          </div>
        </div>

        <div className=" md:w-auto project-container  lg:w-96 w-80 lg:mt-16 relative mt-10 h-44 rounded-xl mx-auto p-4 border-4 border-yellow-300">
          <div className="project-intro text-center">
            Responsive Navigation bar
          </div>
          <div className="image mx-0 pt-20 flex justify-between">
            <img className='' src="/iconmonstr-github-1.svg" alt="" />
            <h2>Html CSS Javascript</h2>
          </div>
        </div>
        <div className="project-container md:w-auto lg:w-96 w-80 lg:mt-16 relative mt-10 h-44 rounded-xl mx-auto p-4 border-4 border-yellow-300">
          <div className="project-intro text-center">
            Portfolio
          </div>
          <div className="image mx-0 pt-20 flex justify-between">
            <img className='' src="/iconmonstr-github-1.svg" alt="" />
            <h2>Html CSS Javascript</h2>
          </div>
        </div>
      </div>

      <div className="contact" >
        <div className='contact-header text-center justify-center lg:text-left lg:ml-8 text-2xl font-bold mt-14 pt-14'>
          <h1> Contact Me</h1>
        </div>


        <div className="contact-1-container justify-center text-center text-xl mt-7">
          <div className="contact-1-intro lg:text-left lg:pl-10">If you are in need of any website <br /> manage your website, feel free to contact me <br />  via these following channel </div>
        </div>

        <div className="contact-2">
          <div className="contact-links flex justify-center text-center lg:pl-14 lg:justify-start mt-4">
            <img  style={extrastyl} className='h-20 w-20 ' src="/linked.png" alt="" />
            <a href='https://www.instagram.com/devcom0'><img  style={extrastyld} className='h-20 w-20 ' src="/hic.png" alt="" /></a>
            <img  style={extrasty} className='h-20 w-20 ' src="/hfghvjgd.svg" alt="" />
            <img  style={extrastyle} className='h-20 w-20 ' src="/twi.png" alt="" />
          </div>
        </div>





      </div>
    </div>






  )
}

export default Home
