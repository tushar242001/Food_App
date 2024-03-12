import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src="https://www.spiceupthecurry.com/wp-content/uploads/2020/09/paneer-tikka-recipe-2.jpg"
            style={{ width: "18rem",height:"15rem" ,}}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title m-1">Card title</h5>
            <p className="card-text m-1">This is some important</p>
            <div className="container m-1 w-100"></div>
            <select className="m-1 h-100  bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-1 h-100  bg-success rounded">
              <option value="half">Half</option>
              <option value="full">full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
