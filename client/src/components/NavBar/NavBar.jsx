import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from 'react-router-dom'
function NavBar(props) {
 
  return (
    <div className={styles.container}>
      <div>
        <h4>GAME DETAIL</h4>
        <div>
         
            <NavLink to="/Home">
              <button className={styles.btn}>Home</button>
            </NavLink>
          
        </div>
      </div>

    </div>
  )
}

export default NavBar