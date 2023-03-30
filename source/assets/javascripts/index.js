//------------------------------------
//	# List of Application
//------------------------------------

/* eslint-disable no-undef */

// Import Style
import '../stylesheets/tailwind.css';
import "../stylesheets/application.scss";
import '@fortawesome/fontawesome-free/js/all.js';

// Import stimulus.js
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
