import React from 'react'

const Paragraphs = () => {
  return (
    <div className='bg-white grid grid-cols-2 gap-1 p-10 font-serif'>
        <div className= 'col col-span-1 text-center p-10'>
            <h1 className = "text-3xl pb-5">Housing Insecurity</h1>
            <p> Housing insecurity is a particularly pressing issue for
                 members of the LGBTQIA community and other underrepresented 
                 groups. Studies have shown these populations are 
                 disproportionately likely to experience homelessness and
                discrimination in the housing market. This can be due to a variety of
                factors, including discrimination based on sexual orientation 
                or gender identity, lack of social and economic support, and lack of access 
                to safe and affirming housing. For LGBTQIA youth, the risk of housing
                insecurity is especially high. According to a study by the Williams
                Institute, an estimated 40% of homeless youth identify as LGBTQIA, 
                and many of these youth report being forced to leave their homes due
                 to rejection or abuse from family members. This can leave them without
                a stable home, and at risk of violence, exploitation, and other negative 
                outcomes.</p>
         </div>

         <div className= 'col col-span-1 text-center p-10'>
         <h1 className = "text-3xl pb-5">Our Approach</h1>
         <p>
          Underrepresented communities such as people of color, 
         people with disabilities, and immigrants, also face discrimination 
         in the housing market. This can take many forms, including being denied 
         rental housing, facing discriminatory terms and conditions, and enduring 
         harassment from landlords or neighbors. The intersection of these identities 
         can lead to even more housing insecurity and a lack of access to safe and affordable housing. 
         Addressing the housing insecurity of these groups will require targeted efforts to combat discrimination,
         provide support services, and increase the availability of affordable housing options that are welcoming 
         and inclusive.

         </p>
         </div>
    </div>
  )
}

export default Paragraphs