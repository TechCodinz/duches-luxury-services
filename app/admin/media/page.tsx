"use client";

import { upload } from "@vercel/blob/client";
import { ArrowLeft, FileAudio, FileVideo2, ImageIcon, Loader2, Search, Trash2, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { demoAssets, type MediaKind } from "../../../lib/cms";

type Asset = {
  id: string;
  kind: MediaKind;
  name?: string;
  url: string;
  mime_type?: string;
  size_bytes?: number;
  created_at?: string;
  duration?: string;
  size?: string;
  createdAt?: string;
};

const icons: Record<MediaKind, React.ReactNode> = {
  image: <ImageIcon size={17} />,
  video: <FileVideo2 size={17} />,
  audio: <FileAudio size={17} />,
};

export default function MediaLibrary() {
  const [kind, setKind] = useState<"all" | MediaKind>("all");
  const [assets, setAssets] = useState<Asset[]>(demoAssets as Asset[]);
  const [query, setQuery] = useState("");
  const [uploading, setUploading] = useState(false);
  const [notice, setNotice] = useState("");
  const picker = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/cms/media")
      .then((response) => response.json())
      .then((data) => {
        if (active && Array.isArray(data?.items)) setAssets(data.items);
      })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);

  async function refresh() {
    try {
      const response = await fetch("/api/cms/media");
      const data = await response.json();
      if (Array.isArray(data?.items)) setAssets(data.items);
    } catch {
      setNotice("The media library could not refresh. Please try again.");
    }
  }

  async function onFiles(files: FileList | null) {
    if (!files?.length) return;
    setUploading(true);
    setNotice("");
    try {
      for (const file of Array.from(files)) {
        await upload(`duches/${Date.now()}-${file.name}`, file, {
          access: "public",
          handleUploadUrl: "/api/media/upload",
          clientPayload: JSON.stringify({ originalName: file.name }),
        });
      }
      setNotice("Upload complete. Your media is now available to Duches.");
      await refresh();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Upload failed. Storage may not be connected yet.");
    } finally {
      setUploading(false);
      if (picker.current) picker.current.value = "";
    }
  }

  async function remove(id: string) {
    const response = await fetch(`/api/cms/media/${id}`, { method: "DELETE" });
    if (response.ok) setAssets((items) => items.filter((item) => item.id !== id));
  }

  const filtered = useMemo(
    () => assets.filter((asset) => (
      (kind === "all" || asset.kind === kind) &&
      `${asset.name ?? ""} ${asset.url}`.toLowerCase().includes(query.toLowerCase())
    )),
    [assets, kind, query],
  );

  return (
    <main className="cms-page">
      <section className="cms-hero">
        <div>
          <Link className="ops-back" href="/admin/listings"><ArrowLeft size={15} /> Listings</Link>
          <p className="eyebrow">Duches Media</p>
          <h1>Upload the stories that sell the experience.</h1>
          <p>Photos, walkthrough videos, reels, ambience audio and campaign assets can flow into the reusable Duches library.</p>
        </div>
        <label className="cms-primary upload-button">
          {uploading ? <Loader2 size={16} /> : <UploadCloud size={16} />} {uploading ? "Uploading…" : "Upload media"}
          <input ref={picker} type="file" multiple accept="image/*,video/*,audio/*" disabled={uploading} onChange={(event) => onFiles(event.target.files)} />
        </label>
      </section>

      <section className="cms-toolbar">
        <div className="cms-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search media" /></div>
        <div className="media-filters">
          {(["all", "image", "video", "audio"] as const).map((item) => <button key={item} className={kind === item ? "active" : ""} onClick={() => setKind(item)}>{item}</button>)}
        </div>
      </section>

      {notice && <div className="storage-note"><UploadCloud size={21} /><div><strong>Media status</strong><p>{notice}</p></div></div>}
      <section className="media-grid">
        {filtered.map((asset) => (
          <article className="media-card" key={asset.id}>
            <div className={`media-preview ${asset.kind}`} style={asset.kind !== "audio" ? { backgroundImage: `url(${asset.url})` } : undefined}>
              {asset.kind === "audio" && <FileAudio size={34} />}
              <span>{icons[asset.kind]} {asset.kind}</span>
            </div>
            <div className="media-meta">
              <div>
                <strong>{asset.name ?? asset.url.split("/").pop()}</strong>
                <small>{asset.duration ?? asset.size ?? (asset.size_bytes ? `${Math.round(asset.size_bytes / 1024)} KB` : "")} · {asset.created_at ? new Date(asset.created_at).toLocaleDateString() : asset.createdAt ?? "Today"}</small>
              </div>
              <button onClick={() => remove(asset.id)} aria-label={`Delete ${asset.name ?? "media"}`}><Trash2 size={16} /></button>
            </div>
          </article>
        ))}
      </section>
      <section className="storage-note"><UploadCloud size={21} /><div><strong>Production media path</strong><p>When storage is connected, approved photos, videos and audio upload directly into the owner-managed library.</p></div></section>
    </main>
  );
}
