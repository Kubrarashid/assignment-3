import React from 'react'
import Header from "./components/Header";
import Footer from "./components/footer";
import Hero from './components/hero';


const Home = () => {
  return (
    <div>
    
      <Header />
      
      <Hero />
{/* About me Section */}
      <section id="about"
          className="bg-pink-200 text-black p-10 md:p-15 m-2">
          <div className="container mx-auto text-center text-black bg-sky-500 p-6 shadow-lg rounded-lg hover:bg-sky-600">
         
            <h2 className="text-5xl font-bold md:text-4 text-gray-950">About Me</h2>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Hello, I&apos;m Kubra a wedevelopment enthusiast studing to master the art of coding.
              Join me as I discover new technologies and build exciting projects.
            </p>
          </div>
      </section>
        
        {/* Portfolio Section */}

      <section id='portfolio'
        className="bg-pink-200 text-black p-10 md:p-15 m-2">
          <div className="container mx-auto text-center bg-sky-500 p-6 shadow-lg rounded-lg hover:bg-sky-600">
            <h2 className="text-5xl font-bold md:text-5xl">Portfolio</h2>
           
             <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
               Here are a few projects I&apos;ve worked on, showcasing my journey in web development.
               These projects reflect the skills I&apos;ve acquired and the passion I have for building
               excepional web experiences.
             </p>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9'>
              <div className='bg-cyan-800 p-8 shadow-lg rounded-lg hover:bg-cyan-900'>
                <h3 className='text-xl font-semibold mb-2 text-red-700'>Project 1</h3>
                <p>
                  A Student Calculator built with Html and CSS.
                  that performs basic arithmetic operations like addition, subtraction, multiplication, and division
                </p>
              </div>
            <div className='bg-cyan-800 p-8 shadow-lg rounded-lg hover:bg-cyan-900'>
             <h3 className='text-xl font-semibold mb-2 text-red-700'>Project 2</h3>
                <p>
                  A fully functional Todo list app built using React.js and CSS. 
               </p>
            </div>
            <div className='bg-cyan-800 p-8 shadow-lg rounded-lg hover:bg-cyan-900'>
             <h3 className='text-xl font-semibold mb-2 text-red-700'>Project 3</h3>
             <p>
               A fully functional Countdown Timer built with Typescript, Html, and CSS.
             </p>
            </div>
             </div>
          </div>
      </section>
          
          {/* Contact Section */}
        <section id="contact"
          className=" bg-pink-200 p-10 md:p-15 m-2">
          
          <div className="container mx-auto p-4 pt-10 text-black text-center bg-sky-500 shadow-lg rounded-lg hover:bg-sky-600">
            <h2 className="text-5xl md:6xl font-bold mb-6">Contact Me</h2>
            <p className="text-lg md:text-xl mbb-6">
              Address: Main Shahrah-e-Faisal,Karachi <br />
              Email: rashidkubra293@gmail.com
            </p>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default Home
