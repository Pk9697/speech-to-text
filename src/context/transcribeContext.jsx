/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from 'react'

const TranscribeContext = createContext()

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const model = 'whisper-1'

const initialState = {
  transcribedFiles: [],
  file: null,
  text: null,
  error: null,
  inProgress: false,
}

const SET_FILE = 'SET_FILE'
const TRANSCRIBE_START = 'TRANSCRIBE_START'
const TRANSCRIBE_SUCCESS = 'TRANSCRIBE_SUCCESS'
const TRANSCRIBE_ERROR = 'TRANSCRIBE_ERROR'

function setFile(data) {
  return {
    type: SET_FILE,
    payload: data,
  }
}
function transcribeStart() {
  return {
    type: TRANSCRIBE_START,
  }
}
function transcribeSuccess(data) {
  return {
    type: TRANSCRIBE_SUCCESS,
    payload: data,
  }
}
function transcribeError(data) {
  return {
    type: TRANSCRIBE_ERROR,
    payload: data,
  }
}

function transcribeReducer(state, action) {
  switch (action.type) {
    case SET_FILE: {
      return {
        ...state,
        file: action.payload,
        text: null,
        error: null,
        inProgress: false,
      }
    }

    case TRANSCRIBE_START: {
      return {
        ...state,
        text: null,
        error: null,
        inProgress: true,
      }
    }

    case TRANSCRIBE_SUCCESS: {
      return {
        ...state,
        transcribedFiles: [
          {
            dateCreated: new Date().toLocaleDateString(),
            file: state.file,
            text: action.payload,
          },
          ...state.transcribedFiles,
        ],
        text: action.payload,
        error: null,
        inProgress: false,
      }
    }

    case TRANSCRIBE_ERROR: {
      return {
        ...state,
        text: null,
        error: action.payload,
        inProgress: false,
      }
    }

    default: {
      return state
    }
  }
}

function TranscribeContextProvider({ children }) {
  const [transcribeState, dispatch] = useReducer(
    transcribeReducer,
    initialState
  )

  const { file } = transcribeState

  const changeFile = (e) => {
    dispatch(setFile(e.target.files[0]))
  }

  const transcribe = async (e) => {
    e.preventDefault()
    dispatch(transcribeStart())
    if (!file) {
      alert('Please select file first')
      dispatch(transcribeError('Please select file first'))
      return
    }
    const formData = new FormData()
    formData.append('model', model)
    formData.append('file', file)
    const url = 'https://api.openai.com/v1/audio/transcriptions'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: formData,
    })

    const data = await res.json()
    if (data.text) {
      alert(data.text)
      dispatch(transcribeSuccess(data.text))
    } else {
      alert(data.error.message)
      dispatch(transcribeError(data.error.message))
    }
  }
  return (
    <TranscribeContext.Provider
      value={{ transcribeState, changeFile, transcribe }}
    >
      {children}
    </TranscribeContext.Provider>
  )
}

export { TranscribeContextProvider, TranscribeContext }
