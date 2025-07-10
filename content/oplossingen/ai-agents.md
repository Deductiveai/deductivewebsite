---
title: "AI-Agents"
description: "Autonome AI-agents die complexe taken uitvoeren, processen automatiseren en intelligent beslissingen nemen voor verschillende bedrijfstypes."
layout: "feature"
badge: "AI-Agents"
badgeColor: "#08d5f9"
features:
  - title: "Autonome Werking"
    description: "AI-agents werken zelfstandig zonder constante menselijke tussenkomst. Ze kunnen taken plannen, uitvoeren en monitoren."
    icon: "🤖"
  - title: "Procesautomatisering"
    description: "Automatiseer complexe bedrijfsprocessen met intelligente agents die zich aanpassen aan veranderende omstandigheden."
    icon: "⚙️"
  - title: "Realtime Besluitvorming"
    description: "Neem snelle, data-gedreven beslissingen gebaseerd op realtime informatie en geavanceerde algoritmen."
    icon: "⚡"
  - title: "Universele Integratie"
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

<!-- Interactive Hero Section -->
<section class="relative py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
<div class="absolute inset-0 bg-circuit-pattern opacity-10"></div>
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
<div class="text-center mb-16">
<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
Intelligente <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">AI-Agents</span>
</h1>
<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
Ontdek hoe autonome AI-agents uw bedrijfsprocessen revolutioneren met zelfstandige besluitvorming, automatisering en continue optimalisatie - volledig geïntegreerd met systemen zoals HubSpot.
</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<a href="#business-demo" class="btn-primary-cyan">Ontdek per Bedrijfstype</a>
<a href="/contact" class="btn-outline-cyan">Plan een demo</a>
</div>
</div>
</div>
</section>

<!-- What Are AI Agents Section -->
<section class="py-16 bg-white">
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-gray-900 mb-4">Wat zijn AI-Agents eigenlijk?</h2>
<p class="text-xl text-gray-600 max-w-3xl mx-auto">Stel je voor: een digitale medewerker die nooit slaapt, nooit fouten maakt door vermoeidheid, en elke dag slimmer wordt. Dat is een AI-agent.</p>
</div>

<!-- Interactive Journey -->
<div class="max-w-6xl mx-auto">
<div class="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
<h3 class="text-2xl font-bold text-center text-gray-900 mb-8">Hoe een AI-Agent te Werk Gaat</h3>

<!-- Step Navigation -->
<div class="flex justify-center mb-8">
<div class="flex space-x-4">
<button class="step-nav-btn active" data-step="1">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
<span class="hidden sm:inline">Informatie</span>
</div>
</button>
<button class="step-nav-btn" data-step="2">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
<span class="hidden sm:inline">Analyse</span>
</div>
</button>
<button class="step-nav-btn" data-step="3">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
<span class="hidden sm:inline">Actie</span>
</div>
</button>
<button class="step-nav-btn" data-step="4">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
<span class="hidden sm:inline">Leren</span>
</div>
</button>
</div>
</div>

<!-- Dynamic Content Area -->
<div id="step-content" class="min-h-[400px]">
<!-- Content will be dynamically loaded here -->
</div>

<!-- Auto-play Controls -->
<div class="flex justify-center mt-8 space-x-4">
<button id="play-pause-btn" class="flex items-center space-x-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
<svg id="play-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z"/>
</svg>
<svg id="pause-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
<path d="M5.5 3.5A1.5 1.5 0 017 2h.5v16H7a1.5 1.5 0 01-1.5-1.5v-13zM12.5 3.5A1.5 1.5 0 0114 2h.5v16H14a1.5 1.5 0 01-1.5-1.5v-13z"/>
</svg>
<span id="play-text">Start Demo</span>
</button>
<div class="text-sm text-gray-600 flex items-center">
<span>Automatisch afspelen in: <span id="countdown">4</span>s</span>
</div>
</div>
</div>
</div>

<!-- Comparison: Traditional vs AI-Agent -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
<!-- Traditional Work Card -->
<div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden group hover:shadow-3xl transition-all duration-500">
<!-- Background Pattern -->
<div class="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-70"></div>
<div class="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
<div class="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-50 group-hover:scale-125 transition-transform duration-500"></div>

<!-- Content -->
<div class="relative z-10">
<div class="flex items-center mb-6">
<div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
</svg>
</div>
<h3 class="text-2xl font-bold text-gray-900">Traditioneel Werken</h3>
</div>

<div class="space-y-5">
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">Handmatige verwerking</p>
<p class="text-gray-600 mt-1">Medewerkers moeten elke taak handmatig uitvoeren</p>
</div>
</div>
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">Beperkte werktijden</p>
<p class="text-gray-600 mt-1">Alleen beschikbaar tijdens kantooruren</p>
</div>
</div>
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">Menselijke fouten</p>
<p class="text-gray-600 mt-1">Vermoeidheid en stress leiden tot vergissingen</p>
</div>
</div>
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">Langzame schaling</p>
<p class="text-gray-600 mt-1">Meer werk betekent meer personeel</p>
</div>
</div>
</div>
</div>
</div>

<!-- AI-Agents Card -->
<div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden group hover:shadow-3xl transition-all duration-500">
<!-- Background Pattern -->
<div class="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50 opacity-70"></div>
<div class="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
<div class="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 rounded-full translate-y-12 -translate-x-12 opacity-50 group-hover:scale-125 transition-transform duration-500"></div>

<!-- Content -->
<div class="relative z-10">
<div class="flex items-center mb-6">
<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<h3 class="text-2xl font-bold text-gray-900">Met AI-Agents</h3>
</div>

