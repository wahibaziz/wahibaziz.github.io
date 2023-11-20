import React from 'react';

function Jobs() {
  return (
    <div className="inner-wrap listing">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <div className="leftSidebar">
              <h3>Search Jobs</h3>
              <div className="sidebarpad">
                <form>
                  <h4 className="rangem">By Keyword</h4>
                  <div className="input-wrap rangem">
                    <input type="text" name="keyword" placeholder="Search Keyword" className="form-control" />
                  </div>
                  <h4 className="rangem">Categories</h4>
                  <div className="input-wrap rangem">
                    <select name="category" className="form-control">
                      <option>Category</option>
                      <option value="mobile">Software Engineering</option>
                      <option value="laptop">Accounting</option>
                      <option value="car">Finance</option>
                      <option value="bike">Data Science</option>
                      <option value="camra">Medicine</option>
                      <option value="pet">Governance</option>
                    </select>
                  </div>
                  <h4 className="rangem">City</h4>
                  <div className="input-wrap rangem">
                    <select name="city" className="form-control">
                      <option>Select Cities</option>
                      <option value="01">New York</option>
                      <option value="02">Chicago</option>
                      <option value="03">San Diego</option>
                      <option value="04">Los Angeles</option>
                      <option value="05">Houston</option>
                    </select>
                  </div>
                  <h4 className="rangem">Salary Range</h4>
                  <div className="input-wrap rangem">
                    <ul className="check">
                      <li>
                        <input type="checkbox" value="Almost Like New" id="price1" />
                        <label htmlFor="price1">$100 to $199</label>
                      </li>
                      {/* More list items */}
                    </ul>
                  </div>
                  <h4 className="rangem">Ads Type</h4>
                  <div className="input-wrap rangem">
                    <ul className="check">
                      <li>
                        <input type="checkbox" value="Almost Like New" id="price6" />
                        <label htmlFor="price6">Featured Jobs</label>
                      </li>
                      {/* More list items */}
                    </ul>
                  </div>
                  <h4 className="rangem">Area</h4>
                  <div className="input-wrap rangem">
                    <input type="text" name="area" placeholder="Minimum Area" className="form-control" />
                    <input type="text" name="area" placeholder="Maximum Area" className="form-control" />
                  </div>
                  <div className="sub-btn">
                    <input type="submit" className="sbutn" value="Search Filter" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-sm-8">
            <div className="sortbybar">
              <div className="sortbar">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-8">
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon3">Sort By</span>
                      <select className="form-control">
                        <option>Most recent</option>
                        <option>Salary: Rs Low to High</option>
                        <option>Salary: Rs High to Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-4">
                    <div className="listingBar">
                      <div className="listIcon"><a href="listing.html"><i className="fa fa-list" aria-hidden="true"></i></a></div>
                      <div className="boxesIcon"><a href="grid.html"><i className="fa fa-th-large" aria-hidden="true"></i></a></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="listService">
              <li>
                <div className="listWrpService">
                  <div className="row">
                    <div className="col-md-3 col-sm-3">
                      <div className="listImg"><img src="images/bike.jpg" alt="" /></div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                      <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                          <h3><a href="#">Data consultant</a></h3>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                          <div className="dollar">$799.00</div>
                        </div>
                      </div>
                      <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget velit tempor nulla egestas hendrerit sit amet vitae ex.</p>
                      <div className="view-btn"><a href="#">View Details</a></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="listWrpService">
                  <div className="row">
                    <div className="col-md-3 col-sm-3">
                      <div className="listImg"><img src="images/camera.jpg" alt="" /></div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                      <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                          <h3><a href="#">.Net Developer</a></h3>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                          <div className="dollar">$799.00</div>
                        </div>
                      </div>
                      <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget velit tempor nulla egestas hendrerit sit amet vitae ex.</p>
                      <div className="view-btn"><a href="#">View Details</a></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="listWrpService">
                  <div className="row">
                    <div className="col-md-3 col-sm-3">
                      <div className="listImg"><img src="images/car.jpg" alt="" /></div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                      <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                          <h3><a href="#">Web Developer</a></h3>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                          <div className="dollar">$799.00</div>
                        </div>
                      </div>
                      <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget velit tempor nulla egestas hendrerit sit amet vitae ex.</p>
                      <div className="view-btn"><a href="#">View Details</a></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
