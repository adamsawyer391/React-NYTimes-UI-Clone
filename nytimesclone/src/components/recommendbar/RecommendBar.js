import React from 'react'
import RecommendItem from './RecommendItem'
import './RecommendBar.css'
import RecommendItemEnd from './RecommendItemEnd';

const the_daily_url = "https://static01.nyt.com/images/2017/01/29/podcasts/the-daily-album-art-promo/the-daily-album-art-superJumbo-v2.jpg";
const janeway_link = "https://www.etonline.com/sites/default/files/images/2020-10/kate_mulgrew_voyager_gettyimages-525064946.png";
const borg_cube = "https://cdnb.artstation.com/p/assets/images/images/026/055/525/medium/bailey-raj-lawler-borgcube02.jpg?1587743110";
const worf = "https://www.looper.com/img/gallery/the-untold-truth-of-star-treks-worf/l-intro-1620232275.jpg";

function RecommendBar() {
    return (
        <div className="recommend-bar-container">
            <RecommendItem url={the_daily_url} headline="Listen to 'The Daily'" body="Breakthrough Infections Explained" />
            <RecommendItem url={janeway_link} headline="Star Trek Star Takes Aim" body="Kate Mulgrew vows to slay her enemies." />
            <RecommendItem url={borg_cube} headline="Google Reveals Origin of Kubernetes" body="Also known as Project Seven of Nine." />
            <RecommendItemEnd url={worf} headline="Human-Animal Cloning Begins" body="Will we all be turned into Klingons afterall?" />
        </div>
    )
}

export default RecommendBar
