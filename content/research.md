# FILE 1: content/research.md
# ==========================
+++
title = "Research"
date = "2025-01-15"
author = "Marc Etherington"
+++

<style>
/* Tab Navigation - Folder Tab Style */
.research-tab-nav {
    display: flex;
    gap: 0.25rem;
    margin: 2rem 0 0 0;
    flex-wrap: wrap;
    position: relative;
}

.research-tab-btn {
    background: white;
    border: 2px solid #333;
    border-bottom: none;
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    font-family: 'Neucha', cursive;
    font-size: 0.95rem;
    font-weight: bold;
    transition: all 0.1s ease;
    color: #333;
    position: relative;
    border-radius: 8px 8px 0 0;
    margin-bottom: -2px;
}

.research-tab-btn:hover {
    background: #f5f5f5;
}

.research-tab-btn.active {
    background: #008B8B;
    color: white;
    border-color: #008B8B;
    z-index: 2;
    padding-bottom: calc(0.75rem + 2px);
}

/* Tab content container with border */
.research-tab-container {
    border: 3px solid #333;
    border-radius: 0 8px 8px 8px;
    padding: 2rem;
    margin-top: 0;
    background: white;
    box-shadow: 5px 5px 0 #333;
    position: relative;
    z-index: 1;
}

/* Tab content */
.research-tab-content {
    display: none;
    animation: fadeIn 0.3s ease;
}

.research-tab-content.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.research-tab-content h2:first-child {
    margin-top: 0;
}

/* Intro text */
.research-intro {
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Stats grid */
.research-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.research-stat-card {
    background: white;
    border: 3px solid #008B8B;
    box-shadow: 4px 4px 0 #333;
    padding: 1.5rem;
    text-align: center;
}

.research-stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #008B8B;
    display: block;
    margin-bottom: 0.25rem;
}

.research-stat-label {
    font-size: 0.9rem;
    color: #666;
}

/* Theme cards */
.research-theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.research-theme-card {
    background: white;
    border: 3px solid #333;
    box-shadow: 4px 4px 0 #333;
    overflow: hidden;
    transition: all 0.2s ease;
}

.research-theme-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #333;
}

.research-theme-card-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #008B8B 0%, #006666 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    border-bottom: 4px solid #FF8C42;
}

.research-theme-card-content {
    padding: 1.5rem;
}

.research-theme-card-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
}

.research-theme-card-description {
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.research-theme-card-meta {
    background: #f9f9f9;
    padding: 0.8rem;
    border: 2px solid #e0e0e0;
    margin-bottom: 1rem;
}

.research-theme-card-meta-item {
    font-size: 0.9rem;
    color: #666;
    margin: 0.3rem 0;
}

.research-theme-card-meta-item strong {
    color: #008B8B;
}

/* Summary sections */
.research-summary-section {
    background: #e0f7f7;
    border: 3px solid #008B8B;
    box-shadow: 5px 5px 0 #333;
    padding: 2rem;
    margin: 2rem 0;
}

.research-summary-section.orange {
    background: #fff5eb;
    border-color: #FF8C42;
}

.research-summary-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.research-summary-card {
    background: white;
    border: 2px solid #333;
    box-shadow: 3px 3px 0 #333;
    padding: 1.5rem;
}

.research-summary-card h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.research-summary-card p {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
}

/* Link buttons */
.research-link-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #008B8B;
    color: white;
    text-decoration: none;
    border: 2px solid #333;
    box-shadow: 3px 3px 0 #333;
    font-weight: bold;
    font-family: 'Neucha', cursive;
    transition: all 0.1s ease;
    margin-top: 1rem;
}

.research-link-btn:hover {
    background: #006666;
    color: white;
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0 #333;
}

.research-link-btn.orange {
    background: #FF8C42;
}

.research-link-btn.orange:hover {
    background: #ff7a28;
    color: white;
}

