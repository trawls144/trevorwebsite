import React from 'react';
import Link from 'next/link';
import './styles/styles.css';
import './styles/responsive.css';
import './styles/enhancements.css';
import './styles/animations.css';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <Link href="/" className="gradient-text-animated">Trevor Rawls</Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/" className="active animated-underline">Home</Link></li>
              <li><Link href="/experience" className="animated-underline">Experience</Link></li>
              <li><Link href="/#about" className="animated-underline">About</Link></li>
              <li><Link href="/ask-trevor-bot" className="contact-button button-glow">Talk to Trevor Bot</Link></li>
            </ul>
            <div className="hamburger" aria-label="Menu" role="button" tabIndex={0}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero bg-pattern">
        <div className="container">
          <div className="hero-content">
            <h1 className="gradient-text-animated typing-cursor">Trevor Rawls</h1>
            <h2>Digital Marketing Professional</h2>
            <p className="hero-description">
              Driving growth through data-driven marketing strategies and innovative campaign optimization.
            </p>
            <p>I created this website using AI tools and deployed with Vercel!</p>
            <p>I'm excited about the future of AI and how we can leverage it to create awesome things &#x1F60A;.</p>
            <div className="hero-buttons">
              <a href="#experience" className="primary-button button-glow">View Experience</a>
              <a href="#contact" className="secondary-button button-glow">Get in Touch</a>
              <Link href="/ask-trevor-bot" className="tertiary-button button-glow">Talk to Trevor Bot</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="gradient-circle float-element"></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="mouse"></div>
        </div>
      </section>

      <section id="about" className="about dots-pattern">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-border gradient-text-animated">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi I'm Trevor! I graduated in 2008 from Central Michigan University during the start of the great recession with a degree in Finance. Needless to say, not many people were looking for finance new grads, so I spent a year with Americorps VISTA and worked at Big Brothers Big Sisters of Colorado.
              </p>
              <p>
                From there I became interested in digital marketing, data and analytics and have grown into a seasoned digital marketing professional. My career has spanned various industries and roles, allowing me to develop expertise in campaign optimization, user acquisition, and data-driven decision making.
              </p>
              <p>
                As a marketing professional with a proven track record of success, I have honed my skills in collaborating with cross-functional teams to drive revenue growth and increase customer engagement. My approach to decision-making is rooted in data and insights, allowing me to make informed choices and drive meaningful results.
              </p>
            </div>
            <div className="skills">
              <h3 className="gradient-text-animated">Core Skills</h3>
              <div className="skill-grid">
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Digital Advertising</div>
                  <div className="skill-years gradient-text-animated">10+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Growth Marketing</div>
                  <div className="skill-years gradient-text-animated">8+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">User Acquisition</div>
                  <div className="skill-years gradient-text-animated">10+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Campaign Optimization</div>
                  <div className="skill-years gradient-text-animated">10+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Data Analysis</div>
                  <div className="skill-years gradient-text-animated">15+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Team Leadership</div>
                  <div className="skill-years gradient-text-animated">8+ years</div>
                </div>
              </div>
              
              <h3 className="gradient-text-animated">Platforms</h3>
              <div className="skill-grid">
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Google Ads</div>
                  <div className="skill-years gradient-text-animated">15+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Meta Ads</div>
                  <div className="skill-years gradient-text-animated">8+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Microsoft Ads</div>
                  <div className="skill-years gradient-text-animated">8+ years</div>
                </div>
                <div className="skill-item card-hover-effect">
                  <div className="skill-name">Apple Search Ads</div>
                  <div className="skill-years gradient-text-animated">4+ years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience section-transition">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-border gradient-text-animated">Professional Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="experience-grid">
            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/activecampaign.svg" alt="ActiveCampaign Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Demand Generation Marketing Lead, Postmark</h3>
                <div className="company-info">
                  <span className="company-name">ActiveCampaign</span>
                  <span className="date-range">August 2023 - Present</span>
                </div>
                <p className="experience-description">
                  Leading demand generation strategy and execution for Postmark, a transactional email service within ActiveCampaign.
                </p>
                <Link href="/companies/activecampaign" className="read-more animated-underline">Read More</Link>
              </div>
            </div>

            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/mailgun.svg" alt="Mailgun Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Performance Marketing Manager - Team Lead</h3>
                <div className="company-info">
                  <span className="company-name">Mailgun by Sinch</span>
                  <span className="date-range">January 2022 - August 2023</span>
                </div>
                <p className="experience-description">
                  Led performance marketing initiatives and managed a team of digital marketers focused on driving user acquisition.
                </p>
                <Link href="/companies/mailgun" className="read-more animated-underline">Read More</Link>
              </div>
            </div>

            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/emailonacid.svg" alt="Email on Acid Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Digital Marketing Manager</h3>
                <div className="company-info">
                  <span className="company-name">Email on Acid</span>
                  <span className="date-range">December 2020 - January 2022</span>
                </div>
                <p className="experience-description">
                  Managed comprehensive digital marketing strategy including paid search, social media advertising, and email marketing campaigns.
                </p>
                <Link href="/companies/emailonacid" className="read-more animated-underline">Read More</Link>
              </div>
            </div>

            <div className="experience-card card-hover-effect card-3d">
              <div className="company-logo">
                <img src="/images/mersive.svg" alt="Mersive Logo" width={100} height={100} />
              </div>
              <div className="experience-content">
                <h3>Demand Generation Manager</h3>
                <div className="company-info">
                  <span className="company-name">Mersive Technologies</span>
                  <span className="date-range">September 2020 - December 2020</span>
                </div>
                <p className="experience-description">
                  Led demand generation efforts through digital advertising and email marketing campaigns for a B2B technology company.
                </p>
                <Link href="/companies/mersive" className="read-more animated-underline">Read More</Link>
              </div>
            </div>
          </div>
          <div className="view-all-container">
            <Link href="/experience" className="view-all-button button-glow">View All Experience</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact bg-pattern">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-border gradient-text-animated">Get In Touch</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="gradient-text-animated">Contact Information</h3>
              <p>Feel free to reach out if you'd like to discuss potential opportunities or just want to connect.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:trevor.rawls@gmail.com" className="contact-value animated-underline">trevor.rawls@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+13033308336" className="contact-value animated-underline">(303) 330-8336</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span className="contact-value">Denver, Colorado</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/trevorrawls" target="_blank" rel="noopener noreferrer" className="contact-value animated-underline">linkedin.com/in/trevorrawls</a>
                </div>
              </div>
            </div>
            <div className="contact-form glow-effect">
              <h3 className="gradient-text-animated">Send a Message</h3>
              <form action="https://trawls.activehosted.com/proc.php" method="POST" id="_form_3_" className="_form _form_3 _inline-form  _dark" noValidate>
                <input type="hidden" name="u" value="3" />
                <input type="hidden" name="f" value="3" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input type="hidden" name="or" value="f3c3a1c0c0c0c0c0c0c0c0c0c0c0c0c0" />
                <input type="hidden" name="redirect" value="https://trevorrawls.com/thanks-for-contacting-me" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="fullname" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="field[9]" required></textarea>
                </div>
                <div className="_form_element _x00000000 _full_width">
                  <div className="_form-title"></div>
                  <div className="_form_element _x00000000 _full_width">
                    <div className="_html-code">
                      <p>*Required Field</p>
                    </div>
                  </div>
                </div>
                <button type="submit" className="submit-button button-glow">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 