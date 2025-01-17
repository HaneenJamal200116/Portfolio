import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { HackerRoom } from '../components/HackerRoom'   
import { Leva,useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'
import Chair from '../components/Chair.jsx'
import HeadPhones from '../components/Headphones.jsx'
import Mug from '../components/Mug.jsx'
import Keyboard from '../components/Keyboard.jsx'
import Mouse from '../components/Mouse.jsx'
import Butterfly from '../components/Butterfly.jsx'
const Hero = () => {
    // const x = useControls( {
    //     positionX:{ value: 2.5, min: -10, max: 10 },
    //     positionY:{ value: 2.5, min: -10, max: 10 },
    //     positionZ:{ value: 0, min: -10, max: 10 },
    //     rotationX:{ value: 0, min: -10, max: 10 },
    //     rotationY:{ value: 0, min: -10, max: 10 },
    //     rotationZ:{ value: 0, min: -10, max: 10 },
    //     scale:{ value: 1, min: .1, max: 10 },
    // })
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className='min-h-screen w-full flex flex-col relatve' id='home'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='text sm:text-3xl text-2xl font-medium text-white font-generalsans'>
                Hi, I'm Haneen <span className='waving-hand'>🌺</span>
            </p>
            <p className=' xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal text-gray_gradient'>Software Engineer</p>
            <p className="text-lg font-medium text-white mt-4">
            Passionate software engineer specializing in creating responsive,<br/> scalable web applications. <br/>Let's build seamless digital experiences together.
</p>

            <div className='w-full h-full absolute inset-0'>
                {/* <Leva/> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <group 
                                rotation={[ .2,  5.2, 0]}
                                position={[ 5.9, 1.1, 1.2]}
                                scale={1.2}
                            >
                                <HackerRoom 
                                    // rotation={[ x.rotationX,  x.rotationY,  x.rotationZ]}
                                    // position={[ x.positionX,  x.positionY,  x.positionZ]}
                                    // scale={[ x.scale,  x.scale,  x.scale]}
                                    position={sizes.deskPosition}
                                    rotation={isMobile?(
                                        [ 0,  -2,  0]
                                        ):[ 0,  -Math.PI,  0]}
                                    scale={sizes.deskScale}
                                />
                                
                                {
                                isMobile ? (
                                    null
                                ) : <Chair
                                rotation={[0, 1.8, 0]}
                                position={[7.3, -4.3, 2.2]}
                                scale={0.06}/>
                                }
                                
                                                            {
                                isSmall ? (
                                    <>
                                        <HeadPhones scale={0} />
                                        <Mug
                                                    position={[1, -1.85, 3.8]}
                                                    rotation={[0, 1, 0]}
                                                    scale={0.7}
                                                /> 
                                        <Keyboard  position={[2.7, -1, 7.2]}  
                                                    rotation={[0, 1.14, 0]}  
                                                    scale={7.5} />
                                        <Mouse  rotation={[-0.2, 4.5, -0.1]}
                                                    position={[1.6, -1.8, 5.3]}
                                                    scale={0.08}/>
                                        <Butterfly  rotation={[-0.2, -1, 0.2]}
                                                    position={[1.9, 0.7, 6.8]}
                                                    scale={0.3} />
                                    </>
                                ) : (
                                    <>
                                        {
                                            isMobile ? (
                                                <HeadPhones
                                                    rotation={[-2, -6.2, -4]}
                                                    position={[2, -1.5, 8.9]}
                                                    scale={0.2}
                                                />
                                            ) : (
                                                <HeadPhones
                                                    rotation={[-2, -6.2, -5]}
                                                    position={[-2.9, -0.5, 1.6]}
                                                    scale={0.3}
                                                />
                                            )
                                        }
                                        {
                                            isMobile ? (
                                                <Mug
                                                    position={[1.9, -2.3, 3.8]}
                                                    rotation={[0, 1, 0]}
                                                    scale={0.9}
                                                />
                                            ) : (
                                                <Mug
                                                    position={[2.5, -0.9, 0.4]}
                                                />
                                            )
                                        }
                                        {
                                            isMobile ? (
                                                <Keyboard
                                                    position={[3.4, -1, 7.6]}
                                                    rotation={[0, 1.14, 0]}
                                                    scale={9}
                                                />
                                            ) : (
                                                <Keyboard
                                                    position={[-0.5, -0.6, 1.2]}
                                                    scale={12}
                                                />
                                            )
                                        }
                                        {
                                            isMobile ? (
                                                <Mouse
                                                    rotation={[-0.2, 4.5, -0.1]}
                                                    position={[2, -2, 5.2]}
                                                    scale={0.1}
                                                />
                                            ) : (
                                                <Mouse
                                                    rotation={[-0.2, 3.2, 0]}
                                                    position={[1.3, -0.86, 1.2]}
                                                    scale={0.1}
                                                />
                                            )
                                        }
                                        {
                                            isMobile ? (
                                                <Butterfly
                                                    rotation={[-0.2, -1, 0.2]}
                                                    position={[1.9, 0.9, 6.8]}
                                                    scale={0.3}
                                                />
                                            ) : (
                                                <Butterfly
                                                    rotation={[-0.2, -1, 0.2]}
                                                    position={[1.9, 1.1, 6.8]}
                                                    scale={0.3}
                                                />
                                            )
                                        }
                                    </>
                                )
                            }

                            

                                
                            </group>
                            
                        </HeroCamera>
                        
                        
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
                <div className="absolute  bottom-7   translate-x-1/3  z-10 c-space">
                    <a href="#about" className="w-fit">
                    <Button name="Let's work together" 
                        isBeam 
                        containerClass="sm:w-fit w-full sm:min-w-96 transition-transform transform hover:scale-105" 
                        />

                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
