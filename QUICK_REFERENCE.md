# YakshalokaUS - Quick Reference Guide

**For rapid lookups and implementation reminders**

---

## Navigation Structure at a Glance

```
HOME | PERFORMING ARTS ↓ | BEYOND THE STAGE | GALLERY | ABOUT | CONTACT

PERFORMING ARTS:
├─ Yakshagana (With 6-era timeline)
├─ BoothaKola (Retained)
├─ BoothaRituals (Retained)
├─ Hollywood & Media (NEW)
└─ Training & Teaching (NEW)
```

---

## Key Pages & Purpose

| Page | Purpose | Status |
|------|---------|--------|
| Yakshagana | 300+ performances with era timeline | Redesign in progress |
| BoothaKola | Historical ritual performances | Retained |
| BoothaRituals | Sacred arts & fire rituals | Retained |
| Hollywood & Media | TV, Film, Commercials | NEW |
| Training & Teaching | Classes & student work | NEW |
| Beyond the Stage | Healing, Community, Charity, Education | NEW HUB |
| Gallery | All performance photos | To be distributed later |
| About | Raghuram & YakshalokaUS | Existing |

---

## "Beyond the Stage" Page Structure

**Single page with 5 tabbed sections:**

1. **Raghuram's Story** (Bio + philosophy)
2. **Healing & Wellness** (Life coaching, hypnotherapy, yoga, meditation)
3. **Community & Culture** (Picnics, sports, cultural events, one-man shows)
4. **Charity & Philanthropy** (Disaster relief, community service)
5. **Education & Institutions** (APGET, Ekal Vidyalaya, scholarships, partnerships)

---

## Yakshagana Era Timeline

```
Upto 1994 → Indian Era
1995-2003 → New England Era
2004-2006 → Florida Era
2006-2013 → San Francisco Era
2013-2022 → SoCal Era 1
2023-2026 → SoCal Era 2
```

Each era card includes:
- Primary location/hub
- Featured show with image
- International tours (with country badges)
- Total performance count

---

## Asset Folder Organization

```
yakshagana/
├─ Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg (HERO ONLY)
├─ repertoire/ (2+ plays with multiple images each)
├─ stage-moments/
│  ├─ performance-videos/
│  ├─ video-thumbnails/
│  └─ candid-stills/ (7 images)
└─ era-timeline/ (1 per era + international tour images)

beyond-the-stage/
├─ raghuram-story/ (timelines, milestones, personal)
├─ healing/ (sessions, spaces, testimonials)
├─ community/ (picnics, sports, festivals, demos)
├─ charity/ (hurricane, wildfire, covid relief)
└─ education/ (APGET, Ekal, scholarships, partnerships)
```

---

## Implementation Phases

**Phase 1 (Week 1-2):** Build page shells & navigation
**Phase 2 (Week 3-6):** Fill core content (Story, Timeline, Healing, Relief, Education)
**Phase 3 (Week 7-9):** Testimonials, galleries, impact metrics
**Phase 4 (Later):** Gallery distribution to individual pages

---

## Cross-Linking Strategy

```
Yakshagana → "Discover the philosophy" → Beyond the Stage: Story
Beyond the Stage: Story → "See his performances" → Yakshagana/BoothaKola
Beyond the Stage: Healing → "Learn with him" → Training page
Hollywood & Media → "Before films..." → Yakshagana: Story
```

---

## Content Needs - Immediate Priorities

**MUST HAVE (Phase 2):**
- Raghuram's full biography & life philosophy
- Yakshagana era timeline (years, locations, key shows)
- Disaster relief stories (Hurricane, Wildfire, COVID)
- Education institution details (APGET, Ekal)
- Healing/Wellness program descriptions

**NICE TO HAVE (Phase 3):**
- Testimonials & client stories
- Community program details
- Media/press features
- Detailed curriculum

---

## Design & UX Notes

**Color Scheme:**
- Performing Arts: Purple/Amber (existing)
- Beyond the Stage: Gold/Warm tones
- Healing: Calming blues/greens
- Community: Warm oranges
- Charity: Deep reds
- Education: Navy/greens

**Responsive:**
- Desktop: Full tabs, 2-3 columns
- Tablet: Tabs visible, 1-2 columns
- Mobile: Accordion tabs, 1 column

---

## Key URLs (To Be Created)

```
/yakshagana (Enhanced)
/yakshagana#era-timeline

/boothakola (Retained)
/bootharituals (Retained)

/hollywood-media (NEW)
/training-teaching (NEW)

/beyond-the-stage (NEW - Main Hub)
/beyond-the-stage?tab=story
/beyond-the-stage?tab=healing
/beyond-the-stage?tab=community
/beyond-the-stage?tab=charity
/beyond-the-stage?tab=education
```

---

## Statistics Framework (To Be Filled)

```
RAGHURAM'S IMPACT BY NUMBERS:

Performances:
├─ 300+ Total performances
├─ 6 Continents reached
├─ X Television appearances
└─ X Film/Commercial appearances

Community:
├─ X Community events organized
├─ X Persons served in community programs
└─ X Years of continuous service

Charity:
├─ X Persons assisted (disaster relief)
├─ X Communities impacted
└─ X Partner organizations

Education:
├─ X Students impacted (direct & indirect)
├─ X Educational institutions partnered
└─ X Years as educator/trustee
```

---

## Components to Build

- [ ] TabNavigation (sticky, state-persisting)
- [ ] ContentBlock (reusable section)
- [ ] StatisticCard (impact metrics)
- [ ] TestimonialCard (with photo & attribution)
- [ ] EraCard (timeline items with toggle)
- [ ] ProgramCard (class/workshop details)
- [ ] ComingSoonPlaceholder (with email capture)

---

## File Locations & Updates

**Comprehensive Documentation:**
- `ARCHITECTURE_DOCUMENTATION.md` (master reference)
- `QUICK_REFERENCE.md` (this file)

**Update these files as:**
- New pages are created
- Content structure changes
- Asset organization evolves
- New decisions are made

---

## Quick Checklist - Phase 1 Implementation

- [ ] Create Beyond the Stage page component
- [ ] Add 5 tab sections with placeholders
- [ ] Update navigation menu
- [ ] Create "Coming Soon" UX for empty sections
- [ ] Set up email capture for Coming Soon sections
- [ ] Create asset folder structure
- [ ] Wire up cross-linking between pages
- [ ] Test on mobile/tablet/desktop
- [ ] Verify all links work

---

## Quick Checklist - Phase 2 Content

- [ ] Write Raghuram's comprehensive biography
- [ ] Compile Yakshagana era information & images
- [ ] Write disaster relief case studies
- [ ] Document education partnerships
- [ ] Write healing/wellness program descriptions
- [ ] Gather all required images
- [ ] Compress & optimize all images
- [ ] Create video thumbnails
- [ ] Collect testimonials & permissions

---

## Guiding Philosophy

**"Entertain • Educate • Empower"**

This thread runs through every section, every page, every image. The website should tell one integrated story: Raghuram Shetty uses art, healing, community, service, and education to create transformation. He's not doing separate things - it's all one coherent life mission.

---

## Contact Points for Users

Each tab/section should have clear CTAs:
- **Story:** "Explore Raghuram's Work" → sections below
- **Healing:** "Book a Session" / "Learn More"
- **Community:** "Join Us" / "Upcoming Events"
- **Charity:** "Donate" / "Volunteer" / "Learn How"
- **Education:** "Sponsor a Student" / "Partner With Us" / "Enroll"

---

**Last Updated:** February 18, 2026  
**Version:** 1.0
