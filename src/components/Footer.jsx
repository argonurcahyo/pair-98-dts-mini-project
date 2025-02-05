import React from 'react'

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
            <button className='btn-footer'>Service Code</button>
            <div className='copyright'>{copyright}</div>
        </div>
    )
}

export default Footer