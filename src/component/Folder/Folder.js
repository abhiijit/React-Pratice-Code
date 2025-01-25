import React, { useState } from "react";
import { BsFillFolderFill } from "react-icons/bs";
import { BsFileCodeFill } from "react-icons/bs";

const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        style={{
          marginLeft: "20px",
          borderLeft: "1px solid #ccc",
          paddingLeft: "10px",
          fontSize: "35px"
        }}
      >
        <div onClick={toggleOpen} style={{ cursor: "pointer", padding: "4px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          {data.type === "folder" ? <BsFillFolderFill /> : <BsFileCodeFill />}
          {data.name}
        </div>
        {isOpen && data.children && data.children.length > 0 && (
          <div>
            {data.children?.map((item) => {
              return (
                <>
                  <Folder data={item} key={item.id} />
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Folder;
