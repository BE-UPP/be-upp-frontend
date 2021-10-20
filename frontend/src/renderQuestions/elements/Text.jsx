import React, { useContext, useState } from 'react'
import { FormContext } from '../FormContext';
import {
  TextField,
  InputAdornment
} from '@material-ui/core'
import validateText from '../../validation/TextValidation';

const Text = ({
  questionId, questionLabel,
  placeholder, endUnit,
  answerType, constraints, answer }) => {

  const { handleChange } = useContext(FormContext)

  const [inputValue, setInputValue] = useState("")

  const updateAnswer = (answer) => {
    return {
      value: answer
    }
  }

  const handleTextChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleBlur = () => {
    const { isValid, errorMessage } = validateText(inputValue, answerType, constraints)

    if (isValid) {
      handleChange(questionId, updateAnswer(inputValue))
    }
    else {
      console.log(errorMessage)
    }
  }

  return (
    <React.Fragment>
      <TextField
        InputProps={{ endAdornment: <InputAdornment position="end"> {endUnit} </InputAdornment> }}
        InputLabelProps={{ shrink: true }}
        key={questionId}
        style={styles.floatingText}
        label={questionLabel}
        placeholder={placeholder}
        variant="outlined"
        defaultValue={answer?.value}
        onBlur={handleBlur}
        onChange={event => handleTextChange(event)} />
      <br />
    </React.Fragment>
  )
}

const styles = {
  questionContainer: {
    flex: 1,
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
  floatingText: {
    marginBottom: 50,
    width: 'auto'
  }
}

export default Text