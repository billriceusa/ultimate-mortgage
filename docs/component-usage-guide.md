# Component Usage Guide
*Ultimate Mortgage Design System v2*

---

## 🧩 **Core Components**

### **Button Component**

The Button component supports 4 variants and 3 sizes with consistent styling and accessibility.

```tsx
import { Button } from '@/components/ui'

// Primary button - Main actions
<Button variant="primary" size="lg">
  Apply Now
</Button>

// Secondary button - Secondary actions  
<Button variant="secondary" size="md">
  Learn More
</Button>

// Tertiary button - Subtle actions
<Button variant="tertiary" size="sm">
  View Details
</Button>

// Ghost button - Minimal actions
<Button variant="ghost" size="md">
  Cancel
</Button>

// With loading state
<Button variant="primary" loading={isSubmitting}>
  {isSubmitting ? 'Submitting...' : 'Submit Application'}
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- All standard button HTML attributes

---

### **Input Component**

Form input with built-in label, validation, and accessibility features.

```tsx
import { Input } from '@/components/ui'

// Basic input
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  required
/>

// Input with validation
<Input
  label="Phone Number"
  type="tel"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  error={phoneError}
  helperText="We'll use this to contact you about your application"
/>

// Input with icons
<Input
  label="Search"
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
  placeholder="Search loan programs..."
/>
```

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `leftIcon`: React.ReactNode
- `rightIcon`: React.ReactNode
- All standard input HTML attributes

---

### **Select Component**

Dropdown component with consistent styling and validation.

```tsx
import { Select } from '@/components/ui'

const loanTypes = [
  { value: 'conventional', label: 'Conventional Loan' },
  { value: 'fha', label: 'FHA Loan' },
  { value: 'va', label: 'VA Loan' },
  { value: 'jumbo', label: 'Jumbo Loan' }
]

<Select
  label="Loan Type"
  options={loanTypes}
  placeholder="Choose your loan type"
  value={selectedLoan}
  onChange={(e) => setSelectedLoan(e.target.value)}
  required
/>

// With validation
<Select
  label="Credit Score Range"
  options={creditRanges}
  error={creditError}
  helperText="This helps us provide accurate rate estimates"
/>
```

**Props:**
- `label`: string
- `options`: Array<{value: string, label: string, disabled?: boolean}>
- `placeholder`: string
- `error`: string
- `helperText`: string
- All standard select HTML attributes

---

### **Card Component**

Flexible card system with optional sub-components.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui'

// Basic card
<Card padding="md">
  <h3>Simple Card</h3>
  <p>Card content goes here</p>
</Card>

// Interactive card with hover effects
<Card interactive padding="lg" onClick={handleClick}>
  <h3>Clickable Card</h3>
  <p>This card has hover effects</p>
</Card>

// Structured card with sub-components
<Card variant="elevated">
  <CardHeader>
    <h3 className="text-xl font-semibold">Loan Application</h3>
  </CardHeader>
  <CardContent>
    <p>Complete your mortgage application in 5 easy steps.</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Get Started</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `interactive`: boolean

---

### **ProgressBar Component**

Progress indicators for forms and loading states.

```tsx
import { ProgressBar, StepProgress } from '@/components/ui'

// Basic progress bar
<ProgressBar 
  value={75} 
  showLabel 
  variant="default" 
/>

// Step progress for multi-step forms
<StepProgress
  currentStep={2}
  totalSteps={5}
  steps={['Loan Info', 'Property', 'Credit', 'Contact', 'Review']}
/>

// Different variants
<ProgressBar value={100} variant="success" size="lg" />
<ProgressBar value={50} variant="warning" size="md" />
<ProgressBar value={25} variant="error" size="sm" />
```

**Props:**
- `value`: number (0-100)
- `max`: number (default: 100)
- `showLabel`: boolean
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'default' | 'success' | 'warning' | 'error'

---

## 🎨 **Design Patterns**

### **Form Layout Pattern**

```tsx
<form className="space-y-6 max-w-md">
  <Input
    label="Full Name"
    required
    placeholder="Enter your full name"
  />
  
  <Select
    label="Loan Purpose"
    options={loanPurposes}
    placeholder="Select loan purpose"
    required
  />
  
  <div className="flex gap-4">
    <Button variant="secondary" className="flex-1">
      Back
    </Button>
    <Button variant="primary" type="submit" className="flex-1">
      Continue
    </Button>
  </div>
