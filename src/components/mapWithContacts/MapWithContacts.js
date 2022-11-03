import React from "react";
import { ReactComponent as Location } from "../../svg/Small icon Location.svg";
import MapImage from '../../imgs/Map.png'
import GoogleMapLoader from "./googleMap/GoogleMapLoader";

import "./MapWithContacts.css";

const MapWithContacts = ({ job }) => {
  const { address, name, phone, email, location } = job;

  return (
    <div className="mapWithContacts">
      <div className="mapWithContacts_contacts">
        <div className="mapWithContacts__contacts__background_circle" />
        <div className="mapWithContacts__contacts_content">
          <div>
            <span className="mapWithContacts__contacts__content_title">
              Department name.
            </span>
            <br />
            <span className="mapWithContacts__contacts__content_title">
              {name}.
            </span>
          </div>
          <div className="mapWithContacts__contacts__content_location">
            <Location className="mapWithContacts__contacts__content__location_icon" />
            <span className="mapWithContacts__contacts__content_text">
              {address}
            </span>
          </div>
          <div>
            <span className="mapWithContacts__contacts__content_text">
              {phone}
            </span>
            <br />
            <span className="mapWithContacts__contacts__content_text">
              {email}
            </span>
          </div>
        </div>
      </div>
      <div className="mapWithContacts_map">
        {/* <GoogleMapLoader location ={location}/> */}
        <Location className="mapWithContacts__map_locationIcon" />
        <img className="mapWithContacts_map_image" src={MapImage} alt="Map" />
      </div>
    </div>
  );
};

export default MapWithContacts;
