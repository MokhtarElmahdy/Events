import React from 'react'
import EventItem from './event-item'
import styles from './event-list.module.css'
export default function EventList({items}) {
  return (
    <ul className={styles.list}>
        {items.map((item)=>(
            <React.Fragment key={item.id}>
            <EventItem event={item}/>
            </React.Fragment>
        ))}
    </ul>
  )
}
