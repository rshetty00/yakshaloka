# YakshalokaUS Website - Information Architecture & Strategic Plan

**Date:** February 18, 2026  
**Version:** 1.0 - Foundation Architecture  
**Status:** Design Phase / Ready for Implementation

---

## Table of Contents
1. [Vision & Philosophy](#vision--philosophy)
2. [Complete Information Architecture](#complete-information-architecture)
3. [Detailed Page Structure](#detailed-page-structure)
4. [Navigation Strategy](#navigation-strategy)
5. [Content Organization](#content-organization)
6. [Implementation Roadmap](#implementation-roadmap)
7. [Design Patterns & UX](#design-patterns--ux)
8. [Asset Folder Structure](#asset-folder-structure)
9. [Future Enhancements](#future-enhancements)

---

## Vision & Philosophy

**Guiding Principle:** "Entertain • Educate • Empower"

The website tells the story of **Raghuram Shetty** and **YakshalokaUS** as an integrated whole:
- Not just a performing arts showcase
- A holistic platform demonstrating a life devoted to human transformation
- Performing arts + Therapeutic healing + Community service + Philanthropy + Education

---

## Complete Information Architecture

### Master Sitemap

```
HOME
│
├─ PERFORMING ARTS (The Stage)
│  ├─ Yakshagana
│  │  ├─ Repertoire (Featured plays)
│  │  ├─ Stage Moments (Videos & candid stills)
│  │  └─ Era Timeline
│  │     ├─ Upto 1994 - Indian Era
│  │     ├─ 1995-2003 - New England Era
│  │     ├─ 2004-2006 - Florida Era
│  │     ├─ 2006-2013 - San Francisco Era
│  │     ├─ 2013-2022 - SoCal Era 1
│  │     └─ 2023-2026 - SoCal Era 2
│  │
│  ├─ BoothaKola Performances (RETAINED - rich historical archive)
│  │  ├─ Ritual Performances
│  │  ├─ Festival Shows
│  │  ├─ Kallurti Kola Fire Rituals
│  │  ├─ Sponsored Performances
│  │  └─ Historical Archive
│  │
│  ├─ BoothaRituals & Sacred Arts
│  │  ├─ Ritual Context
│  │  ├─ Sacred Performances
│  │  └─ Educational Materials
│  │
│  ├─ Hollywood & Media (NEW)
│  │  ├─ Television Appearances
│  │  ├─ Film & Movie Work
│  │  ├─ Commercials & Brand Collaborations
│  │  └─ Press Features & Media Coverage
│  │
│  └─ Training & Teaching (NEW)
│     ├─ Classes & Workshops
│     ├─ Student Showcases
│     ├─ Teaching Philosophy
│     └─ Curriculum Highlights
│
├─ BEYOND THE STAGE (NEW - Unified Comprehensive Page)
│  │  "A Life Devoted to Transformation"
│  │
│  ├─ Raghuram's Story (TAB 1)
│  │  ├─ Personal Journey & Life Timeline
│  │  ├─ Philosophy: Entertain, Educate, Empower
│  │  ├─ Turning Points & Key Moments
│  │  └─ Vision for YakshalokaUS
│  │
│  ├─ Therapeutic Healing & Wellness (TAB 2)
│  │  ├─ Life Coaching Programs
│  │  ├─ Hypnotherapy & Past Life Regression
│  │  ├─ Yoga & Meditation Services
│  │  ├─ Healing Modalities
│  │  └─ Testimonials & Impact Stories
│  │
│  ├─ Community & Cultural Programs (TAB 3)
│  │  ├─ All-Day Community Picnics
│  │  ├─ Sports & Recreation Programs
│  │  ├─ Cultural Festivals & Events
│  │  ├─ "One-Man Show" Demonstrations
│  │  └─ Community Impact Gallery
│  │
│  ├─ Charity & Philanthropy (TAB 4)
│  │  ├─ Disaster Relief Work
│  │  │  ├─ Hurricane Katrina & Harvey Relief (Florida/New Orleans)
│  │  │  ├─ California Wildfire Relief & Recovery
│  │  │  └─ COVID-19 Relief (Vaccination, Food Distribution)
│  │  ├─ Ongoing Community Service
│  │  ├─ Partner Organizations & Collaborations
│  │  ├─ Impact Metrics
│  │  └─ Ways to Help / Get Involved
│  │
│  └─ Education & Institution Building (TAB 5)
│     ├─ APGET / Jnanasudha Institutions (India)
│     │  ├─ Role as Cofounder & Trustee
│     │  ├─ Mission & Achievements
│     │  └─ Student Gallery & Programs
│     ├─ Ekal Vidyalaya Tribal Education Initiatives
│     │  ├─ Partnership Details
│     │  ├─ Impact on Tribal Communities
│     │  └─ Ongoing Support Programs
│     ├─ Educational Scholarship Programs
│     ├─ Institutional Partnerships Worldwide
│     └─ Future Educational Vision
│
├─ GALLERY (Retained for now - to be distributed later)
│  ├─ Performance Photography
│  ├─ Event Coverage
│  ├─ Community Moments
│  └─ Archive Collections
│
├─ ABOUT
│  ├─ Raghuram Shetty (Comprehensive Biography)
│  ├─ YakshalokaUS Organization
│  ├─ Mission & Core Values
│  ├─ Team & Collaborators
│  └─ Contact & Inquiries
│
└─ CONTACT & RESOURCES
   ├─ Contact Form
   ├─ Location & Hours
   ├─ Social Media Links
   └─ FAQ
```

---

## Detailed Page Structure

### PAGE 1: Yakshagana (Redesigned)

**Key Sections:**
```
1. HERO
   - Main Image: Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg
   - Tagline: "300+ Performances Across Six Continents"
   - Navigation buttons to subsections

2. SIGNATURE REPERTOIRE
   - 2-3 Featured plays with production cards
   - Play title, origin, duration, cast, music
   - Featured image per play
   - "Learn More" CTAs

3. STAGE MOMENTS
   - Performance Videos (2 YouTube embeds with custom thumbnails)
   - Yakshagana Performance Reel (local video with thumbnail)
   - Candid Stills Gallery (7 images showing makeup, characters, stage moments)

4. PERFORMANCES BY ERA (Timeline)
   Each era card shows:
   - Era title & date range
   - Primary location (hub)
   - Key production highlight with image
   - International tours (with country badges 🇮🇳 🇬🇧 🇨🇦 etc.)
   - Total performance count for era
   - "View Year-by-Year Breakdown" toggle

5. CALL TO ACTION
   - "Train with Raghuram" → Training page
   - "Explore Beyond the Stage" → Beyond the Stage page
```

**Asset Structure:**
```
src/assets/images/yakshagana/
├── Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg (Root - Hero only)
├── repertoire/
│  └── [Images for featured plays]
├── stage-moments/
│  ├── performance-videos/
│  │  └── [YouTube metadata, local video file]
│  ├── video-thumbnails/
│  │  └── [Custom thumbnail images]
│  └── candid-stills/
│     └── [7 behind-the-scenes images]
└── era-timeline/
   ├── indian-era-upto-1994/
   ├── new-england-1995-2003/
   ├── florida-2004-2006/
   ├── san-francisco-2006-2013/
   ├── socal-era1-2013-2022/
   └── socal-era2-2023-2026/
      [Each containing featured show images + international tour images]
```

---

### PAGE 2: Beyond the Stage (NEW - Unified Hub)

**Technical Structure:**
```
Component: BeyondTheStage.jsx

Hero Section:
├─ Background: Compelling image or video
├─ Title: "Beyond the Stage"
├─ Subtitle: "A Life Devoted to Transformation"
├─ Tagline: "Entertain • Educate • Empower"
└─ Scroll indicator

Tab Navigation (Sticky on scroll):
├─ [Story] [Healing] [Community] [Charity] [Education]

Content Area (Dynamic based on active tab):
├─ Hero image/banner for current tab
├─ Section description
├─ Multiple content blocks
│  ├─ Text sections
│  ├─ Image galleries
│  ├─ Impact statistics
│  ├─ Testimonial cards
│  ├─ CTA buttons
│  └─ Video embeds
└─ Related resources link
```

**Each Tab Template:**
```
TAB CONTENT STRUCTURE:
│
├─ Hero Banner / Image
├─ Introduction (2-3 sentences)
│
├─ Main Content Blocks (1-4)
│  ├─ Block Title
│  ├─ Block Description
│  ├─ Images / Gallery
│  ├─ Key Statistics
│  └─ CTA
│
├─ Testimonials / Impact Stories
│  ├─ Story Card 1
│  ├─ Story Card 2
│  ├─ Story Card 3
│  └─ "Read More Stories" link
│
├─ Impact Metrics
│  ├─ Persons Served: X
│  ├─ Countries Impacted: X
│  ├─ Years of Service: X
│  └─ Organizations Partnered: X
│
└─ Next Steps / Get Involved
   ├─ For Healing: "Book a Session"
   ├─ For Community: "Join Us"
   ├─ For Charity: "Donate / Volunteer"
   ├─ For Education: "Learn About Programs"
   └─ General: "Contact Raghuram"
```

**Asset Structure:**
```
src/assets/images/beyond-the-stage/
├── hero-banner.jpg
├── raghuram-story/
│  ├── timeline-images/
│  ├── milestone-photos/
│  └── personal-moments/
├── healing/
│  ├─ session-imagery/
│  ├─ meditation-spaces/
│  └─ testimonial-photos/
├── community/
│  ├─ picnic-events/
│  ├─ sports-programs/
│  ├─ cultural-festivals/
│  └─ one-man-show/
├── charity/
│  ├─ hurricane-relief/
│  ├─ wildfire-relief/
│  ├─ covid-relief/
│  └─ ongoing-service/
└── education/
   ├─ apget-jnanasudha/
   ├─ ekal-vidyalaya/
   ├─ scholarship-programs/
   └─ institutional-partnerships/
```

---

### PAGE 3: Hollywood & Media (NEW)

**Structure:**
```
Hero
├─ Title: "From Stage to Screen"
├─ Subtitle: "Television, Film, and Commercial Work"

Sections:
├─ Television Appearances
│  ├─ TV Show/Episode cards
│  ├─ Role description
│  ├─ Stills/clips
│  └─ Streaming links (if available)
│
├─ Film & Movie Work
│  ├─ Movie cards
│  ├─ Character/Role info
│  ├─ Movie poster/stills
│  └─ IMDb link / streaming
│
├─ Commercials & Brand Work
│  ├─ Brand/Product
│  ├─ Brief description
│  ├─ Video embed or still
│  └─ Production year
│
└─ Press & Media Features
   ├─ Press clips/articles
   ├─ Interview links
   ├─ Publication name & date
   └─ "Read Full Article" CTA
```

---

### PAGE 4: Training & Teaching (NEW)

**Structure:**
```
Hero
├─ Title: "Training & Teaching"
├─ Subtitle: "Passing on the Tradition"

Sections:
├─ Current Classes & Workshops
│  ├─ Class type (Yakshagana, Healing, etc.)
│  ├─ Level & audience
│  ├─ Schedule
│  ├─ Location
│  └─ "Enroll / Learn More" CTA
│
├─ Student Showcases
│  ├─ Student Group photos
│  ├─ Performance highlights
│  ├─ Student testimonials
│  └─ Gallery of performances
│
├─ Teaching Philosophy
│  ├─ Raghuram's approach
│  ├─ Core principles
│  ├─ Expected outcomes
│  └─ Student transformation stories
│
└─ Curriculum Highlights
   ├─ What students learn
   ├─ Progression pathway
   ├─ Certificates/Recognition
   └─ Contact for details
```

---

## Navigation Strategy

### Primary Navigation (Header)

```
LOGO | HOME | PERFORMING ARTS ↓ | BEYOND THE STAGE | GALLERY | ABOUT | CONTACT

PERFORMING ARTS Dropdown:
├─ Yakshagana
├─ BoothaKola
├─ BoothaRituals
├─ Hollywood & Media
└─ Training & Teaching

BEYOND THE STAGE (Direct link or could be dropdown)
```

### Secondary Navigation (Footer)

```
SECTIONS          PERFORMING ARTS      RESOURCES
├─ Home           ├─ Yakshagana        ├─ Contact
├─ About          ├─ BoothaKola        ├─ FAQ
├─ Gallery        ├─ BoothaRituals     ├─ Newsletter
└─ Contact        ├─ Hollywood & Media └─ Social Media
                  └─ Training

BEYOND THE STAGE
├─ Raghuram's Story
├─ Healing & Wellness
├─ Community Programs
├─ Charity & Relief
└─ Education
```

### Cross-Linking Strategy

**Yakshagana Page → Beyond the Stage:**
- "Discover the philosophy behind the performances"
- "Raghuram's Teaching Philosophy"

**Beyond the Stage → Other Pages:**
- From "Story" tab: "See his performances" → Yakshagana/BoothaKola
- From "Healing" tab: "Learn with him" → Training page

**Hollywood & Media → Yakshagana:**
- "Before films, Raghuram's foundation..." contextual link

---

## Content Organization

### Content by Type

#### 1. Images
- **Performing Arts:** High-quality stills from performances
- **Beyond the Stage:** Behind-the-scenes, candid community moments, impact photos
- **Hollywood & Media:** Movie stills, TV screenshots, commercial frames

#### 2. Videos
- **Performing Arts:** YouTube embeds, local performance reels
- **Beyond the Stage:** Testimonial videos, program highlights, documentary-style pieces
- **Hollywood & Media:** Trailer clips, TV episode clips, commercial reels

#### 3. Text Content
- **Bios & Descriptions:** Play summaries, era overviews, program descriptions
- **Testimonials:** Student feedback, client healing stories, community member quotes
- **Impact Statistics:** Persons served, years of service, reach metrics

#### 4. Dynamic Content (CMS-Ready)
- Testimonials database (easy to add new stories)
- Program schedule (classes, workshops)
- Statistics & metrics dashboard
- Event calendar

---

## Implementation Roadmap

### Phase 1: Architecture & Scaffolding (Foundation)
**Timeline:** 1-2 weeks

Tasks:
- [ ] Create "Beyond the Stage" page component with tab structure
- [ ] Set up placeholder sections for all 5 tabs
- [ ] Create "Coming Soon" UI for empty sections
- [ ] Wire up tab navigation & routing
- [ ] Create cross-linking infrastructure
- [ ] Update main navigation with new pages
- [ ] Set up asset folder structure

Deliverables:
- Functional shell of all new pages
- Navigation working
- Placeholders showing structure
- Email capture for sections "Coming Soon"

### Phase 2: Content Population (Filling In)
**Timeline:** 2-4 weeks (ongoing)

Priority order:
1. **Raghuram's Story** - Core biography and life philosophy
2. **Yakshagana Era Timeline** - Years and location info, key productions
3. **Therapeutic Healing Details** - Services, approach, testimonials
4. **Disaster Relief Highlights** - Hurricane, wildfire, COVID stories
5. **Education Institutions** - APGET, Ekal, partnerships info

Tasks:
- [ ] Write comprehensive biography
- [ ] Gather era timeline information & images
- [ ] Compile healing/wellness program details
- [ ] Write disaster relief case studies
- [ ] Document education institution relationships

### Phase 3: Enrichment & Polish (Making It Shine)
**Timeline:** 2-3 weeks

Tasks:
- [ ] Create testimonial galleries
- [ ] Add impact metrics & statistics visualizations
- [ ] Create registration/booking forms for programs
- [ ] Add donation mechanisms
- [ ] Optimize all images
- [ ] Create video thumbnails where needed
- [ ] Add animations & transitions
- [ ] Perform SEO optimization

### Phase 4: Gallery Distribution (Future)
**Timeline:** Later (3-6 months)

As gallery content grows too large:
- Migrate performance photography to individual era pages
- Create dedicated galleries per section
- Implement lazy-loading for performance
- Archive old content strategically

---

## Design Patterns & UX

### Visual Design Elements

#### Color Scheme
```
PRIMARY (Performing Arts): Purple/Amber (existing)
SECONDARY (Beyond the Stage): Gold/Warm Tones
ACCENTS:
├─ Healing: Calming blues/greens
├─ Community: Warm oranges/greens
├─ Charity: Deep reds (compassion)
└─ Education: Navy/greens (wisdom)
```

#### Typography Hierarchy
```
H1: Page title (large, bold, distinctive font)
H2: Section titles (tab labels, main content areas)
H3: Subsection titles (within content blocks)
Body: Accessible sans-serif
Accent: Font for quotes/testimonials
```

#### Components to Create
```
├─ TabNavigation (sticky, highlights current)
├─ ContentBlock (reusable section container)
├─ StatisticCard (impact metrics display)
├─ TestimonialCard (with attribution, photo)
├─ GalleryLightbox (existing - reuse)
├─ EraCard (timeline item with collapsible details)
├─ ProgramCard (class/workshop details)
├─ CTAButton (context-aware actions)
└─ "ComingSoon" Placeholder (email capture)
```

### Interaction Patterns

#### Tabs
- **Smooth transition** between content
- **URL persists** tab state (e.g., `/beyond-the-stage?tab=healing`)
- **Keyboard accessible** (arrow keys to navigate)
- **Mobile:** Convert to accordion on small screens

#### Galleries
- **Lightbox modal** on image click
- **Keyboard navigation:** Arrow keys, Esc to close
- **Touch support:** Swipe gestures
- **Lazy load** for performance

#### Forms
```
- Email signup (Coming Soon sections)
- Program registration (Training page)
- Donation/Support (Charity section)
```

### Responsive Design
```
Desktop (1200px+):
├─ 2-3 column layouts
├─ Side-by-side images & text
├─ Full hero images
└─ Horizontal tabs

Tablet (768-1199px):
├─ 1-2 column layouts
├─ Stacked content
└─ Tab text labels visible

Mobile (< 768px):
├─ 1 column layout
├─ Accordion instead of tabs
├─ Stacked images
├─ Text-only navigation
└─ Single column gallery
```

---

## Asset Folder Structure

### Complete Asset Organization

```
src/assets/
├── images/
│  ├── yakshagana/
│  │  ├── Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg (HERO ONLY)
│  │  ├── repertoire/
│  │  │  ├── karna-shapatha/
│  │  │  │  ├── hero1.jpg
│  │  │  │  ├── character1.jpg
│  │  │  │  ├── character2.jpg
│  │  │  │  └── scene1.jpg
│  │  │  └── seetha-kalyana/
│  │  │     ├── hero1.jpg
│  │  │     ├── character1.jpg
│  │  │     ├── character2.jpg
│  │  │     └── celebration.jpg
│  │  ├── stage-moments/
│  │  │  ├── performance-videos/
│  │  │  │  ├── video-file.mov
│  │  │  │  └── metadata.json
│  │  │  ├── video-thumbnails/
│  │  │  │  ├── youtube-1-thumb.jpg
│  │  │  │  ├── youtube-2-thumb.jpg
│  │  │  │  └── reel-thumb.jpg
│  │  │  └── candid-stills/
│  │  │     ├── makeup-transformation.jpg
│  │  │     ├── character-shumbha.jpg
│  │  │     ├── character-demon.jpg
│  │  │     ├── character-devi.jpg
│  │  │     ├── stage-presence.jpg
│  │  │     ├── ensemble-moment.jpg
│  │  │     └── dramatic-moment.jpg
│  │  └── era-timeline/
│  │     ├── indian-era-1994/
│  │     ├── new-england-1995-2003/
│  │     ├── florida-2004-2006/
│  │     ├── san-francisco-2006-2013/
│  │     ├── socal-era1-2013-2022/
│  │     └── socal-era2-2023-2026/
│  │        [Each containing featured show + international tour images]
│  │
│  ├── beyond-the-stage/
│  │  ├── hero-banner.jpg
│  │  ├── raghuram-story/
│  │  │  ├── timeline/
│  │  │  ├── milestones/
│  │  │  └── personal-moments/
│  │  ├── healing/
│  │  │  ├── sessions/
│  │  │  ├── spaces/
│  │  │  └── testimonial-photos/
│  │  ├── community/
│  │  │  ├── picnics/
│  │  │  ├── sports/
│  │  │  ├── festivals/
│  │  │  └── demonstrations/
│  │  ├── charity/
│  │  │  ├── hurricane-relief/
│  │  │  ├── wildfire-relief/
│  │  │  ├── covid-relief/
│  │  │  └── community-service/
│  │  ├── education/
│  │  │  ├── apget-jnanasudha/
│  │  │  ├── ekal-vidyalaya/
│  │  │  ├── scholarships/
│  │  │  └── partnerships/
│  │
│  ├── boothakola/
│  │  └── [existing structure]
│  │
│  ├── bootharituals/
│  │  └── [existing structure]
│  │
│  ├── hollywood-media/
│  │  ├── television/
│  │  ├── film/
│  │  ├── commercials/
│  │  └── press/
│  │
│  ├── gallery/
│  │  └── [existing structure - to be distributed later]
│  │
│  └── shared/
│     └── [common/reusable across pages]
│
├── videos/
│  ├── yakshagana/
│  ├── boothakola/
│  ├── beyond-the-stage/
│  └── hollywood-media/
│
└── fonts/
   └── [existing]
```

---

## Page-Specific Asset Needs

### Yakshagana Page Assets Needed
- [ ] Hero: Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg
- [ ] Repertoire: 4-6 images per play (2 plays minimum)
- [ ] Stage Moments: 7 candid stills + 3 video thumbnails
- [ ] Era Timeline: 1 featured image per era + 2-3 international tour images per era

### Beyond the Stage Assets Needed

**Raghuram's Story Tab:**
- [ ] Timeline photos (key life moments)
- [ ] Current photos
- [ ] YakshalokaUS logo/brand imagery

**Healing Tab:**
- [ ] Session/space imagery
- [ ] Testimonial contributor photos
- [ ] Yoga/meditation space photos

**Community Tab:**
- [ ] Picnic event photos
- [ ] Sports program photos
- [ ] Festival/cultural event photos
- [ ] One-man show demonstration photos

**Charity Tab:**
- [ ] Hurricane relief action photos
- [ ] Wildfire relief action photos
- [ ] COVID relief action photos (vaccination camps, food distribution)
- [ ] Community service photos

**Education Tab:**
- [ ] APGET/Jnanasudha institution photos
- [ ] Student/classroom photos
- [ ] Ekal Vidyalaya partnership photos
- [ ] Scholarship recipient photos

---

## Future Enhancements

### Short-term (Next 3 months)
- [ ] Add testimonial database with admin panel
- [ ] Implement email newsletter signup
- [ ] Create program registration forms
- [ ] Add social media feed integration
- [ ] Implement search functionality
- [ ] Create sitemap.xml & robots.txt

### Medium-term (3-6 months)
- [ ] Distribute gallery to individual pages
- [ ] Create era-specific detail pages for Yakshagana
- [ ] Implement video streaming platform integration
- [ ] Add donation/patronage system
- [ ] Create admin dashboard for content updates
- [ ] Add multi-language support

### Long-term (6-12 months)
- [ ] Interactive timeline (D3.js or similar)
- [ ] Impact metrics dashboard
- [ ] Mobile app for class registration
- [ ] Virtual touring/3D gallery
- [ ] Student/practitioner community platform
- [ ] Scholarship application portal
- [ ] Documentary-style video content

### Technical Debt & Optimization
- [ ] Image optimization (WebP, compression)
- [ ] Lazy loading for galleries
- [ ] Performance monitoring & optimization
- [ ] SEO refinement
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Security updates & testing

---

## Content Guidelines

### Tone & Voice
- **Professional yet warm:** Respectful of tradition, welcoming to seekers
- **Authentic:** Real stories, real impact, not overly promotional
- **Empowering:** Emphasize transformation and possibility
- **Clear:** Accessible language, avoids jargon
- **Integrated:** Show connections between all aspects of Raghuram's work

### Writing Standards
- All sections follow "Entertain • Educate • Empower" framework
- Testimonials are authentic, attributed with permission
- Statistics are cited/sourced
- Descriptions are benefit-focused (not feature-focused)
- CTAs are clear and action-oriented

### Photography Standards
- High-quality, well-lit images
- Diverse representation
- Action shots preferred over posed
- Consistent color grading across era/section
- Legal/permission documentation for all photos

---

## Success Metrics

### Point of Implementation
- [ ] All pages built and working
- [ ] Zero broken links
- [ ] Mobile responsive across all devices
- [ ] Page load time < 3 seconds

### 3 Months In
- [ ] 70%+ of core content filled in
- [ ] Monthly visitors: [TBD target]
- [ ] Email newsletter: [TBD target] subscribers
- [ ] Social shares: [TBD target]

### 6 Months In
- [ ] 90%+ content completed
- [ ] Engagement metrics (time on page, bounce rate)
- [ ] Conversion rates (registrations, inquiries)
- [ ] SEO rankings for key terms

---

## Maintenance & Update Schedule

### Weekly
- [ ] Check for broken links
- [ ] Monitor contact form submissions
- [ ] Update calendar/events as needed

### Monthly
- [ ] Add new testimonials/stories
- [ ] Update statistics as applicable
- [ ] Review & fix any reported issues
- [ ] Social media content from website

### Quarterly
- [ ] Audit analytics & user behavior
- [ ] Content review & refresh
- [ ] Image optimization & updates
- [ ] SEO performance review

### Annually
- [ ] Comprehensive security audit
- [ ] Technology stack update review
- [ ] Strategic content planning
- [ ] Brand refresh assessment

---

## Notes & Considerations

### Brand Consistency
- "Beyond the Stage" page should visually/thematically connect all sections
- Use consistent color palette (warm, inviting, professional)
- Typography should reflect both tradition and modernity
- Photography style should be cohesive across all sections

### Content Sensitivity
- Disaster relief work should be respectful, not exploitative
- Testimonials about healing should respect privacy
- Educational institution partnerships should be clearly attributed
- Charity work should emphasize empowerment, not dependency

### Performance Optimization
- With extensive imagery, lazy load galleries aggressively
- Video content should be hosted on CDN or YouTube (not stored locally)
- Consider image optimization plugins (WebP generation, compression)
- Implement caching strategies for repeated visitors

### Accessibility
- All images must have descriptive alt text
- Videos should have captions
- Tab navigation must be keyboard accessible
- Color contrast ratios should meet WCAG AA standards
- Forms should be fully accessible

---

## Contact & Questions

For questions about this architecture, implementation, or future iterations, refer to this document. As content is added and sections evolve, update this master document as the single source of truth.

**Last Updated:** February 18, 2026  
**Next Review:** [TBD]
