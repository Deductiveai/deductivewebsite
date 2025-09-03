---
title: "AI-agents"
description: "Autonome AI-agents die complexe taken uitvoeren, processen automatiseren en intelligent beslissingen nemen voor verschillende bedrijfstypes."
layout: "feature-nopose"
badge: "AI-agents"
badgeColor: "#08d5f9"
features:
  - title: "Autonome werking"
    description: "AI-agents werken zelfstandig zonder constante menselijke tussenkomst. Ze kunnen taken plannen, uitvoeren en monitoren."
    icon: "🤖"
  - title: "Procesautomatisering"
    description: "Automatiseer complexe bedrijfsprocessen met intelligente agents die zich aanpassen aan veranderende omstandigheden."
    icon: "⚙️"
  - title: "Realtime besluitvorming"
    description: "Neem snelle, data-gedreven beslissingen gebaseerd op realtime informatie en geavanceerde algoritmen."
    icon: "⚡"
  - title: "Universele integratie"
    description: "Naadloze integratie met vrijwel elk bestaand systeem - van CRM's tot custom databases en API's."
    icon: "🔗"
stats:
  - number: "75%"
    label: "Procesefficiëntie"
    description: "Verbetering in workflow-snelheid"
  - number: "90%"
    label: "Foutreductie"
    description: "Minder handmatige fouten"
  - number: "24/7"
    label: "Operationeel"
    description: "Continue beschikbaarheid"
  - number: "3x"
    label: "ROI Verbetering"
    description: "Gemiddeld rendement op investering"
demo:
  description: "Ontdek hoe onze AI-agents verschillende bedrijfstypes kunnen transformeren."
  image: "images/feature-2.svg"
---

{{< modern-hero 
  title="Slimme<br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient\">AI-Agents</span><br>voor Elk Bedrijf"
  subtitle="Transformeer uw bedrijfsprocessen met autonome AI-agents die zelfstandig beslissingen nemen, automatiseren en continu optimaliseren."
  badge_text="Autonome AI-Intelligence"
  primary_btn_text="Zie AI in Actie"
  primary_btn_url="#ai-demo"
  secondary_btn_text="Plan Gratis Demo"
  secondary_btn_url="/contact"
  stat1_number="75%"
  stat1_label="Procesefficiëntie"
  stat2_number="24/7"
  stat2_label="Operationeel"
  stat3_number="3x"
  stat3_label="ROI Verbetering"
>}}

<!-- Live AI Demo Section -->
<section class="py-20 bg-white" id="ai-demo">
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-gray-900 mb-4">Live AI Demo</h2>
<p class="text-xl text-gray-600">Zie AI-Agents in Actie</p>
<p class="text-lg text-gray-500 mt-2">Ervaar real-time hoe een AI-agent complexe bedrijfssituaties oppakt en oplost - van eerste contact tot voltooide actie.</p>
</div>

<div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
<div class="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
<div class="flex items-center justify-between">
<h3 class="font-semibold text-lg text-white">AI-Agent Terminal</h3>
<div class="flex items-center space-x-2">
<div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
<span class="text-white text-sm">System Active</span>
</div>
</div>
</div>

<div class="p-8">
<div class="mb-8">
<h3 class="text-lg font-semibold text-gray-900 mb-4">Kies een Scenario:</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<button class="scenario-btn active p-4 rounded-xl border-2 border-cyan-500 bg-cyan-50 transition-all duration-300 hover:shadow-md" data-scenario="customer-support">
<div class="text-2xl mb-2">🎧</div>
<div class="font-semibold text-gray-900">Klantservice</div>
<div class="text-sm text-gray-600">Boze klant over vertraging</div>
</button>
<button class="scenario-btn p-4 rounded-xl border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-md" data-scenario="sales-lead">
<div class="text-2xl mb-2">💼</div>
<div class="font-semibold text-gray-900">Sales Lead</div>
<div class="text-sm text-gray-600">Nieuwe prospect interesse</div>
</button>
<button class="scenario-btn p-4 rounded-xl border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-md" data-scenario="inventory">
<div class="text-2xl mb-2">📦</div>
<div class="font-semibold text-gray-900">Voorraad Alert</div>
<div class="text-sm text-gray-600">Stock level kritiek</div>
</button>
</div>
</div>

<div class="bg-gray-900 rounded-2xl p-6 text-green-400 font-mono text-sm min-h-[400px]">
<div class="flex items-center mb-4">
<span class="text-blue-400">AI-Agent@deductive:~$</span>
<div class="ml-2 w-2 h-5 bg-green-400 animate-pulse"></div>
</div>

