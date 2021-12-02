import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TemplateProvider from "./templates/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
