import recordCenter from "../../assets/images/homepage/records/recordCenter.png"
import recordGlare from "../../assets/images/homepage/records/glare.png"

import recordGold from "../../assets/images/homepage/records/recordGold.png"
import recordGreen from "../../assets/images/homepage/records/recordGreen.png"
import recordHotPink from "../../assets/images/homepage/records/recordHotPink.png"
import recordIceBlue from "../../assets/images/homepage/records/recordIceBlue.png"
import recordPurple from "../../assets/images/homepage/records/recordPurple.png"
import recordRed from "../../assets/images/homepage/records/recordRed.png"
import recordSteel from "../../assets/images/homepage/records/recordSteel.png"
import { useState } from "react"

export const RecordColor = {
  Gold: "gold",
  Green: "green",
  HotPink: "hot-pink",
  IceBlue: "ice-blue",
  Purple: "purple",
  Red: "red",
  Steel: "steel",
};

export const RecordTray = ({mousePosition}) => {
  
  const [activeRecord, setActiveRecord] = useState(0);

  return (
    <div className="record-tray">
      <Record color={RecordColor.Gold}    active={activeRecord === 0} mousePosition={mousePosition} />
      <Record color={RecordColor.Green}   active={activeRecord === 1} mousePosition={mousePosition} />
      <Record color={RecordColor.HotPink} active={activeRecord === 2} mousePosition={mousePosition} />
      <Record color={RecordColor.IceBlue} active={activeRecord === 3} mousePosition={mousePosition} />
      <Record color={RecordColor.Purple}  active={activeRecord === 4} mousePosition={mousePosition} />
      <Record color={RecordColor.Red}     active={activeRecord === 5} mousePosition={mousePosition} />
      <Record color={RecordColor.Steel}   active={activeRecord === 6} mousePosition={mousePosition} />
    </div>
  )

}

export const Record = ({color, active, mousePosition}) => {

  function getSrc() {
    switch(color) {
      case RecordColor.Gold:
        return recordGold;
      case RecordColor.Green:
        return recordGreen;
      case RecordColor.HotPink:
        return recordHotPink;
      case RecordColor.IceBlue:
        return recordIceBlue;
      case RecordColor.Purple:
        return recordPurple;
      case RecordColor.Red:
        return recordRed;
      case RecordColor.Steel:
        return recordSteel;
      default:
        return recordGold;
    }
  }

  const glareRotation = Math.atan2(mousePosition.y, mousePosition.x) * 180 / Math.PI + 90;

  return (
    <div className={"record " + (active ? "active" : "")}>
      <img src={getSrc()} alt={"record-" + color} className="spin record-image" />
      <img src={recordCenter} alt={"record-center-" + color} className="spin record-center" />
      <img src={recordGlare} alt={"record-glare-" + color} className="record-glare" style={{ transform: `rotate(${glareRotation}deg)` }} />
    </div>
  )
}