import React, { useState } from 'react';
import './AboutPage.css';
import mpfp from './assets/mpfp.jpg';
import hpfp from './assets/hpfp.png';
import gpfp from './assets/test4.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const members = [
        {
            name: 'Gocsál Mátyás',
            roles: ['Chief Executive Officer', 'Chief Human Resources Officer', 'Consulting Team Lead'],
            image: mpfp
        },
        {
            name: 'Karsa Hunor Ákos',
            roles: ['Chief Executive Officer', 'Chief Technology Officer', 'Development Team Lead'],
            description: "Leírás",
            image: hpfp

        },
        {
            name: 'Kovács Gáspár',
            roles: ['Chief Executive Officer', 'Chief Compliance Officer', 'Chief Financial Officer'],
            image: gpfp
        }
    ];

    return (
        <div className="about-page">
            <h1>Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulat</h1>
            <div className='aboutt' style={{ textAlign: "justify" }}>

                <p>
                    &nbsp;&nbsp;&nbsp;A Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulat kiemelkedő választás ügyfelei számára az informatikai fejlesztés és tanácsadás terén.
                    Szakértelmünk és tapasztalatunk révén lehetőséget biztosítunk ügyfeleinknek az innovációra, hatékonyabb üzleti folyamatok kialakítására és versenyelőny megszerzésére.
                </p>
                <h2>Miért minket válasszanak?</h2>
                <p>
                    &nbsp;&nbsp;&nbsp;Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulatot válassza, ha minőségi és hatékony informatikai megoldásokra van szüksége. Az alábbiakban felsoroljuk, miért érdemes minket választani:
                </p>
                <ul className='abouttt'>
                    <li>Tapasztalt szakemberek: Csapatunk magasan képzett és tapasztalt szakemberekből áll, akik kiemelkedő minőségű szolgáltatásokat nyújtanak.</li>
                    <li>Ügyfélcentrikusság: Ügyfeleink igényeire szabott megoldásokat kínálunk, figyelembe véve az egyedi követelményeket és kihívásokat.</li>
                    <li>Átfogó szolgáltatások: Széles körű szolgáltatásaink révén lehetőséget biztosítunk webfejlesztésre és tervezésre, mobilalkalmazás fejlesztésre, felhőalapú megoldásokra és tanácsadásra.</li>
                    <li>Innováció és kreativitás: Folyamatosan követjük az iparági trendeket és újításokat, hogy ügyfeleink számára mindig a legfrissebb és leginnovatívabb megoldásokat nyújtsuk.</li>
                    <li>Kiváló minőség és megbízhatóság: Szolgáltatásaink magas minőséget és megbízhatóságot garantálnak, hogy ügyfeleink teljes elégedettségét biztosítsuk.</li>
                </ul>

                <h2>Specializációink</h2>
                <p>
                    &nbsp;&nbsp;&nbsp;Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulat számos területen specializálódott, ideértve:
                </p>
                <ul className='abouttt'>
                    <li>Webfejlesztés és tervezés: Kiváló minőségű webes alkalmazásokat tervezünk és fejlesztünk, figyelembe véve az ügyfelek igényeit és a legújabb trendeket.</li>
                    <li>Mobilalkalmazás fejlesztés: Tapasztalt csapatunk mobilalkalmazásokat fejleszt minden platformra, biztosítva az optimális felhasználói élményt és funkcionalitást.</li>
                    <li>Felhőalapú megoldások: Szakértőink felhőalapú megoldásokat kínálnak, lehetővé téve az ügyfeleknek az adatok távoli elérését és kezelését, valamint a skálázhatóságot és rugalmasságot.</li>
                    <li>Tanácsadás: Tanácsadóink segítenek az ügyfeleknek az informatikai stratégiák kidolgozásában és optimalizálásában, hogy maximalizálják az üzleti eredményeket és versenyképességet.</li>
                </ul>
                <p>Ha az említett szolgáltatások és lehetőségek felkeltették érdeklődésedet vagy úgy gondolod hogy te jó része lennél a csapatunknak akkor, ne habozz! Csatlakozz hozzánk és légy részese a
                    <Link to="/SignUp" className='kapcse' style={{ fontSize: "1.2rem" }}>
                        &nbsp;Top T Corporation
                    </Link> csapatának! </p>
            </div>

            <div className="team">
                <div className="team-category">
                    {members.map((member, index) => (
                        <div className="team-member" key={index} onClick={() => {
                            setShowModal(true);
                            setSelectedMember(member);
                            console.log('Opening modal for', member.name);
                        }}>
                            <img src={member.image} alt={member.name} />
                            <div>
                                <h3>{member.name}</h3>
                                <ul>
                                    {member.roles.map((role, index) => (
                                        <li key={index}>{role}</li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (<div>
                <div className='bgsa'></div>
                <div className="modal6" style={{ display: 'block' }}>
                    <div className="modal-content6" style={{ display: 'flex', alignItems: 'center' }}>
                        <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
                        <img className='imagesing' src={selectedMember.image} alt={selectedMember.name} />
                        <div className="info">
                            <h2>{selectedMember.name}</h2>
                            <ul style={{ textAlign: "left" }}>
                                {selectedMember.roles.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                            <p className="description">{selectedMember.description}</p>
                        </div>
                    </div>
                </div>

            </div>

            )
            }
        </div >
    );
};

export default AboutPage;