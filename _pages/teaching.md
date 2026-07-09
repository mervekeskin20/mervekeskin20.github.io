---
layout: page
title: Teaching
permalink: /teaching/
nav: true
nav_order: 3
---

<style>
.teaching-lede {
  line-height: 1.8;
  color: var(--global-text-color);
  max-width: 680px;
  margin-bottom: 2.5rem;
}

.teaching-section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--global-text-color-light);
  margin-bottom: 1.25rem;
  margin-top: 0;
}

.upcoming-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 3rem;
}

@media (max-width: 600px) {
  .upcoming-grid { grid-template-columns: 1fr; }
}

.upcoming-card {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  padding: 1.375rem 1.5rem;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: block;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.upcoming-card:hover {
  border-color: var(--global-text-color-light);
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  text-decoration: none;
}

.upcoming-card.no-link {
  cursor: default;
  pointer-events: none;
}

.upcoming-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.upcoming-card.spatial::before  { background: #1D9E75; }
.upcoming-card.ds::before       { background: #534AB7; }
.upcoming-card.dataviz::before  { background: #D85A30; }
.upcoming-card.forecast::before { background: #BA7517; }

.upcoming-card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0 0 0.5rem 0;
  line-height: 1.25;
}

.upcoming-card-desc {
  color: var(--global-text-color-light);
  line-height: 1.65;
  margin-bottom: 0;
}

.upcoming-card-meta {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.75rem;
}

.upcoming-card-desc-full {
  color: var(--global-text-color);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.upcoming-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 1.125rem;
}

.upcoming-tag {
  font-size: 0.75rem;
  color: var(--global-text-color);
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  padding: 2px 7px;
}

.upcoming-card-cta {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.upcoming-card.spatial .upcoming-card-cta  { color: #0F6E56; }
.upcoming-card.ds .upcoming-card-cta       { color: #534AB7; }

.teaching-divider {
  border: none;
  border-top: 1px solid var(--global-divider-color);
  margin: 0.5rem 0 2rem 0;
}

.past-course {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  align-items: start;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--global-divider-color);
}

.past-course:last-of-type { border-bottom: none; }

.past-course-role {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--global-text-color-light);
  margin-bottom: 5px;
}

.past-course-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0 0 0.5rem 0;
  line-height: 1.35;
}

.past-course-desc {
  color: var(--global-text-color);
  line-height: 1.7;
  max-width: 520px;
  margin: 0;
}

.past-course-institution {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  text-align: right;
  white-space: nowrap;
  line-height: 1.6;
  padding-top: 2px;
}

.other-block { margin-bottom: 1.75rem; }

.other-block-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0 0 0.625rem 0;
}

.other-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.other-list li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.5rem;
  color: var(--global-text-color);
  padding: 6px 0;
  border-bottom: 1px solid var(--global-divider-color);
}

.other-list li:last-child { border-bottom: none; }

.other-chip {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  white-space: nowrap;
  flex-shrink: 0;
}
</style>


<p class="teaching-lede">
  My teaching spans computational social science, spatial data analysis, text-as-data, the responsible use of AI in political science, international relations, conflict resolution, peacemaking, human rights, and international security.
</p>

<p class="teaching-section-label">Course Portfolio</p>

<div class="upcoming-grid">

  <a href="/teaching/data-science-intro/" class="upcoming-card ds">
    <h3 class="upcoming-card-title">Intro to Data Science</h3>
    <div class="upcoming-card-meta">R &middot; tidy data &middot; stats &middot; communication</div>
    <p class="upcoming-card-desc-full">
      An introduction to data analysis and communication in R, built around the tidyverse. From tidy principles and statistical summaries through text analysis, geospatial data, and reproducible reporting for public and policy audiences.
    </p>
    <div class="upcoming-tags">
      <span class="upcoming-tag">tidyverse</span>
      <span class="upcoming-tag">ggplot2</span>
      <span class="upcoming-tag">stringr</span>
      <span class="upcoming-tag">NER</span>
      <span class="upcoming-tag">Quarto</span>
    </div>
    <div class="upcoming-card-cta">View course overview &rarr;</div>
  </a>

  <a href="/teaching/spatial-analysis/" class="upcoming-card spatial">
    <h3 class="upcoming-card-title">Geospatial Data Science and Spatial Analysis</h3>
    <div class="upcoming-card-meta">R &middot; sf &middot; tidycensus &middot; spatialreg</div>
    <p class="upcoming-card-desc-full">
      A rigorous applied introduction to spatial data science for students with R foundations. Covers data structures, geoprocessing, cartography, spatial autocorrelation, predictive modeling, spatial regression, and the ethics of working with geographic data.
    </p>
    <div class="upcoming-tags">
      <span class="upcoming-tag">sf</span>
      <span class="upcoming-tag">tmap</span>
      <span class="upcoming-tag">Moran's I</span>
      <span class="upcoming-tag">SLM / SEM</span>
      <span class="upcoming-tag">geoprivacy</span>
    </div>
    <div class="upcoming-card-cta">View course overview &rarr;</div>
  </a>

  <div class="upcoming-card dataviz no-link">
    <h3 class="upcoming-card-title">Data Visualization</h3>
    <p class="upcoming-card-desc">Course overview coming soon.</p>
  </div>

  <div class="upcoming-card forecast no-link">
    <h3 class="upcoming-card-title">Predictive Modeling and Forecasting</h3>
    <p class="upcoming-card-desc">Course overview coming soon.</p>
  </div>

</div>

<hr class="teaching-divider">

<p class="teaching-section-label">Courses taught</p>

<div class="past-course">
  <div>
    <div class="past-course-role">Instructor &mdash; Spring 2025</div>
    <h3 class="past-course-title">Visualizing and Understanding Social Data (Computational Social Science)</h3>
    <p class="past-course-desc">
      A hands-on introduction to data analysis and visualization for upper-level undergraduates, with no prior programming experience assumed. The course moves from R fundamentals and critical data literacy into applied projects: exploratory analysis, geospatial mapping, dataset integration, and reproducible reporting. Students leave able to transform messy social data into clear visualizations, maps, and written reports for diverse audiences.
    </p>
  </div>
  <div class="past-course-institution">University of Pittsburgh</div>
</div>

<div class="past-course">
  <div>
    <div class="past-course-role">Instructor &mdash; Summer 2023</div>
    <h3 class="past-course-title">International Law and Problems of World Order</h3>
    <p class="past-course-desc">
      Foundational and contemporary perspectives on the global legal system and its role in world politics. The course moves from theories of compliance, commitment, and enforcement through applied areas including international courts, the laws of war, international criminal law, human rights, trade, environment, and migration. Students develop analytical reading and writing skills and participate in a simulation for practical understanding of legal regimes.
    </p>
  </div>
  <div class="past-course-institution">University of Pittsburgh</div>
</div>

<div class="past-course">
  <div>
    <div class="past-course-role">Instructor &mdash; Summer 2022, Summer 2024</div>
    <h3 class="past-course-title">International Relations</h3>
    <p class="past-course-desc">
      An introduction to the major theories, concepts, and trends in world politics, with special attention to the post-World War II order. The course covers the main frameworks for explaining interstate behavior, then examines key actors &mdash; great powers, international organizations such as the UN and NATO, and violent non-state actors &mdash; before applying these tools to contemporary challenges: terrorism, nuclear weapons, trade, environmental degradation, and human rights.
    </p>
  </div>
  <div class="past-course-institution">University of Pittsburgh</div>
</div>

<hr class="teaching-divider">

<p class="teaching-section-label">Other teaching</p>

<div class="other-block">
  <p class="other-block-title">Guest Lecturer</p>
  <ul class="other-list">
    <li>
      <span>Civil Wars &mdash; &ldquo;Civilians in Civil Conflict&rdquo;</span>
      <span class="other-chip">University of Pittsburgh &middot; Fall 2023</span>
    </li>
    <li>
      <span>Civil Wars &mdash; &ldquo;Participation and Recruitment&rdquo;</span>
      <span class="other-chip">University of Pittsburgh &middot; Fall 2021</span>
    </li>
  </ul>
</div>

<div class="other-block">
  <p class="other-block-title">Teaching Fellow</p>
  <ul class="other-list">
    <li>
      <span>International Relations</span>
      <span class="other-chip">University of Pittsburgh &middot; Fall 2020, Spring 2021</span>
    </li>
  </ul>
</div>

<div class="other-block">
  <p class="other-block-title">Teaching Assistant</p>
  <ul class="other-list">
    <li>
      <span>Intro to International Relations</span>
      <span class="other-chip">Koç University &middot; Summer 2018</span>
    </li>
    <li>
      <span>Terrorism, Insurgency, and World Politics</span>
      <span class="other-chip">Koç University &middot; Spring 2018</span>
    </li>
    <li>
      <span>Intro to Turkish Politics</span>
      <span class="other-chip">Boğaziçi University &middot; Spring 2017</span>
    </li>
  </ul>
</div>