<div class="space-y-5">
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-green-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">Automatische verwerking</p>
<p class="text-gray-600 mt-1">AI-agents voeren taken zelfstandig uit</p>
</div>
</div>
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-green-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">24/7 beschikbaarheid</p>
<p class="text-gray-600 mt-1">Altijd actief, zelfs 's nachts en in weekenden</p>
</div>
</div>
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-green-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">Consistente kwaliteit</p>
<p class="text-gray-600 mt-1">Geen fouten door vermoeidheid of stress</p>
</div>
</div>
<div class="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div class="w-3 h-3 bg-green-500 rounded-full mt-2 shadow-lg"></div>
<div>
<p class="text-gray-900 font-semibold text-lg">Onbeperkte schaling</p>
<p class="text-gray-600 mt-1">Verwerk duizenden taken tegelijkertijd</p>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- Real-world Examples -->
<div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Praktijkvoorbeelden in Simpele Taal</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="example-card p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
</div>
<h4 class="font-semibold text-gray-900 mb-3">Email Agent</h4>
<p class="text-sm text-gray-600">
<strong>Wat het doet:</strong> Leest al je emails, categoriseert ze automatisch en beantwoordt standaardvragen direct.
</p>
<p class="text-xs text-blue-600 mt-2 font-medium">
Net zoals een persoonlijke assistent, maar dan digitaal!
</p>
</div>

<div class="example-card p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
<div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
</svg>
</div>
<h4 class="font-semibold text-gray-900 mb-3">Voorraad Agent</h4>
<p class="text-sm text-gray-600">
<strong>Wat het doet:</strong> Houdt je voorraad in de gaten en bestelt automatisch nieuwe producten als ze opraken.
</p>
<p class="text-xs text-green-600 mt-2 font-medium">
Zoals een magazijnmedewerker die nooit vergeet te bestellen!
</p>
</div>

<div class="example-card p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
<div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
</div>
<h4 class="font-semibold text-gray-900 mb-3">Klantservice Agent</h4>
<p class="text-sm text-gray-600">
<strong>Wat het doet:</strong> Beantwoordt klantvragen 24/7 en stuurt moeilijke vragen door naar een mens.
</p>
<p class="text-xs text-purple-600 mt-2 font-medium">
Als een vriendelijke receptionist die altijd beschikbaar is!
</p>
</div>
</div>
</div>
</div>
</section>

<!-- AI Agents Collaboration Section -->
<section class="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
<!-- Background decorations -->
<div class="absolute inset-0 opacity-10">
<div class="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
<div class="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
<div class="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500 rounded-full blur-xl"></div>
<div class="absolute bottom-10 right-10 w-18 h-18 bg-indigo-500 rounded-full blur-xl"></div>
</div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
<!-- Header -->
<div class="text-center mb-16">
<div class="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
</svg>
Deductive AI Network
</div>
<h2 class="text-5xl font-bold text-gray-900 mb-6">Deductive AI-Agents Werken Samen</h2>
<p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
Ontdek hoe onze intelligente agents samenwerken in een perfect gecoördineerd ecosysteem. Elk agent heeft zijn eigen specialiteit, maar samen vormen ze een krachtig netwerk dat uw bedrijf 24/7 ondersteunt.
</p>
</div>

<!-- Deductive Backend Dashboard -->
<div class="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-gray-100">
<div class="bg-gradient-to-r from-gray-900 to-gray-800 -m-8 mb-8 p-8 rounded-t-3xl">
<div class="flex items-center justify-between">
<div class="flex items-center">
<div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
</svg>
</div>
<div>
<h3 class="text-2xl font-bold text-white">Deductive Agent Backend</h3>
<p class="text-gray-300 text-sm">Centraal beheer van alle AI-agents</p>
</div>
</div>
<div class="flex items-center space-x-4">
<div class="flex items-center">
<div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
<span class="text-green-400 text-sm font-medium">7 Agents Online</span>
</div>
<div class="text-gray-400 text-sm">laatste update: 2 sec geleden</div>
</div>
</div>
</div>

<!-- Agent Network Visualization -->
<div class="max-w-7xl mx-auto">
<h4 class="text-3xl font-bold text-gray-900 mb-12 text-center">Hoe Deductive Agents Samenwerken</h4>

<!-- Simple Agent Flow -->
<div class="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
<div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

<!-- Agent Cards -->
<div class="space-y-6">
<h5 class="text-xl font-bold text-gray-900 text-center mb-8">Individuele Agents</h5>

<div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
<div class="flex items-center space-x-4">
<div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
</div>
<div>
<h6 class="text-lg font-semibold text-gray-900">Customer Service</h6>
<p class="text-sm text-gray-600">Beantwoordt vragen en helpt klanten</p>
</div>
</div>
</div>

<div class="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
<div class="flex items-center space-x-4">
<div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
</svg>
</div>
<div>
<h6 class="text-lg font-semibold text-gray-900">Sales Agent</h6>
<p class="text-sm text-gray-600">Verwerkt bestellingen en leads</p>
</div>
</div>
</div>

<div class="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
<div class="flex items-center space-x-4">
<div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
</div>
<div>
<h6 class="text-lg font-semibold text-gray-900">Analytics Agent</h6>
<p class="text-sm text-gray-600">Analyseert data en trends</p>
</div>
</div>
</div>
</div>

<!-- Central Hub -->
<div class="flex flex-col items-center justify-center space-y-6">
<div class="relative">
<div class="w-32 h-32 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
<div class="text-center">
<div class="text-lg text-white font-bold mb-1">DEDUCTIVE</div>
<div class="text-sm text-purple-100">HUB</div>
</div>
</div>
<div class="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
<div class="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>

