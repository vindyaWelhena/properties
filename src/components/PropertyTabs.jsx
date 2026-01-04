import { useState } from "react";

function PropertyTabs({ description, floorplan, mapUrl }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="property-tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "floorplan" ? "active" : ""}
          onClick={() => setActiveTab("floorplan")}
        >
          Floor Plan
        </button>

        <button
          className={activeTab === "map" ? "active" : ""}
          onClick={() => setActiveTab("map")}
        >
          Map
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "description" && (
          <p>{description}</p>
        )}

        {activeTab === "floorplan" && (
          <img
            src={floorplan}
            alt="Floor plan"
            className="floorplan-image"
          />
        )}

        {activeTab === "map" && (
          <iframe
            title="Property location map"
            src={mapUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
    </div>
  );
}

export default PropertyTabs;
