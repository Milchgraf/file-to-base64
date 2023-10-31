/**
 *
 * @param file file to convert to base64 (i.g. event.target.files[0])
 * @param cutAtComma truncate prefix before the comma; default = false
 * @returns base64 string
 */
declare const fileToBase64: (file: any, cutAtComma?: boolean) => Promise<string>;

export { fileToBase64 };