<div class="text-center">
<h5 class="text-xl font-bold text-gray-900 mb-2">Real-time Coördinatie</h5>
<p class="text-sm text-gray-600 max-w-xs">Alle agents communiceren instant via onze backend</p>
</div>

<div class="flex items-center space-x-4 bg-gray-50 rounded-xl px-4 py-3">
<div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
<span class="text-sm font-medium text-gray-700">Live verbinding actief</span>
</div>
</div>

<!-- Result -->
<div class="space-y-6">
<h5 class="text-xl font-bold text-gray-900 text-center mb-8">Het Resultaat</h5>

<div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200 text-center hover:shadow-lg transition-all duration-300">
<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<h6 class="text-xl font-bold text-gray-900 mb-3">Perfect Gecoördineerd Systeem</h6>
<p class="text-gray-600">Alle agents werken samen als één intelligent netwerk</p>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-xl p-4 text-center border border-blue-200">
<div class="text-2xl font-bold text-blue-600 mb-1">0.3s</div>
<div class="text-sm text-gray-600">Response tijd</div>
</div>
<div class="bg-gradient-to-r from-orange-50 to-red-100 rounded-xl p-4 text-center border border-orange-200">
<div class="text-2xl font-bold text-orange-600 mb-1">24/7</div>
<div class="text-sm text-gray-600">Beschikbaar</div>
</div>
</div>

<div class="bg-gradient-to-r from-indigo-50 to-purple-100 rounded-xl p-4 text-center border border-indigo-200">
<div class="text-2xl font-bold text-indigo-600 mb-1">∞</div>
<div class="text-sm text-gray-600">Schaalbaarheid</div>
</div>
</div>

</div>
</div>

<!-- Connection Lines -->
<svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
<defs>
<linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:0.8"/>
<stop offset="100%" style="stop-color:#EC4899;stop-opacity:0.8"/>
</linearGradient>
</defs>
<!-- Lines from center to each agent -->
<line x1="50%" y1="50%" x2="50%" y2="18%" stroke="url(#connectionGradient)" stroke-width="2" stroke-dasharray="5,5" class="connection-line">
<animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite"/>
</line>
<line x1="50%" y1="50%" x2="82%" y2="50%" stroke="url(#connectionGradient)" stroke-width="2" stroke-dasharray="5,5" class="connection-line">
<animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite"/>
</line>
<line x1="50%" y1="50%" x2="50%" y2="82%" stroke="url(#connectionGradient)" stroke-width="2" stroke-dasharray="5,5" class="connection-line">
<animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite"/>
</line>
<line x1="50%" y1="50%" x2="18%" y2="50%" stroke="url(#connectionGradient)" stroke-width="2" stroke-dasharray="5,5" class="connection-line">
<animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite"/>
</line>
<line x1="50%" y1="50%" x2="75%" y2="28%" stroke="url(#connectionGradient)" stroke-width="2" stroke-dasharray="5,5" class="connection-line">
<animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite"/>
</line>
<line x1="50%" y1="50%" x2="25%" y2="72%" stroke="url(#connectionGradient)" stroke-width="2" stroke-dasharray="5,5" class="connection-line">
<animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite"/>
</line>
</svg>

<!-- Agent Info Tooltips -->
<div class="absolute top-2 left-1/2 transform -translate-x-1/2 text-center opacity-0 tooltip" id="tooltip-customer">
<div class="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
Customer Service Agent
</div>
</div>
<div class="absolute top-1/2 right-2 transform -translate-y-1/2 text-center opacity-0 tooltip" id="tooltip-sales">
<div class="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
Sales Agent
</div>
</div>
<div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center opacity-0 tooltip" id="tooltip-marketing">
<div class="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
Marketing Agent
</div>
</div>
<div class="absolute top-1/2 left-2 transform -translate-y-1/2 text-center opacity-0 tooltip" id="tooltip-analytics">
<div class="bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
Analytics Agent
</div>
</div>
<div class="absolute top-16 right-16 text-center opacity-0 tooltip" id="tooltip-logistics">
<div class="bg-teal-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
Logistics Agent
</div>
</div>
<div class="absolute bottom-16 left-16 text-center opacity-0 tooltip" id="tooltip-finance">
<div class="bg-pink-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
Finance Agent
</div>
</div>
</div>
</div>

<!-- Right: Agent Control Panel -->
<div class="bg-gray-50 rounded-2xl p-6">
<h4 class="text-xl font-bold text-gray-900 mb-6">Live Agent Dashboard</h4>

<div class="space-y-4">
<!-- Agent Status Cards -->
<div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
<div class="flex items-center justify-between">
<div class="flex items-center">
<div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
<div>
<h5 class="font-semibold text-gray-900">Customer Service</h5>
<p class="text-sm text-gray-600">Handling 23 conversations</p>
</div>
</div>
<div class="text-right">
<div class="text-sm text-green-600 font-semibold">97% Efficiency</div>
<div class="text-xs text-gray-500">Avg response: 0.8s</div>
</div>
</div>
</div>

<div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
<div class="flex items-center justify-between">
<div class="flex items-center">
<div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
<div>
<h5 class="font-semibold text-gray-900">Sales Agent</h5>
<p class="text-sm text-gray-600">Processing 8 leads</p>
</div>
</div>
<div class="text-right">
<div class="text-sm text-green-600 font-semibold">92% Efficiency</div>
<div class="text-xs text-gray-500">Conversion: 34%</div>
</div>
</div>
</div>

