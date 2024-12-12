import fs from "node:fs/promises";
import path from "node:path";
import {
  Document,
  VectorStoreIndex,
} from "llamaindex";

// Function to get all markdown files from the given directory (and subdirectories)
async function getMarkdownFiles(dir: string): Promise<string[]> {
    let markdownFiles: string[] = [];
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      const filePath = path.join(dir, file.name);
      if (file.isDirectory()) {
        markdownFiles = markdownFiles.concat(await getMarkdownFiles(filePath));
      } else if (file.isFile() && path.extname(file.name) === ".md") {
        markdownFiles.push(filePath);
      }
    }

    // Log the markdown files found
    console.log("Markdown files found:", markdownFiles);

    return markdownFiles;
  }


// Function to create the knowledge base (index) from markdown documents
export async function createKnowledgeBase(directoryPath: string) {
    const markdownFiles = await getMarkdownFiles(directoryPath);
    const documents: Document[] = [];

    for (const filePath of markdownFiles) {
      const content = await fs.readFile(filePath, "utf-8");

      // Log the content of each markdown file
      console.log(`Indexing document: ${filePath}`);
      console.log(`Content: ${content.substring(0, 300)}...`);  // Log the first 300 characters

      documents.push(new Document({ text: content, id_: filePath }));
    }

    const index = await VectorStoreIndex.fromDocuments(documents);
    return index.asQueryEngine();
  }


// Function to query the knowledge base
export async function queryKnowledgeBase(queryEngine, query: any) {
  const { response, sourceNodes } = await queryEngine.query({
    query,
  });

  return { response, sourceNodes };
}
