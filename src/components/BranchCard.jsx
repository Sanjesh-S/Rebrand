import React, { useState } from 'react'
import './BranchCard.css'

const BranchCard = ({ branch, delay }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="branch-card"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card-glow ${isHovered ? 'active' : ''}`}></div>
      <div className="card-content">
        <h3 className="branch-name">{branch.name}</h3>
        <p className="branch-location">{branch.location}</p>
        <a 
          href={branch.tel} 
          className="branch-phone"
        >
          {branch.phone}
        </a>
      </div>
    </div>
  )
}

export default BranchCard
