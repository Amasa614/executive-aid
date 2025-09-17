import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rwggiglfxgcxblvnyvsg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3Z2dpZ2xmeGdjeGJsdm55dnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNDI3OTEsImV4cCI6MjA2NjcxODc5MX0.bPwAr68oUjarQrmWd-Zaf54DukdMP9C06mrgq-I2_vM'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
})

export type Review = {
  id: number
  client_name: string
  email?: string
  service_type: string
  rating: number
  comment: string
  created_at: string
  approved: boolean
  display_order: number
}

export type ReviewInsert = {
  client_name: string
  email?: string
  service_type: string
  rating: number
  comment: string
}
