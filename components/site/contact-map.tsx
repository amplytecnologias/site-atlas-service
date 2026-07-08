"use client";

import { Map, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/mapcn-marker-label";
import { ADDRESS_COORDS } from "@/lib/site";

export default function ContactMap() {
  return (
    <Map
      className="h-full w-full"
      theme="light"
      center={[ADDRESS_COORDS.lng, ADDRESS_COORDS.lat]}
      zoom={15}
    >
      <MapMarker longitude={ADDRESS_COORDS.lng} latitude={ADDRESS_COORDS.lat}>
        <MarkerContent>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-brand shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>
          <MarkerLabel
            position="bottom"
            className="rounded-md bg-white/95 px-2 py-0.5 font-semibold text-brand-ink shadow-md"
          >
            Atlas Service
          </MarkerLabel>
        </MarkerContent>
      </MapMarker>
    </Map>
  );
}
