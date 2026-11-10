import { z } from 'zod'
import { text, optional, email, state, website, phone, list, stableSlug, submissionRoute } from './submission-core'

export const schema=z.object({full_name:text(160).min(2),practice_name:optional(200),city:text(100).min(1),state,email,phone,website,address_line1:optional(300),zip:optional(10),license_number:optional(100),license_state:optional(2),bio:optional(2000),specialties:list,treatment_modalities:list,is_aanp_member:z.boolean().default(false),accepts_insurance:z.boolean().default(false),offers_telemedicine:z.boolean().default(false),accepting_new_patients:z.boolean().default(true)}).strict()
export function buildRow(d:z.infer<typeof schema>){return {...d,slug:stableSlug(d.full_name,d.email,d.city,d.state),listing_tier:'free',is_active:true,is_approved:false,do_not_email:true,source:'self_submit'}}
export const POST=submissionRoute(schema,buildRow,{field:'source',value:'self_submit'})
