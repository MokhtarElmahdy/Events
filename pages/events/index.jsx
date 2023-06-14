import React from 'react'
import { useRouter } from 'next/router';
import {getAllEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/events-search';
import Head from 'next/head';
export default function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();
  const findEventHandler = (year,month)=>{
    console.log("Year is => " , year);
    console.log("Month is => " , month);
    router.push(`/events/${year}/${month}`)
  }
  return (
    <div>
      <Head>
        <title>All Event</title>
      </Head>
      <EventSearch onSearch={findEventHandler}/>
      <EventList items={allEvents}/>
    </div>
  )
}
