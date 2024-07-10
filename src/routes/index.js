import {home} from "../controllers/pages.js"
import { cekTurnitin, ParafraseIn, sarangFreelance, translateIn } from "../controllers/services.js";
import { affiliate, myProject, myProject2, profile, withDraw } from "../controllers/user.js";

export const route = function (app) {
    app.get("/", home);
    app.get("/cek-turnitin", cekTurnitin);
    app.get("/parafrase-in", ParafraseIn);
    app.get("/translate-in", translateIn);
    app.get("/sarang-freelance", sarangFreelance);
    app.get("/profile", profile);
    app.get("/affiliate", affiliate);
    app.get("/myproject", myProject);
    app.get("/withdraw", withDraw);
    app.get("/myproject2", myProject2);
}