</form>
```

### **Card Grid Pattern**

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {loanPrograms.map((program) => (
    <Card key={program.id} interactive padding="lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {program.name}
      </h3>
      <p className="text-gray-600 mb-4">
        {program.description}
      </p>
      <Button variant="secondary" className="w-full">
        Learn More
      </Button>
    </Card>
  ))}
</div>
```

### **Hero Section Pattern**

```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-display-lg font-bold text-gray-900 mb-6">
        Find Your Perfect Mortgage
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Get pre-approved in minutes with our streamlined application process.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="primary" size="lg">
          Apply Now
        </Button>
        <Button variant="secondary" size="lg">
          Calculate Payment
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 **Typography Guidelines**

### **Heading Hierarchy**

```tsx
// Page titles
<h1 className="text-display-lg font-bold text-gray-900">

// Section headings
<h2 className="text-display-md font-bold text-gray-900">

// Subsection headings
<h3 className="text-2xl font-semibold text-gray-900">

// Card titles
<h4 className="text-xl font-semibold text-gray-900">

// Small headings
<h5 className="text-lg font-semibold text-gray-900">
```

### **Body Text**

```tsx
// Large body text (hero descriptions)
<p className="text-lg text-gray-600">

// Standard body text
<p className="text-base text-gray-600">

// Small text (captions, metadata)
<span className="text-sm text-gray-500">

// Extra small text (fine print)
<span className="text-xs text-gray-500">
```

---

## 🎨 **Color Usage**

### **Text Colors**

```tsx
// Primary text (headings, important content)
className="text-gray-900"

// Secondary text (body content)
className="text-gray-600"

// Muted text (captions, metadata)
className="text-gray-500"

// Interactive text (links, buttons)
className="text-secondary-600 hover:text-secondary-700"

// Brand accent
className="text-primary-500"
```

### **Background Colors**

```tsx
// Main background
className="bg-white"

// Subtle background
className="bg-gray-50"

// Light background
className="bg-gray-100"

// Brand backgrounds
className="bg-primary-500"
className="bg-secondary-500"
```

### **Border Colors**

```tsx
// Default borders
className="border-gray-200"

// Subtle borders
className="border-gray-100"

// Focus borders
className="border-secondary-500"
```

---

## 📱 **Responsive Patterns**

### **Container Padding**

```tsx
// Standard container
className="px-4 sm:px-6 lg:px-8"

// Section padding
className="py-12 sm:py-16 lg:py-20"

// Max width containers
className="max-w-7xl mx-auto"  // Full width
className="max-w-4xl mx-auto"  // Content width
className="max-w-2xl mx-auto"  // Reading width
```

### **Grid Layouts**

```tsx
// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Auto-fit grid
className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"

// Flex layouts
className="flex flex-col sm:flex-row gap-4"
```

---

## ♿ **Accessibility Guidelines**

### **Focus States**

All interactive elements automatically include proper focus indicators:

```tsx
// Buttons have built-in focus rings
<Button variant="primary">Accessible Button</Button>

// Form elements have focus states
<Input label="Accessible Input" />

// Custom interactive elements
<div className="focus:ring-2 focus:ring-secondary-500 focus:outline-none">
  Custom Interactive Element
</div>
```

### **ARIA Labels**

```tsx
// Form labels are automatically associated
<Input label="Email" />  // Creates proper label association

// Custom ARIA labels
<button aria-label="Close modal">
  <CloseIcon />
</button>

// Descriptive text
<Button aria-describedby="help-text">
  Submit
</Button>
<div id="help-text" className="text-sm text-gray-500">
  This will submit your application for review
</div>
```

---

This component library provides a solid foundation for building consistent, accessible, and scalable mortgage application interfaces.
