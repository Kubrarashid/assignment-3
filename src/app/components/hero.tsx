import React from 'react'

const Hero = () => {
  return (
    <section id="home"
          className=" bg-red-400 p-10 py-15 flex justify-center items-center rounded-lg ">
          <div className="container mx-auto text-center max-w-2xl bg-emerald-500 p-8 shadow-lg rounded-lg hover:bg-green-600 text-black hover:white-50">
         
            <h2 className="text-5xl text-slate-900 font-bold animate-bounce ">Welcome to My Learning journey</h2>
            <br />

            <p className="text-lg md:text-xl leading-relaxed">
              Hi, I&apos;m Kubra a passionate web development student with a drive to create innovation and user-friendly digital experiences.

              Welcome to my website, where  I share my projects, learnings, and thoughts on programming and we development.
               
              When I'm not coding, you can find me a Doctor. As a web development student , I'm eager to merge my creativity with technical skills to craft 
              
              captivating digital experiences. 

              On this website I'll be sharing my journey, projects, and insights.
            </p>
          </div>
    </section>
     
  )
}

export default Hero
