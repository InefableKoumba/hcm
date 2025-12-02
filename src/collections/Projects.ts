import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'updatedAt'],
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
        { label: 'Bus', value: 'Bus' },
        { label: 'BookOpen', value: 'BookOpen' },
        { label: 'CircleUser', value: 'CircleUser' },
        { label: 'Megaphone', value: 'Megaphone' },
        { label: 'Building', value: 'Building' },
        { label: 'Wrench', value: 'Wrench' },
      ],
      required: true,
      label: 'Icône',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Actif', value: 'Actif' },
        { label: 'En cours', value: 'En cours' },
        { label: 'Planifié', value: 'Planifié' },
      ],
      defaultValue: 'Planifié',
      label: 'Statut',
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
