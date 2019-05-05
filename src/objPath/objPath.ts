const get = (path, obj) => path.split('.').reduce((acc, current) => acc && acc[current], obj);
const setObj = (obj, key, val) => {obj = obj || {}; obj[key] = val; return obj;};

const setPath = (path, obj, value) => path.split('.').reduce((acc, current, i, list) =>
   list.length === i + 1 ? (setObj(acc, current, value), obj) : acc[current] || setObj(acc, current, {})[current]
 , obj);

const mod = {a:'a1', b:{c:{e:'e1', d:[1,2,3]}}};
const val = setPath('z.x', mod, 'aa2');
console.log('val:', val);