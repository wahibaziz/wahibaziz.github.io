import React from "react";

function Aboutus() {
  return (

    <div>
        <div className="inner-heading">
      <div className="container">
        <h1 > About Us</h1>
      </div>
    </div>

    <div className="inner-wrap about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="aboutImg"><img src="assets/images/about.png" alt="" /></div>
          </div>
          <div className="col-md-8">
            <h1>Nullam malesuada sapien</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lacus luctus, tempor leo a, porta nunc.
              Nulla tincidunt vel ex ac consequat. Morbi sed consectetur dolor, id sollicitudin lacus. Aenean sit amet
              neque mattis, pretium tortor laoreet, finibus ligula. Donec quis augue non ante cursus aliquam. Donec
              sollicitudin mauris a vulputate euismod. Vestibulum molestie ligula ac volutpat pharetra. Praesent sit
              amet feugiat urna, eget tristique ipsum. Donec tincidunt lacus aliquet purus ultrices, ac tempor libero
              cursus. Morbi in congue est. Sed at dui elit. Aliquam dignissim eros sit amet placerat bibendum. Cras sit
              amet enim metus.
              <br />
              <br />
              Vivamus ullamcorper aliquam tellus, in tristique nisl rutrum ut. Integer et enim purus. Phasellus et
              sagittis elit, ut porta velit. Fusce faucibus efficitur libero a imperdiet. Ut eget tristique tortor, nec
              aliquam leo. Aenean et massa ut magna pretium dapibus. Proin a cursus justo.
            </p>
          </div>
        </div>
        <div className="business-wrap">
          <ul className="row business-service">
            <li className="col-md-4 col-sm-4">
              <div className="business-image"><img src="images/laptop.png" alt="" /></div>
              <h3>CREATE FREE LISTINGS</h3>
              <p>
                Eiusmod tempor incidiunt labore velit dolore magna aliqu sed eniminim veniam quis nostrud exercition
                eullamco laborisaa
              </p>
            </li>
            <li className="col-md-4 col-sm-4">
              <div className="business-image"><img src="images/globe-ad.png" alt="" /></div>
              <h3>PUBLISH YOUR AD</h3>
              <p>
                Eiusmod tempor incidiunt labore velit dolore magna aliqu sed eniminim veniam quis nostrud exercition
                eullamco laborisaa
              </p>
            </li>
            <li className="col-md-4 col-sm-4">
              <div className="business-image"><img src="images/advertise.png" alt="" /></div>
              <h3>ADVERTISE Classify</h3>
              <p>
                Eiusmod tempor incidiunt labore velit dolore magna aliqu sed eniminim veniam quis nostrud exercition
                eullamco laborisaa
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
    
    /*about end*/
  );
}

export default Aboutus;
