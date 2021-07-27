import React from 'react'
import BlockArticle from './BlockArticle'
import BlockHeadline from './BlockHeadline'
import BlockHeadlineWithList from './BlockHeadlineWithList'
import LeadArticle from './LeadArticle'
import './SecondMain.css'

function SecondMain() {
    return (
        <div className="second-main">

            <div className="top">
                <div className="second-main-left">
                    <LeadArticle headline="'We're Stuck': Local Officials Fight Misinformation to Combat Variants" body="Louisiana health officials are fighting mistrust born of conspiracy theories when the best strategy for stemming the virus is getting more people vaccinated" />
                </div>
                <div className="second-main-right">
                    <BlockArticle headline="Fauci Wants to Make Vaccines For the Next Pandemic Before It Hits" body="Dr. Anthony Fauci is promoting an ambitious and expensive plan to develop “prototype” vaccines to protect against 20 families of viruses." />
                </div>
            </div>

            <div className="bottom">
                <div className="second-main-bottom-left">
                    <BlockHeadline headline="A conservative radio host's shift on vaccines after being hospitalized with Covid-19 has divided his fans and critics." />
                </div>
                <div className="second-main-bottom-right">
                    <BlockHeadlineWithList />
                </div>
            </div>

        </div>
    )
}

export default SecondMain
