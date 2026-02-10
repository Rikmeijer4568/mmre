import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'color',
      title: 'Color Classes',
      type: 'string',
      description: 'Tailwind CSS classes for styling (e.g., "bg-blue-100 text-blue-800")',
      options: {
        list: [
          {title: 'Blue', value: 'bg-blue-100 text-blue-800'},
          {title: 'Green', value: 'bg-green-100 text-green-800'},
          {title: 'Yellow', value: 'bg-yellow-100 text-yellow-800'},
          {title: 'Red', value: 'bg-red-100 text-red-800'},
          {title: 'Purple', value: 'bg-purple-100 text-purple-800'},
          {title: 'Pink', value: 'bg-pink-100 text-pink-800'},
          {title: 'Orange', value: 'bg-orange-100 text-orange-800'},
          {title: 'Teal', value: 'bg-teal-100 text-teal-800'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
