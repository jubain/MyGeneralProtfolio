import React, { useState } from 'react';
import './works.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const data = [
    {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Refurbishment & Extension",
        desc:
            "A house extension can be a very attractive option for those lacking room inside their home, but with outside space going spare. ... However, extending your home is likely to be an expensive project, so it's important to get it right. We have the right professionals to guide and build this for you.",
        img:
            "https://www.busyboo.com/wp-content/uploads/modern-extension-london-ama.jpg",
    },
    {
        id: "2",
        icon: "./assets/globe.png",
        title: "New builds",
        desc:
            "If you have land with planning application, we can take on the design and build for your property.",
        img:
            "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5efb552e3855ae0007ddfa98%2FEngineer-technician-watching-team-of-workers-on-high-steel-platform-%2F960x0.jpg%3Ffit%3Dscale",
    },
    {
        id: "3",
        icon: "./assets/writing.png",
        title: "Office Conversions",
        desc:
            "Our team has a vast experience in conversions of existing offices into residential flats. Our team have completed wide range of office conversions to residential flats by being involved from initial design, costings and build.",
        img:
            "https://cdn.overbury.com/v2/pages/Opinion-Pieces/_articleImage/DXC-warehouse-to-office-conversion.jpg",
    },
    {
        id: "4",
        icon: "./assets/writing.png",
        title: "Quantity Surveying",
        desc:
            "We seeek to minimise the cost and risk of a construction project and enhance value for money, while still achieving the required legal standards and quality. This includes ensuring statutory building regulations are met.We will prepare estimates and costs of the work and when the project is in progress, we keep track of any variations to the contract that may affect costs and create reports to show profitability.Working either for the client or the contractor, in an office or on site, we will be involved in every stage of a project. Projects include commercial, industrial and residential constructions.",
        img:
            "https://previews.123rf.com/images/andreypopov/andreypopov1401/andreypopov140101578/25349796-close-up-of-man-s-hand-filling-customer-survey-form.jpg",
    },
    {
        id: "5",
        icon: "./assets/writing.png",
        title: "Project Management",
        desc:
            "We, as project managers oversee the planning and delivery of construction projects. We ensure that work is completed on time and within budget. We organise logistics, delegate work and keep track of spending.",
        img:
            "https://miro.medium.com/max/2000/1*2soGFjfuVstnwQnaoGyJxw.jpeg",
    },
]

function Works(props) {

    const [currentSlider, setcurrentSlider] = useState(0)

    const handleClick = (way) => {
        way === 'left' ? setcurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
            setcurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    }

    const matches = useMediaQuery('(max-width:768px)');

    return (
        <div id='works' className='works'>
            <h1>Services</h1>
            <div className='slider' style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                {data.map(item => {
                    return (
                        <div className='container'>
                            <div className='item' style={matches === true ? { backgroundImage: `url(${item.img})`, backgroundSize: 'cover' } : null}>
                                <div className='left'>
                                    <div className='leftContainer'>
                                        {/* <div className='imgContainer'>
                                            <img src={item.icon} alt="" />
                                            <PhoneAndroidIcon className='img' />
                                        </div> */}
                                        <h2>{item.title}</h2>
                                        <p>{item.desc} </p>
                                    </div>
                                </div>
                                <div className='right'>
                                    <img
                                        src={item.img}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <img className='arrow left' onClick={() => handleClick('left')} src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" />
            <img className='arrow right' onClick={() => handleClick('right')} src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" />
        </div >
    );
}

export default Works;