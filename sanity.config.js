import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './schema'

export default defineConfig({
  name: 'default',
  title: 'Harri Journal',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: schema.types,
  },
})