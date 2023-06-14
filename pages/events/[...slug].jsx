import React from 'react';
import { useRouter } from 'next/router';
import {getFilteredEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
import Head from 'next/head';
export default function FilteredEventsPage() {
  const router = useRouter()
  const filterData = router.query.slug;
  if(!filterData){
    return <p className='center'>Loading....</p>
  }
  const [year , month] = filterData;
  const [numYear , numMonth] = [+year , +month]
  console.log(numYear,numMonth);
  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
    return ( <React.Fragment>
      <ErrorAlert>
    <p className='center'>Invalid filter. Please adjust your values</p>
    </ErrorAlert>
    <div className="center">
    <Button link={'/events'}>Show All Events</Button>
    </div>
    </React.Fragment>
    )}
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })
  if(!filteredEvents || filteredEvents.length === 0){
    return <React.Fragment>
      <ErrorAlert>
      <p>No events found for the choosen filter</p>
      </ErrorAlert>
      <div className="center">
      <Button link={'/events'}>Show All Events</Button>
      </div>
    </React.Fragment>
  }
  const date = new Date(numYear,numMonth -1 )
  return (
    <React.Fragment>
      <Head>
        <title>Filterd Events</title>
      </Head>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </React.Fragment>
  )
}
