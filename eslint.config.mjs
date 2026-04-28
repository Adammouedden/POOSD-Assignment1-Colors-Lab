import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            // This tells ESLint that 'document', 'window', etc. are global variables
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            // This fixes the 100+ semicolon errors in md5.js
            "semi": ["error", "always"],
            // This ignores the 'module' error at the end of md5.js
            "no-node-globals": "off" 
        }
    },
    // Special override for md5.js if it's a third-party library you don't want to change
    {
        files: ["**/md5.js"],
        rules: {
            "semi": "off",
            "no-unused-vars": "off"
        }
    },
    {
        files: ["tests/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.jest,
            }
        }
    }
];