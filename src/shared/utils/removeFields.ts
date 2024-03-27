export const removeFields = (obj: Record<string, any>) => {
  Object.keys(obj).forEach((key) => (!obj[key] ? delete obj[key] : {}));
};
