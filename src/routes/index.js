export const route = function (app) {
    app.get("/", (req,res) => {
        res.render ("pages/home")
    });
    
    app.get("/home", (resq,res) => {
        res.render("pages/home")
    });
    
    app.get("/cek-turnitin", (resq,res) => {
        res.render("pages/cek-turnitin.ejs/index.ejs")
    });
}