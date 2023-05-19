import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/OptionRecommendation.css'
import BookImage from './stylesheets/alex-lvrs-2zDw14yCYqk-unsplash.jpg' 
import VideoImage from './stylesheets/leon-bublitz-uDTzfsGJihw-unsplash.jpg'

const VideoRecommendationPage= () => {
    return( 
        <div class = "doubleContainer">
                <div class = "bookContainer">
                        <div class="bookContainer1">
                                <h1>Recommendations</h1>
                                <h1>Video!</h1>
                        </div>
                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>English Videos 🇺🇸</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 3 from https://www.ef.com/wwen/blog/language/best-youtube-channels-to-learn-english-at-home/*/}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>Speak English With Mr. Duncan</h3></div>
                                        <div className='bookDescription'><h3>Self-proclaimed English addict, Mr. Duncan is passionate about the English language. Through his YouTube channel – Speak English With Mr. Duncan – he teaches English to the world for free, three days a week, live from his home in England. You’ll get a lot out of his lessons; the videos are fun, easy to watch and focus more on practical language and how the language is spoken, rather than getting into the nitty-gritty of grammar. His entertaining lessons cover a variety of topics throughout the week, from nature, slang, news, fashion, and even survival instinct.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/channel/UC8pPDhxSn1nee70LRKJ0p3g</h3></div>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Easy English</h3></div>
                                        <div className='bookDescription'><h3>Not lessons as such, but Easy English remains one of the most useful English learning channels for beginners. Each video features real-life conversations and interactions with English speakers in real-life situations. People are interviewed on the street and asked simple questions about their day or their life. You’ll pick up correct pronunciation and get used to hearing the language spoken by different people.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/channel/UCTRHegh7UqWuKRymXoqzbzA</h3></div>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>BBC Learning English</h3></div>
                                        <div className='bookDescription'><h3>The BBC (British Broadcasting Corporation) is a British institution – you’ll be hard-pressed to find a better place to learn British English. Every day, a new lesson is published on the BBC Learning English channel, each one designed to help you learn English effectively using a variety of different formats.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/user/bbclearningenglish</h3></div>
                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>Spanish Videos 🇪🇸</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 3 from https://letsspeakspanish.com/blog/learn-spanish-youtube/*/}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>Lirica – Learn Spanish With Music</h3></div>
                                        <div className='bookDescription'><h3>This channel focuses on studying the Spanish language with Spanish music. The company has an app for studying but YouTube videos are also good as a break from Spanish grammar. You have the song in Spanish plus the translation in English below. Once you get a little tired or exhausted from the exercises you can switch to the fun song part and still keep practicing and improving your skills.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/channel/UCUspNWxecEHHT29xz7R1Cvg</h3></div>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Butterfly Spanish</h3></div>
                                        <div className='bookDescription'><h3>Butterfly Spanish covers almost everything there is to learn about the Spanish language.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/@ButterflySpanish</h3></div>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Español con Juan</h3></div>
                                        <div className='bookDescription'><h3>As it is seen from the title this channel is led by Juan. A Spanish who lives in London. Juan considers Spanish to be a language that must be studied in context. He tells real and fake stories, describes situations in the world, gives useful tips for learning the language, focuses on specific phrases and explains the Spanish way of thinking.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/@espanolconjuan</h3></div>
                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>French Videos 🇫🇷</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 3 from https://frenchtogether.com/learn-french-youtube/*/}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>Frenchpod101</h3></div>
                                        <div className='bookDescription'><h3>Frenchpod101 is mainly known as a podcast. but it’s also a Youtube channel full of short videos that’ll teach you common French words as well as sentences and help you improve your understanding of spoken French with listening exercices .</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/@frenchpod101</h3></div>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Comme Une Française</h3></div>
                                        <div className='bookDescription'><h3>After living in the UK for a while, Géraldine decided to come back to France to help English speakers learn about the country and act like real French persons.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/channel/UC-ZFVrf5NVlmgZ0hItLT0pg</h3></div>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Oh La La, I Speak French</h3></div>
                                        <div className='bookDescription'><h3>This web series for French learners shows the life of two French sisters in Los Angeles. Each episode has subtitles and contains daily French conversations of DELF level A1 (beginner).</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/channel/UC_VqWD9IgRGucwP3Oowx1xA</h3></div>
                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>Arabic Videos 🇸🇦</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 3 from https://arabicgoals.com/youtube-learning-arabic-2020/*/}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>Arabic Khatawaat</h3></div>
                                        <div className='bookDescription'><h3>This channel offers over 50 instructional videos with an average length of 20 minutes. All lessons are in Modern Standard Arabic. The instructor’s name is Rajaa.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/channel/UCW2AgHPThj9_8raWYE2yjfw</h3></div>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Gateway to Arabic Institute</h3></div>
                                        <div className='bookDescription'><h3>At a close second position, this Channel offers over 203 videos ( average length  30 minutes), grouped in playlists for different Arabic levels.  A playlist for the absolute beginners of Arabic offers 18 lessons comprising a full introductory course.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/watch?v=XwnaexEi4II</h3></div>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Learn Arabic with Maha </h3></div>
                                        <div className='bookDescription'><h3>Italy-based Palestinian Maha runs this channel, which offers over 470 videos for mostly beginners and low intermediate learners. </h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/user/LearnArabicwithMaha/videos</h3></div>
                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>Korean Videos 🇰🇷</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 3 from https://blog.gts-translation.com/2021/05/11/6-korean-youtube-channels-to-help-you-learn-korean/ */}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>JOLLY</h3></div>
                                        <div className='bookDescription'><h3>This channel is run by two English best friends, Josh and Ollie. Josh has been living in South Korea for years and can speak Korean perfectly. Ollie, on the other hand, has a fairly limited Korean language knowledge since he has never lived in the country.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/@jolly</h3></div>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Korean Unnie</h3></div>
                                        <div className='bookDescription'><h3>Korean Unnie channel gives you easy Korean lessons you might need on day to day basis while visiting South Korea. From how to sigh in Korean to what to say in an awkward situation while you’re in Korea, the lessons are not focused too much on grammar or any other textbooks-based lessons. She aims to teach her viewers and subscribers to speak Korean naturally, just like a native.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/c/KoreanUnnie</h3></div>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Talk To Me In Korean (TTMIK)</h3></div>
                                        <div className='bookDescription'><h3>This channel has a motto, ‘We connect people through Korean lessons and cultural videos.’ And as you might already guess, the channel is all about mastering Korean vocabulary, grammar, phrases, even idioms.</h3></div>
                                        <div className='bookLink'><h3>https://www.youtube.com/user/talktomeinkorean</h3></div>
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

export default VideoRecommendationPage;