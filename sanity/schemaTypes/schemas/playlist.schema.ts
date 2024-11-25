import { defineField } from "sanity";

const schema = {
  name: "resourcePlaylist",
  title: "Resource Playlist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    defineField({
      name: "pdfFile",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
    {
      name: "resources",
      title: "Resources",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "books" }],
        },
      ],
    },
  ],
};

export default schema;
