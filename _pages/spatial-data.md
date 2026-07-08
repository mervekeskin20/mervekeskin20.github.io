---
layout: page
title: Spatial Data Analysis
permalink: /teaching/spatial-analysis/
nav: false
---

<style>
.course-back {
  font-size: 13px;
  color: #0F6E56;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 2rem;
}
.course-back:hover { text-decoration: underline; }

.course-title {
  font-size: 32px;
  font-weight: 400;
  color: #111;
  margin: 0 0 0.75rem 0;
  line-height: 1.2;
}

.course-draft-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #FFF8E6;
  color: #854F0B;
  border: 1px solid #FAC775;
  border-radius: 4px;
  padding: 3px 9px;
  margin-bottom: 1.25rem;
}

.course-desc {
  font-size: 14.5px;
  line-height: 1.8;
  color: #555;
  max-width: 660px;
  margin-bottom: 1rem;
}

.course-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  margin: 1.5rem 0 2rem 0;
}

.course-meta-item {
  font-size: 12.5px;
  color: #666;
  display: flex;
  gap: 6px;
  align-items: baseline;
}

.course-meta-item span.label {
  color: #aaa;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #999;
  margin: 2rem 0 1.25rem 0;
}

.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 2rem;
}

.outcome-card {
  background: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  padding: 0.875rem 1rem;
}

.outcome-title {
  font-size: 13px;
  font-weight: 600;
  color: #111;
  margin-bottom: 3px;
}

.outcome-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.55;
}

.topics-divider {
  border: none;
  border-top: 1px solid #ebebeb;
  margin: 0.5rem 0 1.75rem 0;
}

.cluster {
  margin-bottom: 2rem;
}

.cluster-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.875rem;
}

.cluster-num {
  font-size: 11px;
  font-weight: 600;
  color: #0F6E56;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.cluster-title {
  font-size: 16px;
  font-weight: 600;
  color: #111;
}

.cluster-desc {
  font-size: 13.5px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 0.875rem;
  padding-left: 2.5rem;
}

.cluster-items {
  padding-left: 2.5rem;
}

.cluster-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.cluster-items li {
  font-size: 13px;
  color: #555;
  padding-left: 1rem;
  position: relative;
  line-height: 1.6;
}

.cluster-items li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: #bbb;
}

.cluster-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 10px;
  padding-left: 2.5rem;
}

.cluster-tag {
  font-size: 11px;
  color: #666;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 1px 6px;
}

.cluster-divider {
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 1.75rem 0;
}

.course-footer {
  font-size: 12px;
  color: #aaa;
  line-height: 1.7;
  padding-top: 1.25rem;
  border-top: 1px solid #ebebeb;
  font-style: italic;
  margin-top: 2rem;
}
</style>

<a href="/teaching/" class="course-back">&larr; Back to teaching</a>

<h1 class="course-title">Spatial data analysis</h1>
<div class="course-draft-badge">Preview &mdash; subject to change</div>

<p class="course-desc">
  From mapping neighborhood inequality to modeling how geography shapes health outcomes, the ability to work with spatial data has become an essential skill for researchers, analysts, and practitioners across the social sciences. This course provides a rigorous applied introduction to spatial data analysis, focusing on acquiring, wrangling, visualizing, and analyzing geographically referenced data.
</p>
<p class="course-desc">
  The first part builds core spatial skills: data structures, coordinate reference systems, visualization, and geoprocessing. The second part moves into applied spatial analysis &mdash; Census data, spatial autocorrelation, predictive modeling, and spatial regression. The course closes with reproducibility workflows and the ethical dimensions of working with geographic data.
</p>

<div class="course-meta-row">
  <div class="course-meta-item"><span class="label">Prereq</span> Foundational R and data wrangling</div>
  <div class="course-meta-item"><span class="label">Tools</span> R &middot; sf &middot; tidycensus &middot; tmap &middot; spatialreg</div>
</div>

<p class="section-label">What you will be able to do</p>

<div class="outcomes-grid">
  <div class="outcome-card">
    <div class="outcome-title">Work with spatial data</div>
    <div class="outcome-desc">Read, write, and transform vector and raster data across coordinate systems</div>
  </div>
  <div class="outcome-card">
    <div class="outcome-title">Analyze spatial patterns</div>
    <div class="outcome-desc">Run autocorrelation, clustering, and spatial regression models</div>
  </div>
  <div class="outcome-card">
    <div class="outcome-title">Make compelling maps</div>
    <div class="outcome-desc">Design thematic and interactive maps that communicate findings clearly</div>
  </div>
  <div class="outcome-card">
    <div class="outcome-title">Work responsibly</div>
    <div class="outcome-desc">Understand geoprivacy, disclosure risk, and spatial justice</div>
  </div>
