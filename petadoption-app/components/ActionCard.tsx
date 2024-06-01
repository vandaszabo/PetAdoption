import { StaticImageData } from 'next/image';
import React from 'react'
import  Image from 'next/image';

interface ActionCardProps {
  text: string;
  image: StaticImageData;
}

const ActionCard: React.FC<ActionCardProps> = ({ text, image }) => {
  return (
    <div className='action-btn-card'>
        <Image src={image} alt={text} style={{margin: '2em'}}/>
      <span>{text}</span>
    </div>
  )
}

export default ActionCard