export default function Login({ handleFormSubmit, handleFormSwitch }) {
  return (
    <div className="Login">
      <h2>Please enter your SpaceTraders-issued <br />
        "Bearer Authentication Key" to start:
      </h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <fieldset>
          <label htmlFor="">Bearer: </label>
          <input type="text" name="bearer" />
        </fieldset>
        <button>Enter</button>
      </form>
      <h3 className="action" onClick={handleFormSwitch}>or, click here to register!</h3>
    </div>
  )
}