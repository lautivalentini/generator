const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    async prompting() {
        const answers = await this.prompt([
            {
                type: "list",
                name: "languages",
                message: "For wich languages/frameworks/libraries do you want the ESLint config?",
                choices: [
                    {
                        name: "JavaScript",
                    },
                    {
                        name: "TypeScript",
                    },
                    {
                        name: "React",
                        checked: true,
                    },
                ],
            },
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

        if (answers.languages.includes("React")) {
            if (answers.eslint.includes("javascript")) {
                this.composeWith(require.resolve("../react/eslint/js"));
            }

            if (answers.eslint.includes("typescript")) {
                this.composeWith(require.resolve("../react/eslint/ts"));
            }
        }
    }
};
