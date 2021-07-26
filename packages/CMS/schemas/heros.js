export default {
    title: 'Hero',
    name: 'hero',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: false,
    },
    fields: [
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
        {
            name: 'setFilter',
            title: 'Set Hero Filter',
            type: 'boolean'
        }
    ]
}