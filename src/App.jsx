import { Routes, Route, useLocation } from "react-router-dom"
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

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

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
                  <Skills />
                  <Projects />
                  <CareerGoals />
                  <PersonalTouch />
                  <CallToAction />
                </div>
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/day1" element={
              <div className="blog-content">
                <Link to="/blog">← Back</Link>
                <h2>Day 1: Exploring Manila's Historical Gems</h2>
                <p className="blog-date">March 15, 2024</p>
                <div className="blog-post">
                  <p>Today was an exciting day exploring the rich history of Manila! I visited three iconic landmarks: Intramuros, Fort Santiago, and Rizal Park. Each location offered a unique glimpse into the Philippines' fascinating past.</p>
                  
                  <h3>Intramuros: The Walled City</h3>
                  <p>My journey began in Intramuros, the historic walled area that was the center of Spanish colonial rule. Walking through its cobblestone streets felt like stepping back in time.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day1/day1 (1).jpg" alt="Intramuros view" />
                    <img src="/src/assets/day1/day1 (2).jpg" alt="Intramuros architecture" />
                  </div>

                  <h3>Fort Santiago: A Historical Fortress</h3>
                  <p>Next, I visited Fort Santiago, a citadel built by Spanish navigator and governor Miguel López de Legazpi. The fort's walls and dungeons tell stories of the past, including its role during World War II.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day1/day1 (3).jpg" alt="Fort Santiago entrance" />
                    <img src="/src/assets/day1/day1 (4).jpg" alt="Fort Santiago courtyard" />
                  </div>

                  <h3>Rizal Park: A Tribute to a National Hero</h3>
                  <p>The day ended at Rizal Park, a beautiful urban park dedicated to the Philippines' national hero, José Rizal. The park's monuments and gardens provide a peaceful retreat in the heart of the city.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day1/day1 (5).jpg" alt="Rizal Park monument" />
                    <img src="/src/assets/day1/day1 (6).jpg" alt="Rizal Park gardens" />
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
                    <img src="/src/assets/day1/day1 (7).jpg" alt="Manila view" />
                    <img src="/src/assets/day1/day1 (8).jpg" alt="Historical building" />
                    <img src="/src/assets/day1/day1 (9).jpg" alt="Park scenery" />
                    <img src="/src/assets/day1/day1 (10).jpg" alt="City landscape" />
                  </div>

                  <p>It was a day filled with history, culture, and beautiful sights. I'm looking forward to exploring more of Manila's treasures tomorrow!</p>
                </div>
              </div>
            } />
            <Route path="/blog/day2" element={
              <div className="blog-content">
                <Link to="/blog">← Back</Link>
                <h2>Day 2: Exploring Olongapo's Rich History Through Art</h2>
                <p className="blog-date">April 8, 2025</p>
                <div className="blog-post">
                  <p>Today was a fascinating journey through Olongapo's history, as told through its remarkable paintings and artworks. The city's artistic heritage beautifully captures its transformation from a small fishing village to a modern urban center.</p>
                  
                  <h3>Historical Paintings of Olongapo</h3>
                  <p>The first part of our journey took us through a collection of historical paintings that depict Olongapo's early days. These artworks show the traditional way of life, the fishing communities, and the natural beauty of the area before modernization.</p>
                  <div className="blog-gallery">
                    <img src="/assets/day2/olongapo history (1).jpg" alt="Traditional Olongapo fishing village painting" />
                    <img src="/assets/day2/olongapo history (2).jpg" alt="Early Olongapo landscape artwork" />
                  </div>

                  <h3>Spanish Colonial Period</h3>
                  <p>Next, we explored paintings from the Spanish colonial period, which show the influence of Spanish architecture and culture on the city. These artworks capture the blend of indigenous and Spanish elements that shaped Olongapo's identity.</p>
                  <div className="blog-gallery">
                    <img src="/assets/day2/olongapo history (5).jpg" alt="Spanish colonial architecture painting" />
                    <img src="/assets/day2/olongapo history (6).jpg" alt="Colonial period street scene" />
                  </div>

                  <h3>American Period and World War II</h3>
                  <p>The collection also includes powerful paintings depicting Olongapo during the American period and World War II. These artworks tell the story of the city's strategic importance and the impact of these historical events on its development.</p>
                  <div className="blog-gallery">
                    <img src="/assets/day2/olongapo history (3).jpg" alt="World War II historical painting" />
                    <img src="/assets/day2/olongapo history (4).jpg" alt="American period artwork" />
                  </div>

                  <h3>Modern Communication Technologies</h3>
                  <p>Subic Bay's modern communication infrastructure plays a crucial role in maritime operations. The port utilizes advanced technologies to maintain seamless communication with cargo ships and ensure efficient port operations.</p>
                  <div className="blog-gallery">
                    <img src="/assets/day2/subic communitation  (5).jpg" alt="Modern communication tower" />
                    <img src="/assets/day2/subic communitation  (1).jpg" alt="Port communication center" />
                  </div>

                  <h3>Key Communication Systems</h3>
                  <p>Some of the advanced communication technologies used in Subic Bay:</p>
                  <ul>
                    <li>VHF Radio Communication Systems for ship-to-shore communication</li>
                    <li>Automatic Identification System (AIS) for vessel tracking</li>
                    <li>Digital Port Management Systems for cargo coordination</li>
                    <li>Satellite Communication for long-range vessel contact</li>
                    <li>Emergency Communication Networks for maritime safety</li>
                  </ul>

                  <h3>Port Operations Center</h3>
                  <p>The Port Operations Center serves as the nerve center for all maritime communications. Here, operators monitor vessel movements, coordinate cargo operations, and maintain constant contact with ships in the bay.</p>
                  <div className="blog-gallery">
                    <img src="/assets/day2/subic communitation  (2).jpg" alt="Operations control room" />
                    <img src="/assets/day2/subic communitation  (3).jpg" alt="Communication equipment" />
                  </div>

                  <h3>More Communication Infrastructure</h3>
                  <div className="blog-gallery">
                    <img src="/assets/day2/subic communitation  (4).jpg" alt="Communication antenna array" />
                  </div>

                  <p>Subic Bay's modern communication infrastructure ensures safe and efficient maritime operations, connecting the port with cargo ships from around the world and maintaining its position as a key maritime hub in the region.</p>
                </div>
              </div>
            } />
            <Route path="/blog/day3" element={
              <div className="blog-content">
                <Link to="/blog">← Back</Link>
                <h2>Day 3: Exploring Historical Landmarks and Museums</h2>
                <p className="blog-date">April 9, 2025</p>
                <div className="blog-post">
                  <p>Today's journey took us through some of Manila's most significant historical sites and museums, offering a deeper understanding of the Philippines' rich heritage and political history.</p>
                  
                  <h3>Manuel L. Quezon Memorial Shrine</h3>
                  <p>Our first stop was the final resting place of Manuel L. Quezon, the second President of the Philippines and the first President of the Commonwealth. The memorial shrine, located in Quezon City, stands as a testament to his contributions to the nation's development.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day3/manuel quezon (1).jpg" alt="Quezon Memorial Shrine exterior" />
                    <img src="/src/assets/day3/manuel quezon (3).jpg" alt="Quezon's tomb" />
                  </div>

                  <h3>National Museum of the Philippines</h3>
                  <p>The National Museum complex provided a comprehensive journey through Philippine history, art, and culture. The museum's collections showcase the country's rich heritage from prehistoric times to the present day.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day3/National meuseum (2).jpg" alt="National Museum building" />
                    <img src="/src/assets/day3/National meuseum (4).jpg" alt="Historical artifacts display" />
                  </div>

                  <h3>Presidential Cars Museum</h3>
                  <p>The Presidential Cars Museum offered a unique glimpse into the country's political history through its collection of official vehicles used by Philippine presidents. Each car tells a story of its era and the leaders who used them.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day3/Presidential cars.jpg" alt="Presidential car collection" />
                  </div>

                  <h3>Notable Highlights</h3>
                  <ul>
                    <li>The impressive architecture of the Quezon Memorial Shrine</li>
                    <li>Rare historical artifacts at the National Museum</li>
                    <li>Vintage presidential vehicles and their stories</li>
                    <li>Interactive exhibits showcasing Philippine history</li>
                    <li>Beautiful museum architecture and design</li>
                  </ul>

                  <h3>More Museum Exhibits</h3>
                  <div className="blog-gallery">
                    <img src="/src/assets/day3/National meuseum (1).jpg" alt="Museum interior" />
                    <img src="/src/assets/day3/National meuseum (3).jpg" alt="Historical display" />
                    <img src="/src/assets/day3/National meuseum (5).jpg" alt="Art exhibit" />
                  </div>

                  <p>Today's visits provided a fascinating insight into the Philippines' political history and cultural heritage. From the solemnity of Quezon's memorial to the grandeur of the National Museum and the unique collection of presidential vehicles, each site offered a different perspective on the nation's journey through time.</p>
                </div>
              </div>
            } />
            <Route path="/blog/day4" element={
              <div className="blog-content">
                <Link to="/blog">← Back</Link>
                <h2>Day 4: Exploring Hytec Power Industry's Advanced Robotics</h2>
                <p className="blog-date">April 10, 2025</p>
                <div className="blog-post">
                  <p>Today's visit to Hytec Power Industry provided an exciting glimpse into the future of manufacturing and automation. The facility showcased cutting-edge robotics and advanced machinery that are revolutionizing the power industry.</p>
                  
                  <h3>Industrial Robotics Showcase</h3>
                  <p>The first section featured state-of-the-art industrial robots designed for precision manufacturing and assembly. These robotic systems demonstrate the company's commitment to automation and efficiency in power equipment production.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day4/Hightech (1).jpg" alt="Industrial robot in operation" />
                    <img src="/src/assets/day4/Hightech (2).jpg" alt="Robotic assembly line" />
                  </div>

                  <h3>Advanced Manufacturing Systems</h3>
                  <p>Hytec's manufacturing systems combine robotics with sophisticated control systems to ensure precision and quality in power equipment production. The integration of AI and machine learning enables these systems to optimize production processes.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day4/Hightech (3).jpg" alt="Automated manufacturing system" />
                    <img src="/src/assets/day4/Hightech (4).jpg" alt="Precision control interface" />
                  </div>

                  <h3>Innovative Power Equipment</h3>
                  <p>The facility also showcased specialized machinery designed for power generation and distribution. These advanced systems demonstrate Hytec's expertise in developing efficient and reliable power solutions.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day4/Hightech (5).jpg" alt="Power generation equipment" />
                    <img src="/src/assets/day4/Hightech (6).jpg" alt="Distribution system components" />
                  </div>

                  <h3>Key Technological Features</h3>
                  <ul>
                    <li>AI-powered robotic systems for precision manufacturing</li>
                    <li>Automated quality control and inspection systems</li>
                    <li>Advanced power generation and distribution equipment</li>
                    <li>Real-time monitoring and control systems</li>
                    <li>Energy-efficient manufacturing processes</li>
                  </ul>

                  <p>Our visit to Hytec Power Industry provided valuable insights into how advanced robotics and automation are transforming the power equipment manufacturing sector. The integration of cutting-edge technology with traditional manufacturing processes demonstrates the company's commitment to innovation and efficiency in the power industry.</p>
                </div>
              </div>
            } />
            <Route path="/blog/day5" element={
              <div className="blog-content">
                <Link to="/blog">← Back</Link>
                <h2>Day 5: Exploring Manila's Transportation Infrastructure</h2>
                <p className="blog-date">April 11, 2025</p>
                <div className="blog-post">
                  <p>Today's journey took us through Manila's modern transportation systems, from the Light Rail Transit (LRT) to the Traffic Engineering Center. These facilities showcase the city's commitment to efficient urban mobility and traffic management.</p>
                  
                  <h3>Light Rail Transit (LRT) System</h3>
                  <p>The LRT system serves as a vital artery of Manila's public transportation network. Our visit included a comprehensive tour of the facilities, showcasing the system's operations and maintenance procedures.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day5/lrt (1).jpg" alt="LRT station platform" />
                    <img src="/src/assets/day5/lrt (2).jpg" alt="LRT train interior" />
                  </div>

                  <h3>LRT Operations and Control</h3>
                  <p>The LRT's sophisticated control systems ensure safe and efficient train operations. Advanced signaling and communication technologies help maintain precise schedules and passenger safety.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day5/lrt (3).jpg" alt="Control room operations" />
                    <img src="/src/assets/day5/lrt (4).jpg" alt="Signaling system" />
                  </div>

                  <h3>Traffic Engineering Center</h3>
                  <p>The Traffic Engineering Center plays a crucial role in managing Manila's complex road network. The facility uses state-of-the-art technology to monitor and control traffic flow throughout the city.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day5/traffic engineering (1).jpg" alt="Traffic control center" />
                    <img src="/src/assets/day5/traffic engineering (2).jpg" alt="Traffic monitoring system" />
                  </div>

                  <h3>More LRT Facilities</h3>
                  <div className="blog-gallery">
                    <img src="/src/assets/day5/lrt (5).jpg" alt="Maintenance facility" />
                    <img src="/src/assets/day5/lrt (6).jpg" alt="Train inspection area" />
                    <img src="/src/assets/day5/lrt (7).jpg" alt="Technical equipment" />
                  </div>

                  <h3>Key Features of Manila's Transportation System</h3>
                  <ul>
                    <li>Integrated LRT operations and maintenance systems</li>
                    <li>Advanced traffic monitoring and control technologies</li>
                    <li>Real-time passenger information systems</li>
                    <li>Efficient maintenance and inspection procedures</li>
                    <li>Modern safety and security measures</li>
                  </ul>

                  <p>Our visit to these transportation facilities provided valuable insights into how Manila manages its complex urban mobility needs. The integration of modern technology with efficient operations demonstrates the city's commitment to providing reliable and safe transportation services for its residents and visitors.</p>
                </div>
              </div>
            } />
            <Route path="/blog/day6" element={
              <div className="blog-content">
                <Link to="/blog">← Back</Link>
                <h2>Day 6: Exploring Baguio's Cultural and Natural Treasures</h2>
                <p className="blog-date">April 12, 2025</p>
                <div className="blog-post">
                  <p>Today's journey took us through some of Baguio's most iconic attractions, from the famous Strawberry Farm to the historic Philippine Military Academy. Each location offered unique insights into the city's rich culture and natural beauty.</p>
                  
                  <h3>Strawberry Farm</h3>
                  <p>Our first stop was the renowned Strawberry Farm in La Trinidad. This agricultural wonderland offers visitors the chance to pick their own strawberries and experience the region's thriving agricultural industry firsthand.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day6/strawberry farm.jpg" alt="Strawberry fields in La Trinidad" />
                  </div>

                  <h3>Chinese Bell Church</h3>
                  <p>The Chinese Bell Church is a unique blend of Chinese and Filipino architecture, featuring beautiful gardens and intricate designs. This peaceful sanctuary offers a glimpse into the cultural diversity of Baguio.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day6/chinese bell church (1).jpg" alt="Chinese Bell Church entrance" />
                    <img src="/src/assets/day6/chinese bell church (2).jpg" alt="Temple architecture" />
                  </div>

                  <h3>Minesview Park</h3>
                  <p>Minesview Park provided breathtaking panoramic views of the surrounding mountains and mining areas. The park's observation deck offers one of the best vantage points to appreciate Baguio's natural beauty.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day6/minesview (1).jpg" alt="Minesview panorama" />
                    <img src="/src/assets/day6/minesview (2).jpg" alt="Mountain view" />
                  </div>

                  <h3>Philippine Military Academy (PMA)</h3>
                  <p>The Philippine Military Academy, known as the country's premier military institution, impressed us with its grand architecture and rich history. The campus showcases the discipline and excellence of the Philippine military.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day6/PMA (1).jpg" alt="PMA main building" />
                    <img src="/src/assets/day6/PMA (2).jpg" alt="Academy grounds" />
                  </div>

                  <h3>More Chinese Bell Church Views</h3>
                  <div className="blog-gallery">
                    <img src="/src/assets/day6/chinese bell church (3).jpg" alt="Garden view" />
                    <img src="/src/assets/day6/chinese bell church (4).jpg" alt="Temple details" />
                    <img src="/src/assets/day6/chinese bell church (5).jpg" alt="Cultural elements" />
                  </div>

                  <h3>Highlights of the Day</h3>
                  <ul>
                    <li>Fresh strawberry picking experience at the farm</li>
                    <li>Cultural immersion at the Chinese Bell Church</li>
                    <li>Stunning mountain views from Minesview Park</li>
                    <li>Historical insights at the Philippine Military Academy</li>
                    <li>Beautiful blend of natural and cultural attractions</li>
                  </ul>

                  <p>Our day exploring these diverse attractions provided a perfect balance of natural beauty, cultural experiences, and historical insights. Each location offered unique perspectives on Baguio's rich heritage and stunning landscapes, making it a truly memorable day of exploration.</p>
                </div>
              </div>
            } />
            <Route path="/blog/day7" element={
              <div className="blog-content">
                <Link to="/blog">← Back</Link>
                <h2>Day 7: Farewell to Luzon - A Journey to Remember</h2>
                <p className="blog-date">April 13, 2025</p>
                <div className="blog-post">
                  <p>As our week-long journey through Luzon comes to an end, we take a moment to reflect on the incredible experiences and memories we've gathered. From Manila's historical landmarks to Baguio's natural wonders, each day has been filled with discovery and appreciation for the Philippines' rich heritage.</p>
                  
                  <h3>Final Reflections</h3>
                  <p>Our last day was spent revisiting some of our favorite moments and capturing final memories of this beautiful island. The journey has been a perfect blend of history, culture, technology, and natural beauty.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day7/day7 (1).jpg" alt="Scenic view of Luzon" />
                    <img src="/src/assets/day7/day7 (2).jpg" alt="Cultural landmark" />
                  </div>

                  <h3>Memorable Highlights from Our Journey</h3>
                  <ul>
                    <li>Exploring Manila's historical gems in Intramuros and Fort Santiago</li>
                    <li>Discovering Olongapo's rich history through art and communication</li>
                    <li>Visiting significant landmarks like Manuel Quezon's grave and the National Museum</li>
                    <li>Experiencing Hytec Power Industry's advanced robotics</li>
                    <li>Learning about Manila's transportation systems at the LRT and Traffic Engineering Center</li>
                    <li>Enjoying Baguio's natural beauty at the Strawberry Farm and Minesview Park</li>
                    <li>Appreciating cultural diversity at the Chinese Bell Church</li>
                    <li>Gaining insights into military excellence at the Philippine Military Academy</li>
                  </ul>

                  <h3>Final Moments</h3>
                  <p>As we prepare to leave Luzon, we're filled with gratitude for the warm hospitality we've received and the wealth of knowledge we've gained. The island's unique blend of tradition and modernity, nature and technology, has left an indelible mark on our journey.</p>
                  <div className="blog-gallery">
                    <img src="/src/assets/day7/day7 (3).jpg" alt="Farewell to Luzon" />
                  </div>

                  <h3>Looking Forward</h3>
                  <p>This journey through Luzon has been more than just a tour; it's been an educational experience that has deepened our understanding of the Philippines' rich history, vibrant culture, and technological progress. We leave with not just photographs, but with stories, knowledge, and memories that will last a lifetime.</p>

                  <p>As we say goodbye to Luzon, we carry with us the warmth of its people, the beauty of its landscapes, and the richness of its heritage. Until we meet again, thank you for the unforgettable experience!</p>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

