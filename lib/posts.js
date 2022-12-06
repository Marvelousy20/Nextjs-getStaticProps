import fs from "fs";
import path from "path";
import matter from "gray-matter";

// get all the path from all the posts directory
const postDirectory = path.join(process.cwd(), "posts");

// get all the posts file
export function getSortedPostData() {
  const fileNames = fs.readdirSync(postDirectory);

  const blogPostData = fileNames.map((fileName) => {
    // get a slug to display dynamic route
    const slug = fileName.replace(/\.md$/, "");

    // get a single path from posts directory
    const fullPath = path.join(postDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // parse the metadata from the
    const matterResult = matter(fileContent);

    return {
      slug,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return blogPostData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostsId() {
  // read the post directory
  // remove the extension
  // return an object that contains params

  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function blogPostDataById(slug) {
  // read individual blog path
  // format the metadata using matter
  // return the metadata data

  const fullPath = path.join(postDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);

  return {
    slug,
    ...matterResult.data,
  };
}
