import React from 'react'
import form from '../../../Assets/Iata Certificate 2025.pdf'

const IATAForm = () => {
  return (
      <div>
           <h5>IATA Certificate Preview</h5>
           {/* Example image or PDF:
               <img src="/form21.jpg" className="img-fluid" alt="Form 21" />
               or
               <iframe src="/form21.pdf" width="100%" height="400px" /> */}
                <iframe src={form} width="100%" height="600px" />
       
                {/* <img src={form} className="img-fluid" alt="Form 21" /> */}
         </div>
  )
}

export default IATAForm
