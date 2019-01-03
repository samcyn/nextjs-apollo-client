export const DelimeterHelper = ( str, limit) => {
  if (str.length >= limit) {
    return str.substr(0, limit) + '...';
  }
  else {
    return str;
  }
}