<div id="simulation-output" class="space-y-2">
<div class="text-gray-400"># Welcome to AI Agent Simulation</div>
<div class="text-yellow-400"># Select a scenario above to begin demonstration</div>
<div class="text-cyan-400"># This agent handles real customer interactions autonomously</div>
<div class="text-gray-500 mt-4">Ready for simulation...</div>
</div>
</div>

<div class="mt-6 flex justify-center space-x-4">
<button id="start-simulation" class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
<svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
Start Simulatie
</button>
<button id="reset-simulation" class="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg">
Reset
</button>
</div>
</div>
</div>
</div>
</section>

<!-- Comparison Section -->
<section class="py-20 bg-gray-50">
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
<div class="text-center mb-16">
<h2 class="text-4xl font-bold text-gray-900 mb-4">Waarom AI-Agents?</h2>
<p class="text-xl text-gray-600">De digitale revolutie vraagt om slimme oplossingen. Ontdek het verschil tussen traditioneel werken en AI-gedreven automatisering.</p>
</div>

<div class="grid lg:grid-cols-2 gap-8">
<div class="group relative bg-white rounded-3xl p-8 border border-red-100 hover:shadow-xl transition-all duration-500">
<div class="absolute top-4 right-4 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
<svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<h3 class="text-2xl font-bold text-gray-900 mb-6">Traditioneel</h3>
<div class="space-y-4">
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
<span>Handmatige verwerking van elke taak</span>
</div>
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
<span>Beperkt tot kantooruren</span>
</div>
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
<span>Fouten door vermoeidheid</span>
</div>
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
<span>Langzame schaling</span>
</div>
</div>
<div class="mt-6 text-red-600 font-semibold">Efficiëntie: 60%</div>
</div>

<div class="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-500">
<div class="absolute top-4 right-4 w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
<svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
</svg>
</div>
<h3 class="text-2xl font-bold text-gray-900 mb-6">Met AI-Agents</h3>
<div class="space-y-4">
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
<span>Volledige automatisering</span>
</div>
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
<span>24/7 beschikbaarheid</span>
</div>
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
<span>Consistente precisie</span>
</div>
<div class="flex items-center text-gray-700">
<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
<span>Onbeperkte schaling</span>
</div>
</div>
<div class="mt-6 text-green-600 font-semibold">Efficiëntie: 95%</div>
</div>
</div>

<div class="mt-16 bg-gradient-to-r from-gray-900 to-slate-800 rounded-3xl p-8 text-white">
<div class="text-center mb-8">
<h3 class="text-2xl font-bold mb-2">Bewezen Impact</h3>
<p class="text-gray-300">Resultaten van onze klanten</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="text-center">
<div class="text-4xl font-bold text-cyan-400 mb-2">75%</div>
<div class="text-sm text-gray-300">Snellere Verwerking</div>
</div>
<div class="text-center">
<div class="text-4xl font-bold text-green-400 mb-2">90%</div>
<div class="text-sm text-gray-300">Minder Fouten</div>
</div>
<div class="text-center">
<div class="text-4xl font-bold text-blue-400 mb-2">€50k</div>
<div class="text-sm text-gray-300">Gem. Kostenbesparing</div>
</div>
<div class="text-center">
<div class="text-4xl font-bold text-purple-400 mb-2">24/7</div>
<div class="text-sm text-gray-300">Uptime Garantie</div>
</div>
</div>
</div>
</div>
</section>

<!-- Business Types Demo Section -->
<section class="py-20 bg-white" id="business-demo">
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-gray-900 mb-4">Ontdek per bedrijfstype</h2>
<p class="text-xl text-gray-600">Zie hoe AI-agents specifiek werken voor verschillende bedrijven</p>
</div>

<div class="flex flex-wrap justify-center gap-4 mb-12">
<button class="business-btn active flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-lg border-2 border-cyan-500" data-business="retail">
<div class="text-2xl">🛒</div>
<span class="text-sm font-medium text-gray-900">Retail</span>
</button>
<button class="business-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300" data-business="finance">
<div class="text-2xl">💰</div>
<span class="text-sm font-medium text-gray-700">Finance</span>
</button>
<button class="business-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300" data-business="healthcare">
<div class="text-2xl">🏥</div>
<span class="text-sm font-medium text-gray-700">Healthcare</span>
</button>
<button class="business-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300" data-business="manufacturing">
<div class="text-2xl">🏭</div>
<span class="text-sm font-medium text-gray-700">Manufacturing</span>
</button>
<button class="business-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300" data-business="restaurant">
<div class="text-2xl">🍽️</div>
<span class="text-sm font-medium text-gray-700">Restaurant</span>
</button>
<button class="business-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300" data-business="realestate">
<div class="text-2xl">🏠</div>
<span class="text-sm font-medium text-gray-700">Real Estate</span>
</button>
</div>

