import { Provider, IAgentRuntime, Memory, State } from "@ai16z/eliza";
import { createKnowledgeBase, queryKnowledgeBase } from "./ragHandler";
import { MetadataMode, NodeWithScore } from "llamaindex";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const docsProvider: Provider = {
    get: async (_runtime: IAgentRuntime, message: Memory, _state?: State) => {
        try {
            // Use the message content as the query (if available), otherwise fallback to "default query"
            const userQuery = message.content.text;

            // Create the knowledge base (index) from markdown files in the knowledgeBase folder
            const directoryPath = path.join(__dirname, '../../agent/src/docs'); // Adjust path as needed
            console.log("Resolved Docs Path:", directoryPath);
            const queryEngine = await createKnowledgeBase(directoryPath);

            // Query the knowledge base with the user's query
            const { response, sourceNodes } = await queryKnowledgeBase(
                queryEngine,
                userQuery
            );
            console.log("Response:", response);
            console.log("Source nodes:", sourceNodes);

            // Format the response and sources
            const sourcesContent = sourceNodes
                ? sourceNodes
                      .map(
                          (node, idx) =>
                              `### Source ${idx + 1} (Score: ${node.score})\n\n${node.node
                                  .getContent(MetadataMode.NONE) // Removed MetadataMode for simplicity
                                  .substring(0, 300)}...`
                      )
                      .join("\n\n")
                : "No relevant sources found.";

            return `### Answer to Query\n\n${response}\n\n### Sources\n\n${sourcesContent}`;
        } catch (error) {
            console.error("Error querying knowledge base:", error.message);
            return "Failed to retrieve the documentation.";
        }
    },
};

export { docsProvider };
