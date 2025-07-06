import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "prize",
      type: "number",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Galería",
      type: "object", // corregido de document a object
      fields: [
        {
          name: "images",
          title: "Imágenes",
          type: "array",
          of: [
            {
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "colors",
      title: "Colores disponibles",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Black", value: "#000000" },
              { title: "White", value: "#FFFFFF" },
              { title: "Green Bay", value: "#627f79" },
              { title: "Red Brown", value: "#0000FF" },
              { title: "Heritage Brown", value: "#a64c3a" },
              // Puedes añadir más colores aquí
            ],
          },
        },
      ],
    }),
    defineField({
      name: "sizes",
      type: "array",
      title: "Tallas disponibles",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "S", value: "S" },
          { title: "M", value: "M" },
          { title: "L", value: "L" },
          { title: "XL", value: "XL" },
          { title: "2XL", value: "2XL" },
        ],
      },
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
});
