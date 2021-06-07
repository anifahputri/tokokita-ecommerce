const LoginScreen = {
  after_render: () => {},
  render: () => `
    <div class="form-container">
      <form id="login-form">
        <ul class="form-items">
          <li>
            <h1>Login</h1>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <button type="submit" clas="primary">Login</button>
          </li>
          <li>
            <div>
              Belum Punya Akun ?
              <a  href="/#/register">Buat Akun Anda </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `,
};
export default LoginScreen;