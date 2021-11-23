const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    async prompting() {
        const answers = await this.prompt([
            {
                type: "list",
                name: "eslint",
                message: "Which ESLint config do you want?",
                choices: [
                    {
                        name: "typescript",
                    },
                    {
                        name: "javascript",
                    },
                ],
            },
        ]);

        if (answers.eslint.includes("javascript")) {
            this.composeWith(require.resolve("./eslint/js"));
        }

        if (answers.eslint.includes("typescript")) {
            this.composeWith(require.resolve("./eslint/ts"));
        }
    }
};
