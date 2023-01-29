import React from 'react'

const resources = () => {
  return (
    <div>
        <div>
            Here are a few UCLA resources that we think are helpful!
        </div>
        <a
        className="text-center mx-8 mb-2 py-6 rounded-lg h-screen"
        href="https://bruinshelter.org/"
        target="_blank"
        rel="noreferrer" >
        Bruin Shelter
        </a>

        <a
        className="text-center mx-8 mb-2 py-6 rounded-lg h-screen"
        href="https://lgbtq.ucla.edu/"
        target="_blank"
        rel="noreferrer" >
        UCLA LGBTQ Center
        </a>

        <a
        className="text-center mx-8 mb-2 py-6 rounded-lg h-screen"
        href="https://cpo.ucla.edu/cpo/foodcloset/"
        target="_blank"
        rel="noreferrer" >
        UCLA Food Closet
        </a>
    </div>
  )
}

export default resources