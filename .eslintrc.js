module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2020": true,
    "node": true,
    "jest": true
  },
  "plugins": [
    'ramda'
  ],
  "extends": "plugin:ramda/recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "ramda/always-simplification": "error",
    "ramda/any-pass-simplification": "error",
    "ramda/both-simplification": "error",
    "ramda/complement-simplification": "error",
    "ramda/compose-pipe-style": "error",
    "ramda/compose-simplification": "error",
    "ramda/cond-simplification": "error",
    "ramda/either-simplification": "error",
    "ramda/eq-by-simplification": "error",
    "ramda/filter-simplification": "error",
    "ramda/if-else-simplification": "error",
    "ramda/map-simplification": "error",
    "ramda/merge-simplification": "error",
    "ramda/no-redundant-and": "error",
    "ramda/no-redundant-not": "error",
    "ramda/no-redundant-or": "error",
    "ramda/pipe-simplification": "error",
    "ramda/prefer-both-either": "error",
    "ramda/prefer-complement": "error",
    "ramda/prefer-ramda-boolean": "error",
    "ramda/prop-satisfies-simplification": "error",
    "ramda/reduce-simplification": "error",
    "ramda/reject-simplification": "error",
    "ramda/set-simplification": "error",
    "ramda/unless-simplification": "error",
    "ramda/when-simplification": "error"
  }
};
