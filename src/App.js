import './app.css'
import React from "react";
import Armando from "./assets/Armando.png"
function App() {
  return (
    <div>
      
      <div className="bg-[] flex flex-col gap-12 max-w-xl mt-12 mx-auto px-4">
          <div className="flex justify-center items-center gap-4" >
          <span class="block p-2 bg-purple-450 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></span>
          <span class="block text-xl font-medium">eu.armandoo</span>
          </div>
          <div class="flex flex-col justify-between items-center p-4 gap-10 lg:flex-row">
          <img src={Armando} className="w-[222px] h-[222px] border-solid border-4 border-violet-400 rounded-full" alt="Armamndo"></img>
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <h1 className="text-4xl">Armando Filho</h1>
              <h2 className="text-xl font-medium">Software Developer</h2>
            </div>
            <div className="flex gap-3">
              <a href="http://github.com/ARMCCF" target="_blank" rel="noreferrer" rel="noopener"  className="hover:text-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M84,240a23.9,23.9,0,0,0,24-24V168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M172,240a23.9,23.9,0,0,1-24-24V168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </a>
              <a href=""  className="hover:text-yellow-400 transition-colors">
              <a href="http://linkedin.com/in/filhoarmando7" target="_blank" rel="noopener" rel="noreferrer" class="hover:text-yellow-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="88" cy="80" r="12"></circle></svg></a>
              </a>
              <a href="https://www.instagram.com/eu.armandoo/" target="_blank" rel="noreferrer" rel="noopener" className="hover:text-yellow-400 transition-colors">
              <svg xmlns="https://www.instagram.com/eu.armandoo/" width="35" height="35" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><rect x="36" y="36" width="184" height="184" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><circle cx="180" cy="76" r="12"></circle></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">About Me</h1>
          </div>
          <div>
            <p className='text-xl'>
            <span className="block">Hello! My name is Armando Filho, I'm a developer, and a sentence that shapes my path today is:
            - Imagination is more important than knowledge, because knowledge is limited, whereas imagination encompasses the whole world."
            -Albert Einstein.</span>

            <span className="block">I'm a programming enthusiast and passionate about it, I like to read and I make a lot of effort to learn new things and I try to improve myself every day. Combining knowledge, thoughts and ideas is what I think is essential in a healthy environment.</span>

            <span className="block">I am currently looking for an opportunity to enter the job market aiming for a long successful career.</span>
            </p>
          </div>
      </div>
      
    </div>
    
  );
}

export default App;
