import { defineType, defineField } from "sanity";

export const fighterJet = defineType({
  name: "fighterJet",
  title: "Fighter Jet",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Normal Description",
      type: "text",
      
    }),
    
    defineField({
      name: "country",
      title: "Country of Origin",
      type: "string",
    }),
    defineField({
      name: "speed",
      title: "Top Speed",
      type: "string",
    }),
    defineField({
      name: "generation",
      title: "Jet Generation",
      type: "string",
      options: {
        list: [
          { title: "3rd Gen", value: "3rd Gen" },
          { title: "4th Gen", value: "4th Gen" },
          { title: "5th Gen", value: "5th Gen" },
        ],
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    
    }),
    defineField({
      name: "firstFlight",
      title: "First Flight",
      type: "string",
    }),
    defineField({
      name: "manufacturer",
      title: "Manufacturer",
      type: "string",
    }),
  ],
});
