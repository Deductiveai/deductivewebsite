---
title: Home
# TODO: Replace placeholder logo with actual software logos
# Download and add these logos to /static/images/logos/:
# - github.png, azure.png, langchain.png, langsmith.png, openai.png, anthropic.png
# Then update the logo paths below to use the actual filenames
client_logos:
  - name: "Placeholder"
    logo: "images/logos/github.png"
  - name: "Placeholder"
    logo: "images/logos/aws.svg"
  - name: "Placeholder"
    logo: "images/logos/openai2.png"
testimonials:
  - name: "Nynke de B"
    title: "Kliniek elsendael"
    avatar: "images/testimonial-1.svg"
    quote: "haha piep piep weeeeeee"

---

{{< hero 
    headline="Van Idee naar Intelligente AI-Agents"
    sub_headline="Deductive ontwikkelt AI-software die autonoom werkt, leert en groeit met jouw bedrijf. Specialist in AI-agents en maatwerk oplossingen."
    primary_button_text="Ontdek Onze Oplossingen"
    primary_button_url="/oplossingen"
    secondary_button_text="Plan een Demo"
    secondary_button_url="/contact"
    hero_image="images/hero-dashboard.svg"
    gradient-from="#dbeafe"
    gradient-to="#f3e8ff"
    gradient-angle="180"
>}}

{{< client-logos animate="true" title="Software die wij vertrouwen" >}}

{{< features-section 
    title="Onze AI-Expertise"
    description="Ontdek hoe onze AI-oplossingen uw bedrijf kunnen transformeren."
>}}

{{< feature
    title="AI Chatbot"
    description="Intelligente chatbot-oplossingen die 24/7 klantondersteuning bieden met geavanceerde AI-technologie."
    badge="Chatbot"
    badgeColor="#4534da"
    image="images/feature-1.svg"
    buttonText="Meer Informatie"
    buttonLink="/oplossingen/ai-chatbot/"
    features="24/7 Beschikbaarheid,Meertalige Ondersteuning,Contextbewuste Gesprekken,Systeemintegratie"
    imagePosition="right"
>}}

{{< feature
    title="AI-Agents"
    description="Autonome AI-agents die complexe taken uitvoeren, processen automatiseren en intelligent beslissingen nemen."
    badge="AI-Agents"
    badgeColor="#08d5f9"
    image="images/feature-2.svg"
    buttonText="Meer Informatie"
    buttonLink="/oplossingen/ai-agents/"
    features="Autonome Werking,Procesautomatisering,Realtime Besluitvorming,Lerende Systemen"
    imagePosition="left"
>}}

{{< feature
    title="Offertetool"
    description="Intelligente offertetool die automatisch gepersonaliseerde offertes genereert en het verkoopproces optimaliseert."
    badge="Offertetool"
    badgeColor="#16a34a"
    image="images/feature-3.svg"
    buttonText="Meer Informatie"
    buttonLink="/oplossingen/offertetool/"
    features="Automatische Offertes,Dynamische Prijsberekening,Gepersonaliseerde Presentatie,Conversie-optimalisatie"
    imagePosition="right"
>}}

{{< /features-section >}}

{{< process-timeline 
    title="Ons Bewezen Proces"
    description="Van idee tot implementatie: zo transformeren we uw bedrijf met AI"
>}}

{{< process-demo-buttons >}}

{{< testimonials 
    title="Wat Onze Klanten Zeggen"
    description="Ontdek hoe bedrijven hun processen transformeren met onze AI-oplossingen."
    animate="true"
    background-color="#f1f5f9"
>}}

