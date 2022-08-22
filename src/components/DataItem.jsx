import {useState} from 'react';

import styles from '../styles/DataItem.module.css';

function DataItem() {


  return (
    <div className={styles.element}>
        <div></div>
        <div></div>
        <div className={styles.toolbox}>
            <button>change</button>
            <button>delete</button>
        </div>
    </div>
  )
}

export default DataItem