import tiger from "./tiger.png";
import map from "./map.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="App-header">
          <div className="headerText">
            <h1>Tiger Town Tattoo</h1>
            <p>
              Traditional, illustration and line-work tattoos in Brooklyn, NY
              for all kinds of tigers
            </p>
          </div>
          <img
            src={tiger}
            className="logo headerImage"
            alt="tradional tattoo-style tiger logo"
          />
        </header>
        <section className="location">
          <div className="location-content">
            <div className="map-container">
              <a href="https://www.google.com/maps/place/334+Leonard+St,+Brooklyn,+NY+11211/@40.7159128,-73.9519924,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595a073f9f87:0x601e49830c638e3d!8m2!3d40.7159129!4d-73.9477652">
                <img
                  src={map}
                  alt="map of 334 Leonard St in Brooklyn NY showing location of Tiger Town Tattoo"
                  className="map"
                />
              </a>
            </div>
            <div className="hours">
              <p className="hours-label">store hours</p>
              <ul>
                <li>
                  <span>MON</span> 11:30AM - 5PM
                </li>
                <li>
                  <span>TUE</span> 11:30AM - 5PM
                </li>
                <li>
                  <span>WED</span> 11:30AM - 5PM
                </li>
                <li>
                  <span>THU</span> 11:30AM - 5PM
                </li>
                <li>
                  <span>FRI</span> 11:30AM - 6PM
                </li>
                <li>
                  <span>SAT</span> 12:00PM - 6PM
                </li>
                <li>
                  <span>SUN</span> 12:00PM - 6PM
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contact">
          <h3>contact</h3>
          <p>Questions about the shop? Want to make an appointment?</p>
          <p>
            Come see our new store at 334 Leonard St, Brooklyn NY, or drop us a
            line at{" "}
            <a href="mailto:tigertowntattoo@gmail.com">
              tigertowntattoo@gmail.com.
            </a>{" "}
          </p>
          <p>
            You can also check us out on instagram at{" "}
            <a
              href="https://instagram.com/tigertowntattooparlor?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              @tigertowntattooparlor.
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
