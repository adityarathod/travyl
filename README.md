# Travyl: Leveraging LLMs to Curate Tailored Travel Itineraries
_Leveraging LLMs to curate tailored travel itineraries and destinations for American Airlines customers, ensuring a highly optimized and personalized experience._

**TAMUhack 2023, American Airlines Challenge, 1st Place** | [Devpost submission with demo](https://devpost.com/software/travyl?ref_content=my-projects-tab&ref_feature=my_projects)

## Project Structure
- `flight-engine/`: fork of [AA Flight Engine](https://github.com/AmericanAirlines/Flight-Engine), adding in rudimentary pricing algorithm
- `frontend/`: Next.js client-side application with backend API routes to call OpenAI API

## Development
Requirements: `node`, `yarn` installed

- `cd frontend && yarn`
- `cp .env.example .env.production` and open `.env.production`
- Add in OpenAI API key + flight engine instance URL
- `yarn dev`
