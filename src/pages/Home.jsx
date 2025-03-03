import React from 'react'
import Slider from '../components/Slider'

function Home() {
  return (
    <div className=''>
      {/* Slider */}
      <Slider />
      

      {/* Our Mission */}
      <div className='bg-[url(/images/home/bg-building.jpg)] bg-no-repeat bg-cover'>
          <div className='w-11/12 mx-auto grid  grid-cols-1 sm:grid-cols-2 py-10' >
            <div></div>
            <div className='bg-primary/90 opacity-80 p-7 text-white'>
              <h2 className='font-bold text-4xl mb-5'>Our Mission</h2>
              <p className='text-justify'>We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the world.</p>
              <div className="relative w-full pb-[56.25%] h-0">
              
              <iframe 
              width="560" height="315" src="https://www.youtube.com/embed/cuIFuOVG9eA?si=n3__cN0_haekS6c5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

            </div>
          
          </div>
      </div>
    </div>
  )
}

export default Home