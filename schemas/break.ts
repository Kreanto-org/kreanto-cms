import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      initialValue: 'break',
      options: {
        list: ['break', 'readMore'],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
})
