module.exports = {
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    // Add any additional ESLint rules or overrides here
    "@next/next/no-img-element": "off",
    // "ignoreDuringBuilds": true, // Uncomment this line if needed
  },
};
