export const log = (val, ...params) => {
  if (process.env.NODE_ENV!=="production") {
    let type = "log";
    let value = val;
    if (val.includes(":") && val.split(":")[0].toLowerCase() in console) {
        let vals = val.split(":");
        type = vals[0].toLowerCase();
        value = vals.slice(1).reduce((final, substr) => final + substr);
    }
    
    params.forEach(() => value += "\n%o");
    
    
    if (type==="error") {
      console.error(value, ...params);
    } else if (type==="info") {
      console.info(value, ...params);
    } else if (type==="warn") {
      console.warn(value, ...params);
    } else if (type==="debug") {
      console.debug(value, ...params);
    } else if (type==="table" && params.length>0) {
      console.table(params[0], ...params.slice(1));
    } else if (type==="assert" && params.length>0) {
      console.assert(params[0], value, ...params.slice(1));
    } else {
      console.log(value, ...params);
    }
  }
}