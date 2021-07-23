export default {
    name: 'pages',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'pageName',
            title: 'Name Of Page',
            type: 'string',
        },
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
        },
        {
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: {
            hotspot: true,
            },
        },
    ],
  }