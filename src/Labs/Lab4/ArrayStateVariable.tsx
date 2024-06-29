import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-success" onClick={addElement}>
        Add Element
      </button>
      <div className="table-responsive mt-3" style={{ maxWidth: "250px" }}> 
      <table className="table table-bordered rounded">
        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              <td >{item}</td>
              <td style={{ textAlign: "right" }}>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteElement(index)}
                  id="wd-delete-element-click" 
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <hr />
    </div>
  );
}
