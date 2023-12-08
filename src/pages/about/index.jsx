import React from 'react'
import { Concept } from '../../sections/about/Concept'
import { History } from '../../sections/about/History'
import { Collection } from '../../sections/about/Collection'
import { Number } from '../../sections/about/Number'
import { WorkWithUs } from '../../sections/about/WorkWithUs'
import { Office } from '../../sections/about/Office'

export const AboutPage = () => {
  return (
    <main className='about'>
      <Concept />
      <History />
      <Collection />
      <Number />
      <WorkWithUs />
      <Office />
    </main>
  )
}
