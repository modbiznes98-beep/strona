import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function MapWithRadius() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Współrzędne Częstochowy
    const czestochowaPosition: [number, number] = [50.8118, 19.1203];

    // Inicjalizacja mapy
    const map = L.map(mapRef.current, {
      center: czestochowaPosition,
      zoom: 7,
      scrollWheelZoom: false
    });

    mapInstanceRef.current = map;

    // Dodanie warstwy kafelków OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Czerwony okrąg 200km
    L.circle(czestochowaPosition, {
      color: '#ef4444',
      fillColor: '#ef4444',
      fillOpacity: 0.1,
      radius: 200000, // 200km w metrach
      weight: 2
    }).addTo(map);

    // Marker w centrum
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: #2563eb;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    L.marker(czestochowaPosition, { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center; padding: 8px;">
          <strong style="font-size: 16px;">Częstochowa</strong><br/>
          <span style="font-size: 14px;">Centrum naszego zasięgu działania</span><br/>
          <span style="font-size: 12px; color: #6b7280;">Darmowy dojazd do 200km</span>
        </div>
      `);

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ height: '100%', width: '100%', minHeight: '600px' }} />;
}
