/// @file:      HomeContent.js
/// @author:    John Ed Quinn
// @desc:       Content for Home Page

/* IMPORTS */
import React, { Fragment } from 'react';

/* NAVBAR */
const HomeContent = () => {
    return (
        <Fragment>

	<div class="col">

		<div class="row py-1">
			<div class="col-1"></div>
			<div class="col-10">
				<h3 class="text-dark">Experience</h3>
			</div>
			<div class="col-1"></div>
		</div>
		<div class="row py-1">

			<div class="col-1"></div>
			<div class="col-10">
				<div class="card index-card">
					<div class="card-body">
						<h5 class="card-title text-dark">Summer 2019 - Cerenovus Product Management Intern</h5>
						<p>This summer of 2019 I spent in Miramar, FL working for a medical device company (Cerenovus)
							in Johnson & Johnson's Family of Companies. My role, as a Product Management Intern, can be
							split into two separate functional groups.
						</p>
						<div class="container">
							<p><b>Technical:</b> The facility, which was split as a manufacturing
								site and as an office space, served as a great opportunity to examine manufacturing
								processes
								and devise how they can be radically changed. I, with the guidance of mechanical,
								biomedical, and electrical
								engineers, brought to the manufacturing floor two new pieces of automated equipment. The
								first piece of equipment -- the ball-tipping machine which produced a protective
								covering
								over microcatheter ends with heated suture entities -- reduced the usual operational
								time by
								67%. It manipulated a linear actuator, a heating element, and a control box for the
								operator. My job with this machine was to create the software (using SI Programmer)
								under a very limited
								memory
								constraint. The second machine, the outer-diameter measuring equipment, reduced
								measuring
								times of catheters by approximately 60%. It manipulated a linear actuator, a dual-axis
								micrometer, and an operator-controlled control box. This code was originally authored
								prior
								to my internship, but I made modifications to ensure its functionality.</p>

							<p><b>Project Oriented:</b> As of September 2019, Cerenovus has been undergoing the
								transition of legal entities
								from Codman to Cerenovus. Part of this process involves rigorous regulatory,
								manufacturing, marketing, and labeling checks to ensure that products and documents are
								updated by a certain date. My role as the Documentation Workstream Lead within the
								Rebranding Project included heading the workstream to update all external and internal
								documents. Beyond this role, I worked as a multi-site point of contact to coordinate the
								release of updated subassemblies, labels, ID bands, and finished goods.</p>
						</div>

					</div>
				</div>
			</div>
			<div class="col-1"></div>
		</div>
		<div class="row py-1"></div>
	</div>
        </Fragment>
    );
}

/* EXPORTS */
export default HomeContent;