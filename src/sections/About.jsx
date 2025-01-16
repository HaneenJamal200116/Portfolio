
// import Globe from 'react-globe.gl'
import Globe from '../components/Globe.jsx'
import React, { Suspense, useState } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Button from '../components/Button'
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText('haneenalsalman06@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };
  return (
<section className="c-space my-10" id="about">
  <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 h-full">
    <div className="col-span-1 row-span-3">
      <div className="grid-container shadow-lg p-4">
        <img
          src="/assets/grid-me.png"
          alt="grid-1"
          className="w-full sm:h-[200px] h-fit object-contain mt-4"
        />
        <div>
          <p className="grid-headtext mt-6">Hi, I'm Haneen</p>
          <p className="grid-subtext">
            A passionate software developer skilled in building user-friendly
            and efficient web applications, with hands-on experience in
            full-stack development through projects and internships.
          </p>
        </div>
      </div>
    </div>
    <div className="col-span-1 xl:row-span-3 shadow-lg">
      <div className="grid-container shadow-lg p-4">
        <img
          src="/assets/stack.png"
          alt=""
          className="w-full sm:h-[250px] h-fit object-contain"
        />
        <div>
          <p className="grid-headtext">Tech Stack</p>
          <p className="grid-subtext">
            I specialize in creating responsive, scalable web applications using
            JavaScript, React, and Node.js.
          </p>
        </div>
      </div>
    </div>
    <div className="col-span-1 xl:row-span-4 shadow-lg">
      <div className="grid-container shadow-lg p-4">
        <div className="rounded-3xl w-full sm:h-[300px] h-fit flex justify-center items-center mb-4">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <Globe
                position={[0, 0, 0]}
                scale={9}
                rotation={[0, 0, 0]}
              />
              <OrbitControls  enableZoom={false}/>
              <ambientLight intensity={2} />
              <directionalLight
                position={[10, 10, 10]}
                intensity={0.5}
              />
            </Suspense>
          </Canvas>
        </div>
        <div>
          <p className="grid-headtext">Open to work</p>
          <p className="grid-subtext mb-6">
            Based in Jordan, I’m eager to collaborate with teams worldwide and
            adapt to various time zones for remote opportunities
          </p>
          <div className="flex gap-3">
        <div className="social-icon">
          <a target='_blank' href="https://github.com/HaneenJamal200116">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2  m-auto" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/haneen-alsalman-1930712b3/" target="_blank">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2  m-auto" />
          </a>
        </div>
        <div className="social-icon ">
          <a href="https://leetcode.com/u/hj__2001/" target="_blank">
            <img src="/assets/leetcode.svg" alt="leetcode" className="w-1/2 h-1/2 m-auto" />
          </a>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div className="xl:col-span-2 xl:row-span-3 shadow-lg">
      <div className="grid-container shadow-lg p-4">
        <img
          src="/assets/keyboard.png"
          alt=""
          className="w-full sm:h-[200px] h-fit object-contain"
        />
        <div>
          <p className="grid-headtext mt-4">My Passion for Coding</p>
          <p className="grid-subtext">
            I have a deep passion for solving problems and bringing ideas to
            life through code. For me, coding isn't just a career—it's a craft I
            truly love.
          </p>
        </div>
      </div>
    </div>
    <div className="xl:col-span-1 xl:row-span-2 shadow-lg">
      <div className="grid-container shadow-lg p-4">
        <img
            style={{width: '100px'}}
          src="assets/contact-us.png"
          alt="grid-4"
          className="w-full h-fit object-cover sm:object-top m-auto waving-hand"
        />
        <div className="space-y-2">
          <p className="grid-headtext text-center">Contact me</p>
          <div className="copy-container" onClick={handleCopy}>
            <img
              src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
              alt="copy"
            />
            <p className="grid-subtext text-gray_gradient text-white mt-4">
              haneenalsalman06@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
