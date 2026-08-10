import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let cached: NeonQueryFunction<false, false> | null = null;

export function isDatabaseConfigured(){return Boolean(process.env.DATABASE_URL)}

export function db(){
  const url=process.env.DATABASE_URL;
  if(!url) throw new Error("DATABASE_URL is not configured");
  if(!cached) cached=neon(url);
  return cached;
}

export async function databaseHealth(){
  if(!isDatabaseConfigured()) return {configured:false,healthy:false,mode:"demo" as const};
  try{const sql=db();await sql`select 1 as ok`;return {configured:true,healthy:true,mode:"persistent" as const};}
  catch(error){return {configured:true,healthy:false,mode:"error" as const,error:error instanceof Error?error.message:"Unknown database error"};}
}
