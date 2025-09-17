# Ultimate Mortgage — Sprint Plan v1
*Review & Implementation Roadmap*

---

## Current Implementation Status ✅

### **Completed (Live at [https://ultimate-mortgage-avor698js-bill-5597s-projects.vercel.app](https://ultimate-mortgage-avor698js-bill-5597s-projects.vercel.app))**
- ✅ Next.js 14 project with TypeScript & Tailwind CSS
- ✅ VT1 Design System implemented (colors, typography, spacing)
- ✅ Homepage with all core sections:
  - Hero section with CTAs
  - Rate Proof Row (4 rate cards)
  - Calculator Preview with modal placeholder
  - Value Props (4 cards with authentic imagery)
  - Credibility Strip (reviews + press logos)
  - Guide Download lead magnet
  - Compliance Footer (NMLS, Equal Housing)
- ✅ Responsive mobile-first design
- ✅ Button component with variants
- ✅ GitHub repository & Vercel deployment
- ✅ Security updates & optimizations

---

## Gap Analysis: Spec vs Current Implementation

### 🔴 **Critical Missing Components**

#### **1. Lead Capture Funnel** (New Requirement)
- **Status**: Not implemented
- **Spec Requirements**:
  - 4-5 step funnel with progress bar
  - Steps: Purpose/Zip → Property/Finance → Credit Score → Contact → Confirmation
  - Mobile-first with sticky CTAs
  - Session persistence
  - Analytics event stubs
- **Impact**: HIGH - Core conversion functionality

#### **2. Design System Components**
- **Missing**:
  - Input components (Text, Select, Slider)
  - Modal system (960×680 desktop, 80% mobile sheet)
  - Progress bar component
  - Skeleton loaders
- **Current**: Only Button component implemented
- **Impact**: HIGH - Needed for funnel and enhanced UX

#### **3. Page Templates**
- **Missing**: All secondary pages
  - Branch pages
  - Loan Officer pages  
  - Loan Program pages
  - Blog post template
- **Current**: Homepage only
- **Impact**: MEDIUM - Expansion functionality

### 🟡 **Enhancement Opportunities**

#### **4. Homepage Improvements**
- **Missing**:
  - Sticky mobile CTAs
  - Skeleton loaders for calculator/rates
  - Analytics event markers
  - Enhanced modal for calculator
- **Current**: Basic functionality implemented
- **Impact**: MEDIUM - UX improvements

#### **5. Navigation & Site Structure**
- **Missing**:
  - Site navigation/header
  - Route structure for pages
- **Current**: Single page application
- **Impact**: MEDIUM - Site navigation

---

## Sprint Plan: 3 Sprints × 1 Week Each

### **Sprint 1: Core Funnel & Components** (Week 1)
*Priority: Critical conversion functionality*

#### **Goals**
- Implement lead capture funnel (5 steps)
- Build missing design system components
- Add site navigation structure

#### **User Stories**
1. **As a visitor**, I can complete a 5-step lead capture flow to get my mortgage payment
2. **As a visitor**, I can see my progress through the funnel with a progress bar
3. **As a visitor**, I can access the funnel from homepage CTAs
4. **As a visitor**, my inputs persist if I navigate away and return

#### **Technical Tasks**
- [ ] Create `src/app/funnel/` route structure
- [ ] Build Input components (Text, Select, Slider)
- [ ] Build Modal system with mobile bottom sheet
- [ ] Build Progress Bar component  
- [ ] Implement 5 funnel steps:
  - [ ] Step 1: Loan Purpose + Zip Code
  - [ ] Step 2: Property & Financing Info
  - [ ] Step 3: Credit Score Band
  - [ ] Step 4: Contact Information
  - [ ] Step 5: Review & Confirmation
- [ ] Add session persistence (localStorage)
- [ ] Connect homepage CTAs to funnel
- [ ] Add analytics event stubs
- [ ] Create site header/navigation

#### **Acceptance Criteria**
- ✅ Funnel accessible from homepage CTAs
- ✅ All 5 steps render correctly on mobile/desktop
- ✅ Progress bar shows current step
- ✅ Form validation works with error states
- ✅ Data persists between steps
- ✅ Confirmation screen shows payment preview
- ✅ Mobile sticky CTA bar functions

---

### **Sprint 2: Page Templates & Content** (Week 2)
*Priority: Site expansion and content structure*

#### **Goals**
- Build page templates for Branch, LO, and Loan Program pages
- Enhance homepage with missing features
- Improve design system consistency

#### **User Stories**
1. **As a visitor**, I can view branch-specific pages with local information
2. **As a visitor**, I can view loan officer profiles with contact information
3. **As a visitor**, I can learn about specific loan programs
4. **As a visitor**, I experience smooth loading states and animations