</div>

<hr class="topics-divider">
<p class="section-label">Course overview</p>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 1</span>
    <span class="cluster-title">Foundations of spatial data</span>
  </div>
  <p class="cluster-desc">Getting fluent with how spatial data is structured, stored, and referenced &mdash; the building blocks for everything that follows.</p>
  <div class="cluster-items">
    <ul>
      <li>Vector vs. raster data; points, lines, and polygons; simple features (sf)</li>
      <li>Coordinate reference systems, projections, and CRS transformations</li>
      <li>Reading and writing shapefiles, GeoJSON, and GeoPackage</li>
      <li>Importing Census and administrative data with tidycensus</li>
      <li>Attribute joins, filtering, and dplyr in spatial workflows</li>
      <li>Exploratory spatial data analysis and summary statistics with geography</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">sf</span>
    <span class="cluster-tag">CRS</span>
    <span class="cluster-tag">tidycensus</span>
    <span class="cluster-tag">dplyr</span>
    <span class="cluster-tag">ESDA</span>
  </div>
</div>

<div class="cluster-divider"></div>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 2</span>
    <span class="cluster-title">Exploration, visualization and geoprocessing</span>
  </div>
  <p class="cluster-desc">Transforming raw spatial data into maps and insights &mdash; from cartographic design to spatial operations and working critically with data sources.</p>
  <div class="cluster-items">
    <ul>
      <li>Thematic mapping with tmap and ggplot2; choropleth maps and color theory</li>
      <li>Map design principles; interactive mapping with OpenStreetMap</li>
      <li>Buffers, spatial joins, intersections, unions, and clipping</li>
      <li>MAUP (Modifiable Areal Unit Problem) and areal interpolation</li>
      <li>ACS, decennial, PUMS, and tigris in depth; data quality and missing data strategies</li>
      <li>Communicating spatial findings to non-specialist audiences</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">tmap</span>
    <span class="cluster-tag">ggplot2</span>
    <span class="cluster-tag">OSM</span>
    <span class="cluster-tag">MAUP</span>
    <span class="cluster-tag">ACS</span>
    <span class="cluster-tag">tigris</span>
  </div>
</div>

<div class="cluster-divider"></div>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 3</span>
    <span class="cluster-title">Spatial analysis and modeling</span>
  </div>
  <p class="cluster-desc">Detecting patterns, building models, and drawing valid inferences from geographically structured data.</p>
  <div class="cluster-items">
    <ul>
      <li>Spatial weights as neighborhood definitions; Moran's I statistic and scatterplot</li>
      <li>LISA maps: reading cluster types (HH, LL, HL, LH) substantively</li>
      <li>Adding spatial features to OLS; residual maps as a diagnostic tool</li>
      <li>Spatial cross-validation: why random splits fail with spatial data</li>
      <li>SLM vs. SEM: choosing based on research question; running models with spatialreg</li>
      <li>Likelihood-ratio tests, AIC, and Lagrange multiplier specification tests</li>
      <li>Sensitivity to the spatial weights matrix; reporting robustness honestly</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">Moran's I</span>
    <span class="cluster-tag">LISA</span>
    <span class="cluster-tag">spatialreg</span>
    <span class="cluster-tag">SLM</span>
    <span class="cluster-tag">SEM</span>
    <span class="cluster-tag">spatial CV</span>
  </div>
</div>

<div class="cluster-divider"></div>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 4</span>
    <span class="cluster-title">Advanced topics, reproducibility and ethics</span>
  </div>
  <p class="cluster-desc">Extending spatial analysis to time, producing transparent research, and grappling with the ethical stakes of working with geographic data.</p>
  <div class="cluster-items">
    <ul>
      <li>Spatial panel data structures; visualizing change over space and time</li>
      <li>Fixed vs. random effects in spatial panel models</li>
      <li>Quarto for spatial reports; reproducible workflows</li>
      <li>Geographic re-identification and why location is quasi-identifying</li>
      <li>Spatial aggregation, k-anonymity, and geomasking as disclosure control</li>
      <li>Differential privacy in the 2020 US Census; the accuracy&ndash;privacy tradeoff</li>
      <li>Redlining, place-based algorithmic bias, and policy implications</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">panel data</span>
    <span class="cluster-tag">space-time</span>
    <span class="cluster-tag">Quarto</span>
    <span class="cluster-tag">geoprivacy</span>
    <span class="cluster-tag">spatial justice</span>
  </div>
</div>

<p class="course-footer">
  This is a course preview shared for general reference. Topics, readings, and dates are subject to change once the course is finalized. The official syllabus will be distributed on the first day of class.
</p>
