# Spec for Authentication Forms for Login and Signup

branch: claude/feature/auth-forms
figma_component (if used): N/A

## Summary

Build email/password authentication forms on the `/login` and `/signup` pages. Both forms share a common structure — email field, password field with a visibility toggle, and a contextual submit button. Submissions log to the console (no real auth yet). Users can easily switch between the two forms via a link.

## Functional Requirements

- `/login` page renders an email input, a password input with a show/hide toggle, and a "Login" submit button
- `/signup` page renders an email input, a password input with a show/hide toggle, and a "Sign Up" submit button
- Password toggle button switches the input type between `password` and `text`, and its icon updates accordingly
- Submitting either form prevents default browser submission and logs `{ form, email, password }` to the console
- A navigation link allows switching between the two forms:
  - `/login` shows "Don't have an account? Sign up" → links to `/signup`
  - `/signup` shows "Already have an account? Log in" → links to `/login`
- All elements follow the existing dark theme (Tailwind CSS v4, theme tokens from `globals.css`)

## Figma Design Reference (only if referenced)

N/A — no Figma designs for this feature.

## Possible Edge Cases

- Both email and password fields are empty when submitting → still logs to console without error
- User rapidly toggles password visibility → toggle state remains consistent
- User navigates between forms without submitting → no state leakage between forms
- Very long email or password values → input fields scroll naturally, no layout breakage
- Browser autofill populates fields → form still logs the filled values correctly on submit

## Acceptance Criteria

1. `/login` renders an email field, a password field with a visibility toggle, and a "Login" submit button
2. `/signup` renders an email field, a password field with a visibility toggle, and a "Sign Up" submit button
3. Clicking the visibility toggle shows/hides the password text and updates the icon
4. Submitting either form logs `{ form: "login"|"signup", email, password }` to the console
5. Switching between forms is possible via a link from either page
6. No real API calls or validation errors are shown
7. Styling matches the existing dark theme

## Open Questions

- Should both forms live on separate pages (as existing routes) or be combined on one page with a toggle? Separate pages

## Testing Guidelines

Create a test file(s) in the `./tests` folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Login form renders email, password toggle, and "Login" button
- Signup form renders email, password toggle, and "Sign Up" button
- Password toggle reveals and hides the password text
- Form submission logs the expected data to the console
- Navigation link between forms renders correctly
