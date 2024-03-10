import styled from 'styled-components';

const Styles = styled.div`
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100vw;
}

  header {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    font-weight: bolder;
    color: purple;
    width: 100vw;
  }

  header img {
    position: relative;
    right: 500px;
    width: 150px;
    height: auto;
  }

  main {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
    align-items: center;
  }

  .form-group {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, textarea {
    width: 98%;
    padding: 10px;
    border: 2px solid black;
    background-color: transparent;
    border-radius: 5px;
    margin-right: auto;
  }

  button {
    background-image:linear-gradient(#464646, #fa1521);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover{
    background-image: linear-gradient(#747474, #614ad3);
    color: yellow;
    cursor: pointer;
    box-shadow: 0px 0px 20px 0px white;
    font-weight: bolder;
  }

  .contact-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contact-info li {
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
  }

  .contact-form{
    background-image: linear-gradient(white, transparent);
    padding: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 0 0 10px 0 rgba(0,0,0,100);
    width: 50%;
    margin-left: auto;
    color: black;
  }

  .background {
    background-image: url("bg.jpg");
    background-size: cover;
    height: 100vh;
    width: 100%;
    color: white;
  }
  @media (max-width: 1200px) {
    header img {
      right: 250px;
    }

    .contact-form {
      width: 70%;
    }
  }

  @media (max-width: 900px) {
    header img {
      right: 150px;
    }

    .contact-form {
      width: 80%;
    }
  }

  @media (max-width: 600px) {
    header img {
      right: 50px;
    }

    .contact-form {
      width: 90%;
    }
  }
`;

function App() {
  return (
    <Styles>
      <header>
        <img src="icon.avif" alt="Company Logo" />
        <h1>Feedback Form</h1>
      </header>
      <div className="background">
        <main>
          <div className="contact-form">
            <form action="#">
              <div className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" title="name" />
              </div>
              <div className="form">
                <label htmlFor="address">Address:</label>
                <input type="address" id="address" name="address" placeholder="Enter Your Address" title="address" />
              </div>
              <div className="form">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" title="message" placeholder="Your Feedback Message" />
              </div>
              <div className="form">
                <label htmlFor="roomtype">RoomType:</label>
                <input type="text" id="roomtype" title="roomtype" placeholder="Enter Your RoomType" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>

          <section className="contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li><span>Address:</span> 123, SomeWhere On Earth 456789</li>
              <li><span>Phone:</span> (+91)123 456 7890</li>
              <li><span>Email:</span> lollmaoxd@gmail.com</li>
              <p>&copy; 2023 Hotel. All rights reserved.</p>
            </ul>
          </section>
        </main>
      </div>
    </Styles>
  );
}

export default App;