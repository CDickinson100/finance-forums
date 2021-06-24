import React from 'react';
import RecentSection1 from './recentOptions';

function RecentlyViewed() {
    return (
        <>
            <div class="sidebar">
                <div class="recent">
                    <br />
                    <br />

                    <div id="sideBarTitle">
                        <h1>
                            Recently Viewed
                        </h1>
                    </div>

                    <div class="option">
                        <br />
                        <text>Everything you need to know about Mortgages</text>
                    </div>

                    <div class="option">
                        <br />
                        <br />
                        <text>Saving and Budgeting</text>
                    </div>

                    <div class="option">
                        <br />
                        <br />
                        <text>Buying vs Renting a Property</text>
                    </div>

                    <div class="extraOptions">
                        <div class="lane1">
                            <text class="sidebarText">
                                Help
                                <br />
                                Settings
                                <br />
                                Go Pro
                                <br />
                                Blog
                                <br />
                                Advertise
                            </text>
                        </div>
                        <div class="lane2">
                            <text class="sidebarText">
                                About
                                <br />
                                Careers
                                <br />
                                Press
                                <br />
                                Terms
                                <br />
                                Policies
                            </text>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RecentlyViewed;