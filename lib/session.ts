import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE="duches_admin_session";

type SessionPayload={email:string;role:string;expiresAt:number};

function secret(){return process.env.DUCHES_SESSION_SECRET||""}
function encode(value:string){return Buffer.from(value).toString("base64url")}
function decode(value:string){return Buffer.from(value,"base64url").toString("utf8")}
function sign(value:string){return createHmac("sha256",secret()).update(value).digest("base64url")}

export function createSession(email:string,role="owner"){
  if(!secret()) throw new Error("DUCHES_SESSION_SECRET is not configured");
  const payload:SessionPayload={email,role,expiresAt:Date.now()+1000*60*60*12};
  const encoded=encode(JSON.stringify(payload));
  return `${encoded}.${sign(encoded)}`;
}

export function verifySession(token?:string|null):SessionPayload|null{
  if(!token||!secret()) return null;
  const [encoded,signature]=token.split(".");
  if(!encoded||!signature) return null;
  const expected=sign(encoded);
  const a=Buffer.from(signature);const b=Buffer.from(expected);
  if(a.length!==b.length||!timingSafeEqual(a,b)) return null;
  try{const payload=JSON.parse(decode(encoded)) as SessionPayload;return payload.expiresAt>Date.now()?payload:null}catch{return null}
}
