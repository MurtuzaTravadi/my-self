import Image from 'next/image'
import {illustration} from '../app/portfolio';
import Mananimation from '../app/mananimation/mananimation';
import Mandesktop from '../app/resource/ManOnTableSitting.json';
import Header from '../app/Header/header';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div className="bg-teal-400 p-0.1 leading-10">
      <Header/> 
      </div>
      
      {/* Content */}
      <div className="z-15 max-w-5xl w-full flex items-start justify-between font-mono text-sm lg:flex p-5">
        <div className="flex items-center">
          <div>
            <h1 className="mb-4">
              You found me!!&nbsp;
              <code className="font-mono font-bold">My name is Murtuza<span className="wave">👋</span></code>
            </h1>
            <h2>
              A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
            </h2>
          </div>
        </div>
        <div className="ml-4">
          {/* Add your profile picture here */}
          <img
            src="Murtuza Passport.jpg"
            alt="Profile Picture"
            className="w-22 h-22 rounded-full"
          />
        </div>
      </div>

      <section id="corecompetencies" className="mt-8">
       
          <ul>
            <li><h1>Communication Skills</h1></li>
            <li><h1>Problem-solving</h1></li>
            <li><h1>Real life analysis</h1></li>
            <li><h1>Team Skills</h1></li>
            <li><h1>Desire to learn</h1></li>
          </ul>          
          
      </section>

      {/* Animation on the Left */}
      <section id="skills" className="mt-8 flex items-center">
        <Mananimation animationData={Mandesktop} />
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">What I do</h3>
            <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
          </div>
          <div className="ml-8">
            <h3 className="text-2xl font-bold mb-4">Technologies</h3>
            <ul className="list-disc ml-4">
              <li>.Net</li>
              <li>.Net Core</li>
              <li>SQL</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Javascript</li>
              <li>Azure</li>
              <li>npm</li>
              <li>aws</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Development Highlights</h3>
          <ul className="list-disc ml-4">
            <li>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</li>
            <li>⚡ Progressive Web Applications (PWA) in normal and SPA Stacks</li>
            <li>⚡ Integration of third-party services such as Firebase/ AWS / Digital Ocean</li>
          </ul>
        </div>
      </section>
      
      <section id="contact" className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Reach Out to Me!</h3>
        <p className="mb-4">JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
        <p className="mb-4">Open for opportunities:</p>
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/murtuza-travadi/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <img src="linkedin_logo.jpg" alt="LinkedIn Logo" className="w-6 h-6" />
        </a>
      </section>

    </main>

  )
}
