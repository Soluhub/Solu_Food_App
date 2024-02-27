import React from 'react'
import stack1 from './Images/stack1.jpg'
import stack2 from './Images/stack2.jpg'
import stack3 from './Images/stack3.jpg'
import stack4 from './Images/stack4.jpg'
import stack5 from './Images/stack5.jpg'
import stack6 from './Images/stack6.jpg'
import './ImageStack.css'
function ImageStack() {
  return (
    <div>
      <div class="below-description">
        <div class="description-img">
          <img className='one' src="https://omnifood.dev/img/customers/customer-1.jpg" alt="Customer photo" />
          <img src="https://omnifood.dev/img/customers/customer-2.jpg" alt="Customer photo" />
          <img className='one' src="https://omnifood.dev/img/customers/customer-3.jpg" alt="Customer photo" />
          <img src="https://omnifood.dev/img/customers/customer-4.jpg" alt="Customer photo" />
          <img src="https://omnifood.dev/img/customers/customer-5.jpg" alt="Customer photo" />
          <img src="https://omnifood.dev/img/customers/customer-6.jpg" alt="Customer photo" />
        </div>
        <p class="side-text">
          <span>250,000+</span> meals delivered last year!
        </p>
      </div>

    </div>
  )
}

export default ImageStack
