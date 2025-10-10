//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)) // Test Loader: Set below to async, await delay(2000)
import PageTitle from '@/components/page-title'
import { CartHeader } from '@/components/shared/product/card-header'
import CartList from '@/components/shared/product/cart-list'
import ProductList from '@/components/shared/product/product-list'
import { CartSummary } from '@/components/shared/product/summary'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getMyCart } from '@/lib/actions/cart.actions'
import { getLastestProducts } from '@/lib/actions/product.actions'

export const metadata = {
  title: 'Cart',
}

const CartPage = async () => {
  const latestProducts = await getLastestProducts()
  const cart = await getMyCart()

  // Create a Set of cart item IDs for efficient lookup
  //const cartItemIds = new Set(cart?.items?.map((item) => item.id) ?? [])
  const cartItemIds = cart?.items?.map((item) => item.id) ?? []
  return (
    <div>
      <div className="container">
        <PageTitle title="UI Section" />
        <h1 className="text-2xl font-semibold py-5">Component Building</h1>
        <div className="mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="w-full flex-1 space-y-4">
              <CartHeader itemCount={cart?.items.length ?? 0} />
              <CartList items={cart?.items ?? []} />
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="lg:sticky lg:top-4">
                <CartSummary
                  subtotal={Number(cart?.totalPrice ?? 0)}
                  totalItems={cart?.items.length ?? 0}
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-1xl font-semibold py-5">
          Add Products to re-test Remove functionality:
        </h3>
        <ProductList
          data={latestProducts}
          limit={3}
          cartItemIds={cartItemIds}
        />
      </div>
      <h1 className="text-2xl font-semibold py-6">
        Process, Assumptions and Production Ready Thoughts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 py-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Ideal Design Hand-off Phase</CardTitle>
            <CardDescription className="pt-4">
              <div className="space-y-6">
                <div>
                  <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                    <li>
                      Run through Figma wireframes, userflows, product
                      requirements scheduled in sprint and component
                      dependencies
                    </li>
                    <li>
                      Verify design tokens are exported/documented (spacing
                      scale, shadows, transitions)
                    </li>
                    <li>
                      Check for component states beyond hover (loading,
                      disabled, error, success)
                    </li>
                    <li>
                      Identify animation/transition specs (duration, easing,
                      triggers)
                    </li>
                    <li>Flag design debt or inconsistencies early</li>
                    <li>Confirm responsive design sizes</li>
                    <li>
                      Verify design tokens are exported/documented (spacing
                      scale, shadows, transitions)
                    </li>
                    <li>
                      Check for component states beyond hover (loading,
                      disabled, error, success)
                    </li>
                    <li>
                      Identify animation/transition specs (duration, easing,
                      triggers)
                    </li>
                    <li>
                      Localization / i18n (if the cart needs to serve multiple
                      languages)
                    </li>
                  </ol>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Assumptions</CardTitle>
            <CardDescription className="pt-4">
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Design is fully finalised, with no major last‑minute changes
                </li>
                <li>Assets will be provided in the correct formats</li>
                <li>
                  No complex data normalisation needed or backend logic required
                </li>
                <li>
                  Building components that can be my choice in type and can
                  derive headless in form - ShadCN
                </li>
                <li>
                  I have complete autonomy over technical implementation and
                  behaviours that are not stated, eg fixed layout for Summary
                  Checkout Component
                </li>
              </ol>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Steps left uncomplete due to time</CardTitle>
            <CardDescription className="pt-4">
              <h2 className="text-lg font-semibold mb-2 text-[#27252C]">
                Client State Management for Cart
              </h2>
              <p className="text-base leading-6 text-[#27252C] mb-4">
                To demonstrate knowledge of Next.js, I normalised cart data and
                set up a serverless Postgres DB using Prisma and Zod for
                validation. This allowed me to show both{' '}
                <code>`use client`</code> and <code>`use server`</code>{' '}
                capabilities. While a simple reference may have sufficed, this
                approach gives flexibility. If time allowed, I would have added
                `router.refresh()` to keep server actions in sync or managed
                local state:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Make <strong>CartPage</strong> a Client Component using{' '}
                  <code>use client</code> with React state
                </li>
                <li>
                  Add a <code>refreshCart</code> function that can be passed to
                  child components
                </li>
                <li>
                  Use <code>useTransition</code> for smoother UI updates without
                  full page refreshes
                </li>
                <li>
                  Pass <code>onCartUpdate</code> to <strong>CartList</strong> to
                  trigger cart refresh after mutations
                </li>
                <li>
                  Use <code>revalidatePath</code> in server actions for Next.js
                  cache updates
                </li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Storybook Setup
              </h2>
              <p className="text-base leading-6 text-[#27252C] mb-4">
                Storybook was set up for <strong>Cart List</strong>,{' '}
                <strong>Cart Item</strong>, and <strong>Summary</strong>{' '}
                components as a visual source of truth. It bridges design and
                development, speeding up QA and spotting visual deviations
                quickly.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>Supports integration with Figma</li>
                <li>
                  Allows shared understanding across design, product, and
                  engineering
                </li>
                <li>Enables visual regression testing with minimal config</li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Testing Strategy
              </h2>
              <p className="text-base leading-6 text-[#27252C] mb-4">
                My goal would be to combine multiple types of testing to ensure
                robustness and accessibility:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Functional Testing:</strong> Validate buttons, forms,
                  and links using tools like <em>Cypress</em> or{' '}
                  <em>Playwright</em>
                </li>
                <li>
                  <strong>Responsive Testing:</strong> Confirm layouts behave
                  correctly on mobile, tablet, and desktop
                </li>
                <li>
                  <strong>Accessibility Testing:</strong> Use tools like{' '}
                  <em>Lighthouse</em> and <em>axe</em>, plus keyboard navigation
                  checks, to ensure WCAG compliance
                </li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Performance Optimisation
              </h2>
              <p className="text-base leading-6 text-[#27252C] mb-4">
                Typical performance enhancements would be implemented where
                applicable. While some may not be relevant for a small demo,
                here’s what I’d plan for larger-scale applications:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Use code-splitting and lazy loading to reduce bundle size
                </li>
                <li>Optimise image sizes and formats for faster load</li>
                <li>Run Lighthouse/WebPageTest for page speed insights</li>
                <li>Ensure API error states are gracefully handled</li>
              </ol>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1 py-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Production Ready Checklist</CardTitle>
            <h3 className="font-bold">
              Assumption CI/CD is already setup and Data contract is established
              prior to Production
            </h3>
            <CardDescription className="pt-4">
              <h2 className="text-lg font-semibold mb-2 text-[#27252C]">
                Design Consistency
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Does the implementation exactly match the Figma design (fonts,
                  colors, spacing, component states)?
                </li>
                <li>
                  Are edge cases (long text, very short text, no data) handled
                  gracefully?
                </li>
                <li>Share Storybook asset</li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Testing – Responsive & Breakpoint Testing
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Test at “in between” widths, not just the major breakpoints
                </li>
                <li>Check for layout shifts or content overflow</li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Testing – Accessibility (WCAG 2.1 AA) & Keyboard Navigation
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Tab order is logical & interactive elements can be reached
                </li>
                <li>Contrast ratios meet WCAG standards</li>
                <li>Screen reader labels and ARIA roles are correct</li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Testing – Performance & Load Times
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>Page load time test (especially mobile)</li>
                <li>
                  Assets: Minify assets, defer non‑critical CSS/JS, lazy load
                  images
                </li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                SEO & Metadata
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Proper <code>&lt;title&gt;</code>,{' '}
                  <code>&lt;meta description&gt;</code>, OG tags (Open Graph),
                  and canonical tags
                </li>
                <li>
                  Proper <code>alt</code> tags on images
                </li>
                <li>
                  Correct link handling (nofollow, external links, internal
                  routing)
                </li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Error Handling
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Graceful fallback if data fails to load or errors are caught
                </li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Code Quality & Maintainability
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>Reusable components where appropriate</li>
                <li>Unit and integration tests</li>
                <li>Well-documented code and patterns</li>
              </ol>

              <h2 className="text-lg font-semibold mt-8 mb-2 text-[#27252C]">
                Observability & Monitoring Setup
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>Analytics if required</li>
                <li>
                  Logging of key actions (e.g., form submits, button clicks)
                </li>
              </ol>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Improvements to Design</CardTitle>
            <CardDescription>
              <p className="text-base leading-6 text-[#27252C] mb-4">
                The key usability issue is around cart controls — users cant
                adjust item quantity without removing and re-adding. The page
                also needs mobile and accessibility enhancements.
              </p>

              <h3 className="text-base font-semibold mb-2 text-[#27252C]">
                Design Improvements
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Add quantity selectors with <code>+</code>/<code>−</code>{' '}
                  buttons, and display current quantity
                </li>
                <li>
                  Implement a remove confirmation toast with an undo option
                </li>
                <li>
                  Add a <b>Continue Shopping</b> button to navigate users back
                  to products
                </li>
                <li>Include shipping cost in the summary component</li>
                <li>
                  Add visible focus states and improve keyboard navigation
                </li>
                <li>
                  Increase spacing between cart items for better readability
                </li>
                <li>
                  Show a loading spinner and disable Proceed to Checkout if cart
                  is empty
                </li>
                <li>
                  Consider showing cross-sell opportunities, recently viewed
                  items, and payment options
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                Technical Improvements
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Cart State Persistence:</strong> Ensure cart data is
                  saved across sessions
                </li>
                <li>
                  <strong>Cross-tab Sync:</strong> Keep cart data in sync when
                  multiple tabs are open
                </li>
                <li>
                  <strong>Conflict Resolution:</strong> Handle edge cases like
                  out-of-stock or price-changed items gracefully
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                Error Handling & User Communication
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  Show user-friendly error messages when cart updates fail
                </li>
                <li>Gracefully handle network issues or stale product data</li>
                <li>Provide clear feedback for any asynchronous operations</li>
              </ol>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1 py-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Task Process : Steps 1 - 6 Completed</CardTitle>
            <CardDescription>
              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                1. 📝 Understand Requirements & Assets
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Review Figma:</strong> Identify scope, interactions,
                  and layout variations
                </li>
                <li>
                  <strong>Extract design details:</strong> Pull spacing, type,
                  UI states, and assets
                </li>
                <li>
                  <strong>Check for gaps:</strong> Spot missing states like
                  empty or error views
                </li>
                <li>
                  <strong>Define breakpoints:</strong> Map out responsive
                  behavior per device
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                2. ⚙️ Project Setup
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Scaffold Next.js:</strong> Use Tailwind and App Router
                  setup
                </li>
                <li>
                  <strong>Install tooling:</strong> Add ShadCN, Zod, Prisma, and
                  other deps
                </li>
                <li>
                  <strong>Configure linting:</strong> Set up ESLint, Prettier,
                  paths, and structure
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                3. 🧱 Layout & Structure
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Build JSX skeleton:</strong> Use semantic tags and
                  ShadCN components
                </li>
                <li>
                  <strong>Set layout containers:</strong> Apply grid, flex, or
                  section wrappers
                </li>
                <li>
                  <strong>Use placeholders:</strong> Add temp content to test
                  structure
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                4. 🎨 Styling with Tailwind
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Apply utilities:</strong> Use Tailwind classes
                  directly with overrides as needed
                </li>
                <li>
                  <strong>Match design:</strong> Ensure spacing, colors, and
                  type are pixel-accurate
                </li>
                <li>
                  <strong>Ensure responsiveness:</strong> Use breakpoints to
                  adapt layouts cleanly
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                5. ⚡ Interactivity & State
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Quantity controls:</strong> Add increment/decrement
                  logic
                </li>
                <li>
                  <strong>UI states:</strong> Add hover, focus, disabled,
                  loading indicators
                </li>
                <li>
                  <strong>Toast notifications:</strong> Show undo on item remove
                </li>
                <li>
                  <strong>Extra actions:</strong> Add Continue Shopping button
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                6. 🔌 Data Integration
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Connect to DB:</strong> Use Prisma with serverless
                  Postgres
                </li>
                <li>
                  <strong>Use server actions:</strong> Handle cart mutations via
                  action functions
                </li>
                <li>
                  <strong>Manage client state:</strong> Use{' '}
                  <code>useTransition</code> for smooth updates
                </li>
                <li>
                  <strong>Fallbacks:</strong> Mock cart data if backend is
                  unavailable
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                7. ♿ Accessibility & SEO
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Keyboard navigation:</strong> Ensure focus rings and
                  tab order
                </li>
                <li>
                  <strong>Semantic markup:</strong> Use ARIA where needed and
                  correct heading structure
                </li>
                <li>
                  <strong>SEO tags:</strong> Add <code>&lt;title&gt;</code>,
                  meta descriptions, and alt text
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                8. 🧪 Testing & Validation
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Browser/device test:</strong> Chrome, Safari, Firefox,
                  iOS/Android
                </li>
                <li>
                  <strong>Responsive checks:</strong> Validate key and
                  in-between breakpoints
                </li>
                <li>
                  <strong>Accessibility testing:</strong> Run Lighthouse, axe,
                  and keyboard checks
                </li>
                <li>
                  <strong>Error/empty states:</strong> Test fallback handling
                  and loading indicators
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                9. 🧹 Optimisation & Polish
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Lazy loading:</strong> Defer offscreen images and
                  non-critical components
                </li>
                <li>
                  <strong>Image compression:</strong> Use WebP and modern
                  formats
                </li>
                <li>
                  <strong>Bundle optimization:</strong> Minify, purge unused
                  CSS, code-split
                </li>
                <li>
                  <strong>Mobile performance:</strong> Prioritize load speed and
                  reduce layout shift
                </li>
              </ol>

              <h3 className="text-base font-semibold mt-8 mb-2 text-[#27252C]">
                10. 🚀 Prepare for Production
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-base leading-6 text-[#27252C]">
                <li>
                  <strong>Configure deployment:</strong> Set up build and
                  hosting (e.g. Vercel)
                </li>
                <li>
                  <strong>Monitoring tools:</strong> Add analytics, Sentry, or
                  logging if needed
                </li>
                <li>
                  <strong>Final QA:</strong> Smoke test on staging / preview
                  builds
                </li>
                <li>
                  <strong>Documentation:</strong> Update README with build,
                  deploy, known issues
                </li>
              </ol>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default CartPage
