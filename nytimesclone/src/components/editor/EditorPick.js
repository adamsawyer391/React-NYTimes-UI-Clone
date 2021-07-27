import React from 'react'
import './EditorPicks.css'

const url = "https://www.aljazeera.com/wp-content/uploads/2017/08/e2d8ca7551cf4084a8daa70a2ca21690_18.jpeg?resize=1200%2C630";
const img1 = "https://static01.nyt.com/images/2021/07/25/obituaries/25Kirby-obit1/21Kirby1-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";
const img2 = "https://static01.nyt.com/images/2021/07/28/books/28bookmanaugh-photo/28bookmanaugh-photo-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

function EditorPick() {
    return (
        <div className="editor-container">
            <div className="editor-main">
                <h3>Editor's Picks</h3>
                <img className="editor-image" src={url} alt="" />
                <p className="editor-headline">
                    Fighting Intensifies in Saudi-Yemen War; U.S. Eyes Developments Closely
                </p>
                <p className="editor-body">
                    The Saudi Arabian-led intervention in Yemen is an intervention launched by Saudi Arabia on 26 March 2015, leading a coalition of nine countries from West Asia and North Africa, responding to calls from the president of Yemen Abdrabbuh Mansur Hadi for military support after he was ousted by the Houthi movement, despite the progress in the political transition led by the United Nations at that time.
                </p>
            </div>
            <div className="editor-secondary">
                <div className="editor-left">
                    <img className="editor-image-block" src={img1} alt="" />
                    <h5>
                        Bruce Kirby, Who Revamped Sailing With a Sketch, Dies at 92
                    </h5>
                </div>
                <div className="editor-right">
                    <img className="editor-image-block" src={img2} alt="" />
                    <h5>
                        The Amazing History (and Likely Busy Future) of Quarantine
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default EditorPick
