module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "amd": true
  },
  "extends": ["airbnb-base/legacy"],
  "globals": {
    "root": false,
    "require": false
  },
  "plugins": [],
  "rules": {
    "semi": ["error", "always"],
    "func-names": ["error", "never"],
    "no-underscore-dangle": ["off", "allow"],
    "space-before-function-paren": ["error", "never"]
  }
}
