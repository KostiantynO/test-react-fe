import { ContactForm, ContactInfo, Hero } from 'components/sections';

import { Container } from '.';

export const Main = () => (
  <main className="bg-neutral-50 overflow-hidden">
    <Container>
      <Hero />
      <ContactInfo />
      <ContactForm />
    </Container>
  </main>
);
