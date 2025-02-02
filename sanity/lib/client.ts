// In your 'client.ts'
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: "ei41qsej",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});
