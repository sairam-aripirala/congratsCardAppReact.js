const element = (
  // Write your code here.
  <div className="bg-container">
    <div className="headContainer">
      <h1 className="heading">Congratulations</h1>
    </div>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="card-head">Kiran V</h1>
      <p className="card-para">
        Vishnu Institute 0f computer Education and Technology,
        <span>Bhimavaram</span>
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
