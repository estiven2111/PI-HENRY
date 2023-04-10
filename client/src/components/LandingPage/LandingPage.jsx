import React from 'react'
import styles from "./LandingPage.module.css"
import { NavLink } from "react-router-dom"


function LandingPage() {
  
 

  return (
    <div className={styles.container}>
      <div>
       
        <div>
          <NavLink to="/Home">
            <button className={styles.btn}>START GAME</button>
          </NavLink>
          
        </div>
      </div>

    </div>
  )
}

export default LandingPage