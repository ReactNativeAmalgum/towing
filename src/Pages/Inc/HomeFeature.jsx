import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiTowTruck } from 'react-icons/gi'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import './HomeFeature.css'
export default function HomeFeature() {
    return (
        <section
            id="features"
            className="ds parallax section_counters section_padding_top_130 section_padding_bottom_75 columns_margin_bottom_60"
            style={{ backgroundPosition: "50% -4px" }}
        >
            <div className="custom-homefeatuer-cont container">
                <div className='row custom-homefeature-row' >
                    <div className="col-md-3 col-sm-6">
                        <div className="teaser teaser-column text-center">
                            <div className="teaser_icon highlight size_big">
                                <FaStar />
                            </div>
                            <h3 className="counter grey counted" data-from={0} data-to={30} data-speed={2100}>
                                30
                            </h3>
                            <p className="lightfont">Years of Experience</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="teaser teaser-column text-center">
                            <div className="teaser_icon highlight size_big">
                                <HiBuildingOffice2 />
                            </div>
                            <h3 className="counter grey counted" data-from={0} data-to={74} data-speed={2100}>
                                3
                            </h3>
                            <p className="lightfont">Offices Worldwide</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="teaser teaser-column text-center">
                            <div className="teaser_icon highlight size_big">
                                <GiTowTruck />
                            </div>
                            <h3 className="counter grey counted" data-from={0} data-to={3720} data-speed={2100}>
                                45000+
                            </h3>
                            <p className="lightfont">Vehicles Towed</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="teaser teaser-column text-center">
                            <div className="teaser_icon highlight size_big">
                                <FaPeopleGroup />
                            </div>
                            <h3 className="counter grey counted" data-from={0} data-to={874} data-speed={2100}>
                                50
                            </h3>
                            <p className="lightfont">Workers in Team</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
