import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'modern-portfolio-ss21',

  projectId: '6gmjgnpw',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
