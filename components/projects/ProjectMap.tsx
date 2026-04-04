"use client";

import { useEffect, useRef } from "react";

type LeafletModule = typeof import("leaflet");

export type MapProject = {
  slug: string;
  title: string;
  type: string;
  lat: number;
  lng: number;
  /** Illustrative pins — not real portfolio pages. */
  mapOnly?: boolean;
  /** Popup primary action (defaults to /projects/[slug] for real projects). */
  detailHref?: string;
  detailLabel?: string;
  /** Set false on single-project detail pages to avoid a redundant CTA in the popup. */
  showPopupCta?: boolean;
};

const popupBtnClass =
  "etc-map-popup-btn mt-3 flex w-full items-center justify-center rounded-lg bg-[#2E7DE0] px-3 py-2.5 text-[13px] font-semibold text-white no-underline hover:bg-[#1A4DB8]";

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function createBrandIcon(L: LeafletModule) {
  return L.divIcon({
    className: "etc-map-marker-wrap",
    html: '<div class="etc-map-marker-dot"></div>',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

async function loadLeaflet(): Promise<LeafletModule> {
  const pack = await import("leaflet");
  const mod = pack as { default?: LeafletModule };
  if (mod.default && typeof mod.default.map === "function") {
    return mod.default;
  }
  return pack as unknown as LeafletModule;
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
      const L = await loadLeaflet();

      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: true,
        zoomControl: true,
      }).setView([50.5, 15.0], 5);

      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const group = L.layerGroup().addTo(map);
      const icon = createBrandIcon(L);

      for (const p of projects) {
        const marker = L.marker([p.lat, p.lng], { icon }).addTo(group);
        const showCta = p.showPopupCta !== false;
        const href = p.detailHref ?? `/projects/${encodeURIComponent(p.slug)}`;
        const label = p.detailLabel ?? "View project details";
        const note = p.mapOnly
          ? `<p class="mt-2 text-xs leading-snug text-gray-500">Illustrative sample — open the page for typical scope and deliverables.</p>`
          : "";
        const cta = showCta
          ? `<a class="${popupBtnClass}" href="${href}">${escapeHtml(label)}</a>`
          : "";
        marker.bindPopup(
          `<div class="etc-map-popup text-[13px] leading-snug"><span class="font-semibold text-[#0F2D8A]">${escapeHtml(p.title)}</span><div class="mt-1 text-gray-600">${escapeHtml(p.type)}</div>${note}${cta}</div>`,
          { closeButton: true, className: "etc-map-popup-outer" },
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
        map.fitBounds(bounds, { padding: [56, 56], maxZoom: 12 });
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
      className="project-map z-0 h-[min(400px,52vh)] w-full overflow-hidden rounded-xl border border-gray-300/70 bg-[#e8ecf2] shadow-md md:h-[460px]"
      role="region"
      aria-label="Project locations map"
    />
  );
}
