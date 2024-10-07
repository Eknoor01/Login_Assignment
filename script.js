// Root element where all content will be injected
const app = document.getElementById('app');

// Application state to keep track of the current user
let currentUser = null;
const users = []; // Array to store user data for demo purposes

// Function to render the login page
function renderLoginPage() {
  app.innerHTML = `
    <div class="login-page">
      <h1>TaskStream Solutions</h1>
      <img src="logo.png" alt="TaskStream Logo">
      <input type="text" id="username" placeholder="Username">
      <input type="password" id="password" placeholder="Password">
      <button onclick="handleLogin()">Login</button>
      <p>Don't have an account? <a href="#" onclick="renderSignUpPage()">Sign Up</a></p>
    </div>
  `;
}

// Function to render the sign-up page with role selection
function renderSignUpPage() {
  app.innerHTML = `
    <div class="signup-page">
      <h1>Sign Up</h1>
      <img src="logo.png" alt="TaskStream Logo">
      <input type="text" id="signup-username" placeholder="Username">
      <input type="password" id="signup-password" placeholder="Password">
      <select id="signup-role">
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
      </select>
      <button onclick="handleSignUp()">Sign Up</button>
      <p>Already have an account? <a href="#" onclick="renderLoginPage()">Login</a></p>
    </div>
  `;
}

// Function to render the admin dashboard
function renderAdminDashboard() {
  app.innerHTML = `
    <div class="dashboard">
      <h1>Admin Dashboard</h1>
      <div class="dashboard-widgets">
        <div class="widget" onclick="alert('Managing Employees')">Employee Management</div>
        <div class="widget" onclick="alert('Managing Products')">Product Management</div>
        <div class="widget" onclick="alert('Generating Reports')">Reports</div>
        <div class="widget" onclick="alert('Checking Notifications')">Notifications</div>
        <button onclick="logout()">Logout</button>
      </div>
    </div>
  `;
}

// Function to render the employee dashboard
function renderEmployeeDashboard() {
  app.innerHTML = `
    <div class="dashboard">
      <h1>Employee Dashboard</h1>
      <div class="dashboard-widgets">
        <div class="widget" onclick="alert('Viewing Tasks')">Task List</div>
        <div class="widget" onclick="alert('Managing Orders')">Order Management</div>
        <div class="widget" onclick="alert('Checking Notifications')">Notifications</div>
        <button onclick="logout()">Logout</button>
      </div>
    </div>
  `;
}

// Function to handle login based on the user's role
function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    currentUser = user;
    if (user.role === 'admin') {
      renderAdminDashboard();
    } else if (user.role === 'employee') {
      renderEmployeeDashboard();
    }
  } else {
    alert('Invalid credentials');
  }
}

// Function to handle sign-up and registration
function handleSignUp() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  const role = document.getElementById('signup-role').value;

  if (username && password) {
    if (users.find(user => user.username === username)) {
      alert('Username already exists');
      return;
    }

    users.push({ username, password, role });

    alert('Sign up successful');
    renderLoginPage();
  } else {
    alert('Please fill in all fields');
  }
}

// Function to logout the user and redirect back to the login page
function logout() {
  currentUser = null;
  renderLoginPage();
}

// Initialize the application by rendering the login page
renderLoginPage();
