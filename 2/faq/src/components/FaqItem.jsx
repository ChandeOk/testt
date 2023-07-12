import React, { useState } from 'react';

function FaqItem({ question, answer }) {
  const [isShow, setIsShow] = useState(false);
  const style = {
    backgroundColor: '#646cff',
    padding: '1rem',
    cursor: 'pointer',
  };
  return (
    <div
      itemScope
      itemType='http://schema.org/Question'
      onClick={() => setIsShow(!isShow)}
      style={style}
    >
      <h1 itemProp='name'>{question}</h1>
      {isShow && (
        <div itemProp='acceptedAnswer' itemScope itemType='http://schema.org/Answer'>
          <div itemProp='text' style={{ backgroundColor: '#535bf2' }}>
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default FaqItem;
