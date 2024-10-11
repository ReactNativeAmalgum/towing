import React, { useLayoutEffect, useState } from "react";
import { Image } from "antd";
import "./GalleryPages.css";
import { WorkTab } from "../../Components/Inc/WorkTab.js";
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
        "Welcome to our gallery, where you can explore a diverse collection of images and videos showcasing our wide range of towing services. Here, you’ll find high-quality photos of various vehicles we have transported, including cars, motorcycles, trucks, and luxury vehicles. Each image captures our commitment to safety and professionalism, illustrating how we handle every towing job with precision and cared.",
      descp2:
        " Our gallery highlights not only the vehicles we tow but also the advanced equipment we use to ensure efficient service. From flatbed trucks to specialized carriers for luxury cars, each photo reflects our dedication to maintaining the highest standards in the towing industry. You'll see our skilled team in action, demonstrating their expertise in various scenarios, whether it’s a routine tow or an emergency situation.",
      descp3:
        "In addition to images, we also feature videos that showcase the towing process. Watch as our professionals safely load and transport vehicles, providing you with a behind-the-scenes look at how we operate. These videos highlight our techniques and the safety measures we take to ensure the protection of your vehicle during transit.",
      descp4:
        "We believe that transparency and showcasing our work are essential to building trust with our customers. Our gallery serves as a testament to our experience and reliability in the towing industry, reinforcing our commitment to providing top-notch service. Feel free to browse through our collection, and if you have any questions or need assistance, don’t hesitate to reach out to us. We’re here to help with all your towing needs!",
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
            <h1 style={{ color: "white" }}>Gallery</h1>
          </div>
        </div>
      </section>

      <section id="project-version-one">
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-lg-12">
              <div style={{ marginBottom: 0 }} className="section-heading">
                {/* <h6>| Our Gallery</h6> */}
                <h2>Explore Stunning Moments, Frame by Frame</h2>
              </div>
              <div className="interior-work-container">
                {interiorWorkContent.map((item, index) => (
                  <p key={index} className="interior-work-paragraph">
                    {item.descp1}
                    {item.descp2}
                  </p>
                ))}
              </div>
              <div className="interior-work-container">
                {interiorWorkContent.map((item, index) => (
                  <p key={index} className="interior-work-paragraph">
                    {item.descp3}
                    {item.descp4}
                  </p>
                ))}
              </div>

              <ul style={{ marginBottom: "5%" }} className="gallery-filter">
                <li
                  data-filter="all"
                  onClick={() => filterItems("All")}
                  className={`filter ${activeFilter === "All" ? "active" : ""}`}
                >
                  <span>All</span>
                </li>

                <li
                  data-filter=".flatbed"
                  onClick={() => filterItems("flatbed")}
                  className={`filter ${
                    activeFilter === "flatbed" ? "active" : ""
                  }`}
                >
                  <span>Flatbed</span>
                </li>
                <li
                  data-filter=".car"
                  onClick={() => filterItems("car")}
                  className={`filter ${
                    activeFilter === "car" ? "active" : ""
                  }`}
                >
                  <span>Car Towing</span>
                </li>
                <li
                  data-filter=".bike"
                  onClick={() => filterItems("bike")}
                  className={`filter ${
                    activeFilter === "bike" ? "active" : ""
                  }`}
                >
                  <span>Motorcycle Towing</span>
                </li>
                <li
                  data-filter=".heavy"
                  onClick={() => filterItems("heavy")}
                  className={`filter ${
                    activeFilter === "heavy" ? "active" : ""
                  }`}
                >
                  <span>Heavy vehicle</span>
                </li>
                <li
                  data-filter=".under"
                  onClick={() => filterItems("under")}
                  className={`filter ${
                    activeFilter === "under" ? "active" : ""
                  }`}
                >
                  <span>Hydraulic Towing </span>
                </li>
                <li
                  data-filter=".closed"
                  onClick={() => filterItems("closed")}
                  className={`filter ${activeFilter === "closed" ? "active" : ""}`}
                >
                  <span>Closed Car</span>
                </li>
                <li
                  data-filter=".video"
                  onClick={() => filterItems("video")}
                  className={`filter ${
                    activeFilter === "video" ? "active" : ""
                  }`}
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
                    style={{ display: "inline-block", height: 380 }}
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
