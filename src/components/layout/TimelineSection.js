/// @file:      HomeContent.js
/// @author:    John Ed Quinn
// @desc:       Content for Home Page

/* IMPORTS */
import React, { Fragment } from 'react';

/* NAVBAR */
const TimelineSection = () => {
	return (
		<Fragment>
			<div className="container">
			<div className="row py-4"></div>
				<div className="text-center desk-empty">
					<h1 className="card-title text-dark">Timeline</h1>
				</div>
				<div className="row py-3 mobile-center">
					<div className="col col-2 text-center mobile-empty">
						<h1 className="card-title text-dark">Timeline</h1>
					</div>

          <div className="col col-10">
				  <div className="row mobile-center">
					  <div className="col col-2 text-center mobile-empty">
						  <h5 className="card-title text-dark">1999</h5>
					  </div>
					  <div className="col col-8 mobile-center">
						  <p className="text-dark">Born in Fort Lauderdale, Florida, USA.</p>
					  </div>
          </div>
				  <div className="row mobile-center">
					  <div className="col col-2 text-center mobile-empty">
						  <h5 className="card-title text-dark">2017</h5>
					  </div>
					  <div className="col col-8 mobile-center">
						  <p className="text-dark">Graduated from St. Thomas Aquinas High School in Fort Lauderdale, Florida, USA.</p>
					  </div>
          </div>

				  <div className="row mobile-center">
					  <div className="col col-2 text-center mobile-empty">
						  <h5 className="card-title text-dark">2019</h5>
					  </div>
					  <div className="col col-8 mobile-center">
						  <p className="text-dark">Product Management Intern at Johnson & Johnson in Miramar, Florida, USA.</p>
					  </div>
          </div>

				  <div className="row mobile-center">
					  <div className="col col-2 text-center mobile-empty">
						  <h5 className="card-title text-dark">2020</h5>
					  </div>
					  <div className="col col-8 mobile-center">
						  <p className="text-dark">Software Engineering Intern at Capital One in McLean, Virginia, USA.</p>
					  </div>
          </div>

				  <div className="row mobile-center">
					  <div className="col col-2 text-center mobile-empty">
						  <h5 className="card-title text-dark">2021</h5>
					  </div>
					  <div className="col col-8 mobile-center">
						  <p className="text-dark">Graduated from the University of Notre Dame with a Bachelor of Science in Computer Science.</p>
					  </div>
          </div>

				  <div className="row mobile-center">
					  <div className="col col-2 text-center mobile-empty">
						  <h5 className="card-title text-dark">Today</h5>
					  </div>
					  <div className="col col-8 mobile-center">
						  <p className="text-dark">Beginning a Software Development Engineering position at Amazon in Seattle, Washington, USA.</p>
					  </div>
          </div>

          </div>

        </div>
			<div className="row py-5"></div>
			</div>
		</Fragment>
	);
}

/* EXPORTS */
export default TimelineSection;
