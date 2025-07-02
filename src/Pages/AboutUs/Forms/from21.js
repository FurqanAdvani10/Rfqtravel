import React from 'react'
import form from '../../../Assets/FORM 21 CTC.pdf'

const Form21 = () => {
  return (
    <div>
    <h5>Form 21 Preview</h5>
    {/* Example image or PDF:
        <img src="/form21.jpg" className="img-fluid" alt="Form 21" />
        or
        <iframe src="/form21.pdf" width="100%" height="400px" /> */}
         <iframe src={form} width="100%" height="600px" />

         {/* <img src={form} className="img-fluid" alt="Form 21" /> */}
  </div>
  )
}

export default Form21
