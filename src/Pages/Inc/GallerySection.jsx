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
        `Welcome to the Gallery page of Modern Towing, where we showcase our expertise in All Type Of Towing Services. At Modern Towing, we take pride in offering a wide range of towing solutions tailored to meet the diverse needs of our clients. Whether it’s a flatbed towing service, hydraulic towing for heavy vehicles, or specialized luxury car towing, our gallery highlights the various situations in which we have successfully provided assistance.`,
      descp2:
        "We understand that each vehicle requires specific handling techniques, and that's why our team is trained to deliver All Type Of Towing Services with precision and care. From two-wheelers to large trucks, we ensure that your vehicle is safely transported to its destination, no matter the size or situation. You can explore our gallery to see the dedication and quality of service we bring to each job. Every image is a testament to our commitment to safety and efficiency, ensuring customer satisfaction every step of the way.",
      descp3:
        "Modern Towing has built a reputation for reliability and professionalism, offering All Type Of Towing Services throughout Andheri and beyond. Our equipment is top-notch, and we use state-of-the-art technology to ensure the safe handling of vehicles in all conditions, whether it's a roadside breakdown or scheduled transportation. The gallery page is just a glimpse of our day-to-day operations and the various types of vehicles we handle, from luxury cars to heavy-duty trucks. You can count on us to be there when you need assistance, and our work speaks for itself.",
      descp4:
        "We believe that transparency and showcasing our work are essential to building trust with our customers. Our gallery serves as a testament to our experience and reliability in the towing industry, reinforcing our commitment to providing top-notch service. Feel free to browse through our collection, and if you have any questions or need assistance, don’t hesitate to reach out to us. We’re here to help with all your towing needs!",
      descp5:"Feel free to browse through the images and videos in our gallery to get a better idea of the services we offer and how we handle each vehicle with care and professionalism. At Modern Towing, your satisfaction is our top priority, and we are committed to delivering the best possible experience with every tow."
    },
  ];

  const handleImageClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };
  return (
    <>
    <section className="special-padding">
      <section className="project-version-one">
        <div className="container">
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
              <div className="interior-work-container">
                {interiorWorkContent.map((item, index) => (
                  <p key={index} className="interior-work-paragraph">
                    {item.descp5}
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
                  data-filter=".bike"
                  onClick={() => filterItems("bike")}
                  className={`filter ${
                    activeFilter === "bike" ? "active" : ""
                  }`}
                >
                  <span>Motorcycle towing</span>
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
                  <span>Underlift hydraulic car towing </span>
                </li>
                <li
                  data-filter=".closed"
                  onClick={() => filterItems("closed")}
                  className={`filter ${activeFilter === "closed" ? "active" : ""}`}
                >
                  <span>Closed car</span>
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
      </section>
    </>
  );
}

export default GallerySection;
