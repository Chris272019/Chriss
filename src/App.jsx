import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import InteractiveBackground from "./components/InteractiveBackground"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CareerGoals from "./components/careergoals"
import CallToAction from "./components/calltoaction"
import PersonalTouch from "./components/personaltouch"
import Footer from "./components/Footer"
import Blog from "./components/Blog"
import "./App.css"
import { Link } from "react-router-dom"
import SoundButton from "./components/SoundButton"
import { playRandomSound } from "./utils/soundEffects"
import Experience from "./components/Experience"

// Import blog images
import day1Image1 from "./assets/day1/day1 (1).jpg"
import day1Image2 from "./assets/day1/day1 (2).jpg"
import day1Image3 from "./assets/day1/day1 (3).jpg"
import day1Image4 from "./assets/day1/day1 (4).jpg"
import day1Image5 from "./assets/day1/day1 (5).jpg"
import day1Image6 from "./assets/day1/day1 (6).jpg"
import day1Image7 from "./assets/day1/day1 (7).jpg"
import day1Image8 from "./assets/day1/day1 (8).jpg"
import day1Image9 from "./assets/day1/day1 (9).jpg"
import day1Image10 from "./assets/day1/day1 (10).jpg"

import day2Image1 from "./assets/day2/day2 (1).jpg"
import day2Image2 from "./assets/day2/day2 (2).jpg"
import day2Image3 from "./assets/day2/day2 (3).jpg"
import day2Image4 from "./assets/day2/day2 (4).jpg"
import day2Image5 from "./assets/day2/day2 (5).jpg"
import day2Image6 from "./assets/day2/day2 (6).jpg"
import day2Image7 from "./assets/day2/day2 (7).jpg"
import day2Image8 from "./assets/day2/day2 (8).jpg"
import day2Image9 from "./assets/day2/day2 (9).jpg"
import day2Image10 from "./assets/day2/day2 (10).jpg"
import day2Image11 from "./assets/day2/day2 (11).jpg"

import day3Image1 from "./assets/day3/National meuseum (1).jpg"
import day3Image2 from "./assets/day3/National meuseum (2).jpg"
import day3Image3 from "./assets/day3/National meuseum (3).jpg"
import day3Image4 from "./assets/day3/Presidential cars.jpg"
import day3Image5 from "./assets/day3/manuel quezon (1).jpg"
import day3Image6 from "./assets/day3/manuel quezon (2).jpg"
import day3Image7 from "./assets/day3/manuel quezon (3).jpg"

// Import remaining blog images
import day4Image1 from "./assets/day4/Hightech (1).jpg"
import day4Image2 from "./assets/day4/Hightech (2).jpg"
import day4Image3 from "./assets/day4/Hightech (3).jpg"
import day4Image4 from "./assets/day4/Hightech (4).jpg"
import day4Image5 from "./assets/day4/Hightech (5).jpg"
import day4Image6 from "./assets/day4/Hightech (6).jpg"

import day5Image1 from "./assets/day5/lrt (1).jpg"
import day5Image2 from "./assets/day5/lrt (2).jpg"
import day5Image3 from "./assets/day5/lrt (3).jpg"
import day5Image4 from "./assets/day5/lrt (4).jpg"
import day5Image5 from "./assets/day5/lrt (5).jpg"
import day5Image6 from "./assets/day5/lrt (6).jpg"
import day5Image7 from "./assets/day5/lrt (7).jpg"
import day5Image8 from "./assets/day5/traffic engineering (1).jpg"
import day5Image9 from "./assets/day5/traffic engineering (2).jpg"

import day6Image1 from "./assets/day6/strawberry farm.jpg"
import day6Image2 from "./assets/day6/chinese bell church (1).jpg"
import day6Image3 from "./assets/day6/chinese bell church (2).jpg"
import day6Image4 from "./assets/day6/chinese bell church (3).jpg"
import day6Image5 from "./assets/day6/chinese bell church (4).jpg"
import day6Image6 from "./assets/day6/chinese bell church (5).jpg"
import day6Image7 from "./assets/day6/minesview (1).jpg"
import day6Image8 from "./assets/day6/minesview (2).jpg"
import day6Image9 from "./assets/day6/PMA (1).jpg"
import day6Image10 from "./assets/day6/PMA (2).jpg"

