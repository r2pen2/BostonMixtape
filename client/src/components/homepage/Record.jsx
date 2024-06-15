import recordCenter from "../../assets/images/homepage/records/recordCenter.png"
import recordGlare from "../../assets/images/homepage/records/glare.png"

import recordGold from "../../assets/images/homepage/records/recordGold.png"
import recordGreen from "../../assets/images/homepage/records/recordGreen.png"
import recordHotPink from "../../assets/images/homepage/records/recordHotPink.png"
import recordIceBlue from "../../assets/images/homepage/records/recordIceBlue.png"
import recordPurple from "../../assets/images/homepage/records/recordPurple.png"
import recordRed from "../../assets/images/homepage/records/recordRed.png"

export const RecordColor = {
  Gold: "gold",
  Green: "green",
  HotPink: "hot-pink",
  IceBlue: "ice-blue",
  Purple: "purple",
  Red: "red"
};

export const Record = ({color, active, glareRotation}) => {

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
      default:
        return recordGold;
    }
  }

  return (
    <div className={"record " + (active ? "active" : "")}>
      <img src={getSrc()} alt={"record-" + color} className="spin record-image" />
      <img src={recordCenter} alt={"record-center-" + color} className="spin record-center" />
      <img src={recordGlare} alt={"record-glare-" + color} className="record-glare" style={{ transform: `rotate(${glareRotation}deg)` }} />
    </div>
  )
}