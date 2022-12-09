import React from "react";
import AddPage from "./pages/AddPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import Navigation from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data"
import { LocaleProvider } from "./contexts/LocaleContext";
import Theme from "./pages/Theme";
import { ThemeProvider } from "./contexts/ThemeContext";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem("theme") || "dark",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "dark" ? "light" : "dark";
          localStorage.setItem("theme", newTheme);

          return {
            theme: newTheme,
          };
        });
      },
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        
      };
    });
  }

  async componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme)
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.thrmr !== this.state.theme) {
      document.documentElement.setAttribute("data-theme",this.state.theme);
    }
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });

    putAccessToken('');
  }

  

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
        <LocaleProvider value={this.state.localeContext}>
          <div className='app-container'>
            <header>
              <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1>
              <Theme />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
        </ThemeProvider>
      )
    }
    return (
      <ThemeProvider value={this.state}>
      <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
          <header>
            <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1>
            <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
      </ThemeProvider>
    );

  }
}

export default App;
