import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    imagePrev: {
      type: "string",
    }
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    imagePrev: {
      type: "string",
    },
  },
  computedFields,
}))

export const Pistes = defineDocumentType(() => ({
  name: "Pistes",
  filePathPattern: `pistes/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    colorDifficulty: {
      type: "string"
    },
    distance: {
      type: "string"
    },
    elevation: {
      type: "string"
    },
    virages: {
      type: "number"
    },
    jumps: {
      type: "number"
    },
    estimatedTime: {
      type: "string"
    },
    imagePrev: {
      type: "string",
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Pistes],
})
