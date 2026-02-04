import React from 'react'
import './Header.css'

const Header = () => {
  // Simple path - logo is in public folder, accessible from root
  const logoPath = '/logo.png'
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <img 
            src={logoPath}
            alt="WorthyTen Logo" 
            className="logo"
            onError={(e) => {
              console.error('Logo failed:', e.target.src)
              // Try original filename as fallback
              const fallback = '/final file all wt-17 (1).png'
              if (!e.target.src.includes('final file')) {
                console.log('Trying fallback:', fallback)
                e.target.src = fallback
              }
            }}
            onLoad={() => {
              console.log('✓ Logo loaded successfully')
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
