/* Topics, official sources, and the compact question-authoring helper.
   Question files call Q({...}); Q expands it into the documented schema (see docs/SCHEMA.md). */
window.DMV_META = {
  checkedDate: '2026-11-15',
  checkedNote: 'Rules were checked against the online California Driver\'s Handbook pages on dmv.ca.gov on 2026-11-15. The handbook pages do not show an edition date.',
  notice: 'Independent practice app. Not affiliated with the California DMV. Use the current DMV handbook as the official reference.'
};

window.DMV_TOPICS = [
  { key: 'signs', name: 'Road signs, shapes & colors' },
  { key: 'signals', name: 'Traffic lights & pedestrian signals' },
  { key: 'markings', name: 'Pavement markings & lanes' },
  { key: 'rightofway', name: 'Right-of-way & intersections' },
  { key: 'turns', name: 'Turns, U-turns & lane changes' },
  { key: 'freeway', name: 'Freeways, merging & passing' },
  { key: 'speed', name: 'Speed limits & following distance' },
  { key: 'parking', name: 'Parking, hills & curb colors' },
  { key: 'sharing', name: 'Pedestrians, bicycles & motorcycles' },
  { key: 'emergency', name: 'School buses & emergency vehicles' },
  { key: 'trucks', name: 'Trucks, buses, light rail & blind spots' },
  { key: 'railroad', name: 'Railroad crossings' },
  { key: 'conditions', name: 'Night, fog, rain & emergencies' },
  { key: 'impairment', name: 'Distraction, fatigue, alcohol & drugs' },
  { key: 'laws', name: 'Licenses, safety equipment & other laws' }
];

(function () {
  const B = 'https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/';
  window.DMV_SOURCES = {
    hb: { title: 'California Driver\'s Handbook (table of contents)', url: B },
    s1: { title: 'Section 1: The California Driver\'s License', url: B + 'the-california-driver-license/' },
    s2: { title: 'Section 2: Getting an Instruction Permit and Driver\'s License', url: B + 'getting-an-instruction-permit-and-drivers-license/' },
    s3: { title: 'Section 3: The Testing Process', url: B + 'the-testing-process/' },
    s5: { title: 'Section 5: An Introduction to Driving', url: B + 'introduction-to-driving/' },
    s6: { title: 'Section 6: Navigating the Roads', url: B + 'navigating-the-roads/' },
    s6b: { title: 'Section 6: Navigating the Roads (Continued)', url: B + 'navigating-the-roads-cont1/' },
    s7: { title: 'Section 7: Laws and Rules of the Road', url: B + 'laws-and-rules-of-the-road/' },
    s7b: { title: 'Section 7: Laws and Rules of the Road (Continued)', url: B + 'laws-and-rules-of-the-road-cont1/' },
    s7c: { title: 'Section 7: Laws and Rules of the Road (Continued, part 3)', url: B + 'laws-and-rules-of-the-road-cont2/' },
    s8: { title: 'Section 8: Safe Driving', url: B + 'safe-driving/' },
    s8b: { title: 'Section 8: Safe Driving (Continued)', url: B + 'safe-driving-cont1/' },
    s8c: { title: 'Section 8: Safe Driving (Continued, part 3)', url: B + 'safe-driving-cont2/' },
    s9: { title: 'Section 9: Alcohol and Drugs', url: B + 'alcohol-and-drugs/' },
    s10: { title: 'Section 10: Financial Responsibility, Insurance Requirements, and Collisions', url: B + 'financial-responsibility-insurance-requirements-and-collisions/' },
    s12: { title: 'Section 12: Driver Safety', url: B + 'driver-safety/' },
    samples: { title: 'DMV sample driver\'s license knowledge tests', url: 'https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/' },
    signs: { title: 'Caltrans sign charts (linked from handbook Section 7)', url: 'https://dot.ca.gov/programs/safety-programs/sign-charts' }
  };
})();

window.DMV_QUESTIONS = [];
/* Compact authoring form:
   Q({ id, t: topicKey, d: 1|2|3, q: 'question', img: 'signs/stop' (no .svg), alt: 'description',
       c: [['choice text', 'why this choice is right/wrong'], ...], a: indexOfCorrectChoice,
       tip: 'memory tip', s: sourceKey, sec: 'handbook subsection', tags: ['trouble', ...] }) */
window.Q = function (o) {
  const diff = { 1: 'easy', 2: 'medium', 3: 'hard' };
  const src = window.DMV_SOURCES[o.s] || {};
  window.DMV_QUESTIONS.push({
    id: o.id,
    topic: o.t,
    difficulty: diff[o.d] || o.d,
    question: o.q,
    image: o.img ? 'img/' + o.img + '.svg' : null,
    imageAlt: o.alt || '',
    choices: o.c.map((c, i) => ({ text: c[0], explain: c[1], correct: i === o.a })),
    tip: o.tip || '',
    source: { key: o.s, title: src.title || '', url: src.url || '', section: o.sec || '' },
    tags: o.tags || [],
    fixedOrder: !!o.fixed
  });
};
