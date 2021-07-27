
import './App.css';
import BlockArticle from './components/blockarticle/BlockArticle';
import Divbar from './components/divbarmain/Divbar';
import EditorPick from './components/editor/EditorPick';
import FullbarArticle from './components/fullbararticle/FullbarArticle';
import Mainbar from './components/mainbar/Mainbar';
import OlympicArea from './components/olympicarea/OlympicArea';
import OpinionArea from './components/opinionarea/OpinionArea';
import SecondMain from './components/secondmainstories/SecondMain';
import SplitBarRight from './components/splitbarright/SplitBarRight';
import TitleArea from './components/titlearea/TitleArea';
import Toplist from './components/toplist/Toplist';
import TopPodcast from './components/toppodcast/TopPodcast';
import TopStories from './components/topstories/TopStories';
import StandardArticle from './components/standardarticle/StandardArticle'
import Advertisement from './components/advertisement/Advertisement';
import RecommendBar from './components/recommendbar/RecommendBar';
import BigBlock from './components/bigblock/BigBlock';

function App() {
  return (
    <div>
      <TopPodcast />
      <div className="App">
        <div className="top-area">
          <Mainbar />
          <TitleArea />
        </div>
        <Toplist />
        <Divbar />
        <TopStories />
        <div className="secondary-area">
          <div className="news-area">
            <SecondMain />
            <OlympicArea />
            <FullbarArticle headline="Why Are Top Democrats Listening to Eric Adams Right Now" body="Some prominent Democrats think their party’s nominee for mayor of New York offers a template for how to address issues of public safety." />
            <FullbarArticle headline="Presidential Missteps Highlight Week" body="Repeated attempts to push infrastructure bill through Congress have failed due to mistakes and poor judgement by the Administration." />
            <SplitBarRight />
            <BlockArticle caption="Bob Moses in 2014. He was teaching math in the Bronx when scenes of Black people sitting at lunch counters across the South inspired him to become an activist." url="https://static01.nyt.com/images/2021/07/25/multimedia/00xp-moses2-02/00xp-moses2-02-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale" component={<StandardArticle headline="Bob Moses, Crusader for Civil Rights and Math Education, Dies at 86" body="He developed a reputation for extraordinary 
                    calm in the face of violence 
                    as he helped to register voters and trained activists in Mississippi in the 1960s." />} />
            <BlockArticle caption="Bezons stands in front of launch capsule." url="https://media.wired.com/photos/5c1810d2d9b7f51a5472d685/125:94/w_2090,h_1572,c_limit/blueorigin-665033916.jpg" component={<StandardArticle headline="Jeff Bezos Now Ranks as an Astronaut" body="He developed a reputation for extraordinary 
                    calm in the face of violence 
                    as he helped to register voters and trained activists in Mississippi in the 1960s." />} />
          </div>
          <div className="opinion">
            <OpinionArea />
            <EditorPick />
          </div>
        </div>
      </div>
      {/* <TopPodcast /> */}
      <Advertisement />
      <div className="below-the-fold">
        <RecommendBar />
        <BigBlock />
      </div>
    </div>
    
  );
}

export default App;
