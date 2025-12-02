import type { CollectionConfig } from 'payload'

export const Actions: CollectionConfig = {
  slug: 'actions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'stats', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'ShipWheel', value: 'ShipWheel' },
        { label: 'GraduationCap', value: 'GraduationCap' },
        { label: 'Building2', value: 'Building2' },
        { label: 'HeartHandshake', value: 'HeartHandshake' },
        { label: 'Users', value: 'Users' },
        { label: 'Award', value: 'Award' },
      ],
      required: true,
      label: 'Icône',
    },
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Primaire', value: '#0052a3' },
        { label: 'Secondaire', value: '#00a86b' },
      ],
      defaultValue: '#0052a3',
      label: 'Couleur',
    },
    {
      name: 'stats',
      type: 'text',
      required: true,
      label: 'Statistiques (ex: 500+)',
    },
    {
      name: 'statsLabel',
      type: 'text',
      required: true,
      label: 'Libellé des statistiques',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'order',
      type: 'number',
      label: "Ordre d'affichage",
      defaultValue: 0,
    },
  ],
}
