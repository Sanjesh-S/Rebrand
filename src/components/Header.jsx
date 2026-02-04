import React from 'react'
import './Header.css'

const Header = () => {
  // Use Vite's BASE_URL for proper path resolution in GitHub Pages
  // Construct the logo path ensuring proper base path handling
  const getAssetPath = (path) => {
    const baseUrl = import.meta.env.BASE_URL || '/'
    // Remove leading slash from path if present, then combine with baseUrl
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${baseUrl}${cleanPath}`.replace(/\/+/g, '/')
  }
  const logoPath = getAssetPath('logo.png')
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <img 
            src={logoPath}
            alt="WorthyTen Logo" 
            className="logo"
            onError={(e) => {
              console.error('Logo failed:', e.target.src, 'BASE_URL:', import.meta.env.BASE_URL)
              // Try original filename as fallback
              const fallback = getAssetPath('final file all wt-17 (1).png')
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
