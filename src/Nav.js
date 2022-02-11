import React, { useState, useEffect } from 'react'
import './nav.css'

function Nav() {
      const [show, handleShow] = useState(false)

      useEffect(() => {
            window.addEventListener('scroll', () => {
                  if (window.scrollY > 100) {
                        handleShow(true)
                  } else handleShow(false)
            })
            return () => {
                  window.removeEventListener("scroll")
            }
      }, [])


      return (
            <div className={`nav ${show && "nav__black"}`}>
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TTCgnTjm3-P-qjGSCmgBCAHaEH%26pid%3DApi&f=1" alt="" className='nav__logo' />

                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jW8lo9a8P9E9BO4HCTvmAgHaHa%26pid%3DApi&f=1" alt="" className="nav__avatar" />
            </div>
      )
}

export default Nav