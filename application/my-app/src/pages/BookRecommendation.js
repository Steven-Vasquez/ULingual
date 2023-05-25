import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/OptionRecommendation.css'
import BookImage from './stylesheets/alex-lvrs-2zDw14yCYqk-unsplash.jpg'
import VideoImage from './stylesheets/leon-bublitz-uDTzfsGJihw-unsplash.jpg'

const BookRecommendationPage= () => {
    return( 
        <div class = "doubleContainer">
                <div class = "bookContainer">
                        <div class="bookContainer1">
                                <h1>Recommendations</h1>
                                <h1>Books!</h1>
                        </div>
                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>English Books 🇺🇸</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 5 from https://www.british-study.com/en/blog/alexs-top-5-books-language-learners*/}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>The Curious Incident of the Dog in the Night by Mark Haddo</h3></div>
                                        <div className='bookDescription'><h3>The Curious Incident of The Dog in the Night Time is the story of a young boy, Christopher, who suffers from autism. Christopher goes to a special school and finds it very hard to understand and communicate with people from the outside world.  He discovers that his neighbours’ dog has been murdered and decides to investigate the crime. This takes him on a terrifying and challenging journey that changes his life. The story is told by Christopher, which means the language is simple and easy to understand.  Its short length also makes this book easy to read, even for beginners!</h3></div>
                                        <a href="https://www.amazon.com/s?k=the+curios+incident+of+the+dog&hvadid=409931071350&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=9116560432709944882&hvtargid=kwd-2569765388&hydadcr=24603_11409311&tag=googhydr-20&ref=pd_sl_12kmcf64as_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Fantastic Mr Fox by Roald Dahl</h3></div>
                                        <div className='bookDescription'><h3>A great tip when choosing books to improve your English is to read books written for children. We chose Fantastic Mr Fox, but we could have really chosen almost any book by the iconic writer Roal Dahl, who is arguably one of the greatest children's authors of all time.Fantastic Mr Fox is the story of three mean local farmers and a sly fox who steals their chickens, geese and apple cider to feed his family and friends.  Boggis, Bunce and Bean (the horrible farmers) plan to capture the fox by digging into his home, but Fantastic Mr Fox has a plan of his own….Another great thing about these books is the illustrations by Quentin Blake.  Reading a book with pictures also helps you to better understand the story.</h3></div>
                                        <a href="https://www.amazon.com/s?k=fantastic+mr+fox+books&hvadid=241921991738&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=2743916794156437624&hvtargid=kwd-1091350327&hydadcr=24632_10399691&tag=googhydr-20&ref=pd_sl_2nec0z8hdq_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Lord of the Flies by William Golding</h3></div>
                                        <div className='bookDescription'><h3>The Curious Incident of The Dog in the Night Time is the story of a young boy, Christopher, who suffers from autism. Christopher goes to a special school and finds it very hard to understand and communicate with people from the outside world.  He discovers that his neighbours’ dog has been murdered and decides to investigate the crime. This takes him on a terrifying and challenging journey that changes his life. The story is told by Christopher, which means the language is simple and easy to understand.  Its short length also makes this book easy to read, even for beginners!</h3></div>
                                        <a href="https://www.amazon.com/s?k=lord+of+flies+book&hvadid=409960560394&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=8258491496478301864&hvtargid=kwd-15511167721&hydadcr=24657_11410751&tag=googhydr-20&ref=pd_sl_4tmnyvbaf4_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>Spanish Books 🇪🇸</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                {/*top 3 from https://spanishvip.com/culture/easy-books-to-read-in-spanish/*/}
                                <div className = "secondary">
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>Cuentos de la selva by Horacio Quiroga</h3></div>
                                        <div className='bookDescription'><h3>This children’s book, Stories of the Jungle, published in Buenos Aires in 1918 is a great place to start. You’ll learn a lot of basic verbs and animal vocabulary.</h3></div>
                                        <a href="https://www.amazon.com/-/es/Horacio-Quiroga/dp/1511657545" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Spanish Short Stories for Beginners by Olly Richards</h3></div>
                                        <div className='bookDescription'><h3>Olly Richards’ short stories are specifically written for a Spanish beginner. This makes it a great book to practice reading in Spanish.</h3></div>
                                        <a href="https://www.amazon.com/s?k=spanish+short+stories+olly+richards&hvadid=410028241568&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=2769473489336882434&hvtargid=kwd-616560711823&hydadcr=21691_11234687&tag=googhydr-20&ref=pd_sl_621yhy9aga_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Cajas de cartón by Francisco Jiménez</h3></div>
                                        <div className='bookDescription'><h3>Although this story was originally written in English, it’s a great book to learn Spanish because it’s considered a classic book in Chicana literature. In case you didn’t know, chicano/a refers to someone who lives in the USA, but is of Mexican origin.</h3></div>
                                        <a href="https://www.amazon.com/s?k=cajas+de+cart%C3%B3n+by+francisco+jim%C3%A9nez.&hvadid=490231627363&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=16686496048484686093&hvtargid=kwd-1115479093415&hydadcr=22598_13378909&tag=googhydr-20&ref=pd_sl_4lug072d1t_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>French Books 🇫🇷</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 3 from https://www.babbel.com/en/magazine/best-books-to-learn-french*/}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>Le Petit Prince</h3></div>
                                        <div className='bookDescription'><h3>What better way to start our list of books to learn French than with Le Petit Prince (The Little Prince). There’s a good reason this French literature classic written by Antoine de Saint Exupéry is renowned worldwide. The novel tells the story of a young boy who goes on profound adventures as he travels the universe. A rich subtext lets you observe humanity’s flaws and the many peculiarities of the world.</h3></div>
                                        <a href="https://www.amazon.com/s?k=le+petit+prince&hvadid=616863395700&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=12227607575259393861&hvtargid=kwd-19847715327&hydadcr=24660_13611807&tag=googhydr-20&ref=pd_sl_5p11ukbm22_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Le Petit Nicolas</h3></div>
                                        <div className='bookDescription'><h3>The classic children’s series, Le Petit Nicolas, might include some of the best books to learn French for beginners. Written by René Goscinny and charmingly illustrated by Jean-Jacques Sempé, the books are narrated from the point of view of young Nicolas as he lives out an idyllic childhood in 1950s France.  </h3></div>
                                        <a href="https://www.amazon.com/s?k=la+petit+nicolas&hvadid=409943028906&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=16508220147608195792&hvtargid=kwd-4860593829&hydadcr=24659_11410797&tag=googhydr-20&ref=pd_sl_24blxjy7fl_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Arsène Lupin, Gentleman cambrioleur</h3></div>
                                        <div className='bookDescription'><h3>Arsène Lupin, Gentleman cambrioleur, the crime fiction book by Maurice Leblanc, recounts the adventures of the thief Arsène Lupin throughout a series of short stories.</h3></div>
                                        <a href="https://www.amazon.com/Ars%C3%A8ne-Lupin-gentleman-cambrioleur-originale/dp/B0BBXX9SQZ/ref=sr_1_1?hvadid=580937024830&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=5022879706718259854&hvtargid=kwd-311506534740&hydadcr=22595_10356262&keywords=ars%C3%A8ne+lupin+gentleman+cambrioleur&qid=1684452988&s=books&sr=1-1" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>Arabic Books 🇸🇦</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                {/*top 3 from https://www.mezzoguild.com/learning-arabic-5-books-i-recommend/ */}
                                <div className = "secondary">
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>The Kalimni ‘Arabi Series</h3></div>
                                        <div className='bookDescription'><h3>You’ll get plenty of reading practice too because thankfully there is no transliteration of the text. Even in the beginner book, it’ll get you reading straight away.</h3></div>
                                        <a href="https://www.amazon.com/s?k=kallimni+arabi&hvadid=241661801752&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=6876265658254373303&hvtargid=kwd-6011382633&hydadcr=8453_10382305&tag=googhydr-20&ref=pd_sl_43uqz3mnz1_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Arabi Liblib</h3></div>
                                        <div className='bookDescription'><h3>If you plan to master colloquial Arabic or really understand slang in the Middle East, you should get this series.</h3></div>
                                        <a href="https://www.amazon.com/Arabi-Liblib-Colloquial-Adjectives-Descriptions/dp/9774163990" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>A New Arabic Grammar Of The Written Language – Haywood | Nahmad</h3></div>
                                        <div className='bookDescription'><h3>If you’re planning to learn how to read the news or classical literature you should have a copy of this on your desk!</h3></div>
                                        <a href="https://www.amazon.com/New-Arabic-Grammar-Written-Language/dp/085331585X" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>
                                </div>
                                </div>
                        </div>

                        <div class = "englishBooks">
                                <div className='bookTitle'><h2>Korean Books 🇰🇷</h2></div>

                                <div className='innerBook'>
                                <div className = "primary">
                                        <div className='bookRank'><h3>Rank</h3></div>
                                        <div className='bookName'><h3>Title</h3></div>
                                        <div className='bookDescription'><h3>Description</h3></div>
                                        <div className='bookLink'><h3>Link</h3></div>
                                </div>
                                <div className = "secondary">
                                        {/*top 3 books https://www.langoly.com/best-books-to-learn-korean/*/}
                                        <div className='bookRank'><h3>1</h3></div>
                                        <div className='bookName'><h3>Korean Made Simple</h3></div>
                                        <div className='bookDescription'><h3>Korean Made Simple has 20 chapters that break down the basics of the Korean language into understandable chunks. In addition to learning grammar, vocabulary, and the Korean writing system, there are also notes to learn about Korean history and culture. The practice exercises included in each chapter make sure you understand what you learned and are on the right track.</h3></div>
                                        <a href="https://www.amazon.com/s?k=korean+made+simple&hvadid=409911840702&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=2301446238188699988&hvtargid=kwd-95606806169&hydadcr=22537_11318393&tag=googhydr-20&ref=pd_sl_3s8citi13x_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>2</h3></div>
                                        <div className='bookName'><h3>Read and Speak Korean for Beginners</h3></div>
                                        <div className='bookDescription'><h3>Read and Speak Korean for Beginners is the first book of many in this Korean learning series. This book focuses on topics that will help you in daily life, such as introductions, family, and describing people. The book is divided into eight topics and has clear explanations of important grammar and vocabulary topics. There are also practice questions to check your understanding.</h3></div>
                                        <a href="https://www.amazon.com/s?k=beginner+korean&hvadid=616863173751&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=1470498053104969391&hvtargid=kwd-17437743&hydadcr=24660_13611807&tag=googhydr-20&ref=pd_sl_70uixchfj8_e" className="bookLink" target="_blank">
                                                <button>
                                                <h3>External Link Here!</h3>
                                                </button>
                                        </a>

                                        <div className='bookRank'><h3>3</h3></div>
                                        <div className='bookName'><h3>Talk To Me In Korean Level 1</h3></div>
                                        <div className='bookDescription'><h3>Talk To Me In Korean Level 1 is an excellent choice for absolute beginners who want to learn basic Korean vocabulary and grammar. The book’s focus is on conversation, not the written or formal style of Korean. There are practice activities included throughout the book.</h3></div>
                                        <a href="https://www.amazon.com/s?k=talk+to+me+korean+level+1&hvadid=598659365746&hvdev=c&hvlocphy=9031950&hvnetw=g&hvqmt=e&hvrand=18152781754911017095&hvtargid=kwd-487753230428&hydadcr=22565_13531269&tag=googhydr-20&ref=pd_sl_2dnkwcv6u1_e" className="bookLink" target="_blank">
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

export default BookRecommendationPage;