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
                <div class="row py-4"></div>
                <div class="row py-3">

                    <div class="col-1"></div>
                    <div class="col-6">
                        <div class="card index-card">
                            <div class="card-body">
                                <h5 class="card-title text-dark">Who I Am</h5>
                                <p></p>
                                <p>I am a current Junior, intending on graduating in May 2021.</p>
                                <p>My passion is building beautiful things from makefiles
                                    to compilers to servers or even mobile applications. In university, I'm learning the
                                    complexity behind computers and
                                    computer networks. On my own, however, is where I do a
                                    large portion of my learning. I'm currently learning how to quickly make apps for
                                    future hackathons using Google's SDK, Flutter. I'm building a compiler proper in my
                                    Compilers and Language Design course, and I'm on the executive board for CS For Good, a
                                    club that organizes several
							non-profit projects to serve the needs of the community.</p>
                                <p>When I'm not teaching myself how to become a better programmer, you
                                    can usually find me at the climbing wall or in the weight-room. Or maybe
                                    on South Quad with a couple of friends. Maybe hammocking, perhaps slacklining, or even
                                    messing with some soccer, football,
							or volleyball - really just anything of that nature.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card index-card">
                            <div class="card-body">
                                <h5 class="card-title text-dark">This Website</h5>
                                <p>As part of my Spring 2019 Systems Programming class, a group of 3 of us were tasked with
                                    creating a
							web server (the very server which is feeding your requests) and a hammering client.</p>
                                <p>The server was built using C and was given the name DiscreetOctupus. She's a little rough on
                                    the
							edges, but she got you here, didn't she?</p>
                                <p class="card-text"><small class="text-muted"><a class="text-dark" href="/work">Learn
									more</a></small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-1"></div>

                </div>
                <div class="row py-5">
                    <div class="col-1"></div>
                    <div class="col-4">
                        <div class="card index-card">
                            <div class="card-body">
                                <h5 class="card-title text-dark">What I Want to Do</h5>
                                <p>I am actively searching for a software engineering internship for the Summer of 2020 to
                                    further my growth as an engineer and as a person. At this current time, I
							am open to moving to <b>any</b> location, though I am more attracted to the fast-paced
							environments provided by California, Seattle, and New York.</p>
                                <p>The technologies I would like to work with include machine learning, full-stack development,
							systems programming, and compilers development (among many other things).</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card index-card">
                            <div class="card-body">
                                <h5 class="card-title text-dark">Relevant Coursework</h5>
                                <p>Here are some (not all) of the courses that I thought were most interesting while at
							university.</p>
                                <p><small class="text-muted">* Ongoing courses</small></p>
                            </div>
                            <ul class="list-group list-group-flush" style={{height: "100%", maxHeight: "300px", overflowY: "auto"}}>
                                <li class="list-group-item">
                                    Compilers and Language Design*
							<p className="course-desc">The objective of this course is to build a compiler proper to
								successfully compile a C-like language.</p>
                                </li>
                                <li class="list-group-item">
                                    Computer Architecture*
							<p className="course-desc">The objective of this course is to understand how the underlying
                                        structure of processors can be manipulated to serve computational needs such as machine
								learning.</p>
                                </li>
                                <li class="list-group-item">
                                    Theory of Computing*
							<p className="course-desc">The objective of this course is to learn about the theoretical
                                        underpinnings of Computer Science through formal languages and automata, computability
								theory, and complexity theory.</p>
                                </li>
                                <li class="list-group-item">
                                    Programming Paradigms*
							<p className="course-desc">The objective of this course is to apply theoretical programming
                                        concepts to real-world problems. The course will go over scripting, libraries,
								multi-language interfacing, and more.</p>
                                </li>
                                <li class="list-group-item">
                                    Programming Challenges*
							<p className="course-desc">The objective of this course is to develop the necessary intution
                                        of solving common Computer Science "brain-teasers" to develop our use of Data Structures
								and Algorithms.</p>
                                </li>
                                <li class="list-group-item">
                                    Systems Programming
							<p className="course-desc">This course taught me the usefulness of shell scripting, the
                                        concepts of parallelism and concurrency using Python scripts (to brute-force crack
                                        passwords), the protocols necessary to create an HTTP server using C, and the beauty and
								structure provided by the Unix philosophy.</p>
                                </li>
                                <li class="list-group-item">
                                    Data Structures
							<p className="course-desc">This course taught me the data structures and algorithms that are
                                        the core of Computer Science and the building blocks for nearly every computer program.
                                        We went through the fundamental techniques in designing, implementing, and analyzing the
								structures created.</p>
                                </li>
                                <li class="list-group-item">
                                    Logic Design
							<p className="course-desc">This course taught me how computers work today through boolean
                                        algebra and switching circuits, Karnaugh maps, combinational and sequential logic
                                        networks, and sequential machines. This class also gave me a taste of assembly code --
                                        prepping me for the more rigorous courses of Computer Architecture and Compilers and
								Language Design.</p>
                                </li>
                                <li class="list-group-item">
                                    Fundamentals of Computing
							<p className="course-desc">This course was the first true stepping stone into Computer
                                        Science for me. Taught in the Fall of 2018, this course was a major part of my
                                        discernment into my current major. The weekly labs and assignments taught me the
								fundamentals of pointer manipulation in C++.</p>
                                </li>
                                <li class="list-group-item">
                                    Electric Circuit Analysis
							<p className="course-desc">This course was an elective I took over Fall 2018. It provided me
                                        with knowledge pertaining to linear circuit analysis principles such as KCL, KVL, nodal
                                        and mesh analysis methods, operational amplifiers, and transient analysis of first-order
								RC/RL circuits.</p>
                                </li>
                                <li class="list-group-item">
                                    Introduction to Design Thinking
							<p className="course-desc">This elective, taken in Fall 2017, provided me with the tools
                                        necessary to ideate, design, and implement. It truly curbed my thought process and how I
                                        interact with project members (randomly grabbing white-boards and drawing rough sketches
                                        of everyone's ideas until a solid foundation has been built). It has improved the efficiency of all
								teams I have been part of due to the mere habit of putting pen to paper and using iterative techniques.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>

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

		<div class="row py-4"></div>
		<div class="row py-1">
			<div class="col-1"></div>
			<div class="col-10">
				<h3 class="text-dark">My History</h3>
			</div>
			<div class="col-1"></div>
		</div>

		<div class="row py-1">
			<div class="col-1"></div>
			<div class="col-10">
				<div class="card index-card">
					<div class="card-body">
						<h5 class="card-title text-dark">Growing Up</h5>
						<p>Born and raised in Parkland, Florida, a verdant suburb of Deerfield and Fort Lauderdale
							Beach, I have always been one to be outdoors. Soccer, football, basketball, baseball,
							lacrosse, surfing -- there aren't many sports that I wasn't playing in my adolescent years,
							and it
							truly shaped my lifestyle today. In school, I was also someone who truly prided himself in
							reading as many books as possible, and I often spent entire nights under a reading light.
							Eventually, I developed a great passion for Mathematics, to the point that I strongly
							considered a career in it post high-school.</p>
						<h5 class="card-title text-dark">Adult Life</h5>
						<p>During high-school I definitely got a glimpse of the mathematical side that I had always
							loved, and I spent the first two years working hard to master it. Days prior to the start of
							my Junior year of highschool, I moved to El Tigre, Anzoategui,
							Venezuela. This drastic transition is likely the most influential moment of the later part
							of my life. There, I had learned about the value of heritage, culture, family, and
							community. It also taught me about the hardwork that is necessary to succeed, after seeing
							so many people struggle to feed themselves in the disaster-ridden country. Moving back to
							the United States pushed me to look for a raison d'être. I had thought Mathematics, Physics,
							or Engineering could be good fits, but I eventually settled on the latter upon reaching
							Notre Dame. I chose the path of Computer Science, and I haven't looked back. I now spend
							many of my days reading about different CS topics or about entrepreneurs in the field. There
							have been countless nights of brainstorming, planning, and implementing, and it has all been
							worth it.</p>
					</div>
				</div>
			</div>
			<div class="col-1"></div>
		</div>
		<div class="row py-5"></div>
	</div>


        </Fragment>
    );
}

/* EXPORTS */
export default HomeContent;