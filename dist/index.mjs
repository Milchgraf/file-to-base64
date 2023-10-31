var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var fileToBase64 = (file, cutAtComma) => __async(void 0, null, function* () {
  let base64String = "";
  yield new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  }).then((res) => {
    base64String = res;
  });
  if (cutAtComma) {
    return yield base64String.slice(base64String.indexOf(",") + 1);
  } else {
    return yield base64String;
  }
});
export {
  fileToBase64
};
