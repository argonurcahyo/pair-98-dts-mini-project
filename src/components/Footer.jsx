import React from 'react'
import Container from '@mui/material/Container'

const Footer = () => {
    const links = [
        'Audio and Subtitles',
        'Media Center',
        'Security',
        'Contact us',
        'Audio Description',
        'Investor Relations',
        'Legal Provisions',
        '.',
        'Help center',
        'Jobs',
        'Cookie Preferences',
        '.',
        'Gift Cards',
        'Terms of Use',
        'Corporate Information'
    ]

    const copyright = `© ${new Date().getFullYear()} Movies. All Rights Reserved`

    return (
        <div className='footer'>
            <ul className='footer-links'>
                {links.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
            <div className='copyright'>{copyright}</div>
        </div>
    )
}

export default Footer