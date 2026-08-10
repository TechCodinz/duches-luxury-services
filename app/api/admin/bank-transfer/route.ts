import { NextRequest, NextResponse } from "next/server";
import { db, isDatabaseConfigured } from "../../../../lib/db";
import { requirePermission } from "../../../../lib/rbac";

export async function GET(request: NextRequest) {
  const session = requirePermission(request, "finance:write");
  if (!session) return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  if (!isDatabaseConfigured()) return NextResponse.json({ ok: true, mode: "demo", items: [] });
  const sql = db();
  const items = await sql`
    select bts.id,bts.client_name,bts.sender_bank,bts.sender_account_name,bts.transfer_reference,
           bts.amount,bts.currency,bts.proof_url,bts.note,bts.status,bts.created_at,
           i.reference as invoice_reference,c.full_name as client_full_name,c.email as client_email
    from bank_transfer_submissions bts
    join invoices i on i.id=bts.invoice_id
    left join clients c on c.id=i.client_id
    where bts.status='pending_review'
    order by bts.created_at asc
    limit 100`;
  return NextResponse.json({ ok: true, mode: "live", items });
}
