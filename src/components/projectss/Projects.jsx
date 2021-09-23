import React from 'react';
import './project.css'

const data = [
    {
        title: "Atmosphere Apartments",
        desc: 'Commercial Properties',
        job: 'Painting and decoration',
        review: 'They have done an excellent job with us, would highly recommend their services',
        team: 'Manish Khaling, Senior Quantity surveyor at Montreaux  Build',
        img: '/assets/atmosphere.png'
    },
    {
        title: "Brook Point Euro House",
        desc: 'Commercial Properties',
        job: 'Painting and decoration',
        review: 'It was a pleasure working with in-line building services . They completed the project in time with good quality  work. Will always recommend them',
        team: 'Alex Tocoiu, Senior Site Manager, DRG Group',
        img: '/assets/wheatstone.png'
    },
    {
        title: "Private House",
        desc: 'Private Property',
        job: 'Painting and decoration',
        review: 'n-lines team of professional workmen arrived on-time, left the place tidy and their finish work was exceptional. The project was on time and on the agreed budget!’',
        team: 'Kesar Pandey, Private Home Owner,London ',
        img: '/assets/london.png'
    },
]

function Projects(props) {
    return (
        <div id="projects" className="projects">
            <h1>Recent Projects</h1>
            <h2>We have worked with both commercial and private home owners</h2>
            <div>
                {data.map(item => {
                    return (
                        <div className="container">
                            <div className="left">
                                <img src={item.img} />
                            </div>
                            <div className="right">
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                                <p className="job">{item.job}</p>
                                <p className="review">{`"${item.review}"`}</p>
                                <p className="team">{item.team}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;