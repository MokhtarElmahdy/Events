import React from 'react'
import styles from './event-item.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import AddressIcon from '../icons/address-icon'
export default function EventItem({event}) {
  const readableDate = new Date(event.date).toLocaleDateString('en-US',{
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const formattedAddress = event.location.replace(', ' , '\n')
  return (
    <li className={styles.item}>
      <Image src={`/${event.image}`} width={500} height={260} alt={event.title}/>
      <div className={styles.content}>
        <div className="">
        <h2>{event.title}</h2>
        <div className={styles.date}>
          <DateIcon/>
      <time>{readableDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon/>
          <address>{formattedAddress}</address>
        </div>
        </div>
        <div className={styles.actions}>
          <Button link={'/events/' + event.id}>
          <span>Explore Event</span>
          <span className={styles.icon}><ArrowRightIcon/></span>
          </Button>
          {/* <Link href={'/events/' + event.id}></Link> */}
        </div>
      </div>
    </li>
  )
}
