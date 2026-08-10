export type StoredObject={url:string;pathname:string;contentType:string;size?:number};

export interface MediaStorage{
  upload(input:{name:string;contentType:string;bytes:ArrayBuffer}):Promise<StoredObject>;
  remove(pathname:string):Promise<void>;
}

export function getStorageStatus(){return {provider:process.env.MEDIA_STORAGE_PROVIDER??"unconfigured",connected:Boolean(process.env.MEDIA_STORAGE_PROVIDER),supportsClientUploads:true};}

// Provider-specific implementation is intentionally deferred until the client's
// storage account is chosen. Recommended production options include Vercel Blob
// or an S3-compatible provider. Keeping the contract here prevents UI rewrites.
