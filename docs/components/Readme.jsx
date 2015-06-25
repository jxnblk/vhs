
import React from 'react'

class Readme extends React.Component {

  render () {
    return (
      <div
        className='Readme py4 white'
        dangerouslySetInnerHTML={{ __html: this.props.body }} />
    )
  }

}

export default Readme

