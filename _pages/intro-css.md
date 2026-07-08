---
layout: page
title: Data Science Fundamentals
permalink: /teaching/data-science-intro/
nav: false
---

<style>
.course-back {
  font-size: 13px;
  color: #534AB7;
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
  color: #534AB7;
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

<h1 class="course-title">Data science fundamentals</h1>
<div class="course-draft-badge">Preview &mdash; subject to change</div>

<p class="course-desc">
  From visualizing trends over time to analyzing text data and mapping spatial patterns, the ability to transform complex, messy datasets into clear, actionable insights is essential for engaging with modern challenges. This course provides an introduction to the tools and techniques of data analysis and visualization, focusing on making social data comprehensible and accessible to diverse audiences.
</p>
<p class="course-desc">
  No prior programming experience is required. The first part introduces essential computer skills, technical terminology, and the basics of R. The second part moves into applied projects: text analysis, geospatial data, and integrating multiple datasets into reproducible workflows for research, government, or industry.
</p>

<div class="course-meta-row">
  <div class="course-meta-item"><span class="label">Prereq</span> None &mdash; no prior programming experience required</div>
  <div class="course-meta-item"><span class="label">Tools</span> R &middot; tidyverse &middot; ggplot2 &middot; stringr &middot; sf</div>
</div>

<p class="section-label">What you will be able to do</p>

<div class="outcomes-grid">
  <div class="outcome-card">
    <div class="outcome-title">Wrangle data</div>
    <div class="outcome-desc">Import, clean, reshape, and join datasets using tidyverse tools</div>
  </div>
  <div class="outcome-card">
    <div class="outcome-title">Visualize clearly</div>
    <div class="outcome-desc">Build publication-quality charts and maps with ggplot2 and tmap</div>
  </div>
  <div class="outcome-card">
    <div class="outcome-title">Analyze text</div>
    <div class="outcome-desc">Extract entities and patterns from unstructured text using NER tools</div>
  </div>
  <div class="outcome-card">
    <div class="outcome-title">Work reproducibly</div>
    <div class="outcome-desc">Write R Markdown reports that fully document data and analysis</div>
  </div>
</div>

<hr class="topics-divider">
<p class="section-label">Course overview</p>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 1</span>
    <span class="cluster-title">R fundamentals</span>
  </div>
  <p class="cluster-desc">Building a working foundation in R &mdash; from the environment and basic syntax to data structures and programmatic thinking.</p>
  <div class="cluster-items">
    <ul>
      <li>RStudio, R Markdown, packages, and help documentation</li>
      <li>Basic syntax, variables, functions, and data types</li>
      <li>Vectors, lists, factors, matrices, and data frames</li>
      <li>Subsetting formats, operators, boolean conditionals, and sub-assignments</li>
      <li>Conditional flow and writing functions; iterations with purrr and for loops</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">R Markdown</span>
    <span class="cluster-tag">data types</span>
    <span class="cluster-tag">data frames</span>
    <span class="cluster-tag">subsetting</span>
    <span class="cluster-tag">purrr</span>
  </div>
</div>

<div class="cluster-divider"></div>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 2</span>
    <span class="cluster-title">Data wrangling and visualization</span>
  </div>
  <p class="cluster-desc">Getting real-world data into shape and turning it into clear, publication-ready graphics.</p>
  <div class="cluster-items">
    <ul>
      <li>Tidy data principles; importing, exporting, and exploratory data analysis</li>
      <li>Subsetting, summarizing, and calculations across groups with dplyr</li>
      <li>Reshaping data with tidyr: pivoting, separating, and uniting columns</li>
      <li>Relational data, keys, joins, and handling missing values</li>
      <li>Grammar of graphics; chart types, color schemes, and labels with ggplot2</li>
      <li>Regular expressions, pattern matching, and text extraction with stringr</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">dplyr</span>
    <span class="cluster-tag">tidyr</span>
    <span class="cluster-tag">ggplot2</span>
    <span class="cluster-tag">joins</span>
    <span class="cluster-tag">stringr</span>
    <span class="cluster-tag">regex</span>
  </div>
</div>

<div class="cluster-divider"></div>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 3</span>
    <span class="cluster-title">Text and spatial analysis</span>
  </div>
  <p class="cluster-desc">Extracting structure from unstructured text and working with geographically referenced data.</p>
  <div class="cluster-items">
    <ul>
      <li>Named entity recognition (NER): extracting people, locations, and organizations</li>
      <li>Practical NER with spacyr and cleanNLP; integrating outputs into data frames</li>
      <li>Importing and managing spatial data; coordinate reference systems</li>
      <li>Working with spatial objects using sf</li>
      <li>Static mapping with ggplot2, ggmap, and tmap; interactive mapping with leaflet</li>
      <li>Spatial operations: joins, intersections, and choropleth maps</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">NER</span>
    <span class="cluster-tag">spacyr</span>
    <span class="cluster-tag">sf</span>
    <span class="cluster-tag">tmap</span>
    <span class="cluster-tag">leaflet</span>
    <span class="cluster-tag">choropleth</span>
  </div>
</div>

<div class="cluster-divider"></div>

<div class="cluster">
  <div class="cluster-header">
    <span class="cluster-num">Part 4</span>
    <span class="cluster-title">Integration and communication</span>
  </div>
  <p class="cluster-desc">Combining tools into a single cohesive workflow and communicating findings to diverse audiences.</p>
  <div class="cluster-items">
    <ul>
      <li>Interactive visualization tools for web and presentation contexts</li>
      <li>Combining data wrangling, NER, and spatial analysis into a unified pipeline</li>
      <li>Reproducible reporting with R Markdown: structure, code, and narrative together</li>
      <li>Communicating data findings clearly to non-technical audiences</li>
    </ul>
  </div>
  <div class="cluster-tags">
    <span class="cluster-tag">interactive viz</span>
    <span class="cluster-tag">R Markdown</span>
    <span class="cluster-tag">reproducibility</span>
    <span class="cluster-tag">communication</span>
  </div>
</div>

<p class="course-footer">
  This is a course preview shared for general reference. Topics, readings, and dates are subject to change once the course is finalized. The official syllabus will be distributed on the first day of class.
</p>
