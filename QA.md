# Verification — 11 November 2026

Test environment: Microsoft Edge (Chromium), Playwright, Node.js. No external runtime libraries are required by the site.

## Passed

- Four model tests: overlapping vs adjacent bookings; cancelled/TEAMS exceptions; seat holds, duplicate registrations and waitlists; certificate approval/attendance prerequisites; integer fils and CSV formula neutralization.
- Program creation, submission, decision and event scheduling.
- Room conflict rejection; successful alternate booking.
- Automatic coordinator task and reassignment preserving the task ID.
- Paid registration, duplicate rejection and waitlist at capacity.
- Payment failure leaves the record unchanged; success confirms the seat.
- Per-session attendance; signed-attendance placeholder upload; actual hours and execution approval.
- Eligible demo certificate and remuneration rate/hour snapshot, followed by simulated disbursement.
- Course and program searches and empty-result states.
- Training material upload and byte-identical download.
- All 19 evaluation criteria and aggregate averages.
- Arabic UTF-8 CSV download.
- Persistence across reloads.
- Learner and trainer views.
- Dialog focus containment and Escape dismissal.
- All 17 screens at 320, 768, 1024 and 1440 pixels without document-level horizontal overflow. Wide tables and calendars scroll within their containers.
- Mobile menu navigation and explicit close control.
- Paid-registration cancellation followed by simulated refund.
- Event cancellation updates dependent registrations and task.
- User-provided HTML-looking text is rendered as text.
- A4 certificate PDF generated through the browser print layout.
- Support request, staff reply and resolution.
- Relative assets and hash routes work under a project subpath equivalent to a GitHub Pages project site.
- Opening index.html directly from disk works.
- No external page requests and no JavaScript or console errors during tested flows.

## Boundaries

This is a static UX prototype, not a deployed production service. No real payments, authentication, mail delivery or centrally stored records were tested or implemented. No independent penetration test or full WCAG certification was performed. The original requirement references imports, complete official reports, additional conditional source fields, and Oracle APEX; these need production implementation. See README.md for all scenario assumptions.
