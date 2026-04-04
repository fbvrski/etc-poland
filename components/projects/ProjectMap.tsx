"use client";

import { useEffect, useRef } from "react";

export type MapProject = {
  slug: string;
  title: string;
  type: string;
  lat: number;
  lng: number;
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export default function ProjectMap({ projects }: { projects: MapProject[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    mapRef.current?.remove();
    mapRef.current = null;

    void (async () => {
      const L = (await import("leaflet")).default;

      delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: true,
      }).setView([50.5, 15.0], 5);

      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const group = L.layerGroup().addTo(map);

      for (const p of projects) {
        const marker = L.marker([p.lat, p.lng]).addTo(group);
        const url = `/projects/${p.slug}`;
        marker.bindPopup(
          `<div class="text-sm leading-snug"><a class="font-semibold text-[#0F2D8A] underline" href="${url}">${escapeHtml(p.title)}</a><div class="text-gray-600 mt-1">${escapeHtml(p.type)}</div><div class="mt-2"><a class="text-[#2E7DE0] underline" href="${url}">View project</a></div></div>`,
          { closeButton: true },
        );
      }

      if (cancelled) {
        map.remove();
        mapRef.current = null;
        return;
      }

      if (projects.length === 1) {
        const p = projects[0];
        map.setView([p.lat, p.lng], 14);
      } else if (projects.length > 1) {
        const bounds = L.latLngBounds(
          projects.map((q) => [q.lat, q.lng] as [number, number]),
        );
        map.fitBounds(bounds, { padding: [48, 48], maxZoom: 12 });
      }
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [projects]);

  return (
    <div
      ref={containerRef}
      className="project-map z-0 h-[min(420px,55vh)] w-full rounded-xl border border-gray-200 bg-[#EEF2F8] shadow-inner md:h-[480px]"
      role="region"
      aria-label="Project locations map"
    />
  );
}
