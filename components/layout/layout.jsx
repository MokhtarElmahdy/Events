import React from 'react'
import MainHeader from './main-header'

export default function Layout({children}) {
  return (
    <React.Fragment>
        <MainHeader/>
        <main>
        {children}
        </main>
    </React.Fragment>
  )
}
