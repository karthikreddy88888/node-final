// import "dotenv/config";
// import express from 'express';
// import Hello from "./Hello.js";
// import UserRoutes from "./Kambaz/Users/routes.js";
// import Lab5 from './Lab5/index.js';"./Lab5/index.js";
// import PathParameters from './Lab5/PathParameters.js';
// import QueryParameters from './Lab5/QueryParameters.js';
// import WorkingWithObjects from './Lab5/WorkingWithObjects.js';
// import WorkingWithArrays from './Lab5/WorkingWithArrays.js';
// import Userroutes from "./Kambaz/Users/routes.js";
// import CourseRoutes from "./Kambaz/Courses/routes.js";
// import cors from "cors";
// import session from "express-session";
// const app = express(); //(1)
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.NETLIFY_URL || "http://localhost:5173",
//   })
// );
//  //(2)
// const sessionOptions = {
//   secret: process.env.SESSION_SECRET || "kambaz",
//   resave: false,
//   saveUninitialized: false,
// };
// if (process.env.NODE_ENV !== "development") {
//   sessionOptions.proxy = true;
//   sessionOptions.cookie = {
//     sameSite: "none",
//     secure: true,
//     domain: process.env.NODE_SERVER_DOMAIN,
//   };
// }
// app.use(session(sessionOptions));
// app.use(express.json());

// Hello(app);
// Lab5(app);
// QueryParameters(app);
// PathParameters(app);
// WorkingWithObjects(app);
// WorkingWithArrays(app);
// Userroutes(app);
// CourseRoutes(app);
// app.listen(process.env.PORT || 4000);


import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import "dotenv/config";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import session from "express-session";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz-su2-2025"
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(
    session(sessionOptions)
);
app.use(express.json());
Hello(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);

Lab5(app);
app.listen(process.env.PORT || 4000)