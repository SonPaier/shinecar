import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Part = {
  id: string;
  name: string;
  description: string;
};

const PARTS: Part[] = [
  {
    id: 'hood',
    name: 'Maska (Hood)',
    description:
      'Mocna ochrona przed odpryskami i zarysowaniami. Zalecane zabezpieczenie folią PPF na newralgicznych częściach maski.',
  },
  {
    id: 'headlights',
    name: 'Reflektory',
    description:
      'Zabezpieczenie reflektorów zapobiega żółknięciu i pęknięciom. Folia PPF zachowuje klarowność i chroni przed UV.',
  },
  {
    id: 'bumper',
    name: 'Zderzak (Bumper)',
    description:
      'Zderzak jest narażony na uderzenia i obtarcia. Folia PPF amortyzuje drobne uderzenia i chroni lakier.',
  },
  {
    id: 'grill',
    name: 'Atrapa chłodnicy',
    description:
      'Część ozdobna — ochrona folią przeciwdziała odpryskom na listwach i krawędziach.',
  },
];

const Folie = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const select = (id: string) => setSelected((s) => (s === id ? null : id));

  const active = PARTS.find((p) => p.id === selected) ?? null;

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="py-24 mt-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-10">
              <div className="h-1 w-16 bg-gradient-gold rounded-full mx-auto" />
              <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">Folie ochronne (PPF)</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Kliknij w część samochodu, aby zobaczyć szczegóły ochrony i korzyści.</p>
            </div>

            {/* New responsive layout: aside list / central SVG / details */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Center: SVG illustration */}
              <section className="order-1 xl:order-2 xl:col-span-8 bg-transparent rounded-2xl p-2 sm:p-4">
                <div className="relative w-full max-w-[680px] mx-auto" onClick={() => setSelected(null)}>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="w-full h-auto focus:outline-none [&_[tabindex]:focus]:outline-none"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Schemat przodu samochodu"
                  >
                    <g transform="matrix(0.73522809,0,0,0.73522809,-1177.6168,-43.756011)">
                      <path
                        id="hood" fillRule="evenodd" clipRule="evenodd"
                        d="m 2296.9664,365.40079 c -175.9011,0.28999 -256.6192,6.40712 -342.9774,25.97771 -34.483,7.81473 -40.8378,11.36132 -67.8378,37.78114 -30.2799,29.62871 -75.4561,94.48267 -100.4804,144.24285 -11.0721,22.01798 -16.0297,27.1385 -24.9977,25.8408 -8.094,-1.17119 -12.1838,-6.55617 -14.8085,-19.46346 -1.9956,-9.81121 -7.5822,-20.70979 -12.4014,-24.23384 -18.0003,-13.16241 -100.6609,-23.75683 -100.6609,-12.89876 0,9.50116 22.4549,32.32108 44.5475,45.26821 12.7136,7.45061 22.2247,14.43937 21.1352,15.52895 -5.0671,5.06695 -58.6,-9.65497 -68.3273,-18.7933 -13.9359,-13.09168 -18.0294,-12.96852 -18.0294,0.56929 0,21.0679 30.3091,43.53905 72.3625,53.64159 21.3219,5.12207 39.7409,10.1533 40.9304,11.18374 v 0.0148 0.007 0.0147 0.007 c 0.7228,1.40813 -12.5985,15.15787 -29.977,30.88498 -46.434,42.01991 -62.1438,77.90038 -54.8091,125.18296 2.9755,19.18493 4.5812,21.96525 7.9051,13.72745 2.2937,-5.68578 4.331,-19.13118 4.5325,-29.88332 0.7851,-42.25902 23.4533,-69.72777 84.2888,-102.15251 l 30.5101,-16.25682 28.9684,19.2329 c 53.9738,35.83674 156.3923,100.49963 156.3923,98.73683 0,-0.96403 -16.8606,-16.3416 -37.4715,-34.16371 -20.6109,-17.82208 -53.6229,-47.68762 -73.3572,-66.36743 l -35.8787,-33.96197 14.9379,-3.99936 c 38.8171,-10.38113 295.8828,-15.90823 584.0478,-12.56006 327.7565,3.80821 371.1518,6.043 373.6537,19.21124 0.9825,5.17151 -16.8787,25.21971 -46.4716,52.16436 -94.2903,85.85371 -93.6431,84.8546 -27.39,42.32093 126.9742,-81.51551 115.1612,-77.84824 166.8335,-51.68875 57.0033,28.85713 69.4077,49.36309 73.7827,121.95466 1.1079,18.39587 9.3738,-14.76032 9.6631,-38.7684 0.5527,-45.62689 -24.6432,-85.13452 -79.6338,-124.88027 l -15.4423,-11.16212 20.6164,-3.46612 c 67.0826,-11.29897 100.7184,-32.34366 100.7184,-63.00221 v -13.06372 l -18.2743,16.04057 c -10.0494,8.82314 -22.2553,16.06721 -27.1306,16.09824 -4.8768,0.0295 -18.1737,1.40318 -29.545,3.04094 l -20.674,2.97609 26.6048,-15.75955 c 25.0579,-14.84142 48.3451,-37.90071 48.3451,-47.86958 0,-10.66363 -79.9186,0.24056 -101.4607,13.84275 -6.2083,3.92022 -12.5011,14.95232 -14.448,25.32918 -2.738,14.59462 -5.7914,18.32941 -14.8373,18.10871 -8.74,-0.21362 -15.0147,-7.72644 -26.9073,-32.2253 -23.3973,-48.19861 -70.5429,-116.93648 -99.27,-144.74731 -23.8665,-23.10516 -28.7746,-25.43149 -72.8384,-34.45917 -91.7135,-18.79023 -158.2028,-23.38371 -334.4024,-23.0953 z"
                        fill="currentColor"
                        stroke="none"
                        className={`cursor-pointer transition-opacity duration-200 ${selected === 'hood' ? 'text-gold opacity-100' : 'text-white opacity-85 hover:opacity-100'}`}
                        onClick={(e) => { e.stopPropagation(); select('hood'); }}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') select('hood');
                        }}
                      />

                      <path
                        id="bumper"
                        d="m 2687.0015,1005.2447 c -0.5664,0.3136 -1.1347,0.6256 -1.7031,0.9355 -0.026,0.07 -0.052,0.1394 -0.078,0.209 0.5875,-0.3772 1.1811,-0.7592 1.7812,-1.1445 z m 219.8281,6.9667 c -1.993,-0.052 -9.6901,3.8529 -19.3632,9.959 -9.1184,5.7562 -19.2207,11.2912 -30.2754,16.5957 -0.4569,0.2989 -0.8902,0.6292 -1.2989,1 -1.2178,1.1419 -2.1439,2.5346 -3.0566,3.9199 -1.024,1.6127 -1.8934,3.3162 -2.7539,5.0195 -1.1797,2.4664 -2.2157,4.9947 -3.1563,7.5606 -0.9018,2.5369 -1.9235,5.0289 -2.9394,7.5215 -0.9004,2.0884 -1.8404,4.16 -2.6719,6.2773 -0.8348,2.1891 -1.7201,4.3585 -2.5723,6.541 -0.2042,0.4976 -0.4069,0.9954 -0.6132,1.4922 0.4746,-0.012 0.7733,0.037 0.8847,0.1484 6.2349,6.2346 -15.1548,34.0139 -32.9101,42.7461 -15.7116,7.7275 -33.9935,9.9518 -91.9707,11.1778 -3.2046,0.068 -6.2959,0.1223 -9.2735,0.1621 -0.9291,0.2815 -1.771,0.5021 -3.1367,0.7676 -3.2827,0.6378 -6.6537,0.6033 -9.9805,0.6543 -6.5504,-0.051 -13.0898,-0.5028 -19.6152,-1.0586 -3.4094,-0.3302 -6.8077,-0.7418 -10.2031,-1.1739 -2.9177,-0.3712 -5.8327,-0.7576 -8.752,-1.1211 -1.0878,-0.1354 -2.1765,-0.2675 -3.2656,-0.3945 -1.5792,-0.2561 -3.1243,-0.5488 -4.6387,-0.9082 -7.6018,0.1928 -15.2,0.5335 -22.8007,0.7578 -7.3303,0.208 -14.6633,0.2947 -21.9961,0.3477 -2.369,0.014 -4.7385,0.026 -7.1075,0.035 -10.1431,1.0218 -20.3123,1.709 -30.5214,1.3809 h -46.1153 c -19.5219,0 -39.0424,10e-5 -58.5644,0 -10.4359,-10e-5 -20.8726,0 -31.3086,0 -11.6953,0 -23.3906,-0.01 -35.086,-0.01 -14.0513,-0.01 -28.103,-0.01 -42.1543,-0.041 -7.9546,-0.027 -15.9101,-0.045 -23.8632,-0.2168 -7.7637,-0.1895 -15.5241,-0.4702 -23.2832,-0.7969 -9.0237,-0.3499 -18.0516,-0.3984 -27.0762,-0.7109 -7.7148,-0.3769 -15.4169,-0.9347 -23.1211,-1.4824 -9.081,-0.4974 -18.1724,-0.3179 -27.2637,-0.3379 -7.1302,0 -14.2582,-10e-5 -21.3887,0 -8.4099,0 -16.8205,-3e-4 -25.2304,0 h -25.8086 c -8.4891,0 -16.9778,-4e-4 -25.4668,0.016 -7.9742,0.013 -15.9498,0.029 -23.9238,0.09 -8.1186,0.068 -16.2371,0.1693 -24.3516,0.4531 -9.7096,0.3478 -19.4072,0.8831 -29.1074,1.4297 -12.9041,0.4777 -25.8003,1.1821 -38.709,1.5215 -11.7467,-0.052 -23.4934,-0.118 -35.2383,-0.3379 -11.1917,-0.2269 -22.3804,-0.5548 -33.5703,-0.8496 -9.5179,-0.043 -19.0362,-0.086 -28.5527,-0.2559 -6.5403,1.8805 -29.341,3.2044 -56.2637,3.0996 -57.9939,-0.2265 -83.7707,-5.4693 -109.4082,-22.2676 -12.2953,-8.0562 -22.0502,-27.1229 -16.7715,-32.6679 -0.3261,-0.6355 -0.6441,-1.276 -0.9512,-1.9219 -1.9095,-4.2026 -3.8905,-8.3753 -5.6992,-12.623 -1.8019,-4.5447 -3.6002,-9.087 -5.4433,-13.6153 -1.4364,-3.3051 -2.9086,-6.6167 -4.0079,-10.0527 -8.965,-4.1379 -17.0348,-8.3497 -24.1054,-12.6074 -15.8102,-9.5205 -28.635,-15.7393 -28.5059,-13.8145 0.1291,1.9248 13.5,30.2441 29.7168,62.9375 33.8296,68.2003 42.7124,75.3114 103.1465,82.5879 19.1875,2.3103 248.8779,3.7616 510.4238,3.2148 421.4616,-0.8811 478.7726,-1.9554 503.9688,-9.3828 35.9382,-10.5941 49.6226,-26.5588 75.6914,-88.3808 10.9684,-26.0124 20.7794,-49.2725 21.8047,-51.6895 0.1919,-0.4533 0.053,-0.6801 -0.4239,-0.6914 z"
                        fill="currentColor"
                        stroke="none"
                        className={`cursor-pointer transition-opacity duration-200 ${selected === 'bumper' ? 'text-gold opacity-100' : 'text-white opacity-85 hover:opacity-100'}`}
                        onClick={(e) => { e.stopPropagation(); select('bumper'); }}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') select('bumper');
                        }}
                      />

                      <path
                        id="grill"
                        d="m 2143.1896,1014.0806 c -8.4891,0 -16.9778,-2e-4 -25.4668,0.016 -7.9432,0.013 -15.8871,0.03 -23.8301,0.09 -1.8222,0.3745 -3.6416,0.7664 -5.455,1.1836 -0.701,0.1438 -1.4033,0.2844 -2.1055,0.4258 -0.028,0.036 -0.056,0.071 -0.084,0.1074 -1.2528,1.7001 -2.5984,3.3711 -3.4766,5.3066 -0.7797,1.9752 -1.6442,3.907 -1.8925,6.045 -0.266,1.3347 -0.4869,2.6716 -0.5977,4.0195 0.01,1.867 0.013,3.7345 0.021,5.6015 0.055,2.0735 0.1371,4.1461 0.2891,6.2149 0.118,1.2743 0.2104,2.5707 0.5781,3.7988 1.0225,0.2794 2.0369,0.5897 3.041,0.9297 0.5428,0.1961 1.0838,0.399 1.6211,0.6074 64.9247,0.14 136.4663,0.1457 210.5683,-0.012 88.7109,-0.1855 161.2893,-0.3787 220.8301,-0.6387 0.6413,-0.3237 1.284,-0.6408 1.9317,-0.9433 1.1956,-0.7961 2.4467,-1.5329 3.3593,-2.6641 0.1325,-6.4967 0.2658,-12.9935 0.3965,-19.4902 -0.5104,-0.6 -1.0382,-1.1846 -1.5957,-1.7442 -1.2567,-1.2214 -2.4993,-2.4567 -4.0293,-3.3418 -1.1167,-0.6901 -2.2519,-1.3462 -3.4297,-1.916 h -6.5254 c -19.5219,0 -39.0424,10e-5 -58.5644,0 -10.4359,-1e-4 -20.8726,0 -31.3086,0 -11.6953,0 -23.3905,-0.01 -35.0859,-0.01 -14.0513,-0.01 -28.103,-0.01 -42.1543,-0.041 -7.9546,-0.027 -15.9102,-0.045 -23.8633,-0.2168 -7.7637,-0.1895 -15.5241,-0.4701 -23.2832,-0.7968 -9.0237,-0.3499 -18.0516,-0.3985 -27.0762,-0.711 -7.7148,-0.3769 -15.4169,-0.9347 -23.1211,-1.4824 -9.081,-0.4974 -18.1724,-0.3179 -27.2637,-0.3379 -7.1302,0 -14.2581,-10e-5 -21.3886,0 -8.4099,0 -16.8206,-3e-4 -25.2305,0 z"
                        fill="currentColor"
                        stroke="none"
                        className={`cursor-pointer transition-opacity duration-200 ${selected === 'grill' ? 'text-gold opacity-100' : 'text-white opacity-85 hover:opacity-100'}`}
                        onClick={(e) => { e.stopPropagation(); select('grill'); }}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') select('grill');
                        }}
                      />

                      <path
                        id="headlights"
                        d="m 2921.0849,764.12195 c -1.993,-0.052 -9.69,3.8531 -19.3631,9.9592 -64.5736,40.7638 -178.4549,70.3948 -330.9799,86.118 -89.2084,9.1961 -455.9307,9.2701 -545.3213,0.101 -135.4785,-13.8889 -261.8312,-45.8372 -320.1574,-80.9592 -15.8102,-9.5205 -28.6359,-15.7385 -28.5068,-13.8137 0.1291,1.9247 13.5014,30.2442 29.7182,62.9375 33.8296,68.2003 42.712,75.3111 103.1461,82.5876 19.1875,2.3103 248.8771,3.7611 510.423,3.2143 421.4616,-0.8811 478.7716,-1.9553 503.9678,-9.3827 35.9382,-10.5941 49.6225,-26.5594 75.6913,-88.3814 10.9684,-26.0115 20.7818,-49.2729 21.8071,-51.6899 0.1919,-0.4533 0.052,-0.6794 -0.425,-0.6907 z m -1175.0871,65.7507 c 0.057,0 0.1096,0.01 0.1514,0.04 4.6207,-0.276 64.9352,19.0736 64.9352,19.0736 34.5254,11.9181 75.3533,22.9794 90.7377,24.5672 15.3836,1.5877 27.9728,4.8814 27.9728,7.3266 0,2.4452 -26.1629,4.3406 -58.1452,4.2158 -57.9939,-0.2263 -79.7798,0.2572 -109.4075,-22.2667 -9.7533,-7.4148 -22.1398,-27.2996 -16.696,-32.7438 0.069,-0.071 0.2794,-0.2039 0.4516,-0.2126 z m 1107.2696,0.2843 c 6.2349,6.2346 -15.1533,34.0133 -32.9086,42.7455 -15.7116,7.7275 -33.9931,9.9525 -91.9703,11.1785 -70.3322,1.4874 -86.3303,-3.8801 -32.441,-10.8677 13.4241,-1.7406 53.7475,-12.7041 89.606,-24.3706 35.8599,-11.6665 66.3274,-20.0726 67.7139,-18.6857 z"
                        fill="currentColor"
                        stroke="none"
                        className={`cursor-pointer transition-opacity duration-200 ${selected === 'headlights' ? 'text-gold opacity-100' : 'text-white opacity-85 hover:opacity-100'}`}
                        onClick={(e) => { e.stopPropagation(); select('headlights'); }}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') select('headlights');
                        }}
                      />
                    </g>
                  </svg>
                </div>
              </section>

              {/* Details panel */}
              <section className="order-3 xl:order-3 xl:col-span-4 xl:sticky xl:top-32 mt-4">
                <div className="bg-gradient-glass border border-border rounded-2xl p-4 shadow-subtle" aria-live="polite">
                  {active ? (
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">{active.name}</h3>
                      <p className="text-muted-foreground mb-5">{active.description}</p>

                      <div className="space-y-5">
                        <div>
                          <h4 className="text-lg font-medium text-foreground mb-2">Co obejmuje usługa</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
                            <li>Dokładne mycie i dekontaminacja lakieru</li>
                            <li>Precyzyjne dopasowanie i cięcie folii do elementu</li>
                            <li>Aplikacja na mokro z dbałością o krawędzie i przetłoczenia</li>
                            <li>Inspekcja końcowa i wygrzewanie folii</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-foreground mb-2">Korzyści</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
                            <li>Skuteczna ochrona przed odpryskami i mikro zarysowaniami</li>
                            <li>Odporność na promieniowanie UV i chemię drogową</li>
                            <li>Samoregeneracja drobnych rys pod wpływem ciepła</li>
                            <li>Bezpieczne usunięcie bez naruszenia lakieru</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-foreground mb-2">Proces aplikacji</h4>
                          <ol className="list-decimal list-inside text-muted-foreground space-y-1.5">
                            <li>Przygotowanie powierzchni i odtłuszczenie</li>
                            <li>Pozycjonowanie i aplikacja folii PPF</li>
                            <li>Wygładzenie, docinanie i wygrzewanie krawędzi</li>
                            <li>Kontrola jakości i instrukcja pielęgnacji</li>
                          </ol>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="rounded-xl border border-border bg-card/30 p-3">
                            <h5 className="text-sm font-semibold text-foreground mb-1.5">Czas i gwarancja</h5>
                            <p className="text-sm text-muted-foreground">Realizacja zwykle w 1–2 dni robocze. Gwarancja producenta folii + nasza gwarancja montażu.</p>
                          </div>
                          <div className="rounded-xl border border-border bg-card/30 p-3">
                            <h5 className="text-sm font-semibold text-foreground mb-1.5">Pielęgnacja</h5>
                            <p className="text-sm text-muted-foreground">Bezpieczne mycie po 7 dniach. Zalecane delikatne szampony i okresowa inspekcja.</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-foreground mb-2">Wycena</h4>
                          <p className="text-muted-foreground">Cena zależy od modelu auta, stanu lakieru i zakresu demontażu. Skontaktuj się z nami telefonicznie – przygotujemy dokładną wycenę.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-left py-4 space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Ochrona folią PPF – przegląd</h3>
                      <p className="text-muted-foreground">PPF to przezroczysta, gruba folia poliuretanowa, która chroni lakier przed uszkodzeniami mechanicznymi i wpływem środowiska, zachowując fabryczny wygląd auta.</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
                        <li>Pakiety częściowe (front, newralgiczne strefy) lub pełne oklejenie</li>
                        <li>Samoregeneracja drobnych rys pod wpływem ciepła</li>
                        <li>Demontowalna bez śladu – bezpieczna dla lakieru</li>
                      </ul>
                      <div className="rounded-xl border border-border bg-card/30 p-3">
                        <p className="text-sm text-muted-foreground">Całościowe oklejenie PPF zwykle mieści się w widełkach 11 000–16 000 zł w zależności od modelu i zakresu prac.</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Folie;
