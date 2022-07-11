import React from 'react';
import { useState, useEffect } from 'react';
import "./navigation.css";


const Navigation = ({ className, withlogo, logo, data, userdetails, withprofile }) => {

    const [close, setClose] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(data)
    })

    const handleClicked = (inx) => {
        let newData = [...data];
        newData = newData.map((item, index) => {
            if (index === inx) {
                item.isOpen = !item.isOpen
            }
            return item;
        })
        setDatas(newData)
    }

    const handleClosed = () => {
        setClose(true);
    }

    const handleMouseLeave = () => {
        setClose(false);
        let newData = datas;
        newData = newData.map((item) => {
            return item.isOpen = false;
        })
        this.setDatas(newData);
    }

    return (

        <div className={`sidebar ${className} ${close ? "" : "close"}`} onMouseOver={() => handleClosed()} onMouseLeave={() => handleMouseLeave()}>
            {
                withlogo ?
                    <div className="logo-details">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox={logo.viewBox}><path d={logo.svgpath} /></svg>
                        <span className="logo-name">{logo.name}</span>
                    </div>
                    : ""
            }

            <div className="nav-links">
                {datas.map((item, inx) => {
                    return (
                        <>
                            {
                                item.submenu ?
                                    <div className={`column ${item.isOpen === true ? "showMenu" : " "}`} key={inx}>
                                        <div className="iocn-link" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox}> <path d={item.svgpath} /> </svg>
                                            <div className="link-name">{item.linkname}</div>
                                            {
                                                item.submenu != "" ?
                                                    <svg className='arrow' onClick={() => handleClicked(inx)} viewBox="0 0 24 24">  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                                                    : ""
                                            }
                                        </div>
                                        <div className={`sub-menu`}>
                                            {item.submenu.map((submenu, subInx) => {

                                                return (
                                                    <>
                                                        <div className="sub-item" key={subInx}>
                                                            {submenu.svgpath ?
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox={submenu.viewBox}>
                                                                    <path d={submenu.svgpath} />
                                                                </svg> : ""
                                                            }
                                                            <div className="subtitleName">  {submenu.subtitleName}</div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div> :

                                    <div className="inline" key={inx}>
                                        <div className="inline-iocn-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox}> <path d={item.svgpath} /> </svg>
                                            <div className="link-name">{item.linkname}</div>
                                        </div>
                                    </div>
                            }
                        </>
                    )
                })}
                {withprofile ? <div className="profile-details">
                    <div className="profile-content">
                        <img src={userdetails.profile} alt="profileImg" />
                    </div>
                    <div className="name-job">
                        <div className="profile-name">{userdetails.userName}</div>
                        <div className="job">{userdetails.job}</div>
                    </div>
                    <svg className='bx bx-log-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
                    </svg>
                </div>
                    : ""}

            </div>
        </div>

    )
}

export default Navigation;
