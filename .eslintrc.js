module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": false,
    "node": true,
    "mocha": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "parser": "babel-eslint", // ONLY FOR FE PROJECTS
  "rules": {
    "max-len": [2, 160, 2, {ignoreComments: true}],
    "no-underscore-dangle": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-curly-spacing": "off",
    "react/prefer-stateless-function": "off",
  },

};