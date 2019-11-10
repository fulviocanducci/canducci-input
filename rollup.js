export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    dir: "dist",
    name: "canducci-input",
    format: "cjs"
  },
  external: ["react", "react-dom"]
};