import day7Image1 from "./assets/day7/day7 (1).jpg"
import day7Image2 from "./assets/day7/day7 (2).jpg"
import day7Image3 from "./assets/day7/day7 (3).jpg"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === "/"

  const handleBlogLinkClick = (e, path) => {
    e.preventDefault()
    playRandomSound()
    navigate(path)
  }

  const handleBackClick = (e) => {
    e.preventDefault()
    playRandomSound()
    navigate('/blog')
  }

  return (
    <div className="App">
      <InteractiveBackground />
      <div className="content-wrapper">
        {isHomePage && <Header />}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="container">
                  <About />
                  <Experience />
                  <Skills />
                  <Projects />
                  <CareerGoals />
                  <PersonalTouch />
                  <CallToAction />
                </div>
              </>
            } />
            <Route path="/blog" element={<Blog />}>
              <Route index element={
                <div className="blog-content">
                  <h1 className="blog-title">My Journey Through Luzon</h1>
                  <p className="blog-intro">Join me as I explore the rich history, culture, and technological advancements of Luzon, Philippines. Each day brings new discoveries and insights into this fascinating region.</p>
                  
                  <div className="blog-timeline">
                    <div className="timeline-item">
                      <h3>Day 1: Manila's Historical Gems</h3>
                      <p>Exploring the iconic landmarks of Manila, including Intramuros, Fort Santiago, and Rizal Park.</p>
                      <SoundButton as="a" href="/blog/day1" className="read-more" onClick={(e) => handleBlogLinkClick(e, '/blog/day1')}>Read More →</SoundButton>
                    </div>
                    
                    <div className="timeline-item">
                      <h3>Day 2: Olongapo's Art History</h3>
                      <p>Discovering the artistic heritage of Olongapo through its remarkable paintings and artworks.</p>
                      <SoundButton as="a" href="/blog/day2" className="read-more" onClick={(e) => handleBlogLinkClick(e, '/blog/day2')}>Read More →</SoundButton>
                    </div>
                    
                    <div className="timeline-item">
                      <h3>Day 3: Manila's Cultural Heritage</h3>
                      <p>Visiting the National Museum Complex and other cultural institutions in Manila.</p>
                      <SoundButton as="a" href="/blog/day3" className="read-more" onClick={(e) => handleBlogLinkClick(e, '/blog/day3')}>Read More →</SoundButton>
                    </div>
                    
                    <div className="timeline-item">
                      <h3>Day 4: High-Tech Innovations</h3>
                      <p>Exploring cutting-edge technology and innovations shaping the future of the Philippines.</p>
                      <SoundButton as="a" href="/blog/day4" className="read-more" onClick={(e) => handleBlogLinkClick(e, '/blog/day4')}>Read More →</SoundButton>
                    </div>
                    
                    <div className="timeline-item">
                      <h3>Day 5: Urban Transportation</h3>
                      <p>Understanding Manila's transportation systems and traffic engineering solutions.</p>
                      <SoundButton as="a" href="/blog/day5" className="read-more" onClick={(e) => handleBlogLinkClick(e, '/blog/day5')}>Read More →</SoundButton>
                    </div>
                    
                    <div className="timeline-item">
                      <h3>Day 6: Baguio's Treasures</h3>
                      <p>Exploring Baguio's unique blend of cultural heritage and natural beauty.</p>
                      <SoundButton as="a" href="/blog/day6" className="read-more" onClick={(e) => handleBlogLinkClick(e, '/blog/day6')}>Read More →</SoundButton>
                    </div>
                    
                    <div className="timeline-item">
                      <h3>Day 7: Farewell to Luzon</h3>
                      <p>Reflecting on the incredible experiences and memories gathered during this journey.</p>
                      <SoundButton as="a" href="/blog/day7" className="read-more" onClick={(e) => handleBlogLinkClick(e, '/blog/day7')}>Read More →</SoundButton>
                    </div>
                  </div>
                </div>
              } />
              <Route path="day1" element={
                <div className="blog-content">
                  <SoundButton as="a" href="/blog" className="back-link" onClick={handleBackClick}>← Back</SoundButton>
                  <h2>Day 1: Exploring Manila's Historical Gems</h2>
                  <p className="blog-date">April 7, 2025</p>
                  <div className="blog-post">
                    <p>Today was an exciting day exploring the rich history of Manila! I visited three iconic landmarks: Intramuros, Fort Santiago, and Rizal Park. Each location offered a unique glimpse into the Philippines' fascinating past.</p>
                    
                    <h3>Intramuros: The Walled City</h3>
                    <p>My journey began in Intramuros, the historic walled area that was the center of Spanish colonial rule. Walking through its cobblestone streets felt like stepping back in time.</p>
                    <div className="blog-gallery">
                      <img src={day1Image1} alt="Intramuros view" />
                      <img src={day1Image2} alt="Intramuros architecture" />
                    </div>

                    <h3>Fort Santiago: A Historical Fortress</h3>
                    <p>Next, I visited Fort Santiago, a citadel built by Spanish navigator and governor Miguel López de Legazpi. The fort's walls and dungeons tell stories of the past, including its role during World War II.</p>
                    <div className="blog-gallery">
                      <img src={day1Image3} alt="Fort Santiago entrance" />
                      <img src={day1Image4} alt="Fort Santiago courtyard" />
                    </div>

                    <h3>Rizal Park: A Tribute to a National Hero</h3>
                    <p>The day ended at Rizal Park, a beautiful urban park dedicated to the Philippines' national hero, José Rizal. The park's monuments and gardens provide a peaceful retreat in the heart of the city.</p>
                    <div className="blog-gallery">
                      <img src={day1Image5} alt="Rizal Park monument" />
                      <img src={day1Image6} alt="Rizal Park gardens" />
                    </div>

                    <h3>Memorable Moments</h3>
                    <p>Some highlights from the day:</p>
                    <ul>
                      <li>Learning about the Spanish colonial architecture in Intramuros</li>
                      <li>Walking through the historic chambers of Fort Santiago</li>
                      <li>Enjoying the peaceful atmosphere of Rizal Park</li>
                      <li>Capturing beautiful moments of Manila's heritage</li>
                    </ul>

                    <h3>More Photos</h3>
                    <div className="blog-gallery">
                      <img src={day1Image7} alt="Manila view" />
                      <img src={day1Image8} alt="Historical building" />
                      <img src={day1Image9} alt="Park scenery" />
                      <img src={day1Image10} alt="City landscape" />
                    </div>

                    <p>It was a day filled with history, culture, and beautiful sights. I'm looking forward to exploring more of Manila's treasures tomorrow!</p>
                  </div>
                </div>
              } />
              <Route path="day2" element={
                <div className="blog-content">
                  <SoundButton as="a" href="/blog" className="back-link" onClick={handleBackClick}>← Back</SoundButton>
                  <h2>Day 2: Exploring Olongapo's Rich History Through Art</h2>
                  <p className="blog-date">April 8, 2025</p>
                  <div className="blog-post">
                    <p>Today was a fascinating journey through Olongapo's history, as told through its remarkable paintings and artworks. The city's artistic heritage beautifully captures its transformation from a small fishing village to a modern urban center.</p>
                    
                    <h3>Historical Paintings of Olongapo</h3>
                    <p>The first part of our journey took us through a collection of historical paintings that depict Olongapo's early days. These artworks show the traditional way of life, the fishing communities, and the natural beauty of the area before modernization.</p>
                    <div className="blog-gallery">
                      <img src={day2Image1} alt="Historical painting of Olongapo" />
                      <img src={day2Image2} alt="Traditional fishing village scene" />
                      <img src={day2Image3} alt="Early settlement artwork" />
                    </div>

                    <h3>Artistic Evolution</h3>
                    <p>As we moved through the exhibition, we saw how the art evolved to reflect the changes in Olongapo's landscape and society. The paintings showed the transition from rural to urban, the influence of different cultures, and the city's growth over time.</p>
                    <div className="blog-gallery">
                      <img src={day2Image4} alt="Urban development artwork" />
                      <img src={day2Image5} alt="Cultural fusion painting" />
                      <img src={day2Image6} alt="Modern cityscape art" />
                    </div>

                    <h3>Subic Bay Connection</h3>
                    <p>The artworks also highlighted Olongapo's connection to Subic Bay, showing how the natural harbor influenced the city's development and became an integral part of its identity.</p>
                    <div className="blog-gallery">
                      <img src={day2Image7} alt="Subic Bay harbor painting" />
                      <img src={day2Image8} alt="Maritime history artwork" />
                      <img src={day2Image9} alt="Coastal community scene" />
                    </div>

                    <h3>Modern Interpretations</h3>
                    <p>The exhibition concluded with contemporary artworks that reinterpret Olongapo's history through modern artistic styles, showing how the city's past continues to inspire new generations of artists.</p>
                    <div className="blog-gallery">
                      <img src={day2Image10} alt="Contemporary historical art" />
                      <img src={day2Image11} alt="Modern interpretation of history" />
                    </div>

                    <h3>Highlights of the Day</h3>
                    <ul>
                      <li>Exploring the evolution of Olongapo through art</li>
                      <li>Understanding the city's transformation from fishing village to urban center</li>
                      <li>Appreciating the artistic representation of Subic Bay's influence</li>
                      <li>Discovering modern interpretations of historical events</li>
                    </ul>

                    <p>This artistic journey through Olongapo's history was both educational and inspiring. The paintings not only documented the city's past but also showed how art can preserve and celebrate cultural heritage.</p>
                  </div>
                </div>
              } />
              <Route path="day3" element={
                <div className="blog-content">
                  <SoundButton as="a" href="/blog" className="back-link" onClick={handleBackClick}>← Back</SoundButton>
                  <h2>Day 3: Exploring Manila's Cultural Heritage</h2>
                  <p className="blog-date">April 9, 2025</p>
                  <div className="blog-post">
                    <p>Today was dedicated to exploring Manila's rich cultural heritage through its museums and historical sites. The journey through time was both educational and fascinating.</p>
                    
                    <h3>National Museum Complex</h3>
                    <p>Our first stop was the National Museum Complex, where we explored various exhibits showcasing the Philippines' rich history and cultural heritage.</p>
                    <div className="blog-gallery">
                      <img src={day3Image1} alt="National Museum exterior" />
                      <img src={day3Image2} alt="Historical artifacts" />
                      <img src={day3Image3} alt="Cultural exhibits" />
                    </div>

                    <h3>Presidential Cars Museum</h3>
                    <p>Next, we visited the Presidential Cars Museum, which houses a collection of vehicles used by Philippine presidents throughout history.</p>
                    <div className="blog-gallery">
                      <img src={day3Image4} alt="Presidential vehicles" />
                    </div>

                    <h3>Manuel Quezon Memorial</h3>
                    <p>The day concluded with a visit to the Manuel Quezon Memorial, dedicated to the second President of the Philippines.</p>
                    <div className="blog-gallery">
                      <img src={day3Image5} alt="Quezon Memorial" />
                      <img src={day3Image6} alt="Historical exhibits" />
                      <img src={day3Image7} alt="Memorial grounds" />
                    </div>

                    <h3>Highlights of the Day</h3>
                    <ul>
                      <li>Exploring the National Museum's extensive collections</li>
                      <li>Learning about presidential history through vehicles</li>
                      <li>Understanding Manuel Quezon's contributions to the nation</li>
                      <li>Appreciating the preservation of cultural heritage</li>
                    </ul>

                    <p>Today's journey through Manila's cultural institutions provided a deeper understanding of the Philippines' rich history and the importance of preserving our heritage for future generations.</p>
                  </div>
                </div>
              } />
              <Route path="day4" element={
                <div className="blog-content">
                  <SoundButton as="a" href="/blog" className="back-link" onClick={handleBackClick}>← Back</SoundButton>
                  <h2>Day 4: Exploring High-Tech Innovations</h2>
                  <p className="blog-date">April 10, 2025</p>
                  <div className="blog-post">
                    <p>Today was dedicated to exploring the cutting-edge technology and innovations that are shaping the future of the Philippines.</p>
                    
                    <h3>High-Tech Exhibition</h3>
                    <p>We visited a high-tech exhibition showcasing the latest advancements in various fields, from artificial intelligence to sustainable energy solutions.</p>
                    <div className="blog-gallery">
                      <img src={day4Image1} alt="High-tech exhibit" />
                      <img src={day4Image2} alt="Innovation showcase" />
                      <img src={day4Image3} alt="Technology display" />
                    </div>

                    <h3>Interactive Demonstrations</h3>
                    <p>The exhibition featured interactive demonstrations that allowed visitors to experience the technology firsthand.</p>
                    <div className="blog-gallery">
                      <img src={day4Image4} alt="Interactive tech demo" />
                      <img src={day4Image5} alt="Hands-on experience" />
                      <img src={day4Image6} alt="Technology in action" />
                    </div>

                    <h3>Highlights of the Day</h3>
                    <ul>
                      <li>Exploring cutting-edge technology</li>
                      <li>Participating in interactive demonstrations</li>
                      <li>Learning about future innovations</li>
                      <li>Understanding the impact of technology on society</li>
                    </ul>

                    <p>Today's exploration of high-tech innovations was both exciting and educational, showing how technology continues to transform our world and shape our future.</p>
                  </div>
                </div>
              } />
              <Route path="day5" element={
                <div className="blog-content">
                  <SoundButton as="a" href="/blog" className="back-link" onClick={handleBackClick}>← Back</SoundButton>
                  <h2>Day 5: Exploring Urban Transportation</h2>
                  <p className="blog-date">April 11, 2025</p>
                  <div className="blog-post">
                    <p>Today was dedicated to exploring Manila's urban transportation systems and traffic engineering solutions.</p>
                    
                    <h3>LRT System</h3>
                    <p>We started with a tour of the Light Rail Transit (LRT) system, one of Manila's primary modes of public transportation.</p>
                    <div className="blog-gallery">
                      <img src={day5Image1} alt="LRT station" />
                      <img src={day5Image2} alt="Train interior" />
                      <img src={day5Image3} alt="Platform view" />
                    </div>

                    <h3>Traffic Engineering</h3>
                    <p>Next, we visited traffic management centers and learned about the city's traffic engineering solutions.</p>
                    <div className="blog-gallery">
                      <img src={day5Image8} alt="Traffic control center" />
                      <img src={day5Image9} alt="Traffic management" />
                    </div>

                    <h3>More LRT Views</h3>
                    <div className="blog-gallery">
                      <img src={day5Image4} alt="LRT tracks" />
                      <img src={day5Image5} alt="Station architecture" />
                      <img src={day5Image6} alt="Passenger flow" />
                      <img src={day5Image7} alt="Urban landscape" />
                    </div>

                    <h3>Highlights of the Day</h3>
                    <ul>
                      <li>Understanding the LRT system's operation</li>
                      <li>Learning about traffic management solutions</li>
                      <li>Exploring urban transportation infrastructure</li>
                      <li>Observing passenger flow and station design</li>
                    </ul>

                    <p>Today's exploration of Manila's transportation systems provided valuable insights into how the city manages its urban mobility challenges and plans for future improvements.</p>
                  </div>
                </div>
              } />
              <Route path="day6" element={
                <div className="blog-content">
                  <SoundButton as="a" href="/blog" className="back-link" onClick={handleBackClick}>← Back</SoundButton>
                  <h2>Day 6: Exploring Baguio's Cultural and Natural Treasures</h2>
                  <p className="blog-date">April 12, 2025</p>
                  <div className="blog-post">
                    <p>Today was a wonderful exploration of Baguio's unique blend of cultural heritage and natural beauty.</p>
                    
                    <h3>Strawberry Farm</h3>
                    <p>Our day began at the Strawberry Farm, where we learned about local agriculture and enjoyed the fresh produce.</p>
                    <div className="blog-gallery">
                      <img src={day6Image1} alt="Strawberry fields" />
                    </div>

                    <h3>Chinese Bell Church</h3>
                    <p>Next, we visited the Chinese Bell Church, a beautiful temple that showcases the city's cultural diversity.</p>
                    <div className="blog-gallery">
                      <img src={day6Image2} alt="Bell Church entrance" />
                      <img src={day6Image3} alt="Temple architecture" />
                      <img src={day6Image4} alt="Cultural artifacts" />
                    </div>

                    <h3>Minesview Park</h3>
                    <p>We then visited Minesview Park, which offers stunning panoramic views of the surrounding mountains.</p>
                    <div className="blog-gallery">
                      <img src={day6Image7} alt="Minesview panorama" />
                      <img src={day6Image8} alt="Mountain views" />
                    </div>

                    <h3>Philippine Military Academy</h3>
                    <p>Our final stop was the Philippine Military Academy, where we learned about its history and importance.</p>
                    <div className="blog-gallery">
                      <img src={day6Image9} alt="PMA campus" />
                      <img src={day6Image10} alt="Academy grounds" />
                    </div>

                    <h3>More Views of Chinese Bell Church</h3>
                    <div className="blog-gallery">
                      <img src={day6Image5} alt="Temple details" />
                      <img src={day6Image6} alt="Cultural elements" />
                    </div>

                    <h3>Highlights of the Day</h3>
                    <ul>
                      <li>Experiencing local agriculture at the Strawberry Farm</li>
                      <li>Exploring the cultural heritage at Chinese Bell Church</li>
                      <li>Enjoying breathtaking views at Minesview Park</li>
                      <li>Learning about military history at PMA</li>
                    </ul>

                    <p>Today's journey through Baguio's diverse attractions provided a perfect blend of cultural experiences and natural beauty, making it a memorable day of exploration.</p>
                  </div>
                </div>
              } />
              <Route path="day7" element={
                <div className="blog-content">
                  <SoundButton as="a" href="/blog" className="back-link" onClick={handleBackClick}>← Back</SoundButton>
                  <h2>Day 7: Farewell to Luzon - A Journey to Remember</h2>
                  <p className="blog-date">April 13, 2025</p>
                  <div className="blog-post">
                    <p>As our week-long journey through Luzon comes to an end, we take time to reflect on the incredible experiences and memories we've gathered.</p>
                    
                    <h3>Final Reflections</h3>
                    <p>Looking back at our week of exploration, we've witnessed the rich tapestry of Luzon's history, culture, and natural beauty. From the historical walls of Intramuros to the modern innovations in Manila, each day brought new discoveries and insights.</p>
                    <div className="blog-gallery">
                      <img src={day7Image1} alt="Scenic view" />
                    </div>

                    <h3>Memorable Highlights</h3>
                    <p>Some of the most memorable moments from our journey:</p>
                    <ul>
                      <li>Exploring the historical sites of Manila</li>
                      <li>Discovering Olongapo's artistic heritage</li>
                      <li>Experiencing Baguio's cultural treasures</li>
                      <li>Learning about urban development and transportation</li>
                      <li>Witnessing the blend of tradition and modernity</li>
                    </ul>
                    <div className="blog-gallery">
                      <img src={day7Image2} alt="Cultural landmark" />
                    </div>

                    <h3>Final Moments</h3>
                    <p>As we prepare to leave Luzon, we take one last look at the beautiful landscapes and vibrant cities that have been our home for the past week. The memories we've created will stay with us forever.</p>
                    <div className="blog-gallery">
                      <img src={day7Image3} alt="Farewell view" />
                    </div>

                    <h3>Looking Forward</h3>
                    <p>While this marks the end of our Luzon tour, it's also the beginning of new adventures. The experiences and knowledge we've gained will inspire future journeys and deeper explorations of the Philippines' rich heritage.</p>

                    <p>Thank you for joining us on this incredible journey through Luzon. Until our next adventure!</p>
                  </div>
                </div>
              } />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