<section class="py-20 bg-gray-900 text-green-400 font-mono overflow-hidden">
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-white mb-4">AI DEVELOPMENT MODE</h2>
<p class="text-xl text-gray-300">Waar logica menselijkheid ontmoet</p>
</div>
<div class="flex justify-center">
<div class="laptop-container relative">
<div id="laptop-ascii" class="text-center text-sm md:text-base lg:text-lg leading-none whitespace-pre-wrap">
<!-- ASCII art will be rotated here -->
</div>
</div>
</div>
<div class="text-center mt-12">
<div class="inline-flex items-center space-x-2 bg-green-900/20 border border-green-400/30 rounded-lg px-6 py-3">
<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span class="text-green-400">SYSTEM OPERATIONAL</span>
</div>
</div>
</div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, starting ASCII art...');
    const laptopFrames = [
        `         ╔══════════════════════════════════════╗
        ║                                      ║
        ║            DEDUCTIVE AI              ║
        ║                                      ║
        ║  ┌─────────────────────────────────┐  ║
        ║  │ > hugo server --buildDrafts     │  ║
        ║  │ Serving at localhost:1313       │  ║
        ║  │ █                               │  ║
        ║  └─────────────────────────────────┘  ║
        ║                                      ║
        ╚══════════════════════════════════════╝
╔═══════════════════════════════════════════════════════╗
║ ESC │ F1 │ F2 │ F3 │ F4 │ F5 │ F6 │ F7 │ F8 │ F9 │ F10║
║ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │⌫║
║ TAB │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ [ │ ] │ \\║
║ CAPS │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ ' │ ENTER║
║ SHIFT │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ / │ SHIFT ║
║ CTRL │ ALT │      SPACE      │ ALT │ CTRL │ ← │ ↑ │ → ║
╚═══════════════════════════════════════════════════════╝`,

        `      ╔══════════════════════════════════════╗
     ║                                      ║
     ║            DEDUCTIVE AI              ║
     ║                                      ║
     ║  ┌─────────────────────────────────┐  ║
     ║  │ > npm run dev                   │  ║
     ║  │ Building application...         │  ║
     ║  │ █                               │  ║
     ║  └─────────────────────────────────┘  ║
     ║                                      ║
     ╚══════════════════════════════════════╝
  ╔═══════════════════════════════════════════════════════╗
  ║ ESC │ F1 │ F2 │ F3 │ F4 │ F5 │ F6 │ F7 │ F8 │ F9 │ F10║
  ║ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │⌫║
  ║ TAB │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ [ │ ] │ \\║
  ║ CAPS │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ ' │ ENTER║
  ║ SHIFT │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ / │ SHIFT ║
  ║ CTRL │ ALT │      SPACE      │ ALT │ CTRL │ ← │ ↑ │ → ║
  ╚═══════════════════════════════════════════════════════╝`,

        `    ╔══════════════════════════════════════╗
   ║                                      ║
   ║            DEDUCTIVE AI              ║
   ║                                      ║
   ║  ┌─────────────────────────────────┐  ║
   ║  │ > git commit -m "Fix bugs"      │  ║
   ║  │ [main 2f8a9c3] Fix bugs         │  ║
   ║  │ █                               │  ║
   ║  └─────────────────────────────────┘  ║
   ║                                      ║
   ╚══════════════════════════════════════╝
╔═══════════════════════════════════════════════════════╗
║ ESC │ F1 │ F2 │ F3 │ F4 │ F5 │ F6 │ F7 │ F8 │ F9 │ F10║
║ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │⌫║
║ TAB │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ [ │ ] │ \\║
║ CAPS │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ ' │ ENTER║
║ SHIFT │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ / │ SHIFT ║
║ CTRL │ ALT │      SPACE      │ ALT │ CTRL │ ← │ ↑ │ → ║
╚═══════════════════════════════════════════════════════╝`,

        `  ╔══════════════════════════════════════╗
 ║                                      ║
 ║            DEDUCTIVE AI              ║
 ║                                      ║
 ║  ┌─────────────────────────────────┐  ║
 ║  │ > python train_model.py         │  ║
 ║  │ Training neural network...      │  ║
 ║  │ █                               │  ║
 ║  └─────────────────────────────────┘  ║
 ║                                      ║
 ╚══════════════════════════════════════╝
╔═══════════════════════════════════════════════════════╗
║ ESC │ F1 │ F2 │ F3 │ F4 │ F5 │ F6 │ F7 │ F8 │ F9 │ F10║
║ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │⌫║
║ TAB │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ [ │ ] │ \\║
║ CAPS │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ ' │ ENTER║
║ SHIFT │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ / │ SHIFT ║
║ CTRL │ ALT │      SPACE      │ ALT │ CTRL │ ← │ ↑ │ → ║
╚═══════════════════════════════════════════════════════╝`,

        `╔══════════════════════════════════════╗
║                                      ║
║            DEDUCTIVE AI              ║
║                                      ║
║  ┌─────────────────────────────────┐  ║
║  │ > docker build -t deductive .   │  ║
║  │ Successfully built image        │  ║
║  │ █                               │  ║
║  └─────────────────────────────────┘  ║
║                                      ║
╚══════════════════════════════════════╝
╔═══════════════════════════════════════════════════════╗
║ ESC │ F1 │ F2 │ F3 │ F4 │ F5 │ F6 │ F7 │ F8 │ F9 │ F10║
║ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │⌫║
║ TAB │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ [ │ ] │ \\║
║ CAPS │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ ' │ ENTER║
║ SHIFT │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ / │ SHIFT ║
║ CTRL │ ALT │      SPACE      │ ALT │ CTRL │ ← │ ↑ │ → ║
╚═══════════════════════════════════════════════════════╝`,

        `   ╔══════════════════════════════════════╗
  ║                                      ║
  ║            DEDUCTIVE AI              ║
  ║                                      ║
  ║  ┌─────────────────────────────────┐  ║
  ║  │ > npm start                     │  ║
  ║  │ Server running on port 3000     │  ║
  ║  │ █                               │  ║
  ║  └─────────────────────────────────┘  ║
  ║                                      ║
  ╚══════════════════════════════════════╝
 ╔═══════════════════════════════════════════════════════╗
 ║ ESC │ F1 │ F2 │ F3 │ F4 │ F5 │ F6 │ F7 │ F8 │ F9 │ F10║
 ║ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │⌫║
 ║ TAB │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ [ │ ] │ \\║
 ║ CAPS │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ ' │ ENTER║
 ║ SHIFT │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ / │ SHIFT ║
 ║ CTRL │ ALT │      SPACE      │ ALT │ CTRL │ ← │ ↑ │ → ║
 ╚═══════════════════════════════════════════════════════╝`
    ];

    let currentFrame = 0;
    const asciiElement = document.getElementById('laptop-ascii');
    
    console.log('Element found:', !!asciiElement);
    console.log('Frames available:', laptopFrames.length);
    
    function updateFrame() {
        if (asciiElement) {
            asciiElement.textContent = laptopFrames[currentFrame];
            console.log('Frame updated:', currentFrame);
            currentFrame = (currentFrame + 1) % laptopFrames.length;
        } else {
            console.log('Element not found!');
        }
    }
    
    updateFrame();
    setInterval(updateFrame, 800);
});
</script>

<style>
.laptop-container {
    perspective: 1000px;
}

#laptop-ascii {
    transform-style: preserve-3d;
    animation: laptop-glow 2s ease-in-out infinite alternate;
    color: #10b981;
}

@keyframes laptop-glow {
    0% {
        text-shadow: 0 0 5px #10b981, 0 0 10px #10b981, 0 0 15px #10b981;
    }
    100% {
        text-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981, 0 0 40px #10b981;
    }
}

@media (max-width: 768px) {
    #laptop-ascii {
        font-size: 0.5rem;
        line-height: 0.6;
    }
}

@media (max-width: 480px) {
    #laptop-ascii {
        font-size: 0.4rem;
        line-height: 0.5;
    }
}
</style>

{{< cta >}}
