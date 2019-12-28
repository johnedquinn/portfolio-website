/// @file:      HistorySection.js
/// @author:    John Ed Quinn
// @desc:       Content for History Section of Home Page

/* IMPORTS */
import React, { Fragment } from 'react';

/* NAVBAR */
const HistorySection = () => {
    return (
        <Fragment>
            <div className="header history-section">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row py-5"></div>
                    <div className="col">
                        <h2 className="text-center text-white">My History</h2>
                        <div className="row py-2"></div>
                        <h4 class="text-white">Growing Up</h4>
                        <p className="text-white">Born and raised in Parkland, Florida, a verdant suburb of Deerfield and Fort Lauderdale
							Beach, I have always been one to be outdoors. Soccer, football, basketball, baseball,
							lacrosse, surfing -- there aren't many sports that I wasn't playing in my adolescent years,
							and it
							truly shaped my lifestyle today. In school, I was also someone who truly prided himself in
							reading as many books as possible, and I often spent entire nights under a reading light.
							Eventually, I developed a great passion for Mathematics, to the point that I strongly
							considered a career in it post high-school.</p>
                        <div className="row py-2"></div>
                        <h4 class="card-title text-white">Adult Life</h4>
                        <p className="text-white">During high-school I definitely got a glimpse of the mathematical side that I had always
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
                    <div className="row py-5"></div>
                </div>
            </div>
        </Fragment>
    );
}

/* EXPORTS */
export default HistorySection;