<div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
<div class="flex items-center justify-between">
<div class="flex items-center">
<div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
<div>
<h5 class="font-semibold text-gray-900">Marketing Agent</h5>
<p class="text-sm text-gray-600">Running 5 campaigns</p>
</div>
</div>
<div class="text-right">
<div class="text-sm text-green-600 font-semibold">94% Efficiency</div>
<div class="text-xs text-gray-500">CTR: 3.2%</div>
</div>
</div>
</div>

<div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
<div class="flex items-center justify-between">
<div class="flex items-center">
<div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
<div>
<h5 class="font-semibold text-gray-900">Analytics Agent</h5>
<p class="text-sm text-gray-600">Analyzing 15K events</p>
</div>
</div>
<div class="text-right">
<div class="text-sm text-green-600 font-semibold">99% Efficiency</div>
<div class="text-xs text-gray-500">Insights: 12 new</div>
</div>
</div>
</div>
</div>

<!-- Backend Controls -->
<div class="mt-6 pt-6 border-t border-gray-200">
<h5 class="font-semibold text-gray-900 mb-4">Agent Beheer</h5>
<div class="grid grid-cols-2 gap-3">
<button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
Agent Toevoegen
</button>
<button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
Instellingen
</button>
<button class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
Performance
</button>
<button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
Logboek
</button>
</div>
</div>
</div>
</div>
</div>

<!-- Agent Collaboration Features -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div class="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
<div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
</div>
<h3 class="text-lg font-bold text-gray-900 mb-2">Real-time Messaging</h3>
<p class="text-gray-600 text-sm">Agents communiceren instantaan via ons beveiligde berichtenprotocol. Latency < 50ms gegarandeerd.</p>
</div>

<div class="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
</svg>
</div>
<h3 class="text-lg font-bold text-gray-900 mb-2">Workflow Orchestration</h3>
<p class="text-gray-600 text-sm">Complexe bedrijfsprocessen worden automatisch gecoördineerd tussen meerdere agents zonder menselijke tussenkomst.</p>
</div>

<div class="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
</svg>
</div>
<h3 class="text-lg font-bold text-gray-900 mb-2">Collective Learning</h3>
<p class="text-gray-600 text-sm">Kennis en inzichten worden gedeeld via ons centrale knowledge graph. Elke agent leert van alle anderen.</p>
</div>

<div class="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
<div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
</div>
<h3 class="text-lg font-bold text-gray-900 mb-2">Centralized Security</h3>
<p class="text-gray-600 text-sm">Alle agent-communicatie wordt beveiligd via end-to-end encryptie en gelogd voor compliance en audit doeleinden.</p>
</div>
</div>

<!-- Real-world Collaboration Example -->
<div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
<div class="text-center mb-8">
<h3 class="text-3xl font-bold mb-4">Live Voorbeeld: E-commerce Order Processing</h3>
<p class="text-gray-300 text-lg">Bekijk hoe 6 Deductive agents samenwerken om een klantbestelling te verwerken</p>
</div>

<div class="bg-black/30 rounded-2xl p-6 mb-8">
<div class="flex items-center justify-between mb-4">
<div class="flex items-center">
<div class="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
<span class="text-green-400 font-mono text-sm">LIVE PROCESSING</span>
</div>
<div class="text-gray-400 text-sm font-mono">Order #DED-2024-001337</div>
</div>
<div class="space-y-2 font-mono text-sm">
<div class="flex items-center">
<span class="text-blue-400 mr-2">[12:34:01]</span>
<span class="text-gray-300">Customer Agent: New order received - Product: MacBook Pro M3</span>
</div>
<div class="flex items-center">
<span class="text-green-400 mr-2">[12:34:02]</span>
<span class="text-gray-300">Sales Agent: Price verified - €2,499.00 - Payment processing...</span>
</div>
<div class="flex items-center">
<span class="text-purple-400 mr-2">[12:34:03]</span>
<span class="text-gray-300">Analytics Agent: Customer risk score: LOW - Approval recommended</span>
</div>
<div class="flex items-center">
<span class="text-orange-400 mr-2">[12:34:04]</span>
<span class="text-gray-300">Inventory Agent: Stock check: 3 units available - Reserving 1 unit</span>
</div>
<div class="flex items-center">
<span class="text-teal-400 mr-2">[12:34:05]</span>
<span class="text-gray-300">Logistics Agent: Shipping calculated - Next-day delivery available</span>
</div>
<div class="flex items-center">
<span class="text-pink-400 mr-2">[12:34:06]</span>
<span class="text-gray-300">Finance Agent: Payment confirmed - Invoice generated</span>
</div>
<div class="flex items-center">
<span class="text-blue-400 mr-2">[12:34:07]</span>
<span class="text-gray-300">Customer Agent: Order confirmation sent - Tracking: DED234567</span>
</div>
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
<div class="text-2xl font-bold text-cyan-400 mb-2">6.2 sec</div>
<div class="text-sm text-gray-300">Total Processing Time</div>
</div>
<div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
<div class="text-2xl font-bold text-green-400 mb-2">6 agents</div>
<div class="text-sm text-gray-300">Parallel Execution</div>
</div>
<div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
<div class="text-2xl font-bold text-purple-400 mb-2">0% errors</div>
<div class="text-sm text-gray-300">Perfect Coordination</div>
</div>
<div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
<div class="text-2xl font-bold text-orange-400 mb-2">24/7</div>
<div class="text-sm text-gray-300">Always Available</div>
</div>
</div>
</div>

