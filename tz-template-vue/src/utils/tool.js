/* eslint-disable import/prefer-default-export */

export function assign(to, from) {
  Object.keys(to).forEach((key) => {
    to[key] = from[key];
  });
}
