import React, { useLayoutEffect, useState } from "react";
import { Image } from "antd";
import './GalleryPages.css'
import {WorkTab} from '../../Components/Inc/WorkTab.js'
import { useNavigate } from "react-router-dom";

function GallerySection() {
  const [items, setItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setItems(WorkTab);
  }, []);

  const filterItems = (category) => {
    setActiveFilter(category); 

    if (category === "All") {
      setItems(WorkTab);
    } else {
      const updatedItems = WorkTab.filter((item) => item.category === category); // Filter based on category
      setItems(updatedItems);
    }
  };

  const interiorWorkContent = [
    {
      descp1:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis porta nulla faucibus condimentum maecenas vulputate fermentum aptent. Class class metus suscipit montes vel pharetra.",
    },


  ];


  const handleImageClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };
  return (
    <>

      <section>
        <div className="gall-banner">
          <div className="contacttt-p">
            <h1 style={{ color: 'white' }} >Gallery</h1>
          </div>
        </div>
      </section>

      <section id="project-version-one">
        <div className="container">
          <div className="row">

          </div>
          <div className="row">
            <div className="col-lg-12">
              <div style={{marginBottom:0}} className="section-heading">
                {/* <h6>| Our Gallery</h6> */}
                <h2>Explore Stunning Moments, Frame by Frame</h2>
              </div>
              <div className="interior-work-container">
                {interiorWorkContent.map((item, index) => (
                  <p key={index} className="interior-work-paragraph">
                    {item.descp1}
                  </p>
                ))}
              </div>
              <ul style={{ marginBottom: '5%' }} className="gallery-filter">
                <li
                  data-filter="all"
                  onClick={() => filterItems("All")}
                  className={`filter ${activeFilter === "All" ? "active" : ""}`}
                >
                  <span>All</span>
                </li>

                <li
                  data-filter=".bike"
                  onClick={() => filterItems("bike")}
                  className={`filter ${activeFilter === "bike" ? "active" : ""}`}
                >
                  <span>Bike</span>
                </li>
                <li
                  data-filter=".car"
                  onClick={() => filterItems("car")}
                  className={`filter ${activeFilter === "car" ? "active" : ""}`}
                >
                  <span>Car</span>
                </li>
                <li
                  data-filter=".video"
                  onClick={() => filterItems("video")}
                  className={`filter ${activeFilter === "video" ? "active" : ""}`}
                >
                  <span>Videos</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row nor4al-gallery" id="image-gallery-mix">
            {items.map((v, i) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-sm-6 col-xs-12 concert party mix"
                    style={{ display: "inline-block", height: 380, }}
                  >
                    <div
                      style={{ width: "100%", height: "100%" }}
                      className="img-wrap"
                    >
                      <Image
                        width={"100%"}
                        height={"100%"}
                        // style={{ width: "100%", height: "100%" }}
                        src={v.imageUr1}
                        onClick={() => handleImageClick(v.link) }
                        alt=""
                      />

                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}

export default GallerySection;

