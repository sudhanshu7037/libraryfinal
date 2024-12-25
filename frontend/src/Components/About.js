import React from 'react'
import './About.css'
import { List } from '@material-ui/core'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="http://imsec.ac.in/assets/images/lifeimsec/library/5.jpg" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    The IMS Engineering College Library is a vibrant center for knowledge and learning, committed to fostering intellectual growth and academic excellence. Our library offers an extensive collection of books, research papers, e-resources, and multimedia tools to support the diverse needs of our students, faculty, and researchers.<br/>
                        <br/>
                        Key Features:
                        

                        <ul>
    <li><strong>Extensive Collection:</strong> Access thousands of academic textbooks, reference materials, and journals across various engineering and management disciplines.</li>
    <li><strong>Digital Resources:</strong> Utilize e-books, online journals, and databases to enhance your research and learning experience.</li>
    <li><strong>Comfortable Study Spaces:</strong> Equipped with well-lit reading rooms, computer labs, and group study areas.</li>
    <li><strong>User-Friendly Management System:</strong> Our library management system ensures seamless borrowing, returning, and catalog search experiences.</li>
    <li><strong>Research Support:</strong> Assistance from experienced librarians for locating resources, citation management, and using digital tools effectively.</li>
</ul>

                        <br/>
                        The library is not just a repository of books; it is a space designed to inspire innovation, collaboration, and exploration. We are dedicated to empowering our users with the knowledge and resources they need to succeed academically and professionally.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
