import React from 'react';
import './Tags.scss';

function Tags({ tags }) {
  return (
    <div className='tags'>
        {tags.map((tags, index) => (
            <div key={index} className='Tag'>
                {tags}
            </div>
        ))}
    </div>
  )
}

export default Tags