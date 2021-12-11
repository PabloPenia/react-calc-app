import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOps from './components/MathOps'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {

  const [stack, setStack] = useState("")
  const items = words(stack, /[^+^-^*^/]+/g)
  const value = items.length > 0 ? items[items.length-1] : "0"

  return (
  <main className='react-calculator'>
    <Result value={value} />
    <Numbers onClickNum={ num => setStack(`${stack}${num}`) } />
    <Functions onContentClear={ () => setStack('') }
      onDelete={ () => {
        if (stack.length > 0) {
          const newStack = stack.substring(0, stack.length - 1)
          setStack(newStack)
        }
      }}
    />
    <MathOps onClickOp={ op => setStack(`${stack}${op}`) }
      onClickEqual={ () => {
        // eslint-disable-next-line
        setStack(eval(stack).toString())
        // setStack(eval(stack).replace(/[-\d/*+]/g, '').toString())
      }}
    />
  </main>)
}

export default App