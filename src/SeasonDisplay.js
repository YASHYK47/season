import React from "react";
import "./SeasonDisplay.css";

const seasonConfig={
    summer:{
        text:"Hashhh!Lets hit the beach!!",
        iconName:"sun"
    },
    winter:{
        text:"Uhhhh!Its very chilly out there!!!",
        iconName:"snowflake"
    }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text,iconName}=seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`loading icon-top-left massive ${iconName} icon`}/>
      <i className={`loading icon-top-middle massive ${iconName} icon`}/>
      <i className={`loading icon-top-right massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`loading icon-bottom-left massive ${iconName} icon`}/>
      <i className={`loading icon-bottom-middle massive ${iconName} icon`}/>
      <i className={`loading icon-bottom-right massive ${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
