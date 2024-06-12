/**
 * Judge data is NaN type
 * @param data Judging data
 * @returns Judging data is NaN
 */
export const isNaN = (data: any): boolean => {
  return data !== data;
};

/**
 * Judge data is number type
 * @param data Judging data
 * @returns Judging data is number
 */
export const isNumber = (data: any): boolean => {
  // 判断是否是数字
  return typeof data === "number" && !isNaN(data);
};

/**
 * Judge data is string type
 * @param data Judging data
 * @returns Judging data is string
 */
export const isString = (data: any): boolean => {
  return typeof data === "string";
};

/**
 * Judge data is boolean type
 * @param data Judging data
 * @returns Judging data is boolean
 */
export const isBoolean = (data: any): boolean => {
  return typeof data === "boolean";
};

/**
 * Judge data is null type
 * @param data Judging data
 * @returns Judging data is null
 */
export const isNull = (data: any): boolean => {
  return data === null;
};

/**
 * Judge data is undefined type
 * @param data Judging data
 * @returns Judging data is undefined
 */
export const isUndefined = (data: any): boolean => {
  return data === undefined;
};

/**
 * Judge data is object type
 * @param data Judging data
 * @returns Judging data is object
 */
export const isObject = (data: any): boolean => {
  return typeof data === "object";
};

/**
 * Judge data is array type
 * @param data Judging data
 * @returns Judging data is array
 */
export const isArray = (data: any): boolean => {
  return Array.isArray(data);
};

/**
 * Judge data is function type
 * @param data Judging data
 * @returns Judging data is function
 */
export const isFunction = (data: any): boolean => {
  return typeof data === "function";
};

/**
 * Judge data is symbol type
 * @param data Judging data
 * @returns Judging data is symbol
 */
export const isSymbol = (data: any): boolean => {
  return typeof data === "symbol";
};
