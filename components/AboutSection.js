import React from 'react'

const AboutSection = () => {
  return (
    <div className='w-screen p-5 min-h-regularScreen flex flex-col justify-center lg:px-48 md:p-6 bg-background'>
      <div className='text-primary mb-4 font-semibold md:text-lg md:mb-6'>About me</div>
      <div className='text-4xl font-primary mb-14 font-extrabold lg:text-5xl lg:mb-24'>I am an enthusiastic web developer based in New York, with a rich experience of over 6 years in website & product design.</div>
      <div className='md:flex'>
        <div className='font-primary text-xl mb-5 text-primary font-extrabold md:flex-1 md:text-3xl lg:text-4xl'>I design professional & beautiful websites</div>
        <div className='text-secondary md:flex-1 md:text-lg'>
          <div className='mb-4'>
            With years of experience in graphic and web design I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.
          </div>
          <div>
            Ive spent most of these years working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything. I give you a variety of options we can work on together.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection