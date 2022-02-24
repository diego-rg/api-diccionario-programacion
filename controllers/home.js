//GET: home
async function home (req, res, next) {
    res.status(200).send({ Bienvenido: "Visita https://github.com/diego-rg/api-diccionario-programacion para ver el funcionamiento de la API." });
}
export default { home };