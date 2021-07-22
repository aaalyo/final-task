import { useState } from "react";
import Contacts from "../Components/AboutUsPage/ContactsTab";
import Team from "../Components/AboutUsPage/TeamTab";
import Breadcrumb from '../Components/Breadcrumb';

function AboutUs() {
    const breadcrumbPaths = [
        {
            link: '/',
            label: 'Home'
        },
        {
            label: 'About us'
        }
    ]

    const [activeTab, setActiveTab] = useState('Contact us');

    let tabContent = '';
    if (activeTab === 'Contact us') {
        tabContent = <Contacts />
    } else if (activeTab === 'Our team') {
        tabContent = <Team />
    }

    return (
        <div className=" mt-3 me-5 ms-5 container">
            <div className="row">
                <Breadcrumb paths={breadcrumbPaths} />
            </div>
            <div className="row ">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className={'nav-link text-secondary' + (activeTab === 'Contact us' ? ' active fw-bold' : '')} onClick={() => setActiveTab('Contact us')}>Contact us</button>
                    </li>
                    <li className="nav-item">
                        <button className={'nav-link text-secondary' + (activeTab === 'Our team' ? ' active fw-bold' : '')} onClick={() => setActiveTab('Our team')}>Our team</button>
                    </li>
                </ul>
            </div>
            <div className="row ">
                {tabContent}
            </div>
        </div>


    )
}

export default AboutUs