.research-link-btn-center {
    text-align: center;
    margin-top: 1.5rem;
}

/* Toggle button */
.research-toggle-btn {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background: white;
    color: #333;
    border: 2px solid #333;
    box-shadow: 3px 3px 0 #333;
    cursor: pointer;
    font-family: 'Neucha', cursive;
    font-weight: bold;
    transition: all 0.1s ease;
    margin-bottom: 1.5rem;
}

.research-toggle-btn:hover {
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0 #333;
}

.research-toggle-btn.active {
    background: #008B8B;
    color: white;
}

/* Toggleable content */
.research-toggleable-content {
    display: none;
    animation: fadeIn 0.3s ease;
}

.research-toggleable-content.active {
    display: block;
}

/* Project cards */
.research-project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.research-project-card {
    background: white;
    border: 3px solid #333;
    border-left: 8px solid #008B8B;
    box-shadow: 4px 4px 0 #333;
    padding: 1.5rem;
}

.research-project-card.past {
    border-left-color: #999;
    opacity: 0.9;
}

.research-project-card.funding {
    border-left-color: #FF8C42;
}

.research-project-card h3 {
    margin-top: 0;
    color: #008B8B;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.research-project-card.past h3 {
    color: #666;
}

.research-project-card.funding h3 {
    color: #FF8C42;
}

.research-project-meta {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
    font-style: italic;
}

.research-project-description {
    color: #555;
    line-height: 1.6;
    margin-bottom: 0.5rem;
}

/* Capabilities grid */
.research-capabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.research-capability-item {
    background: white;
    padding: 1.5rem;
    border: 2px solid #333;
    box-shadow: 3px 3px 0 #333;
}

.research-capability-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.research-capability-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
}

.research-capability-description {
    font-size: 0.95rem;
    color: #555;
}

/* Navigation cards */
.research-nav-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.research-nav-card {
    background: white;
    border: 3px solid #333;
    box-shadow: 4px 4px 0 #333;
    padding: 2rem 1.5rem;
    text-align: center;
    text-decoration: none;
    color: #333;
    transition: all 0.2s ease;
    display: block;
}

.research-nav-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #333;
    background: #008B8B;
    color: white;
    text-decoration: none;
}

.research-nav-card-icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.research-nav-card-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
}

