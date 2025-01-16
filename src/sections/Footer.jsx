import React from 'react'

const footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 '>
        <div className="flex justify-center items-center flex-wrap gap-5">
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

      <p className="text-white-500">© 2025 Haneen Jamal. </p>
      
      <p className="text-white-500">Design and code inspired by 
      JavaScript Mastery.</p>
    </section>
  )
}

export default footer