<div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
<div class="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4">
<h3 class="font-semibold text-lg text-white" id="business-title">🛒 Retail Dashboard</h3>
</div>

<div class="p-8">
<div id="business-content" class="space-y-6">
<div class="business-content active" data-business="retail">
<div class="grid md:grid-cols-2 gap-8">
<div>
<h4 class="text-xl font-semibold text-gray-900 mb-4">AI-Agent Taken</h4>
<div class="space-y-3">
<div class="flex items-start">
<div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
<div>
<div class="font-medium">Voorraad Management</div>
<div class="text-sm text-gray-600">Automatische bestelling bij lage voorraad</div>
</div>
</div>
<div class="flex items-start">
<div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
<div>
<div class="font-medium">Klantenservice</div>
<div class="text-sm text-gray-600">24/7 chat ondersteuning en ordertracking</div>
</div>
</div>
<div class="flex items-start">
<div class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
<div>
<div class="font-medium">Sales Analytics</div>
<div class="text-sm text-gray-600">Realtime verkoop insights en trends</div>
</div>
</div>
</div>
</div>
<div>
<h4 class="text-xl font-semibold text-gray-900 mb-4">Resultaten</h4>
<div class="space-y-4">
<div class="bg-blue-50 p-4 rounded-lg">
<div class="text-2xl font-bold text-blue-600">35%</div>
<div class="text-sm text-blue-800">Minder stockouts</div>
</div>
<div class="bg-green-50 p-4 rounded-lg">
<div class="text-2xl font-bold text-green-600">60%</div>
<div class="text-sm text-green-800">Snellere klantenservice</div>
</div>
<div class="bg-purple-50 p-4 rounded-lg">
<div class="text-2xl font-bold text-purple-600">25%</div>
<div class="text-sm text-purple-800">Hogere omzet</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- Integration Section -->
<section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden relative">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
<div class="text-center mb-16">
<h2 class="text-4xl font-bold text-white mb-4">Universele Connectiviteit</h2>
<p class="text-xl text-gray-300 mb-2">Integreert met Alles</p>
<p class="text-lg text-gray-400">Onze AI-agents praten direct met uw bestaande systemen. Geen migratie, geen gedoe - gewoon naadloze integratie vanaf dag één.</p>
</div>

<div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
<div class="integration-category" data-category="crm">
<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
<div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg>
</div>
<h3 class="text-lg font-semibold text-white mb-2">CRM & Sales</h3>
<div class="space-y-1 text-sm text-gray-300">
<div>HubSpot</div>
<div>Salesforce</div>
<div>Pipedrive</div>
</div>
</div>
</div>

<div class="integration-category" data-category="communication">
<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
<div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
</div>
<h3 class="text-lg font-semibold text-white mb-2">Communicatie</h3>
<div class="space-y-1 text-sm text-gray-300">
<div>Slack</div>
<div>Microsoft Teams</div>
<div>WhatsApp Business</div>
</div>
</div>
</div>

<div class="integration-category" data-category="ecommerce">
<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
<div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
</svg>
</div>
<h3 class="text-lg font-semibold text-white mb-2">E-commerce</h3>
<div class="space-y-1 text-sm text-gray-300">
<div>Shopify</div>
<div>WooCommerce</div>
<div>Magento</div>
</div>
</div>
</div>

<div class="integration-category" data-category="analytics">
<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
<div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
</div>
<h3 class="text-lg font-semibold text-white mb-2">Analytics</h3>
<div class="space-y-1 text-sm text-gray-300">
<div>Google Analytics</div>
<div>Power BI</div>
<div>Tableau</div>
</div>
</div>
</div>
</div>

<div class="grid md:grid-cols-3 gap-8 mb-12">
<div class="text-center">
<div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
</svg>
</div>
<h3 class="text-xl font-semibold text-white mb-2">Instant Setup</h3>
<p class="text-gray-300">Configuratie in minuten, niet weken. Onze AI-agents praten direct met uw systemen.</p>
</div>

<div class="text-center">
<div class="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
</div>
<h3 class="text-xl font-semibold text-white mb-2">Veilige Verbindingen</h3>
<p class="text-gray-300">Enterprise-grade beveiliging met end-to-end encryptie voor al uw gevoelige data.</p>
</div>

