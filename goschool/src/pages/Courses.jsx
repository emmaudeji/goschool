import {Hero} from '../components'
import bg3 from '../assets/bgwhite2.jpg'

const Courses = () => {
  return (
    <Hero
    backgroundImage={bg3}
    header={'Over 10,000 courses curated to meet your career goals'}
    text={<>
            <p>Search for the course that meets your need and start learning today.</p>
          </>}
    CTA={
      <div className='mt-4'>
              <button className='primary-btn bg-[var(--color-primary)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] duration-500 cursor-pointer'>
                Get Started <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='bg-[var(--color-white)] text-[var(--color-black)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] duration-500 cursor-pointer'>
                View Courses <i className='fa fa-long-arrow-alt-right'></i>
              </button>
      </div>}
      />
  )
}

export default Courses