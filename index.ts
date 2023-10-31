/**
 * 
 * @param file file to convert to base64 (i.g. event.target.files[0])
 * @param cutAtComma truncate prefix before the comma; default = false
 * @returns base64 string
 */
export const fileToBase64 = async (file: any, cutAtComma?: boolean) => {
  let base64String = '';
  await new Promise<any>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  }).then(res => {
    base64String = res;
  });
  if (cutAtComma) {
    return await base64String.slice(base64String.indexOf(',') + 1);
  } else {
    return await base64String;
  }
}
