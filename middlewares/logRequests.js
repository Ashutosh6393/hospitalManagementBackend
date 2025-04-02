import path from "path"
const logRequest = (req, res, next) =>{
    console.log(`Request made at ${new Date()} with method ${req.method} and URL ${req.url}`);
    console.log(path.resolve(__dirname));

    next();
}

export {logRequest}