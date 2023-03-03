import { PackageIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import personType from './person'
import announcementType from './announcement'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'caseFile',
  title: 'Case File',
  icon: PackageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'personProsecuted',
      title: 'Person Prosecuted',
      type: 'reference',
      to: [{ type: personType.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'person',
      title: 'Person Prosecuted',
      type: 'reference',
      to: [{ type: personType.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'announcementsViolated',
      title: 'Announcements Violated',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: announcementType.name }],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'person.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
