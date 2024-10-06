import Head from 'next/head';
import { useState } from 'react'; 
import styles from '../styles/Home.module.css';

export default function Home() {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>My Project</title>
      </Head>

      <h2>LOGO</h2>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="#"><img src="Logo.png" alt="Logo" className={styles.icon}/></a>
          <div className={styles.icons}>
            <a href="#"><img src="search-normal.png" alt="Search" className={styles.icon}/></a>
            <a href="#"><img src="heart.png" alt="Favorites" className={styles.icon}/></a>
            <a href="#" aria-label="View bag"><img src="bag.png" alt="Bag Icon" className={styles.icon} /></a>
            <a href="#"><img src="user.png" alt="User" className={styles.icon}/></a>
            <select className={styles.languageSelect}>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
          </div>
        </div>
        <nav className={styles.navbar}>
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className={styles.head}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />sed do eiusmod tempor incididunt ut labore.</p>
      </div>

      <main className={styles.main}>
        <div className={styles.textAbove}>
          <h2>3425 ITEMS</h2>
          <button onClick={toggleFilter}>{filterVisible ? "HIDE FILTER" : "SHOW FILTER"}</button>
          <p>RECOMMENDED</p>
        </div>
        
        <div className={`${styles.filterMenu} ${filterVisible ? styles.visible : styles.hidden}`}>
          <p>3425 ITEMS</p>
          <input type="checkbox" id="customizable" name="customizable" />
          <label htmlFor="customizable">CUSTOMIZABLE</label>
          <div>
            <label>IDEAL FOR:</label>
            <select>
              <option value="all">All</option>
            </select>
          </div>
          <div>
            <label>OCCASION:</label>
            <select>
              <option value="all">All</option>
            </select>
          </div>
          <div>
            <label>WORK:</label>
            <select>
              <option value="all">All</option>
            </select>
          </div>
          <div>
            <label>FABRIC:</label>
            <select>
              <option value="all">All</option>
            </select>
          </div>
        </div>

        <div className={styles.imageContainer}>
          {[...Array(17)].map((_, index) => (
            <div key={index} className={styles.imageBox}>
              <div className={styles.imagePlaceholder}>Image {index + 1}</div>
              <p className={styles.imageText}>Product Name</p>
              <p className={styles.imageText}>Sign in or Create an account to see pricing</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettà muse.</p>
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
        <div className={styles.footerSection}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
        <div className={styles.footerSection}>
          <h4>CURRENCY</h4>
          <p>USD</p>
          <p>Transactions will be completed in Euros.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>mettà muse</h4>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Stories</a></p>
          <p><a href="#">Artisans</a></p>
          <p><a href="#">Boutiques</a></p>
          <p><a href="#">Contact Us</a></p>
          <p><a href="#">EU Compliances Docs</a></p>
        </div>
        <div className={styles.footerSection}>
          <h4>QUICK LINKS</h4>
          <p><a href="#">Orders & Shipping</a></p>
          <p><a href="#">Join/Login as a Seller</a></p>
          <p><a href="#">Payment & Pricing</a></p>
          <p><a href="#">Return & Refunds</a></p>
          <p><a href="#">FAQs</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms & Conditions</a></p>
        </div>
        <div className={styles.footerSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/images/linkedin.svg" alt="LinkedIn" /></a>
            <a href="#"><img src="/images/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>mettà muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <img src="/images/googlepay.svg" alt="Google Pay" />
            <img src="/images/mastercard.svg" alt="Mastercard" />
            <img src="/images/paypal.svg" alt="PayPal" />
            <img src="/images/amex.svg" alt="American Express" />
            <img src="/images/applepay.svg" alt="Apple Pay" />
          </div>
        </div>
        <p>© 2024 My Project</p>
      </footer>
    </div>
  );
}