<div class="text-center">
<div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
</svg>
</div>
<h3 class="text-xl font-semibold text-white mb-2">Realtime Sync</h3>
<p class="text-gray-300">Bidirectionele synchronisatie zorgt ervoor dat alle systemen altijd up-to-date zijn.</p>
</div>
</div>

<div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
<h3 class="text-2xl font-bold text-white mb-4">Uw Systeem Er Niet Bij?</h3>
<p class="text-gray-300 mb-6">Geen probleem. Onze AI-agents kunnen met vrijwel elk systeem praten via REST APIs, webhooks of custom integraties. We bouwen binnen 48 uur een connectie voor u.</p>
<a href="/contact" class="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
Bespreek Custom Integratie
</a>
</div>
</div>
</section>

<!-- Backend Dashboard Section -->
<section class="py-20 bg-white relative overflow-hidden">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
<div class="text-center mb-16">
<h2 class="text-4xl font-bold text-gray-900 mb-4">Deductive Backend Dashboard</h2>
<h3 class="text-2xl font-semibold text-blue-600 mb-4">Alles Komt Samen in Uw Dashboard</h3>
<p class="text-xl text-gray-600 max-w-4xl mx-auto">
Beheer al uw AI-agents vanuit één krachtige backend. Realtime monitoring, aanpassingen, en volledige controle over uw intelligente systemen - per bedrijfstype geoptimaliseerd.
</p>
</div>

<!-- Dashboard Selector -->
<div class="flex flex-wrap justify-center gap-4 mb-12">
<button class="backend-btn active flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-lg border-2 border-cyan-500 backdrop-blur-sm" data-dashboard="retail">
<div class="text-2xl">🛒</div>
<span class="text-sm font-medium text-gray-900">Retail Dashboard</span>
</button>
<button class="backend-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300 backdrop-blur-sm" data-dashboard="finance">
<div class="text-2xl">💰</div>
<span class="text-sm font-medium text-gray-600">Finance Dashboard</span>
</button>
<button class="backend-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300 backdrop-blur-sm" data-dashboard="healthcare">
<div class="text-2xl">🏥</div>
<span class="text-sm font-medium text-gray-600">Healthcare Dashboard</span>
</button>
<button class="backend-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300 backdrop-blur-sm" data-dashboard="manufacturing">
<div class="text-2xl">🏭</div>
<span class="text-sm font-medium text-gray-600">Manufacturing Dashboard</span>
</button>
<button class="backend-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300 backdrop-blur-sm" data-dashboard="restaurant">
<div class="text-2xl">🍽️</div>
<span class="text-sm font-medium text-gray-600">Restaurant Dashboard</span>
</button>
<button class="backend-btn flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-md border-2 border-gray-200 hover:border-cyan-300 backdrop-blur-sm" data-dashboard="realestate">
<div class="text-2xl">🏠</div>
<span class="text-sm font-medium text-gray-600">Real Estate Dashboard</span>
</button>
</div>

<!-- Dashboard Preview -->
<div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
<div class="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
<h3 class="font-semibold text-lg text-white">🛒 Retail Management Dashboard</h3>
</div>

<div class="p-8">
<div class="grid lg:grid-cols-4 gap-6">
<div class="bg-blue-50 p-6 rounded-xl">
<div class="flex items-center justify-between mb-4">
<h4 class="font-semibold text-gray-900">Realtime Analytics</h4>
<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
</div>
<p class="text-sm text-gray-600">Live monitoring van alle agent activiteiten en prestaties</p>
</div>

<div class="bg-green-50 p-6 rounded-xl">
<div class="flex items-center justify-between mb-4">
<h4 class="font-semibold text-gray-900">Agent Configuratie</h4>
<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
</div>
<p class="text-sm text-gray-600">Pas agent gedrag en instellingen aan per bedrijfstype</p>
</div>

<div class="bg-yellow-50 p-6 rounded-xl">
<div class="flex items-center justify-between mb-4">
<h4 class="font-semibold text-gray-900">Alert Management</h4>
<svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM7 7h3m-3 4h3m-3 4h3M5 21V3h14l2 2v16H5z"></path>
</svg>
</div>
<p class="text-sm text-gray-600">Geautomatiseerde meldingen en escalatie procedures</p>
</div>

<div class="bg-purple-50 p-6 rounded-xl">
<div class="flex items-center justify-between mb-4">
<h4 class="font-semibold text-gray-900">Security & Compliance</h4>
<svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
</div>
<p class="text-sm text-gray-600">Enterprise-grade beveiliging en compliance monitoring</p>
</div>
</div>
</div>
</div>
</div>
</section>