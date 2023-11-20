import React from "react";

function Index() {
  return (
    <div >
      {/* Map */}
      <div className="mapWrp">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1_cNXOq_2Z-X9kT-5utVo6A11MN8"
          width="100"
          height="480"
        ></iframe>
      </div>
      {/* Map End */}
      
      {/* Slider Start */}
      <div className="slider-wrap formWrp">
        <div className="container">
          <div className="sliderTxt">
            <form>
              <div className="row form-wrap">
                <div className="col-md-3">
                  <div className="input-group">
                    <input
                      type="text"
                      name="keyword"
                      placeholder="Enter Keyword..."
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-group">
                    <select name="location" className="dropdown">
                      <option>Location... </option>
                      <option value="new-york">New York</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-group">
                    <select name="category" className="dropdown">
                      <option>Category... </option>
                      <option value="mobile">Mobile</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-btn">
                    <input
                      type="submit"
                      className="sbutn"
                      value="Search"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Slider End */}
    </div>
  );
}

export default Index;
