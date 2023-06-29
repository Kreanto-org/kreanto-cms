import {defineField, defineType} from 'sanity'
import {preview} from 'sanity-plugin-icon-picker'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'index',
      title: 'Index',
      type: 'string',
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        storeSvg: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      provider: 'icon.provider',
      name: 'icon.name',
    },
    prepare(data) {
      return {
        title: data.title,
        media: preview(data),
      }
    },
  },
})