.research-nav-card-subtitle {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
    .research-tab-nav {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .research-tab-btn {
        width: 100%;
        border-radius: 8px;
        border: 2px solid #333;
        margin-bottom: 0;
        padding: 0.75rem 1.25rem;
    }
    
    .research-tab-btn.active {
        padding-bottom: 0.75rem;
    }
    
    .research-tab-container {
        border-radius: 8px;
        padding: 1.5rem;
    }
    
    .research-theme-grid,
    .research-project-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<p class="research-intro">
    The Etherington Lab advances organic photonics through fundamental photophysical understanding of thermally activated delayed fluorescence (TADF) materials, charge transfer states, and light-emitting molecular systems.
</p>

<!-- Tab Navigation -->
<div class="research-tab-nav">
    <button class="research-tab-btn active" onclick="showResearchTab('overview')">📋 Overview</button>
    <button class="research-tab-btn" onclick="showResearchTab('themes')">🔬 Research Themes</button>
    <button class="research-tab-btn" onclick="showResearchTab('publications')">🏆 Publications</button>
    <button class="research-tab-btn" onclick="showResearchTab('seminars')">🎤 Seminars</button>
    <button class="research-tab-btn" onclick="showResearchTab('capabilities')">🛠️ Capabilities</button>
    <button class="research-tab-btn" onclick="showResearchTab('projects')">📊 Projects</button>
    <button class="research-tab-btn" onclick="showResearchTab('funding')">💰 Funding</button>
    <button class="research-tab-btn" onclick="showResearchTab('team')">🎓 Team</button>
    <button class="research-tab-btn" onclick="showResearchTab('opportunities')">💼 Opportunities</button>
</div>

<!-- Tab Content Container -->
<div class="research-tab-container">

<!-- Overview Tab -->
<div id="research-tab-overview" class="research-tab-content active">

## At a Glance

<div class="research-stats-grid">
    <div class="research-stat-card">
        <span class="research-stat-number">15+</span>
        <span class="research-stat-label">Publications</span>
    </div>
    <div class="research-stat-card">
        <span class="research-stat-number">500+</span>
        <span class="research-stat-label">Citations</span>
    </div>
    <div class="research-stat-card">
        <span class="research-stat-number">£500K+</span>
        <span class="research-stat-label">Funding Secured</span>
    </div>
    <div class="research-stat-card">
        <span class="research-stat-number">4</span>
        <span class="research-stat-label">Countries</span>
    </div>
    <div class="research-stat-card">
        <span class="research-stat-number">10+</span>
        <span class="research-stat-label">Collaborations</span>
    </div>
    <div class="research-stat-card">
        <span class="research-stat-number">3</span>
        <span class="research-stat-label">Active PhDs</span>
    </div>
</div>

## Our Research Mission

We investigate the fundamental photophysics of organic light-emitting materials, with a particular focus on thermally activated delayed fluorescence (TADF). Our research spans from molecular design principles to device applications, combining advanced spectroscopy, computational modeling, and synthesis. We aim to understand and control excited state dynamics to enable next-generation technologies in displays, lighting, and bioimaging.

## Research Impact

<div class="research-summary-content">
    <div class="research-summary-card">
        <h3>💡 Energy-Efficient Displays</h3>
        <p>TADF materials enable OLED technology with improved efficiency and color quality for smartphones, TVs, and flexible displays.</p>
    </div>
    
    <div class="research-summary-card">
        <h3>🏥 Medical Imaging</h3>
        <p>Developing organic emitters for biological imaging applications, enabling visualization of cellular processes and disease markers.</p>
    </div>
    
    <div class="research-summary-card">
        <h3>🌱 Sustainable Materials</h3>
        <p>Purely organic light-emitting materials as alternatives to precious metal-based systems, reducing environmental impact.</p>
    </div>
</div>

</div>

<!-- Research Themes Tab -->
<div id="research-tab-themes" class="research-tab-content">

## Research Themes

<div class="research-theme-grid">
    
    <div class="research-theme-card">
        <div class="research-theme-card-image">🔬</div>
        <div class="research-theme-card-content">
            <div class="research-theme-card-title">Thermally Activated Delayed Fluorescence (TADF)</div>
            <p class="research-theme-card-description">
                Investigating the fundamental photophysics of TADF materials for next-generation organic light-emitting diodes. Our work focuses on understanding spin-vibronic coupling mechanisms and optimizing reverse intersystem crossing rates.
            </p>
            <div class="research-theme-card-meta">
                <div class="research-theme-card-meta-item"><strong>Key Techniques:</strong> Time-resolved spectroscopy, Low-temperature measurements</div>
                <div class="research-theme-card-meta-item"><strong>Recent Work:</strong> Dual emission in TADF systems (Nature Chemistry, 2022)</div>
            </div>
        </div>
    </div>
    
    <div class="research-theme-card">
        <div class="research-theme-card-image">⚡</div>
        <div class="research-theme-card-content">
            <div class="research-theme-card-title">Charge Transfer States & Molecular Design</div>
            <p class="research-theme-card-description">
                Exploring the relationship between molecular architecture and charge transfer state properties. We design novel donor-acceptor systems to control energy gaps and emission characteristics for targeted applications.
            </p>
            <div class="research-theme-card-meta">
                <div class="research-theme-card-meta-item"><strong>Key Techniques:</strong> Photophysical characterization, Computational modeling</div>
                <div class="research-theme-card-meta-item"><strong>Recent Work:</strong> Through-space CT in N-quinolyl systems (JPCB, 2024)</div>
            </div>
        </div>
    </div>
    
    <div class="research-theme-card">
        <div class="research-theme-card-image">📊</div>
        <div class="research-theme-card-content">
            <div class="research-theme-card-title">Singlet-Triplet Energy Gaps</div>
            <p class="research-theme-card-description">
                Developing advanced spectroscopic methods to accurately measure ΔEST in organic emitters. Understanding these energy gaps is crucial for designing efficient TADF materials and predicting device performance.
            </p>
            <div class="research-theme-card-meta">
                <div class="research-theme-card-meta-item"><strong>Key Techniques:</strong> Cryogenic spectroscopy, Dual emission analysis</div>
                <div class="research-theme-card-meta-item"><strong>Recent Work:</strong> Dibenzophenazine dual emission systems</div>
            </div>
        </div>
    </div>
    
    <div class="research-theme-card">
        <div class="research-theme-card-image">🧬</div>
        <div class="research-theme-card-content">
            <div class="research-theme-card-title">Bioimaging Applications</div>
            <p class="research-theme-card-description">
                Applying our fundamental understanding of organic emitters to develop new materials for biological imaging. Collaborating with the Takeda group to create TADF-based probes with enhanced imaging capabilities.
            </p>
            <div class="research-theme-card-meta">
                <div class="research-theme-card-meta-item"><strong>Key Techniques:</strong> Photoluminescence spectroscopy, Biocompatibility testing</div>
                <div class="research-theme-card-meta-item"><strong>Collaboration:</strong> Kitasato University (Japan)</div>
            </div>
        </div>
    </div>
    
</div>

</div>

<!-- Publications Tab -->
<div id="research-tab-publications" class="research-tab-content">

## Featured Publications

<div class="research-summary-section">
    
    <div class="research-summary-content">
        <div class="research-summary-card">
            <h3>Nature Chemistry (2022)</h3>
            <p><strong>Rupturing aromaticity by periphery overcrowding</strong></p>
            <p>Design principles for controlling photocyclization-induced quenching in aggregation-induced emitters.</p>
        </div>
        
        <div class="research-summary-card">
            <h3>J. Phys. Chem. B (2024)</h3>
            <p><strong>Modular Approach to N-Quinolyl CT States</strong></p>
            <p>Novel molecular design strategies for controlling charge transfer emission. First-author student publication.</p>
        </div>
        
        <div class="research-summary-card">
            <h3>J. Mater. Chem. C (2022)</h3>
            <p><strong>From phosphorescence to delayed fluorescence</strong></p>
            <p>Breakthrough in tuning photophysical properties through molecular modification.</p>
        </div>
    </div>
    
    <div class="research-link-btn-center">
        <a href="/publications/" class="research-link-btn">View All Publications →</a>
    </div>
</div>

</div>

<!-- Seminars Tab -->
<div id="research-tab-seminars" class="research-tab-content">

## Recent Seminars & Talks

<div class="research-summary-section orange">
    
    <div class="research-summary-content">
        <div class="research-summary-card">
            <h3>🎤 Newcastle University (2024)</h3>
            <p>Presented latest work on charge transfer and TADF at Newcastle University Chemistry seminar series.</p>
        </div>
        
        <div class="research-summary-card">
            <h3>✈️ ICEL 2024, Kyoto</h3>
            <p>Ruth Pollard presented research on N-quinolyl charge transfer systems at the International Conference on Electroluminescence.</p>
        </div>
        
        <div class="research-summary-card">
            <h3>🏆 RSC PPG ECM (2024)</h3>
            <p>Ruth Pollard won poster prize at Royal Society of Chemistry Photophysics Group Early Career Meeting in Sheffield.</p>
        </div>
    </div>
    
    <div class="research-link-btn-center">
        <a href="/seminars/" class="research-link-btn orange">View All Seminars →</a>
    </div>
</div>

</div>

<!-- Capabilities Tab -->
<div id="research-tab-capabilities" class="research-tab-content">

## Research Capabilities

State-of-the-art facilities and unique expertise in organic photonics characterization

<div class="research-capabilities-grid">
    <div class="research-capability-item">
        <div class="research-capability-icon">🔬</div>
        <div class="research-capability-title">Advanced Spectroscopy</div>
        <p class="research-capability-description">Fluorolog-QM system with time-resolved capabilities, steady-state measurements, fluorescence lifetime analysis</p>
    </div>
    
    <div class="research-capability-item">
        <div class="research-capability-icon">❄️</div>
        <div class="research-capability-title">Cryogenic Systems</div>
        <p class="research-capability-description">Low-temperature spectroscopy to liquid helium temperatures. Unique capability for ΔEST measurements and dual emission studies</p>
    </div>
    
    <div class="research-capability-item">
        <div class="research-capability-icon">💻</div>
        <div class="research-capability-title">Computational Expertise</div>
        <p class="research-capability-description">TD-DFT calculations, molecular dynamics simulations, energy level predictions, structure-property relationships</p>
    </div>
    
    <div class="research-capability-item">
        <div class="research-capability-icon">📐</div>
        <div class="research-capability-title">Photophysical Characterization</div>
        <p class="research-capability-description">Complete photophysical package: ΔEST, quantum yields, excited state kinetics, emission/absorption spectra</p>
    </div>
</div>

## International Collaborations

<div class="research-summary-content">
    <div class="research-summary-card">
        <h3>🇬🇧 Durham University</h3>
        <p><strong>Prof. Andy Monkman</strong></p>
        <p>Long-standing collaboration on TADF materials and photophysics. Joint publications in Nature Chemistry, JACS, Angew Chem.</p>
    </div>
    
    <div class="research-summary-card">
        <h3>🇯🇵 Osaka University</h3>
        <p><strong>JST ASPIRE Program</strong></p>
        <p>International collaboration funded by Japan Science and Technology Agency on advanced TADF systems.</p>
    </div>
    
    <div class="research-summary-card">
        <h3>🇯🇵 Kitasato University</h3>
        <p><strong>Takeda Group</strong></p>
        <p>Active collaboration on TADF-based bioimaging probes and applications in medical diagnostics.</p>
    </div>
    
    <div class="research-summary-card">
        <h3>🇬🇧 University of York</h3>
        <p><strong>Dr Paul McGonigal</strong></p>
        <p>Molecular design and synthesis expertise. Joint work on aggregation-induced emission systems.</p>
    </div>
</div>

</div>

<!-- Projects Tab -->
<div id="research-tab-projects" class="research-tab-content">

## Research Projects

<button class="research-toggle-btn" onclick="toggleResearchProjects()">Show Past Projects</button>

<div id="research-active-projects">
    <h3 style="color: #008B8B; font-size: 1.5rem; margin-bottom: 1.5rem;">Active Projects</h3>
    
    <div class="research-project-grid">
        <div class="research-project-card">
            <h3>Dual Emission in TADF Systems</h3>
            <div class="research-project-meta">2023 - Present | JST ASPIRE</div>
            <p class="research-project-description">Investigating dibenzophenazine-based emitters showing both local and charge transfer emission. Understanding mechanisms for bioimaging applications.</p>
        </div>
        
        <div class="research-project-card">
            <h3>Cage Linker Systems for CT</h3>
            <div class="research-project-meta">2023 - Present | PhD Project (Aidan)</div>
            <p class="research-project-description">Designing caged-chromophore systems to understand fundamentals of charge transfer for OLED applications.</p>
        </div>
        
        <div class="research-project-card">
            <h3>Through-Space CT in N-Quinolyl</h3>
            <div class="research-project-meta">2021 - Present | PhD Project (Ruth)</div>
            <p class="research-project-description">Modular approach to tuning emissive through-space charge transfer states using sp3-scaffolds.</p>
        </div>
        
        <div class="research-project-card">
            <h3>Chalcogenide Perovskites</h3>
            <div class="research-project-meta">2022 - Present | PhD Project (Will)</div>
            <p class="research-project-description">Alternative synthetic routes for preparation of chalcogenide perovskite materials for optoelectronic applications.</p>
        </div>
    </div>
</div>

<div id="research-past-projects" class="research-toggleable-content">
    <h3 style="color: #666; font-size: 1.5rem; margin: 2rem 0 1.5rem 0;">Past Projects</h3>
    
    <div class="research-project-grid">
        <div class="research-project-card past">
            <h3>Rupturing Aromaticity in AIE</h3>
            <div class="research-project-meta">2019 - 2022 | Completed</div>
            <p class="research-project-description">Design principles for controlling photocyclization-induced quenching in aggregation-induced emitters. Published in Nature Chemistry.</p>
        </div>
        
        <div class="research-project-card past">
            <h3>Homoconjugation in TADF</h3>
            <div class="research-project-meta">2020 - 2022 | Completed</div>
            <p class="research-project-description">Simultaneous enhancement of TADF and photoluminescence quantum yield via homoconjugation. Collaboration with Durham.</p>
        </div>
        
        <div class="research-project-card past">
            <h3>Quaternisation Control</h3>
            <div class="research-project-meta">2019 - 2022 | Completed</div>
            <p class="research-project-description">From phosphorescence to delayed fluorescence in one step via quaternisation of sp2-hybridised nitrogen. Published in J. Mater. Chem. C.</p>
        </div>
    </div>
</div>

</div>

<!-- Funding Tab -->
<div id="research-tab-funding" class="research-tab-content">

## Research Funding

<button class="research-toggle-btn" onclick="toggleResearchFunding()">Show Funding History</button>

<div id="research-current-funding">
    <h3 style="color: #FF8C42; font-size: 1.5rem; margin-bottom: 1.5rem;">Current Funding</h3>
    
    <div class="research-project-grid">
        <div class="research-project-card funding">
            <h3>JST ASPIRE International Collaboration</h3>
            <div class="research-project-meta">2023 - 2026 | Japan Science & Technology Agency</div>
            <p class="research-project-description">Multi-year international collaboration program with Osaka University on advanced TADF systems and device applications.</p>
        </div>
        
        <div class="research-project-card funding">
            <h3>Vice-Chancellor's Senior Fellowship</h3>
            <div class="research-project-meta">2021 - Present | Northumbria University</div>
            <p class="research-project-description">Senior research position recognizing excellence in organic photonics research and leadership in TADF studies.</p>
        </div>
        
        <div class="research-project-card funding">
            <h3>PhD Studentships</h3>
            <div class="research-project-meta">Various | University & External</div>
            <p class="research-project-description">Currently supporting 3 PhD students through university scholarships and collaborative funding arrangements.</p>
        </div>
    </div>
</div>

<div id="research-past-funding" class="research-toggleable-content">
    <h3 style="color: #666; font-size: 1.5rem; margin: 2rem 0 1.5rem 0;">Funding History</h3>
    
    <div class="research-project-grid">
        <div class="research-project-card past">
            <h3>EPSRC Postdoctoral Fellowship</h3>
            <div class="research-project-meta">2015 - 2018 | £250K</div>
            <p class="research-project-description">Research associate positions on PHEBE and HyperOLED projects at Durham University.</p>
        </div>
        
        <div class="research-project-card past">
            <h3>Royal Society Research Grant</h3>
            <div class="research-project-meta">2019 - 2020 | £15K</div>
            <p class="research-project-description">Equipment funding for advanced spectroscopy capabilities.</p>
        </div>
    </div>
</div>

</div>

<!-- Team Tab -->
<div id="research-tab-team" class="research-tab-content">

## Meet the Team

<div class="research-summary-section">
    
    <div class="research-summary-content">
        <div class="research-summary-card">
            <h3>👨‍🔬 Principal Investigator</h3>
            <p><strong>Dr Marc Etherington</strong><br>Vice-Chancellor's Senior Fellow</p>
            <p>Spectroscopist specializing in organic photonics, TADF materials, and photophysical chemistry.</p>
        </div>
        
        <div class="research-summary-card">
            <h3>🎓 PhD Students (3)</h3>
            <p><strong>Ruth Pollard</strong> - N-quinolyl charge transfer systems<br>
            <strong>Aidan Matthews</strong> - Cage linker systems<br>
            <strong>Will Tetlow</strong> - Chalcogenide perovskites</p>
        </div>
        
        <div class="research-summary-card">
            <h3>🏆 Recent Achievements</h3>
            <p>Ruth Pollard: RSC Poster Prize (2024)<br>
            International presentations at ICEL 2024<br>
            First-author publications for students</p>
        </div>
    </div>
    
    <div class="research-link-btn-center">
        <a href="/group/" class="research-link-btn">Meet the Full Team →</a>
    </div>
</div>

</div>

<!-- Opportunities Tab -->
<div id="research-tab-opportunities" class="research-tab-content">

## Join Our Research Group

<p style="text-align: center; font-size: 1.1rem; margin-bottom: 2rem; color: #555;">
    Select your interest below to explore opportunities
</p>

<div class="research-nav-cards">
    <a href="/join-us/#phd" class="research-nav-card">
        <div class="research-nav-card-icon">🎓</div>
        <div class="research-nav-card-title">PhD Students</div>
        <div class="research-nav-card-subtitle">Doctoral research positions</div>
    </a>
    
    <a href="/join-us/#postdoc" class="research-nav-card">
        <div class="research-nav-card-icon">👨‍🔬</div>
        <div class="research-nav-card-title">Postdocs</div>
        <div class="research-nav-card-subtitle">PDRA opportunities</div>
    </a>
    
    <a href="/join-us/#undergrad" class="research-nav-card">
        <div class="research-nav-card-icon">🔬</div>
        <div class="research-nav-card-title">Undergraduates</div>
        <div class="research-nav-card-subtitle">Projects & placements</div>
    </a>
    
    <a href="/join-us/#masters" class="research-nav-card">
        <div class="research-nav-card-icon">📚</div>
        <div class="research-nav-card-title">Masters</div>
        <div class="research-nav-card-subtitle">MSc & MRes projects</div>
    </a>
    
    <a href="/join-us/#collaborations" class="research-nav-card">
        <div class="research-nav-card-icon">🤝</div>
        <div class="research-nav-card-title">Collaborators</div>
        <div class="research-nav-card-subtitle">Research partnerships</div>
    </a>
</div>

</div>

</div> <!-- End tab-container -->

<script>
function showResearchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.research-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.research-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById('research-tab-' + tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Activate selected button
    event.target.classList.add('active');
}

function toggleResearchProjects() {
    const pastProjects = document.getElementById('research-past-projects');
    const btn = event.target;
    
    if (pastProjects.classList.contains('active')) {
        pastProjects.classList.remove('active');
        btn.textContent = 'Show Past Projects';
        btn.classList.remove('active');
    } else {
        pastProjects.classList.add('active');
        btn.textContent = 'Hide Past Projects';
        btn.classList.add('active');
    }
}

function toggleResearchFunding() {
    const pastFunding = document.getElementById('research-past-funding');
    const btn = event.target;
    
    if (pastFunding.classList.contains('active')) {
        pastFunding.classList.remove('active');
        btn.textContent = 'Show Funding History';
        btn.classList.remove('active');
    } else {
        pastFunding.classList.add('active');
        btn.textContent = 'Hide Funding History';
        btn.classList.add('active');
    }
}
</script>