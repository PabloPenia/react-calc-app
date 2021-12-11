import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOps = ({ onClickOp, onClickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onClickOp} />
    <Button text="-" clickHandler={onClickOp} />
    <Button text="*" clickHandler={onClickOp} />
    <Button text="/" clickHandler={onClickOp} />
    <Button text="=" clickHandler={onClickEqual} />
  </section>
)

MathOps.propTypes = {
  onClickOp: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired
}

export default MathOps