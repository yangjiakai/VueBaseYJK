// 接口返回的json
var jsonObj = { Key1: 1, Key2: 2, key3: 3, Key4: 4 };
var convertJsonKey = function(jsonObj) {
  // 这里没有进行深度拷贝
  var result = {};
  for (key in jsonObj) {
    var keyval = jsonObj[key];
    key = key.replace(key[0], key[0].toLowerCase());
    result[key] = keyval;
  }
  return result;
};
console.log(jsonObj);
// {key1:1,key2:2,key3:3,key4:4};
