import util from 'util';
const deepLog = obj => {
  console.log(util.inspect(obj, { depth: null }))
}

export default deepLog;