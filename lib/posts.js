import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "pages/posts");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postDirectory);

  const fileName = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    // get file content
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parsing metadata section of file content
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date

  return fileName.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