#### **Technical Tasks**
- [ ] Create `src/app/branch/[slug]/page.tsx`
  - [ ] Branch hero with local imagery
  - [ ] LO carousel component
  - [ ] Map module placeholder
  - [ ] Local reviews section
- [ ] Create `src/app/loan-officer/[slug]/page.tsx`
  - [ ] LO profile hero
  - [ ] Rate widget integration stub
  - [ ] Reviews/testimonials section
  - [ ] Contact/scheduling module
- [ ] Create `src/app/loan-programs/[slug]/page.tsx`
  - [ ] Program benefits cards
  - [ ] Eligibility checklist
  - [ ] Contextual calculator
  - [ ] FAQ accordion
- [ ] Homepage enhancements:
  - [ ] Skeleton loaders for calculator/rates
  - [ ] Sticky mobile CTAs
  - [ ] Enhanced modal for calculator
- [ ] Build missing components:
  - [ ] Carousel component
  - [ ] Accordion/FAQ component
  - [ ] Map placeholder component

#### **Acceptance Criteria**
- ✅ All page templates render with sample content
- ✅ Navigation between pages works
- ✅ Components are reusable across pages
- ✅ Mobile responsiveness maintained
- ✅ Loading states implemented
- ✅ Compliance elements present on all pages

---

### **Sprint 3: Polish, Blog & Integrations** (Week 3)
*Priority: Content system and production readiness*

#### **Goals**
- Implement blog template and content system
- Add integration stubs for MortgageMate and BankingBridge
- Polish UX and prepare for production

#### **User Stories**
1. **As a visitor**, I can read educational blog posts about mortgages
2. **As a visitor**, I see realistic rate data and calculator outputs
3. **As a visitor**, I experience smooth animations and interactions
4. **As a content manager**, I can easily add new content using the template system

#### **Technical Tasks**
- [ ] Create `src/app/blog/[slug]/page.tsx`
  - [ ] Article hero with metadata
  - [ ] Rich content layout
  - [ ] Inline CTA components
  - [ ] Related articles section
  - [ ] Author attribution system
- [ ] Integration stubs:
  - [ ] MortgageMate calculator iframe placeholder
  - [ ] BankingBridge rate table component
  - [ ] CRM lead routing stubs
- [ ] UX enhancements:
  - [ ] Page transitions and animations
  - [ ] Hover effects and micro-interactions
  - [ ] Performance optimizations
  - [ ] SEO metadata for all pages
- [ ] Content system:
  - [ ] Sample content for all page types
  - [ ] Image optimization and WebP conversion
  - [ ] Content management utilities
- [ ] Production readiness:
  - [ ] Error boundaries
  - [ ] 404 and error pages
  - [ ] Analytics integration setup
  - [ ] Performance monitoring

#### **Acceptance Criteria**
- ✅ Blog template renders articles beautifully
- ✅ Integration placeholders show realistic data
- ✅ All animations and interactions work smoothly
- ✅ Site performs well on mobile devices
- ✅ SEO metadata is comprehensive
- ✅ Error handling is graceful
- ✅ Content is easy to update and maintain

---

## Resource Requirements

### **Development Time**
- **Sprint 1**: ~40 hours (funnel + core components)
- **Sprint 2**: ~35 hours (page templates + enhancements)  
- **Sprint 3**: ~30 hours (blog + polish + integrations)
- **Total**: ~105 hours over 3 weeks

### **Key Dependencies**
- Design assets for additional pages
- Sample content for all page types
- Integration API documentation (MortgageMate, BankingBridge)
- Brand photography for branches/LOs

### **Risk Mitigation**
- Start with Sprint 1 (highest impact)
- Each sprint delivers working functionality
- Can adjust scope based on feedback
- Integration stubs allow parallel development

---

## Success Metrics

### **Sprint 1 Success**
- [ ] Funnel conversion rate > 15% (industry benchmark)
- [ ] Mobile completion rate matches desktop
- [ ] Page load time < 2 seconds
- [ ] Zero critical accessibility violations

### **Sprint 2 Success**  
- [ ] All page templates responsive and functional
- [ ] Navigation flow intuitive and fast
- [ ] Content management system working
- [ ] Brand consistency maintained

### **Sprint 3 Success**
- [ ] Blog pages drive organic traffic
- [ ] Integration stubs ready for real APIs
- [ ] Site performance scores > 90
- [ ] Production deployment successful

---

## Next Steps for Approval

1. **Review this sprint plan** for scope and priorities
2. **Confirm resource allocation** (development time/team)
3. **Approve Sprint 1** to begin critical funnel development
4. **Gather content assets** for page templates
5. **Schedule sprint reviews** for feedback and iteration

---

**Ready to begin Sprint 1 upon approval** 🚀
