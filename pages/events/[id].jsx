import { useRouter } from 'next/router'
import React from 'react'
import {getEventById} from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import Head from 'next/head'
export default function EventDetailPage() {
  const router = useRouter()
  const {id} = router.query
  const event = getEventById(id)
  if(!event){
    return <p>No Event Found</p>
  }
  console.log(event);
  return (
    <React.Fragment>
      <Head>
        <title>Event Detail</title>
      </Head>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
    <p>{event.description}</p>
      </EventContent>
    </React.Fragment>
  )
}
