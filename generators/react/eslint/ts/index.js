const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    installDependencies() {
        this.spawnCommandSync("npm", [
            "i",
            "prettier",
            "eslint",
            "eslint-config-standard",
            "eslint-plugin-import",
            "eslint-plugin-node",
            "eslint-plugin-promise",
            "eslint-plugin-react",
            "eslint-plugin-react-hooks",
            "@typescript-eslint/parser",
            "@typescript-eslint/eslint-plugin",
            "--save-dev",
        ]);
    }

    eslint() {
        this.fs.copy(
            this.templatePath(".eslintrc"),
            this.destinationPath(".eslintrc")
        );
    }

    prettier() {
        this.fs.copy(
            this.templatePath(".prettierrc"),
            this.destinationPath(".prettierrc")
        );
    }
};
