const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("pages/index-adm");
})

router.get("/adm-cliente", (req, res)=>{
    res.render("pages/adm-cliente");
})

//alterado o render
router.get("/adm-cliente-novo", (req, res)=>{
    res.render("pages/adm-cliente-novo", {"erros": null, "valores": {"nome":"", "cep":"" ,"email":"", "senha":""} ,"retorno":null });
})

//post do router adm novo
router.post(
    "/adm-cliente-novo",

    body("nome").isLength({ min : 3, max : 30})
    .withMessage
)

router.get("/adm-cliente-edit", (req, res)=>{
    res.render("pages/adm-cliente-edit");
})

router.get("/adm-cliente-list", (req, res)=>{
    res.render("pages/adm-cliente-list");
})

router.get("/adm-cliente-del", (req, res)=>{
    res.render("pages/adm-cliente-del");
})







module.exports = router;