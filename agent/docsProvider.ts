// docsProvider.ts
import { Provider, IAgentRuntime, Memory, State } from "@ai16z/eliza";
import axios from "axios";

// List of specific URLs to fetch content from
const specificUrls = [
  "https://raw.githubusercontent.com/vanshika-srivastava/Eliza-social-test-agent/refs/heads/main/markdowns/RAG-baseDocs.md"
];

// Create the custom provider
const docsProvider: Provider = {
  get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
    try {
      const pageContents = await Promise.all(
        specificUrls.map(async (url) => {
          try {
            const response = await axios.get(url);
            return { url, content: response.data };
          } catch (error) {
            console.error(`Failed to fetch ${url}:`, error.message);
            return { url, content: "Failed to load content." };
          }
        })
      );

      const combinedContent = pageContents
        .map((page) => `### Content from ${page.url}\n\n${page.content}`)
        .join("\n\n");

      return `### Full Documentation Content for Specific Pages\n\n${combinedContent}`;
    } catch (error) {
      console.error("Error fetching documentation pages:", error.message);
      return "Failed to retrieve the documentation.";
    }
  },
};

export { docsProvider };
