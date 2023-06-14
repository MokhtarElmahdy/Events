import React from 'react'
import {getFeaturedEvents} from '../dummy-data'
import EventList from '../components/events/event-list'
import Head from 'next/head'
export default function HomePage() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <Head>
        <title>Featured Events</title>
      </Head>
      <ul>
      <EventList items={featuredEvents}/>
        </ul>
    </div>
  )
}
