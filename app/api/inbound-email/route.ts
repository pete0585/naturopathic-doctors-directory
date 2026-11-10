import { createServiceClient } from '@/lib/supabase/server'
import { createInboundHandler } from '@/lib/directory-inbound'

export const POST = createInboundHandler({
  "tenant": "directories--naturopathic-doctors",
  "directory": "naturopathic-doctors",
  "domains": [
    "naturopathicdoctorfinder.com",
    "mail.naturopathicdoctorfinder.com"
  ]
}, { db: async () => createServiceClient() })
