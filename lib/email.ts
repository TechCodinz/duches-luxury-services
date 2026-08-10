type EmailInput={to:string|string[];subject:string;html:string;replyTo?:string};

export async function sendEmail(input:EmailInput){
  const key=process.env.RESEND_API_KEY;const from=process.env.DUCHES_EMAIL_FROM;
  if(!key||!from)return {ok:false,status:"not_configured" as const};
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:input.to,subject:input.subject,html:input.html,reply_to:input.replyTo})});
  if(!response.ok)return {ok:false,status:"failed" as const,error:await response.text()};
  return {ok:true,status:"sent" as const,data:await response.json()};
}

export function bookingEmail(name:string,experience:string,ref:string){return `<div style="font-family:Arial,sans-serif;background:#0b0b0b;color:#fff;padding:32px"><h1 style="color:#c9a84c">Duches Luxury Services</h1><p>Dear ${name},</p><p>We received your request for <strong>${experience}</strong>.</p><p>Reference: <strong>${ref}</strong></p><p>Our private office will confirm availability and next steps shortly.</p></div>`}
