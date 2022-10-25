const Gamestart = (props) => {
  const onStartHandler = (e) => {
    e.preventDefault();
    props.gameStart(true);
    props.currentPlayer(e.target[0].value);
  };

  return (
    <div className="modal">
      <div className="modal-center">
        <div className="instructions">
          <h3>Instructions:</h3>
          <div className="mugshots">
            <h3>The Convicts</h3>
            <img
              alt="waldo"
              src="https://www.hollywoodreporter.com/wp-content/uploads/2011/11/waldo_pose_a_p.jpg"
            />
            <img
              alt="oslaw"
              src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/duqlcdn2tvmopqh85syf.jpg?v=1646253365&width=1946"
            />
            <img
              alt="wizard"
              src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/mxkp52xbgnugsrt0q2td.jpg?v=1646253370&width=1445"
            />
          </div>
          <p>
            Three convicts have escaped from jail, wanted for killing of a
            security gaurd. It is your responsibility to find them in the
            quickest amount of time. Once you have found one, click on him and
            select which convict it is. Good luck! The page can be scrolled in
            all directions!
          </p>
        </div>
        <form className="form" onSubmit={onStartHandler}>
          <label htmlFor="name">
            <b>Enter Name:</b>
          </label>
          <input type="text" required placeholder="Jimmy" id="name" />
          <button>Let's Play</button>
        </form>
      </div>
    </div>
  );
};

export default Gamestart;
