import React from 'react'

const Card = ({nft}) => {
    const {name,serialNumber,price=0.88,imagesrc} = nft;
    
  return (
    <div className='flex items-start'>
          <div className="flex flex-col rounded-xl p-4 "
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src={imagesrc || "https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"}
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{name} </h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#{serialNumber}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card