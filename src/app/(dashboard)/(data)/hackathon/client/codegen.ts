import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:4000",
    generates: {
        "./src/__generated__/": {
        preset: "client",
        presetConfig: {
            gqlTagName: "gql"
        }
      },
    },
    ignoreNoDocuments: true,
    documents: ["src/**/*.tsx"],

};

export default config;