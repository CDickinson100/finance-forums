import React from 'react';
import './recent.css'

function RecentlyViewed() {
    return (
        <>
            <div class="sidebar">
                <div class="recent">

                    <div id="sideBarTitle">
                        <h1>
                            Recently Viewed
                        </h1>
                    </div>

                    <div class="option">
                        <text>Everything you need to know about Mortgages</text>
                    </div>

                    <div class="option">
                        <text>Saving and Budgeting</text>
                    </div>

                    <div class="option">
                        <text>Buying vs Renting a Property</text>
                    </div>

                    <div class="option">
                        <text>Credit Score Tips</text>
                    </div>

                    <div class="option">
                        <text>Help To Buy ISA</text>
                    </div>

                    <div class="option">
                        <text>Investing</text>
                    </div>

                    <div class="option">
                        <text>Stocks and Shares</text>
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