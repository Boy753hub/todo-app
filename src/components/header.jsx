import React from 'react'
import { DarkParagraph } from '../styles/styled'
import styles from "../styles/App.module.css"
import useWindowSize from '../Hooks/useWindowSize'
import {  useHeaderContext } from '../contexts/headerContexts'
import geo from '../assets/geo.png'
import eng from '../assets/eng.png'

const Header = () => {

    const {width} = useWindowSize()
    const {isOpen, toggle, changeLan, setLan, data} = useHeaderContext()

  return (
    <div>
      <div className={styles.lang}>
        <div className={styles.langButtons}>
        <div className={styles.flags} onClick={()=> {setLan('eng')}}><img src={eng} alt="eng" /></div>
        <div className={styles.flags} onClick={()=> {setLan('geo')}}> <img src={geo} alt="geo" /></div>
        </div>
      </div>
          { width > 600 && <div>
          <DarkParagraph>{data[changeLan].theme}</DarkParagraph>
        <label className={`${styles.switch}`}>
          <input onChange={() => toggle((prev)=>!prev)} value={isOpen} type="checkbox" checked={isOpen} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        </div>}
    </div>
  )
}

export default Header