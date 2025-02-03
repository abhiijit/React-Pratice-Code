import React from "react";

const Interest = ({ data, setData }) => {
    const {interest} = data
  return (
    <>
    <div>
      <input type="checkbox" name="coding" value={interest.includes("coding")} />
      <label for="coding"> Coding</label>
      </div>
      <br />
      <div>
      <input type="checkbox" name="cricket" value={interest.includes("cricket")} />
      <label for="cricket"> Cricket</label>
      </div>
      <br />
    </>
  );
};

export default Interest;
