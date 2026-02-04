import React from 'react'
import BranchCard from './BranchCard'
import './Branches.css'

const branchesData = [
  {
    id: 1,
    name: 'Main Branch',
    location: 'New Delhi',
    phone: '+91 12345 67890',
    tel: 'tel:+911234567890'
  },
  {
    id: 2,
    name: 'North Branch',
    location: 'Gurgaon',
    phone: '+91 12345 67891',
    tel: 'tel:+911234567891'
  },
  {
    id: 3,
    name: 'South Branch',
    location: 'Bangalore',
    phone: '+91 12345 67892',
    tel: 'tel:+911234567892'
  },
  {
    id: 4,
    name: 'West Branch',
    location: 'Mumbai',
    phone: '+91 12345 67893',
    tel: 'tel:+911234567893'
  }
]

const Branches = () => {
  return (
    <section className="branches">
      <div className="container">
        <h2 className="branches-title">
          <span className="gradient-text">Our Branches</span>
        </h2>
        <div className="branches-grid">
          {branchesData.map((branch, index) => (
            <BranchCard 
              key={branch.id} 
              branch={branch}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Branches
