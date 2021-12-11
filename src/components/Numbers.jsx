import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const renderButtons = onClickNum => {
  const nums = [7,8,9,4,5,6,1,2,3,0]
  return nums.map(number => (
    <Button key={number} text={number.toString()} clickHandler={onClickNum} />
  ))
}

const Numbers = ({ onClickNum }) => (
  <section className="numbers">
    {renderButtons(onClickNum)}
  </section>
)

Numbers.propTypes = {
  onClickNum: PropTypes.func.isRequired
}

export default Numbers