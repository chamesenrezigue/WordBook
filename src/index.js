import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import Login from "views/login.js"
import EducBook from "views/Educbook"
import GoodWayBook from "views/GoodWayBook"
import FoodBook from "views/FoodBook"
import HealthBook from "views/HealthBook"
import LowBook from "views/LowBook"
import KidsBook from "views/KidsBook"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/login" component={Login} />
      <Route path="/EducBook" component={EducBook} />
      <Route path="/GoodWayBook" component={GoodWayBook} />
      <Route path="/FoodBook" component={FoodBook} />
      <Route path="/HealthBook" component={HealthBook} />
      <Route path="/LowBook" component={LowBook} />
      <Route path="/KidsBook" component={KidsBook} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
