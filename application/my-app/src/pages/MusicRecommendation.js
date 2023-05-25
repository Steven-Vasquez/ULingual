import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/OptionRecommendation.css'
import BookImage from './stylesheets/alex-lvrs-2zDw14yCYqk-unsplash.jpg'
import MusicImage from './stylesheets/filip-5LhSaUDgtZ8-unsplash.jpg'
import VideoImage from './stylesheets/leon-bublitz-uDTzfsGJihw-unsplash.jpg'

const MusicRecommendationPage= () => {
    return( 
        <div class = "doubleContainer">
        <div class = "bookContainer">
                <div class="bookContainer1">
                        <h1>Recommendations</h1>
                        <h1>Music!</h1>
                </div>
                <div class = "englishBooks">
                        <div className='bookTitle'><h2>English Music 🇺🇸</h2></div>

                        <div className='innerBook'>
                        <div className = "primary">
                                <div className='bookRank'><h3>Rank</h3></div>
                                <div className='bookName'><h3>Title</h3></div>
                                <div className='bookDescription'><h3>Description</h3></div>
                                <div className='bookLink'><h3>Link</h3></div>
                        </div>
                        <div className = "secondary">
                                <div className='bookRank'><h3>1</h3></div>
                                <div className='bookName'><h3>Learn English through Singing 80's songs with lyrics!</h3></div>
                                <div className='bookDescription'><h3>Playlist by Angel Mobile Apps</h3></div>
                                <a href="https://www.youtube.com/watch?v=-YUAbW_YDm4&list=PL0J5xb8JH3VukoRHgk86Yr9BSVeBewCuZ" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>2</h3></div>
                                <div className='bookName'><h3>Improve English With Songs</h3></div>
                                <div className='bookDescription'><h3>Playlist by R.T.</h3></div>
                                <a href="https://www.youtube.com/watch?v=sJQYoGyEtDs&list=PLeS553ZNGqNR7fJ9eznn1Z5mIuMZwT_bY" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>3</h3></div>
                                <div className='bookName'><h3>Learn English with Songs - Perfect Tense - Lyric Lab</h3></div>
                                <div className='bookDescription'><h3>Playlist by Learn English with EnglishClass101.com</h3></div>
                                <a href="https://www.youtube.com/watch?v=w-JUNYwstpo&list=RDQMOsqeSeqkm80&start_radio=1" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                        </div>
                        </div>
                </div>

                <div class = "englishBooks">
                        <div className='bookTitle'><h2>Spanish Music 🇪🇸</h2></div>

                        <div className='innerBook'>
                        <div className = "primary">
                                <div className='bookRank'><h3>Rank</h3></div>
                                <div className='bookName'><h3>Title</h3></div>
                                <div className='bookDescription'><h3>Description</h3></div>
                                <div className='bookLink'><h3>Link</h3></div>
                        </div>
                        <div className = "secondary">
                                <div className='bookRank'><h3>1</h3></div>
                                <div className='bookName'><h3>Songs to learn Spanish</h3></div>
                                <div className='bookDescription'><h3>Playlist by Susan Vineyard</h3></div>
                                <a href="https://www.youtube.com/watch?v=4xgsJVsAFpk&list=PL2RLDc3Akk8snxqxgWYaQIRPNIJSf-Yvo" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>2</h3></div>
                                <div className='bookName'><h3>Youtube learn spanish</h3></div>
                                <div className='bookDescription'><h3>Playlist by Youtube Mix</h3></div>
                                <a href="https://www.youtube.com/watch?v=IKznbHvPFwc&list=RDQM1NGWA8WIQVo&start_radio=1" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>3</h3></div>
                                <div className='bookName'><h3>Learn Spanish vocabulary with songs</h3></div>
                                <div className='bookDescription'><h3>Playlist by WORDPIE</h3></div>
                                <a href="https://www.youtube.com/watch?v=_l6Oj3HdVik&list=PLWHCV00OLMW8_eBFkj7DdhFEz-6EfRIM6" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                        </div>
                        </div>
                </div>

                <div class = "englishBooks">
                        <div className='bookTitle'><h2>French Music 🇫🇷</h2></div>

                        <div className='innerBook'>
                        <div className = "primary">
                                <div className='bookRank'><h3>Rank</h3></div>
                                <div className='bookName'><h3>Title</h3></div>
                                <div className='bookDescription'><h3>Description</h3></div>
                                <div className='bookLink'><h3>Link</h3></div>
                        </div>
                        <div className = "secondary">
                                <div className='bookRank'><h3>1</h3></div>
                                <div className='bookName'><h3>Learn French with a French Dude</h3></div>
                                <div className='bookDescription'><h3>Playlist by LearnFrenchwithaFrenchDude</h3></div>
                                <a href="https://www.youtube.com/watch?v=SJ2FxKDpSBw&list=PL8aS91uAe39edrhLOfvQc_0Hxo8WDnMbH" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>2</h3></div>
                                <div className='bookName'><h3>French songs for beginners</h3></div>
                                <div className='bookDescription'><h3>Playlist by BlackUps__</h3></div>
                                <a href="https://www.youtube.com/watch?v=NU9qYbLtPog&list=PLWC3jTo5VQfCXN81Xr-J38E_wiupPzwCt" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>3</h3></div>
                                <div className='bookName'><h3>french songs for children playlist - Learn French</h3></div>
                                <div className='bookDescription'><h3>Playlist by Learn with me - ABC 123 International - how to learn languages fast</h3></div>
                                <a href="https://www.youtube.com/watch?v=ipnS8bipT1M&list=PLZ3H7o7zTVu-m_21L2R_k-ri3okzgOLcR" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                        </div>
                        </div>
                </div>

                <div class = "englishBooks">
                        <div className='bookTitle'><h2>Arabic Music 🇸🇦</h2></div>

                        <div className='innerBook'>
                        <div className = "primary">
                                <div className='bookRank'><h3>Rank</h3></div>
                                <div className='bookName'><h3>Title</h3></div>
                                <div className='bookDescription'><h3>Description</h3></div>
                                <div className='bookLink'><h3>Link</h3></div>
                        </div>
                        <div className = "secondary">
                                <div className='bookRank'><h3>1</h3></div>
                                <div className='bookName'><h3>Learn Arabic With Songs (No Music) - Apprendre l'arabe avec des chansons (Sans musique) </h3></div>
                                <div className='bookDescription'><h3>Playlist by Osratouna tv - قناة أسرتنا</h3></div>
                                <a href="https://www.youtube.com/watch?v=NBI6uEFWVG8&list=PLUitXL66pnO8bf_TnT0ImSmR1Oc5GBgfJ" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>2</h3></div>
                                <div className='bookName'><h3>Learn Arabic through short stories</h3></div>
                                <div className='bookDescription'><h3>Playlist by Arabic blooms</h3></div>
                                <a href="https://www.youtube.com/watch?v=GFJATd868iI&list=PL7RpCYE5gLKF3Wus9QmIXHuy4p81lpaVA" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>3</h3></div>
                                <div className='bookName'><h3>Let's Learn Arabic With Fun & Ease</h3></div>
                                <div className='bookDescription'><h3>Playlist by Sirat Al Mustaqeem</h3></div>
                                <a href="https://www.youtube.com/watch?v=pA3Fdl2bAT4&list=PLIBMga6MApfJg9r5cn2yjvlIC-sZcq-9_" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                        </div>
                        </div>
                </div>

                <div class = "englishBooks">
                        <div className='bookTitle'><h2>Korean Music 🇰🇷</h2></div>

                        <div className='innerBook'>
                        <div className = "primary">
                                <div className='bookRank'><h3>Rank</h3></div>
                                <div className='bookName'><h3>Title</h3></div>
                                <div className='bookDescription'><h3>Description</h3></div>
                                <div className='bookLink'><h3>Link</h3></div>
                        </div>
                        <div className = "secondary">
                                <div className='bookRank'><h3>1</h3></div>
                                <div className='bookName'><h3>Learn Korean with K-POP!</h3></div>
                                <div className='bookDescription'>Playlist by Learn Korean with K-POP!<h3></h3></div>
                                <a href="https://www.youtube.com/watch?v=apAkOQnmtmc&list=PLxK8JX0gFX42v_hnhAcNSllp-8cJl22Ym" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>2</h3></div>
                                <div className='bookName'><h3>Easy korean songs</h3></div>
                                <div className='bookDescription'><h3>Playlist by McKenzie Dawson</h3></div>
                                <a href="https://www.youtube.com/watch?v=DGITM1V_Z44&list=PL9jA1_bnwY_XLAMHJ0V8lxoljg7mJ403X" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                <div className='bookRank'><h3>3</h3></div>
                                <div className='bookName'><h3>Learn Korean with BTS Songs</h3></div>
                                <div className='bookDescription'><h3>Playlist by Korean Emo</h3></div>
                                <a href="https://www.youtube.com/watch?v=isMZhwNl6dQ&list=PLl6ijEtKyvGiXo-1Z-Ctg_LFHn8wJFxcx" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                        </div>
                        </div>
                </div>
                        <div class="button">
                                <a href="RecommendationPage">
                                <span class="greenbox">Return</span>
                                </a>
                        </div>
        </div>
</div>
    );
}

export default MusicRecommendationPage;