<!-- Call to Action -->
<div class="text-center mt-16">
<div class="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
<svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
</svg>
<span>Ontdek Uw Eigen Agent Netwerk</span>
</div>
<p class="text-gray-600 mt-4 text-lg">Klaar om te zien hoe Deductive agents uw bedrijf kunnen transformeren?</p>
</div>
</div>
</section>

<!-- Agent Interaction Styles -->
<style>
.pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
    }
    50% {
        box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(236, 72, 153, 0.3);
    }
}

.agent-node:hover + .tooltip {
    opacity: 1;
    transition: opacity 0.3s ease;
}

.connection-line {
    filter: drop-shadow(0 0 3px rgba(147, 51, 234, 0.3));
}

.hover\:shadow-3xl:hover {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>

<!-- Agent Interaction Scripts -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const agentNodes = document.querySelectorAll('.agent-node');
    const tooltips = document.querySelectorAll('.tooltip');
    
    agentNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', function() {
            const agentType = this.dataset.agent;
            const tooltip = document.getElementById(`tooltip-${agentType}`);
            if (tooltip) {
                tooltip.style.opacity = '1';
                tooltip.style.transform = tooltip.style.transform.replace('opacity-0', 'opacity-100');
            }
        });
        
        node.addEventListener('mouseleave', function() {
            const agentType = this.dataset.agent;
            const tooltip = document.getElementById(`tooltip-${agentType}`);
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
        
        // Add click animation
        node.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
</script>

<!-- Interactive Business Type Selector -->
<section class="py-16 bg-white" id="business-demo">
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-gray-900 mb-4">AI-Agents voor Elk Bedrijfstype</h2>
<p class="text-xl text-gray-600 max-w-3xl mx-auto">Kies uw bedrijfstype en ontdek hoe onze AI-agents uw specifieke processen kunnen automatiseren</p>
</div>

<!-- Business Type Selector -->
<div class="flex flex-wrap justify-center gap-4 mb-12">
<button class="business-type-btn active" data-type="recruiting">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
<svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg>
</div>
<span>Recruitment</span>
</div>
</button>
<button class="business-type-btn" data-type="hr">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
<svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
</svg>
</div>
<span>HR Management</span>
</div>
</button>
<button class="business-type-btn" data-type="ecommerce">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
<svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
</svg>
</div>
<span>E-commerce</span>
</div>
</button>
<button class="business-type-btn" data-type="marketing">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
<svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
</svg>
</div>
<span>Marketing Bureau</span>
</div>
</button>
<button class="business-type-btn" data-type="finance">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
<svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
</svg>
</div>
<span>Financiële Diensten</span>
</div>
</button>
<button class="business-type-btn" data-type="healthcare">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
<svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
</svg>
</div>
<span>Zorgverlening</span>
</div>
</button>
<button class="business-type-btn" data-type="manufacturing">
<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
<svg class="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
</svg>
</div>
<span>Productie</span>
</div>
</button>
</div>

<!-- Dynamic Content Area -->
<div id="business-content" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<!-- Left: Agent Dashboard -->
<div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
<div class="bg-gradient-to-r from-cyan-600 to-blue-600 -m-8 mb-6 px-6 py-4">
<h3 class="font-semibold text-lg" style="color: white !important;" id="dashboard-title">E-commerce AI-Agent Dashboard</h3>
<p class="text-cyan-100 text-sm">Real-time automatisering</p>
</div>

<div class="space-y-4" id="agent-tasks">
<!-- Dynamic content will be inserted here -->
</div>
</div>

<!-- Right: Integration & Benefits -->
<div class="space-y-6">
<div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Universele Integraties</h3>
<div class="space-y-4">
<div class="integration-item flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
</svg>
</div>
<div>
<h4 class="font-semibold text-gray-900">CRM Systemen</h4>
<p class="text-sm text-gray-600">HubSpot, Salesforce, Pipedrive, Microsoft Dynamics en meer</p>
</div>
</div>

<div class="integration-item flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
<div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
</div>
<div>
<h4 class="font-semibold text-gray-900">Databases & ERP</h4>
<p class="text-sm text-gray-600">MySQL, PostgreSQL, SAP, Oracle, MongoDB en custom databases</p>
</div>
</div>

<div class="integration-item flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
<div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
</svg>
</div>
<div>
<h4 class="font-semibold text-gray-900">API's & Webhooks</h4>
<p class="text-sm text-gray-600">REST API's, GraphQL, webhooks en custom integraties</p>
</div>
</div>

<div class="integration-item flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
<div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
</svg>
</div>
<div>
<h4 class="font-semibold text-gray-900">Cloud Platforms</h4>
<p class="text-sm text-gray-600">AWS, Azure, Google Cloud en andere cloud services</p>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
<p class="text-sm text-gray-700 text-center">
<strong>Zie je jouw systeem niet?</strong> Geen probleem! Als het een API heeft of data kan uitwisselen, kunnen wij er mee integreren.
</p>
</div>
</div>

<div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Resultaten</h3>
<div class="space-y-4" id="business-results">
<!-- Dynamic results will be inserted here -->
</div>
</div>
</div>
</div>
</div>
</section>

<!-- Statistics Section -->
<section class="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-gray-900 mb-4">Bewezen Impact</h2>
<p class="text-xl text-gray-600">Resultaten van onze AI-agents in verschillende sectoren</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div class="text-center">
<div class="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
<span class="text-3xl font-bold text-white counter" data-target="75">0</span>
<span class="text-xl text-white">%</span>
</div>
<h3 class="text-lg font-semibold text-gray-900 mb-2">Procesefficiëntie</h3>
<p class="text-gray-600">Verbetering in workflow-snelheid</p>
</div>
<div class="text-center">
<div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
<span class="text-3xl font-bold text-white counter" data-target="90">0</span>
<span class="text-xl text-white">%</span>
</div>
<h3 class="text-lg font-semibold text-gray-900 mb-2">Foutreductie</h3>
<p class="text-gray-600">Minder handmatige fouten</p>
</div>
<div class="text-center">
<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
<span class="text-lg font-bold text-white">24/7</span>
</div>
<h3 class="text-lg font-semibold text-gray-900 mb-2">Operationeel</h3>
<p class="text-gray-600">Continue beschikbaarheid</p>
</div>
<div class="text-center">
<div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
<span class="text-2xl font-bold text-white">3</span>
<span class="text-lg text-white">x</span>
</div>
<h3 class="text-lg font-semibold text-gray-900 mb-2">ROI Verbetering</h3>
<p class="text-gray-600">Gemiddeld rendement op investering</p>
</div>
</div>
</div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Step-by-step explanation data
    const stepData = {
        1: {
            title: "1. Informatie Ontvangen",
            content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4">De AI-agent krijgt informatie binnen</h4>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                <span class="text-gray-700">Email van een klant</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                <span class="text-gray-700">Nieuwe bestelling in de webshop</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                <span class="text-gray-700">Chat bericht op de website</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                <span class="text-gray-700">Voorraad update van leverancier</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mt-4">
                            Net zoals jij informatie binnen krijgt via je telefoon, email en gesprekken, 
                            krijgt een AI-agent informatie binnen via verschillende kanalen.
                        </p>
                    </div>
                    <div class="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl p-6">
                        <div class="text-center">
                            <div class="w-24 h-24 bg-cyan-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                <svg class="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <p class="text-gray-700 font-medium">AI-Agent luistert naar alle informatie</p>
                            <p class="text-sm text-gray-600 mt-2">24/7 alert en klaar om te reageren</p>
                        </div>
                    </div>
                </div>
            `
        },
        2: {
            title: "2. Slimme Analyse",
            content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4">De AI-agent begrijpt en analyseert</h4>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-gray-700">Wat betekent deze informatie?</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-gray-700">Is er actie vereist?</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-gray-700">Hoe urgent is dit?</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-gray-700">Welke regels zijn van toepassing?</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mt-4">
                            Net zoals je eerst nadenkt voordat je reageert op een email, 
                            analyseert de AI-agent eerst de situatie voordat hij actie onderneemt.
                        </p>
                    </div>
                    <div class="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6">
                        <div class="text-center">
                            <div class="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-12 h-12 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <p class="text-gray-700 font-medium">AI-Agent denkt na</p>
                            <p class="text-sm text-gray-600 mt-2">Verwerkt informatie in milliseconden</p>
                        </div>
                    </div>
                </div>
            `
        },
        3: {
            title: "3. Actie Ondernemen",
            content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4">De AI-agent neemt actie</h4>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span class="text-gray-700">Stuur automatisch een antwoord</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span class="text-gray-700">Update de database</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span class="text-gray-700">Bestel nieuwe voorraad</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span class="text-gray-700">Stuur notificatie naar team</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mt-4">
                            Net zoals jij actie onderneemt na het lezen van een email, 
                            voert de AI-agent de juiste actie uit op basis van zijn analyse.
                        </p>
                    </div>
                    <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6">
                        <div class="text-center">
                            <div class="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <p class="text-gray-700 font-medium">AI-Agent handelt</p>
                            <p class="text-sm text-gray-600 mt-2">Snelle en accurate uitvoering</p>
                        </div>
                    </div>
                </div>
            `
        },
        4: {
            title: "4. Leren en Verbeteren",
            content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4">De AI-agent wordt steeds slimmer</h4>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span class="text-gray-700">Heeft de actie gewerkt?</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span class="text-gray-700">Was de klant tevreden?</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span class="text-gray-700">Kan het beter volgende keer?</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span class="text-gray-700">Nieuwe patronen ontdekt?</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mt-4">
                            Net zoals jij leert van ervaring en de volgende keer beter doet, 
                            leert de AI-agent van elke interactie en wordt steeds effectiever.
                        </p>
                    </div>
                    <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
                        <div class="text-center">
                            <div class="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <p class="text-gray-700 font-medium">AI-Agent leert</p>
                            <p class="text-sm text-gray-600 mt-2">Wordt elke dag slimmer en effectiever</p>
                        </div>
                    </div>
                </div>
            `
        }
    };

    // Step navigation functionality
    let currentStep = 1;
    let isPlaying = false;
    let playInterval;
    let countdownInterval;
    let countdownValue = 4;

    const stepNavBtns = document.querySelectorAll('.step-nav-btn');
    const stepContent = document.getElementById('step-content');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const playText = document.getElementById('play-text');
    const countdownElement = document.getElementById('countdown');

    function updateStep(step) {
        currentStep = step;
        
        // Update step content
        stepContent.innerHTML = `
            <div class="step-content-inner">
                <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">${stepData[step].title}</h3>
                ${stepData[step].content}
            </div>
        `;
        
        // Update navigation buttons
        stepNavBtns.forEach((btn, index) => {
            const stepNum = index + 1;
            const circle = btn.querySelector('div div');
            
            btn.classList.remove('active');
            circle.classList.remove('bg-cyan-600', 'text-white', 'bg-gray-300', 'text-gray-600');
            
            if (stepNum === step) {
                btn.classList.add('active');
                circle.classList.add('bg-cyan-600', 'text-white');
            } else {
                circle.classList.add('bg-gray-300', 'text-gray-600');
            }
        });
    }

    function nextStep() {
        currentStep = currentStep >= 4 ? 1 : currentStep + 1;
        updateStep(currentStep);
    }

    function startAutoPlay() {
        isPlaying = true;
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        playText.textContent = 'Pause Demo';
        
        playInterval = setInterval(nextStep, 4000);
        startCountdown();
    }

    function stopAutoPlay() {
        isPlaying = false;
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        playText.textContent = 'Start Demo';
        
        clearInterval(playInterval);
        clearInterval(countdownInterval);
        countdownValue = 4;
        countdownElement.textContent = countdownValue;
    }

    function startCountdown() {
        countdownValue = 4;
        countdownInterval = setInterval(() => {
            countdownValue--;
            countdownElement.textContent = countdownValue;
            if (countdownValue <= 0) {
                countdownValue = 4;
                countdownElement.textContent = countdownValue;
            }
        }, 1000);
    }

    // Event listeners
    stepNavBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            updateStep(index + 1);
            if (isPlaying) {
                stopAutoPlay();
            }
        });
    });

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    // Initialize
    updateStep(1);

    // Business type data
    const businessData = {
        recruiting: {
            title: "Recruitment AI-Agent Dashboard",
            tasks: [
                { name: "CV Screening", progress: 95, color: "bg-blue-500", description: "Automatische selectie van geschikte kandidaten" },
                { name: "Interview Scheduling", progress: 92, color: "bg-green-500", description: "Intelligente planning van gesprekken" },
                { name: "Candidate Sourcing", progress: 88, color: "bg-purple-500", description: "Actief zoeken naar talent op platforms" },
                { name: "Reference Checking", progress: 90, color: "bg-orange-500", description: "Geautomatiseerde referentie verificatie" },
                { name: "Onboarding Process", progress: 94, color: "bg-teal-500", description: "Gestroomlijnd inwerktraject" }
            ],
            results: [
                { metric: "75%", label: "Snellere plaatsing", description: "Van vacature tot contract" },
                { metric: "90%", label: "Betere candidate match", description: "AI-gedreven selectie" },
                { metric: "50%", label: "Minder administratie", description: "Geautomatiseerde workflows" }
            ]
        },
        hr: {
            title: "HR Management AI-Agent Dashboard",
            tasks: [
                { name: "Employee Onboarding", progress: 93, color: "bg-blue-500", description: "Geautomatiseerd inwerkproces" },
                { name: "Performance Tracking", progress: 89, color: "bg-green-500", description: "Continue prestatie monitoring" },
                { name: "Leave Management", progress: 96, color: "bg-purple-500", description: "Automatische verlofregistratie" },
                { name: "Policy Compliance", progress: 91, color: "bg-orange-500", description: "Naleving van HR-beleid" },
                { name: "Employee Engagement", progress: 87, color: "bg-teal-500", description: "Medewerkertevredenheid monitoring" }
            ],
            results: [
                { metric: "40%", label: "Minder HR administratie", description: "Geautomatiseerde processen" },
                { metric: "60%", label: "Hogere werknemertevredenheid", description: "Betere HR-ondersteuning" },
                { metric: "30%", label: "Snellere HR-processen", description: "Intelligente workflows" }
            ]
        },
        ecommerce: {
            title: "E-commerce AI-Agent Dashboard",
            tasks: [
                { name: "Inventory Management", progress: 92, color: "bg-blue-500", description: "Automatisch voorraad bijwerken" },
                { name: "Customer Service", progress: 88, color: "bg-green-500", description: "24/7 klantondersteuning via chat" },
                { name: "Price Optimization", progress: 94, color: "bg-purple-500", description: "Dynamische prijsaanpassingen" },
                { name: "Order Processing", progress: 96, color: "bg-orange-500", description: "Geautomatiseerde orderafhandeling" },
                { name: "Review Analysis", progress: 85, color: "bg-teal-500", description: "Sentiment analyse van reviews" }
            ],
            results: [
                { metric: "35%", label: "Meer conversies", description: "Door gepersonaliseerde aanbevelingen" },
                { metric: "60%", label: "Minder support tickets", description: "Automatische klantservice" },
                { metric: "25%", label: "Lagere operationele kosten", description: "Geautomatiseerde processen" }
            ]
        },
        marketing: {
            title: "Marketing Bureau AI-Agent Dashboard",
            tasks: [
                { name: "Lead Qualification", progress: 89, color: "bg-green-500", description: "Automatische lead scoring" },
                { name: "Content Creation", progress: 91, color: "bg-blue-500", description: "AI-gegenereerde content drafts" },
                { name: "Campaign Optimization", progress: 87, color: "bg-purple-500", description: "Real-time campagne aanpassingen" },
                { name: "Social Media Management", progress: 93, color: "bg-pink-500", description: "Geautomatiseerd social media posts" },
                { name: "Analytics Reporting", progress: 95, color: "bg-indigo-500", description: "Intelligente rapportage" }
            ],
            results: [
                { metric: "50%", label: "Hogere lead kwaliteit", description: "Door AI-gedreven qualification" },
                { metric: "40%", label: "Snellere content productie", description: "Geautomatiseerde workflows" },
                { metric: "30%", label: "Betere campagne ROI", description: "Real-time optimalisaties" }
            ]
        },
        finance: {
            title: "Financiële Diensten AI-Agent Dashboard",
            tasks: [
                { name: "Risk Assessment", progress: 94, color: "bg-red-500", description: "Automatische risico-evaluatie" },
                { name: "Fraud Detection", progress: 97, color: "bg-orange-500", description: "Real-time fraude detectie" },
                { name: "Document Processing", progress: 91, color: "bg-blue-500", description: "OCR en data extractie" },
                { name: "Compliance Monitoring", progress: 89, color: "bg-green-500", description: "Regelgeving compliance checks" },
                { name: "Client Onboarding", progress: 92, color: "bg-purple-500", description: "Geautomatiseerd KYC proces" }
            ],
            results: [
                { metric: "80%", label: "Snellere documentverwerking", description: "Automatische data extractie" },
                { metric: "95%", label: "Fraudedetectie accuraatheid", description: "AI-gedreven monitoring" },
                { metric: "70%", label: "Minder compliance risico's", description: "Continue regelgeving checks" }
            ]
        },
        healthcare: {
            title: "Zorgverlening AI-Agent Dashboard",
            tasks: [
                { name: "Appointment Scheduling", progress: 96, color: "bg-blue-500", description: "Intelligente afspraak planning" },
                { name: "Patient Triage", progress: 88, color: "bg-red-500", description: "Prioritering van patiënten" },
                { name: "Medical Records", progress: 93, color: "bg-green-500", description: "Automatische dossier updates" },
                { name: "Insurance Processing", progress: 91, color: "bg-purple-500", description: "Verzekering claims afhandeling" },
                { name: "Follow-up Care", progress: 89, color: "bg-orange-500", description: "Geautomatiseerde nazorg" }
            ],
            results: [
                { metric: "45%", label: "Minder administratie tijd", description: "Automatische dossier updates" },
                { metric: "30%", label: "Snellere patiënt doorstroming", description: "Efficiënte triage systemen" },
                { metric: "60%", label: "Hogere patiënt tevredenheid", description: "Betere communicatie en zorg" }
            ]
        },
        manufacturing: {
            title: "Productie AI-Agent Dashboard",
            tasks: [
                { name: "Quality Control", progress: 95, color: "bg-green-500", description: "Automatische kwaliteitscontrole" },
                { name: "Predictive Maintenance", progress: 92, color: "bg-blue-500", description: "Voorspellend onderhoud" },
                { name: "Supply Chain Optimization", progress: 88, color: "bg-purple-500", description: "Leveringsketen optimalisatie" },
                { name: "Production Planning", progress: 94, color: "bg-orange-500", description: "Intelligente productie planning" },
                { name: "Energy Management", progress: 90, color: "bg-teal-500", description: "Energie verbruik optimalisatie" }
            ],
            results: [
                { metric: "25%", label: "Minder productiestops", description: "Voorspellend onderhoud" },
                { metric: "15%", label: "Lagere energiekosten", description: "Intelligente energie management" },
                { metric: "30%", label: "Betere productkwaliteit", description: "Automatische kwaliteitscontrole" }
            ]
        }
    };

    // Get DOM elements
    const businessButtons = document.querySelectorAll('.business-type-btn');
    const dashboardTitle = document.getElementById('dashboard-title');
    const agentTasks = document.getElementById('agent-tasks');
    const businessResults = document.getElementById('business-results');

    // Function to update content
    function updateBusinessContent(type) {
        const data = businessData[type];
        
        // Update title
        dashboardTitle.textContent = data.title;
        
        // Update tasks
        agentTasks.innerHTML = '';
        data.tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item p-4 bg-gray-50 rounded-lg border border-gray-200';
            taskElement.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-700">${task.name}</span>
                    <span class="text-xs text-gray-500">${task.progress}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div class="${task.color} h-2 rounded-full transition-all duration-1000" style="width: ${task.progress}%"></div>
                </div>
                <p class="text-xs text-gray-600">${task.description}</p>
            `;
            agentTasks.appendChild(taskElement);
        });

        // Update results
        businessResults.innerHTML = '';
        data.results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200';
            resultElement.innerHTML = `
                <div class="text-center">
                    <div class="text-2xl font-bold text-cyan-600 mb-1">${result.metric}</div>
                    <div class="text-sm font-semibold text-gray-700 mb-1">${result.label}</div>
                    <div class="text-xs text-gray-600">${result.description}</div>
                </div>
            `;
            businessResults.appendChild(resultElement);
        });
    }

    // Add click handlers to buttons
    businessButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            businessButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update content
            updateBusinessContent(button.dataset.type);
        });
    });

    // Initialize with recruiting
    updateBusinessContent('recruiting');

    // Counter Animation
    function animateCounter(counter) {
        const target = parseInt(counter.dataset.target);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.ceil(current);
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 20);
    }
    
    // Intersection Observer for counters
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
});
</script>

<style>
.bg-circuit-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2308d5f9' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.btn-primary-cyan {
    @apply inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 transform hover:scale-105;
}

.btn-outline-cyan {
    @apply inline-flex items-center justify-center px-8 py-3 border-2 border-cyan-600 text-base font-medium rounded-lg text-cyan-600 bg-white hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200;
}

.business-type-btn {
    @apply px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-200 font-medium;
}

.business-type-btn.active {
    @apply border-cyan-500 bg-cyan-50 text-cyan-700;
}

.task-item {
    @apply transition-all duration-300 hover:shadow-md;
}

.result-item {
    @apply transition-all duration-300 hover:shadow-md hover:scale-105;
}

.integration-item {
    @apply transition-all duration-300 hover:shadow-md hover:scale-102;
}

.step-nav-btn {
    @apply px-4 py-2 rounded-lg border-2 border-gray-200 text-gray-700 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-200 font-medium;
}

.step-nav-btn.active {
    @apply border-cyan-500 bg-cyan-50 text-cyan-700;
}

.step-content-inner {
    @apply transition-all duration-300 ease-in-out;
}

.example-card {
    @apply transition-all duration-300 hover:shadow-lg hover:scale-105;
}
</style>