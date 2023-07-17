import React, { useState } from 'react'

const Card = ({id,name,info,image,price,removeTour}) => {
    const [readMore,setReadMore] = useState(false);
    const description =readMore?info: `${info.substring(0,200)}....`;

  return (
    <div className='card'>
        <img src={image} alt={name} className='image'/>
        <div className="tour-details">
            <h4 className='tour-price'>₹ {price}</h4>
            <h4 className='tour-name'>{name}</h4>
            <div className="description">
                {description}
                <span className='read-more' onClick={()=>setReadMore(!readMore)}>
                    {readMore?'Show Less':'Read More'}
                </span>
            </div>
        </div>
        <div>
            <button className="btn-red" onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    </div>
  )
}

export default Card