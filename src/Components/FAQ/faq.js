import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const faqData = [
    { id: 1, question: 'Why are the rituals of Hajj important?', answer: 'The rituals of Hajj are important as they make pilgrims enter a state of spiritual purity referred to as “ihram” which aims to get rid of symbols of materialism. The pilgrim gives up worldly pleasures so as to focus on their inner self instead of their outward appearance. The rituals test pilgrims’ patience as well as tolerance.' },
    { id: 2, question: 'Why do Muslims go to Mina during Hajj?', answer: 'At Mina three hard stone pillars get struck by pilgrims. This is part of the ritual of stoning the devil.' },
    { id: 3, question: 'How many days Muslims stay in Mina during Hajj?', answer: 'Pilgrims spend two or three days in Mina.' },
    { id: 4, question: 'Where is Muzdalifah in Saudi Arabia?', answer: 'Muzdalifah consists of an open and level area close to Mecca in the Hejazi region of Saudi Arabia. It is southeast of Mina and on the route present between Mina and Arafat.' },
    { id: 5, question: 'Why going to Muzdalifah is important?', answer: 'The 9th of Dhul Hijjah is spent at Muzdalifah. This will be under the open sky. Here pilgrims will gather pebbles to throw at the pillars of Jamarat.' },
    { id: 6, question: 'Significance of Arafat?', answer: 'It commemorates the finality of revelation as well as the completion of the Hajj.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq-main section-padding'>
      <div className='container'>

        <div className='faq-heading text-center'>
          <h1>Frequently Asked Questions</h1>
        </div>


        <div className="faq-container">
          {faqData.map((item) => (
            <div className="faq-item" key={item.id} onClick={() => toggleAnswer(item.id)}>
              <div className="question d-flex justify-content-between">{item.question}
                <div className='plus d-flex '>
                  <h3 className='m-0'>+</h3>
                </div>
              </div>
              {activeIndex === item.id &&
                <div className='d-flex justify-content-between'>
                  <div className="answer">{item.answer}

                  </div>
                  <div>
                    <h3 className='m-0'>-</h3>
                  </div>
                </div>
              }
              <hr className='' />
            </div>
          ))}
        </div>
        <div className='disclaimer'>

          <p className='m-0'>
            <span className='disc-bold'>Disclaimer:</span> We do not guarantee success or profitability. We and our affiliates are not verified or certified professionals. We are not financial advisors. We never give any advice here, only educated and individualized opinions. Our Discord server is intended for educational and entertainment purposes only.
          </p>

        </div>
      </div>

    </div>
  );
};

export default FAQ;