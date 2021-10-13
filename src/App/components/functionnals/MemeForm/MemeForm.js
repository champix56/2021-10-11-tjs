import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './MemeForm.module.css'
import Button from '../../ui/Button/Button';
const initialState={}
function MemeForm(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      return () => {
        //willUnMount effect
      };
    }, [state])
    return (
        <div className={styles.MemeForm} data-testid="MemeForm">
            memeForm state -&gt;  {JSON.stringify(props.meme)}
            <Button lorsqueJeClique={(evt)=>{props.onFormChange({...props.meme,text:'C\'est la fin de la journee'})}}>Changer le text</Button>
        </div>
    )
}

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  onFormChange: PropTypes.func.isRequired,
}

export default MemeForm

