import {RiPagesFill} from 'react-icons/ri'

export default {
    name: 'pages',
    title: 'Pages',
    type: 'document',
    icon: RiPagesFill,
    fields: [
        {
            name: 'pageName',
            title: 'Name Of Page',
            type: 'string',
        },
        {
            title: 'Hero for page',
            name: 'hero',
            type: 'hero'
        }
    ],
    preview: {
        select: {
            title: 'pageName',
            media: 'hero.image'
        }
    }
  }