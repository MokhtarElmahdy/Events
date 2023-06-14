import Head from 'next/head'
import React from 'react'

export default function ErrorPage() {
  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <p className='center'>
        404 - Page not found.
      </p>
    </div>
  )
}
